# Plotting functions
# 
# Mikael Mieskolainen, 2022
# m.mieskolainen@imperial.ac.uk

import matplotlib.pyplot as plt
import numpy as np
import awkward as ak
import torch
import xgboost
import os
import gc
from pprint import pprint
import copy

from tqdm import tqdm

from iceplot import iceplot
from icefit import statstools
from icenet.tools import aux
from icenet.tools import process
from icefit import cortools


def binengine(bindef, x):
    """
    Binning processor function
    
    Args:
        bindef:  binning definition
                 Examples: 50                                                    (number of bins, integer)
                           [1.0, 40.0, 50.0]                                     (list of explicit edges)
                           {'nbin': 30, 'q': [0.0, 0.95], 'space': 'linear'}     (automatic with quantiles)
                           {'nbin': 30, 'minmax': [2.0, 50.0], 'space': 'log10'} (automatic with boundaries)

        x:       data input array
    Returns:
        edges:   binning edges
    """
    
    if len(x) == 0:
        print(__name__ + f'.binengine: Input is zero-array, returning [0,0]')
        return np.array([0,0])

    def mylinspace(minval, maxval, nbin):

        if 'space' in bindef and bindef['space'] == 'log10':
            if minval <= 0:
                raise Exception(__name__ + f'.bin_processor: Trying log10 binning with minimum = {minval} <= 0')
            return np.logspace(np.log10(minval), np.log10(maxval), nbin + 1)
        else:
            return np.linspace(minval, maxval, nbin + 1)

    # Integer
    if   type(bindef) is int or type(bindef) is float:
        return np.linspace(np.min(x), np.max(x), int(bindef) + 1)

    # Bin edges given directly
    elif type(bindef) is list:
        return np.array(bindef)

    elif type(bindef) is np.ndarray:
        return bindef

    # Automatic with quantiles
    elif type(bindef) is dict and 'q' in bindef:
        return mylinspace(minval=np.percentile(x, 100*bindef['q'][0]), maxval=np.percentile(x, 100*bindef['q'][1]), nbin=bindef['nbin'] + 1)

    # Automatic with boundaries
    elif type(bindef) is dict and 'minmax' in bindef:
        return mylinspace(minval=bindef['minmax'][0], maxval=bindef['minmax'][1], nbin=bindef['nbin'] + 1)

    else:
        raise Exception(__name__ + f'.bin_processor: Unknown binning description in {bindef}')


def plot_selection(X, mask, ids, plotdir, label, varlist, density=True, library='np'):
    """
    Plot selection before / after type histograms against all chosen variables

    Args:
        X       : data array (N events x D dimensions)
        mask    : boolean selection indices (N)
        ids     : variable string array (D)
        plotdir : plotting directory
        label   : a string label
        varlist : a list of variables to be plotted (from ids)
        density : normalize all histograms to unit density
        library : 'np' or 'ak'
    """

    for var in tqdm(varlist):

        if var not in ids:
            continue

        # Histogram (autobinning)
        if library == 'np':
            before = np.asarray(X[:, ids.index(var)])
            after  = np.asarray(X[mask, ids.index(var)])
        elif library == 'ak':
            before = ak.to_numpy(X[:][var])
            after  = ak.to_numpy(X[mask][var])
        else:
            raise Error(__name__ + f'.Unknown library: {library}')

        counts1, errs1, bins, cbins = iceplot.hist(before, bins=100,  density=density)
        counts2, errs2, bins, cbins = iceplot.hist(after,  bins=bins, density=density)
        
        # Plot
        obs_x = {
            'xlim'      : (np.min(bins), np.max(bins)),
            'ylim'      : None,
            'ylim_ratio': (0.7, 1.3),
            
            'xlabel'    : var,
            'ylabel'    : r'Counts',
            'units'     : {'x': None, 'y' : r'counts'},
            'density'   : density,
            'figsize'   : (4, 3.75)
        }
        fig, ax = iceplot.create_axes(**obs_x, ratio_plot=True)

        label1  = f'before cuts'
        label2  = f'after cuts'

        ax[0].hist(x=cbins, bins=bins, weights=counts1, color=(0,0,0), label=label1,            **iceplot.hist_style_step)
        ax[0].hist(x=cbins, bins=bins, weights=counts2, color=(1,0,0), alpha=0.5, label=label2, **iceplot.hist_style_step)
        
        iceplot.ordered_legend(ax=ax[0], order=[label1, label2])
        iceplot.plot_horizontal_line(ax[1])

        ax[1].hist(x=cbins, bins=bins, weights=counts2 / (counts1 + 1E-30), color=(1,0,0), alpha=0.5, label='ratio', **iceplot.hist_style_step)

        # Save it
        targetdir = aux.makedir(f'{plotdir}/cuts/{label}')
        fig.savefig(f'{targetdir}/{var}.pdf', bbox_inches='tight')

        ax[0].set_yscale('log')
        fig.savefig(f'{targetdir}/{var}--log.pdf', bbox_inches='tight')
        
        # --------        
        fig.clf()
        plt.close()
        gc.collect()


def plot_matrix(XY, x_bins, y_bins, vmin=0, vmax=None, cmap='RdBu', figsize=(4,3), grid_on=False):
    """
    Visualize matrix.
    """
    fig,ax = plt.subplots(figsize=figsize)
    
    ax.grid(grid_on)

    x,y    = np.meshgrid(x_bins, y_bins)
    # Note transpose
    c      = ax.pcolormesh(x, y, XY.T, cmap=cmap, vmin=vmin, vmax=vmax, antialiased=True, linewidth=0.0)
    
    ax.axis([x.min(), x.max(), y.min(), y.max()])

    return fig,ax,c


def plot_train_evolution_multi(losses, trn_aucs, val_aucs, label, aspect=0.85):
    """ Training evolution plots.

    Args:
        losses:   loss values in a dictionary
        trn_aucs: training metrics
        val_aucs: validation metrics
    
    Returns:
        fig: figure handle
        ax:  figure axis
    """
    
    fig,ax = plt.subplots(1,2, figsize=(10, 7.5))
    
    for key in losses.keys():
        if (key == 'sum') and (len(losses.keys()) == 2):
            continue # Do not plot sum if only one loss term
        ax[0].plot(losses[key], label=key)
    
    ax[0].set_xlabel('k (epoch)')
    ax[0].set_ylabel('loss')
    ax[0].legend(fontsize=8)
    ax[0].set_title(f'[{label}]', fontsize=10)
    
    ax[1].plot(trn_aucs)
    ax[1].plot(val_aucs)
    ax[1].legend(['train','validation'], fontsize=8)
    ax[1].set_xlabel('k (epoch)')
    ax[1].set_ylabel('AUC')
    ax[1].grid(True)
    
    ax[0].set_aspect(1.0/ax[0].get_data_ratio()*aspect)

    for i in [1]:
        ax[1].set_ylim([0.5, 1.0])
        ax[1].set_aspect(1.0/ax[i].get_data_ratio()*aspect)

    return fig,ax


def binned_2D_AUC(y_pred, y, X_kin, VARS_kin, edges, label, weights=None, ids=['trk_pt', 'trk_eta']):
    """
    Evaluate AUC per 2D-bin.
    
    Args:
        y_pred      :  MVA algorithm output
        y           :  Output (truth level target) data
        X_kin       :  Kinematic (A,B) data
        VARS_kin    :  Kinematic variables (strings)
        edges       :  Edges of the A,B-space cells (2D array)
        label       :  Label of the classifier (string)
        weights     :  Sample weights
        ids         :  Variable identifiers
    
    Returns:
        fig,ax      :  Figure handle and axis
        met         :  Metrics object
    """

    edges_A = edges[0]
    edges_B = edges[1]

    AUC = np.zeros((len(edges_A)-1, len(edges_B)-1))

    if len(y_pred) != len(y):
        raise Exception(__name__ + f'.binned_2D_AUC: len(y_pred) = {len(y_pred)} != len(y) = {len(y)}')

    # Loop over bins
    for i in range(len(edges_A)-1):
        for j in range(len(edges_B)-1):

            range_A = [edges_A[i], edges_A[i+1]]
            range_B = [edges_B[j], edges_B[j+1]]

            # Indices
            ind = np.logical_and(aux.pick_ind(X_kin[:, VARS_kin.index(ids[0])], range_A),
                                 aux.pick_ind(X_kin[:, VARS_kin.index(ids[1])], range_B))

            string = f'{ids[0]} = [{range_A[0]:10.3f},{range_A[1]:10.3f}), {ids[1]} = [{range_B[0]:10.3f},{range_B[1]:10.3f})'
            
            if np.sum(ind) > 0: # Do we have any events in this cell
                
                # Evaluate metric
                if weights is not None:
                    met = aux.Metric(y_true=y[ind], y_pred=y_pred[ind], weights=weights[ind])
                else:
                    met = aux.Metric(y_true=y[ind], y_pred=y_pred[ind])

                print(__name__ + f'.binned_2D_AUC: {string} | AUC = {met.auc:.5f}')
                AUC[i,j] = met.auc

            else:
                print(__name__ + f'.binned_2D_AUC: {string} | No events found in this cell!')
    
    # Evaluate total performance
    met = aux.Metric(y_true=y, y_pred=y_pred, weights=weights)

    # Finally plot it
    fig,ax = plot_AUC_matrix(AUC=AUC, edges_A=edges_A, edges_B=edges_B)
    ax.set_title(f'{label} | AUC = {met.auc:.3f} (integrated)', fontsize=9)
    ax.set_xlabel(f"{ids[0]}")
    ax.set_ylabel(f"{ids[1]}")
    
    return fig, ax, met


def binned_1D_AUC(y_pred, y, X_kin, VARS_kin, edges, label, weights=None, ids='trk_pt', num_bootstrap=0):
    """
    Evaluate AUC & ROC per 1D-bin.
    
    Args:
        y_pred      :  MVA algorithm output
        y           :  Output (truth level target) data
        X_kin       :  Kinematic (A,B) data
        VARS_kin    :  Kinematic variables (strings)
        edges       :  Edges of the space cells
        label       :  Label of the classifier (string)
        weights     :  Sample weights
        ids         :  Variable identifier
    
    Returns:
        fig,ax      :  Figure handle and axis
        met         :  Metrics object
    """

    AUC = np.zeros((len(edges)-1, 1))

    if len(y_pred) != len(y):
        raise Exception(__name__ + f'.binned_1D_AUC: len(y_pred) = {len(y_pred)} != len(y) = {len(y)}')

    METS   = []
    LABELS = []

    # Loop over bins
    for i in range(len(edges)-1):

            range_ = [edges[i], edges[i+1]]

            # Indices
            ind = aux.pick_ind(X_kin[:, VARS_kin.index(ids)], range_)
            
            string = f'{ids} = [{range_[0]:10.3f},{range_[1]:10.3f})'

            if np.sum(ind) > 0: # Do we have any events in this cell
                    
                # Evaluate metric
                if weights is not None:
                    met = aux.Metric(y_true=y[ind], y_pred=y_pred[ind], weights=weights[ind], num_bootstrap=num_bootstrap)
                else:
                    met = aux.Metric(y_true=y[ind], y_pred=y_pred[ind], num_bootstrap=num_bootstrap)

                AUC[i] = met.auc
                METS.append(met)
                print(__name__ + f'.binned_1D_AUC: {string} | AUC = {AUC[i]}')
            else:
                METS.append(None)
                print(__name__ + f'.binned_1D_AUC: {string} | No events found in this cell!')

            LABELS.append(f'{ids}$ \\in [{range_[0]:.1f},{range_[1]:.1f})$')

    return METS, LABELS


def density_MVA_wclass(y_pred, y, label, weights=None, num_classes=None, hist_edges=80, path=''):
    """
    Evaluate MVA output (1D) density per class.
    
    Args:
        y_pred     :  MVA algorithm output
        y          :  Output (truth level target) data
        label      :  Label of the MVA model (string)
        weights    :  Sample weights
        hist_edges :  Histogram edges list (or number of bins, as an alternative)
    
    Returns:
        Plot pdf saved directly
    """
    
    # Make sure it is 1-dim array of length N (not N x num classes)
    if (weights is not None) and len(weights.shape) > 1:
        weights = np.sum(weights, axis=1)
    
    if weights is not None:
        classlegs = [f'$\\mathcal{{C}} = {k}$, $N={np.sum(y == k)}$ (weighted {np.sum(weights[y == k]):0.1f})' for k in range(num_classes)]
    else:
        classlegs = [f'$\\mathcal{{C}} = {k}$, $N={np.sum(y == k)}$ (no weights)' for k in range(num_classes)]

    # Over classes
    fig,ax = plt.subplots()
    
    for k in range(num_classes):
        ind = (y == k)

        w = weights[ind] if weights is not None else None
        x = y_pred[ind]

        hI, bins, patches = plt.hist(x=x, bins=binengine(bindef=hist_edges, x=x), weights=w,
            density = True, histtype = 'step', fill = False, linewidth = 2, label = 'inverse')
        
    plt.legend(classlegs, loc='upper center')
    plt.xlabel('MVA output $f(\\mathbf{{x}})$')
    plt.ylabel('density')
    plt.title(f'{label}', fontsize=9)
    
    for scale in ['linear', 'log']:
        ax.set_yscale(scale)
        outputdir = aux.makedir(f'{path}')
        savepath  = f'{outputdir}/MVA-output--{scale}.pdf'
        plt.savefig(savepath, bbox_inches='tight')
        print(__name__ + f'.density_MVA_wclass: Save: "{savepath}"')
    
    # --------        
    fig.clf()
    plt.close()
    gc.collect()


def plot_correlation_comparison(corr_mstats, num_classes, targetdir, xlim):
    """
    Plot collected correlation metrics from density_COR_wclass()
    
    Args:
        corr_mstats: statistics dictionary
        num_classes: number of classes
        targetdir:   output directory
        xlim:        plot limits dictionary per class
    Returns:
        plots saved to a directory
    """

    ## Find all variables
    all_var = []
    for model in corr_mstats.keys():
        for category in corr_mstats[model].keys():
            for class_ind in range(num_classes):
                for var in corr_mstats[model][category][class_ind].keys():
                    all_var.append(var)

    all_var = set(all_var) # Reduce to a set (values appear only once)


    ## Over all variables
    for var in all_var:

        # Over classes
        for class_ind in range(num_classes):

            # Over different statistical metrics
            for stats in ['pearson', 'abs_pearson', 'disco', 'MI']:

                fig,ax = plt.subplots()
                
                # Per model
                for model in corr_mstats.keys():

                    categories = list(corr_mstats[model].keys())

                    values = np.nan * np.ones(len(categories))
                    lower  = np.nan * np.ones(len(categories))
                    upper  = np.nan * np.ones(len(categories))

                    ## Over each powerset category
                    for i in range(len(categories)):
                        x = corr_mstats[model][categories[i]][class_ind]

                        if x is not {}: # We have some stats
                            values[i] = x[var][f'{stats}']
                            lower[i]  = x[var][f'{stats}_CI'][0]
                            upper[i]  = x[var][f'{stats}_CI'][1]

                    error = (upper - lower)/2 # Simple symmetric errors
                    #lower = np.abs(values - np.array(lower))
                    #upper = np.abs(values - np.array(upper))
                    #asymmetric_error = np.array(list(zip(lower, upper))).T

                    # Vertical line at zero
                    plt.plot(np.zeros(len(values)), np.arange(len(values)), color=np.ones(3)*0.5, label=None)

                    ## Plot horizontal plot i.e. values +- (lower, upper) on x-axis, category on y-axis
                    legend_label = f'{model} [{np.median(values):0.3f}]'
                    plt.errorbar(values, np.arange(len(values)), xerr=error,
                        fmt='s', capsize=5.0, label=legend_label)

                    title = f'$\\mathcal{{C}} = {class_ind}$'
                    plt.title(title)
                    plt.xlabel(f'{stats}$_{{XY}}$ (MVA score, {var}) (68CL)')

                    ax.set_xlim(xlim[stats][class_ind])
                    ax.set_yticks(np.arange(len(values)))
                    ax.set_yticklabels(categories)
                
                ax.invert_yaxis()    
                plt.legend(loc='center left', bbox_to_anchor=(1, 0.5))
                filename = aux.makedir(targetdir + f'/COR/')
                plt.savefig(filename + f'var-{var}--stats-{stats}--class-{class_ind}.pdf',
                    bbox_inches='tight')
                plt.close()


def density_COR_wclass(y_pred, y, X, ids, label, \
    weights=None, num_classes=None, hist_edges=[[50], [50]], path='', cmap='Oranges'):
    
    """
    Evaluate the 2D-density of the MVA algorithm output vs other variables per class.
    
    Args:
        y_pred      :  MVA algorithm output
        y           :  Output (truth level target) data
        X           :  Variables to be plotted
        ids         :  Identifiers of the variables in X
        label       :  Label of the MVA model (string)
        weights     :  Sample weights
        hist_edges  :  Histogram edges list (or number of bins, as an alternative) (2D)
        path        :  Save path
        cmap        :  Color map
        
    Returns:
        correlation values in a dictionary (per variable, per class)
        plots are saved directly
    """

    # Make sure it is 1-dim array of length N (not N x num classes)
    if (weights is not None) and len(weights.shape) > 1:
        weights = np.sum(weights, axis=1)
    
    if weights is not None:
        classlegs = [f'$\\mathcal{{C}} = {k}$, $N={np.sum(y == k)}$ (weighted {np.sum(weights[y == k]):0.1f})' for k in range(num_classes)]
    else:
        classlegs = [f'$\\mathcal{{C}} = {k}$, $N={np.sum(y == k)}$ (no weights)' for k in range(num_classes)]
    
    output = np.array([None]*num_classes, dtype=np.object_)

    # Over classes
    for k in np.arange(num_classes):
        
        output[k] = {}
        ind = (y == k)
        w = weights[ind] if weights is not None else None

        if np.sum(ind) == 0:
            print(__name__ + f'.density_COR_wclass: No samples for class {k} -- continue')
            continue

        # Loop over variables
        for var in ids:

            xx = y_pred[ind]
            yy = X[ind, ids.index(var)]

            # Compute Pearson correlation coefficient
            cc,cc_CI,_         = cortools.pearson_corr(x=xx, y=yy, weights=w)
            
            # Compute Absolute Pearson correlation coefficient
            cc_abs,cc_abs_CI,_ = cortools.pearson_corr(x=xx, y=yy, weights=w, return_abs=True)

            # Distance correlation
            disco,disco_CI     = cortools.distance_corr(x=xx, y=yy, weights=w)
            
            # Neural Mutual Information [cannot use, unreliable to compute for small samples]
            #from icefit import mine
            #MI,MI_err  = mine.estimate(X=xx, Z=yy, weights=w)
            #MI_CI = np.array([MI-MI_err, MI+MI_err])

            # Histogram MI
            MI,MI_CI = cortools.mutual_information(x=xx, y=yy, automethod='Scott2D')
            
            # Save output
            output[k][var] = {}

            output[k][var]['pearson']    = cc
            output[k][var]['pearson_CI'] = cc_CI
            
            output[k][var]['abs_pearson']    = cc_abs
            output[k][var]['abs_pearson_CI'] = cc_abs_CI

            output[k][var]['disco']    = disco
            output[k][var]['disco_CI'] = disco_CI
            
            output[k][var]['MI']       = MI
            output[k][var]['MI_CI']    = MI_CI

            bins = [binengine(bindef=hist_edges[0], x=xx), binengine(bindef=hist_edges[1], x=yy)]

            for scale in ['linear', 'log']: 

                fig,ax    = plt.subplots()
                outputdir = aux.makedir(f'{path}')
                savepath  = f'{outputdir}/var-{var}--class-{k}--{scale}.pdf'

                try:
                    if scale == 'log':
                        import matplotlib as mpl
                        h2,xedges,yedges,im = plt.hist2d(x=xx, y=yy, bins=bins, weights=w, norm=mpl.colors.LogNorm(), cmap=plt.get_cmap(cmap))
                    else:
                        h2,xedges,yedges,im = plt.hist2d(x=xx, y=yy, bins=bins, weights=w, cmap=plt.get_cmap(cmap))
                    
                    fig.colorbar(im)
                    plt.xlabel(f'MVA output $f(\\mathbf{{x}})$')
                    plt.ylabel(f'{var}')
                    rho_value = f'$\\rho_{{XY}} = {cc:0.2f}_{{-{cc-cc_CI[0]:0.2f}}}^{{+{cc_CI[1]-cc:0.2f}}}$'
                    MI_value  = f'$\\mathcal{{I}}_{{XY}} = ({MI_CI[0]:0.3f}, {MI_CI[1]:0.3f})$'
                    
                    plt.title(f'{label} | $\\mathcal{{C}} = {k}$ | {rho_value} | {MI_value}', fontsize=9)
                    # -----

                    plt.savefig(savepath, bbox_inches='tight')
                    print(__name__ + f'.density_COR_wclass: Save: "{savepath}"')
                    
                    # -----                    
                    fig.clf()
                    plt.close()
                    gc.collect()
                
                except: # Matplotlib LogNorm() can be buggy
                    print(__name__ + f'.density_COR_wclass: Failed to produce plot {savepath}')
    pprint(output)

    return output


def density_COR(y_pred, X, ids, label, weights=None, hist_edges=[[50], [50]], path='', cmap='Oranges'):
    """
    Evaluate the 2D-density of the MVA algorithm output vs other variables.
    
    Args:
        y_pred      :  MVA algorithm output
        X           :  Variables to be plotted
        ids         :  Identifiers of the variables in X
        label       :  Label of the MVA model (string)
        weights     :  Sample weights
        hist_edges  :  Histogram edges list (or number of bins, as an alternative) (2D)
        path        :  Save path
        cmap        :  Color map
    
    Returns:
        Plot pdf saved directly
    """

    # Make sure it is 1-dim array of length N (not N x num classes)
    if (weights is not None) and len(weights.shape) > 1:
        weights = np.sum(weights, axis=1)
    
    # Loop over variables
    for var in ids:

        fig,ax = plt.subplots()

        # Plot 2D
        xx   = y_pred
        yy   = X[:, ids.index(var)]
        
        bins = [binengine(bindef=hist_edges[0], x=xx), binengine(bindef=hist_edges[1], x=yy)]
        h2,xedges,yedges,im = plt.hist2d(x=xx, y=yy, bins=bins, weights=weights, cmap=plt.get_cmap(cmap))
        
        fig.colorbar(im)
        plt.xlabel(f'MVA output $f(\\mathbf{{x}})$')
        plt.ylabel(f'{var}')
        plt.title(f'{label}', fontsize=10)
        
        # -----

        outputdir = aux.makedir(f'{path}/{label}')
        savepath = f'{outputdir}/var-{var}.pdf'
        plt.savefig(savepath, bbox_inches='tight')
        print(__name__ + f'.density_COR: Save: "{savepath}"')

        # -----                    
        fig.clf()
        plt.close()
        gc.collect()
        

def annotate_heatmap(X, ax, xlabels, ylabels, x_rot = 90, y_rot = 0, decimals = 1, color = "w"):
    """ Add text annotations to a matrix heatmap plot
    """

    ax.set_xticks(np.arange(0, len(xlabels), 1));
    ax.set_yticks(np.arange(0, len(ylabels), 1));

    ax.set_xticklabels(labels=xlabels, rotation=x_rot, fontsize='xx-small')
    ax.set_yticklabels(labels=ylabels, rotation=y_rot, fontsize='xx-small')

    # Loop over data dimensions and create text annotations.
    for i in range(len(ylabels)):
        for j in range(len(xlabels)):
            
            if (decimals == 0):
                text = ax.text(j, i, f'{X[i,j]:.0f}', ha="center", va="center", color=color)
            if (decimals == 1):
                text = ax.text(j, i, f'{X[i,j]:.1f}', ha="center", va="center", color=color)
            if (decimals == 2):
                text = ax.text(j, i, f'{X[i,j]:.2f}', ha="center", va="center", color=color)
    return ax


def plot_AUC_matrix(AUC, edges_A, edges_B):
    """ Plot AUC matrix.

    Args:
        AUC:      AUC-ROC matrix
        edges_A:  Histogram edges of variable A
        edges_B:  Histogram edges of variable B
    
    Returns:
        fig:      figure handle
        ax:       figure axis
    """

    fig, ax = plt.subplots()

    xlabels = [f'[{edges_A[k]},{edges_A[k+1]})' for k in range(len(edges_A) - 1)]
    ylabels = [f'[{edges_B[k]},{edges_B[k+1]})' for k in range(len(edges_B) - 1)]

    ax.imshow(AUC.transpose(), origin = 'lower')
    ax.set_title('AUC x 100', fontsize=10)
    
    ax = annotate_heatmap(X = AUC.transpose() * 100, ax = ax, xlabels = xlabels,
        ylabels = ylabels, decimals = 0, x_rot = 0, y_rot = 0, color = "w")

    return fig, ax


def plotvars(X, y, ids, weights, nbins = 70, exclude_vals = [None], title = '', targetdir = '.'):
    """ Plot all variables.
    """
    print(__name__ + f'.plotvars: Creating plots ...')
    for i in tqdm(range(X.shape[1])):
        x = X[:,i]

        # Exclude special values
        ind = np.ones(len(x))
        for k in range(len(exclude_vals)):
            ind = np.logical_and(ind, (x != exclude_vals[k]))

        plotvar(x=x[ind], y=y[ind], weights=weights[ind], var=ids[i], nbins=nbins, title=title, targetdir=targetdir)


def plotvar(x, y, var, weights, nbins = 70, title = '', targetdir = '.'):
    """ Plot a single variable.
    """
    bins     = np.linspace(np.percentile(x, 0.5), np.percentile(x, 99.5), nbins)

    fig, axs = plot_reweight_result(X=x, y=y, bins=bins, weights=weights, title = title, xlabel = var)
    plt.savefig(f'{targetdir}/var-{var}.pdf', bbox_inches='tight')

    # -----                    
    fig.clf()
    plt.close()
    gc.collect()


def plot_reweight_result(X, y, bins, weights, title = '', xlabel = 'x', linewidth=1.5, rwidth=1.0):
    """ Here plot pure event counts
        so we see that also integrated class fractions are equalized (or not)!
    """
    # Plot re-weighting results
    fig,(ax1,ax2) = plt.subplots(1, 2, figsize = (10,5))

    num_classes = len(np.unique(y))
    legends     = []
    
    # loop over [linear, log]
    for i in range(2):
        ax = ax1 if i == 0 else ax2

        # [raw histograms]  Loop over classes
        for c in range(num_classes) :
            ax.hist(X[y == c], bins, density = False,
                histtype = 'step', fill = False, linewidth = linewidth, rwidth=rwidth)
            legends.append(f'$\\mathcal{{C}} = {c}$')

        # [weights applied] Loop over classes
        for c in range(num_classes) :
            w = weights[y == c]
            ax.hist(X[y == c], bins, weights = w, density = False,
                histtype = 'step', fill = False, linestyle = '--', linewidth = linewidth+0.5, rwidth=rwidth)
            legends.append(f'$\\mathcal{{C}} = {c}$ (weighted)')

        ax.set_ylabel('weighted counts')
        ax.set_xlabel(xlabel)
    
    ax1.set_title(title, fontsize=10)
    ax1.legend(legends)
    ax2.set_yscale('log')
    plt.tight_layout()
    
    return fig, (ax1,ax2)


def plot_correlations(X, ids, weights=None, classes=None, round_threshold=0.0, targetdir=None, colorbar = False):
    """
    Plot a cross-correlation matrix of vector data
    
    Args:
        X:                Data matrix (N x D)
        ids:              Variable names (list of length D)
        classes:          Class label ids (list of length N)
        round_threshold:  Correlation matrix |C_ij| < threshold to set matrix elements to zero
        targetdir:        Output plot directory
        colorbar:         Colorbar on the plot
    
    Returns:
        figs, axs:        Figures, axes (per class)
    """
    N = X.shape[0]

    if classes is None:
        classes = np.zeros(N)
        num_classes = int(1)
    else:
        num_classes = len(np.unique(classes))

    figs = {}
    axs  = {}
    
    for i in range(num_classes):

        label = f'all' if (num_classes == 1) else f'class_{i}'

        # Compute correlation matrix
        w = weights[classes==i] if weights is not None else None
        C = statstools.correlation_matrix(X=X[classes==i,:], weights=w)
        C[np.abs(C) < round_threshold] = np.nan
        C *= 100
        
        # Compute suitable figsize
        size = np.ceil(C.shape[0] / 3)
        
        # Plot it
        figs[label], axs[label] = plt.subplots(1,1, figsize=(size,size))

        axs[label].imshow(C)
        axs[label] = annotate_heatmap(X = C, ax = axs[label], xlabels = ids,
            ylabels = ids, decimals = 0, x_rot = 90, y_rot = 0, color = "w")
        axs[label].set_title(f'{label}: linear correlation $\\in$ [-100,100]', fontsize=10)
        
        if colorbar:
            cb = plt.colorbar()

        if targetdir is not None:
            fname = targetdir + f'{label}-correlation-matrix.pdf'
            print(__name__ + f'.plot_correlations: Save: "{fname}"')
            plt.savefig(fname=fname, pad_inches=0.2, bbox_inches='tight')

    return figs, axs


def draw_error_band(ax, x, y, x_err, y_err, **kwargs):
    
    """
    Calculate normals via centered finite differences (except the first point
    which uses a forward difference and the last point which uses a backward
    difference).

    https://matplotlib.org/stable/gallery/lines_bars_and_markers/curve_error_band.html
    """
    from matplotlib.path import Path
    from matplotlib.patches import PathPatch

    dx = np.concatenate([[x[1] - x[0]], x[2:] - x[:-2], [x[-1] - x[-2]]])
    dy = np.concatenate([[y[1] - y[0]], y[2:] - y[:-2], [y[-1] - y[-2]]])
    l = np.hypot(dx, dy)
    nx = dy / l
    ny = -dx / l

    # End points of errors
    xp = x + nx * x_err
    yp = y + ny * y_err
    xn = x - nx * x_err
    yn = y - ny * y_err

    vertices = np.block([[xp, xn[::-1]],
                         [yp, yn[::-1]]]).T
    codes    = np.full(len(vertices), Path.LINETO)
    codes[0] = codes[len(xp)] = Path.MOVETO
    path     = Path(vertices, codes)
    ax.add_patch(PathPatch(path, **kwargs))


def ROC_plot(metrics, labels, title = '', filename = 'ROC', legend_fontsize=7, xmin=1.0e-4, alpha=0.32):
    """
    Receiver Operating Characteristics i.e. False positive (x) vs True positive (y)

    Args:
        metrics:
        labels:
        title:
        filename:
        legend_fontsize:
        xmin:
        alpha:
    """

    for k in [0,1]: # linear & log
        
        fig,ax = plt.subplots()
        xx     = np.logspace(-5, 0, 100)
        plt.plot(xx, xx, linestyle='--', color='black', linewidth=1) # ROC diagonal

        for i in range(len(metrics)):

            linestyle = '-' if i < 10 else '--'
            marker = 'None'

            if metrics[i] is None:
                print(__name__ + f'.ROC_plot: metrics[{i}] ({labels[i]}) is None, continue without')
                continue

            fpr    = metrics[i].fpr
            tpr    = metrics[i].tpr

            if metrics[i].tpr_bootstrap is not None:

                # Percentile bootstrap based uncertainties
                tpr_lo = cortools.percentile_per_dim(x=metrics[i].tpr_bootstrap, q=100*(alpha/2))
                tpr_hi = cortools.percentile_per_dim(x=metrics[i].tpr_bootstrap, q=100*(1-alpha/2))
                
                fpr_lo = cortools.percentile_per_dim(x=metrics[i].fpr_bootstrap, q=100*(alpha/2))
                fpr_hi = cortools.percentile_per_dim(x=metrics[i].fpr_bootstrap, q=100*(1-alpha/2))

            # Autodetect a ROC point triangle (instead of a curve)
            if len(np.unique(fpr)) == 3:
                tpr = tpr[1:-1] # Remove first and last
                fpr = fpr[1:-1] # Remove first and last
                
                linestyle = "None"
                marker    = 'o'
            
            # A ROC-curve
            elif not (isinstance(fpr, int) or isinstance(fpr, float)):
                fpr    = fpr[1:] # Remove always the first element for log-plot reasons
                tpr    = tpr[1:]

                if metrics[i].tpr_bootstrap is not None:

                    tpr_lo = tpr_lo[1:]
                    tpr_hi = tpr_hi[1:]

                    fpr_lo = fpr_lo[1:]
                    fpr_hi = fpr_hi[1:]
            
            ## Plot it
            plt.plot(fpr, tpr, color=f'C{i}', linestyle=linestyle, marker=marker, label = f'{labels[i]}: AUC = {metrics[i].auc:.3f}')
            
            # Uncertainty band
            if marker == 'None' and (metrics[i].tpr_bootstrap is not None):
                
                plt.fill_between(fpr,  tpr_lo, tpr_hi, alpha=0.2, color=f'C{i}', edgecolor='none') # vertical
                plt.fill_betweenx(tpr, fpr_lo, fpr_hi, alpha=0.2, color=f'C{i}', edgecolor='none') # horizontal

                # draw_error_band(ax=ax, x=fpr, y=tpr, \
                #   x_err=np.std(metrics[i].fpr_bootstrap, axis=0)[1:], \
                #   y_err=np.std(metrics[i].tpr_bootstrap, axis=0)[1:], \
                #   facecolor=f'C{i}', edgecolor="none", alpha=0.2)

        ax.set_xlabel('False Positive Rate $\\alpha$ (background efficiency)')
        ax.set_ylabel('True Positive Rate $1-\\beta$ (signal efficiency)')
        ax.set_title(title, fontsize=10)

        if k == 0: # Linear-Linear

            if len(metrics) > 12:
                plt.legend(loc='center left', bbox_to_anchor=(1, 0.5), fontsize=legend_fontsize)
            else:
                plt.legend(loc='lower right', fontsize=legend_fontsize)

            plt.ylim(0.0, 1.0)
            plt.xlim(0.0, 1.0)
            plt.locator_params(axis="x", nbins=11)
            plt.locator_params(axis="y", nbins=11)

            ax.set_aspect(1.0 / ax.get_data_ratio() * 1.0)
            plt.savefig(filename + '.pdf', bbox_inches='tight')

        if k == 1: # Log-Linear

            plt.legend(loc='center left', bbox_to_anchor=(1, 0.5), fontsize=legend_fontsize)

            plt.ylim(0.0, 1.0)
            plt.xlim(xmin, 1.0)
            plt.locator_params(axis="x", nbins=int(-np.log10(xmin) + 1))
            plt.locator_params(axis="y", nbins=11)

            plt.gca().set_xscale('log')
            ax.set_aspect(1.0 / ax.get_data_ratio() * 0.75)
            plt.savefig(filename + '--log.pdf', bbox_inches='tight')

        plt.close()


def MVA_plot(metrics, labels, title='', filename='MVA', density=True, legend_fontsize=7) :
    """
    MVA output plots
    """

    # Check input
    for i in range(len(metrics)):

        if metrics[i] is None:
            print(__name__ + f'.MVA_plot: Error: metrics[{i}] ({labels[i]}) is None (check per class statistics), return -1')
            return -1
        else:
            num_classes = metrics[i].num_classes
        
        if len(metrics[i].mva_hist) != num_classes:
            print(__name__ + f'.MVA_plot: Error: num_classes != len(metrics[{i}].mva_hist) (check per class statistics), return -1')
            return -1

    for k in [0,1]: # linear & log
        
        fig,ax = plt.subplots(1, num_classes, figsize=(7*num_classes, 5))

        # Loop over classes
        for c in range(num_classes):

            # Loop over cells
            N      = len(metrics[0].mva_hist[c]) # Number of bins
            counts = np.zeros((N, len(metrics)))
            cbins  = np.zeros((N, len(metrics)))
            
            for i in range(len(metrics)):

                if metrics[i] is None:
                    print(__name__ + f'.MVA_plot: metrics[{i}] is None, continue without')
                    continue

                if len(metrics[i].mva_bins) == 0:
                    print(__name__ + f'.MVA_plot: len(metrics[{i}].mva_bins) == 0, continue without')
                    continue

                bins       = metrics[i].mva_bins
                cbins[:,i] = (bins[0:-1] + bins[1:]) / 2

                if metrics[i].mva_hist[c] != []:
                    counts[:,i] = metrics[i].mva_hist[c]

            plt.sca(ax[c])
            plt.hist(x=cbins, bins=bins, weights=counts, histtype='bar', stacked=True, \
                density=density, label=labels, linewidth=2.0)

            # Adjust
            plt.sca(ax[c])
            plt.legend(fontsize=legend_fontsize, loc='upper center')
            ax[c].set_xlabel('MVA output $f(\\mathbf{x})$')
            ax[c].set_ylabel('counts' if not density else 'density')
            ax[c].set_title(f'{title} | class = {c}', fontsize=10)
        
        if k == 0:
            #plt.ylim(0.0, 1.0)
            #plt.xlim(0.0, 1.0)
            #ax.set_aspect(1.0/ax.get_data_ratio() * 1.0)
            plt.savefig(filename + '.pdf', bbox_inches='tight')
        
        if k == 1:
            #plt.ylim(0.0, 1.0)
            #plt.xlim(1e-4, 1.0)
            for c in range(num_classes):
                plt.sca(ax[c])
                plt.gca().set_yscale('log')
                #ax.set_aspect(1.0/ax.get_data_ratio() * 0.75)
            plt.savefig(filename + '--log.pdf', bbox_inches='tight')

        # --------        
        fig.clf()
        plt.close()
        gc.collect()


def plot_contour_grid(pred_func, X, y, ids, targetdir = '.', transform = 'numpy', reso=50, npoints=400):
    """
    Classifier decision contour evaluated pairwise for each dimension,
    other dimensions evaluated at zero=(0,0,...0) (thus z-normalized with 0-mean is suitable)
    
    Args:
        pred_func:  prediction function handle
        X:          input matrix
        y:          class targets
        ids:        variable label strings
        targetdir:  output directory
        transform:  'numpy', 'torch'
        reso:       evaluation resolution
        npoints:    number of points to draw
    """
    
    print(__name__ + f'.plot_contour_grid: Evaluating, X.shape = {X.shape}...')
    MAXP = min(npoints, X.shape[0])
    D    = X.shape[1]
    pad  = 0.5

    for dim1 in tqdm(range(D)) :
        x_min, x_max = X[:, dim1].min() - pad, X[:, dim1].max() + pad
        for dim2 in range(D) :
            if dim2 <= dim1 :
                continue
            
            # (x,y)-plane limits
            y_min, y_max = X[:, dim2].min() - pad, X[:, dim2].max() + pad

            # Grid points
            PX,PY = np.meshgrid(np.linspace(x_min, x_max, reso), np.linspace(y_min, y_max, reso))
            
            # -------------------------------------
            ## Evaluate function values

            XX = np.zeros((reso*reso, D))
            XX[:, dim1] = PX.ravel()
            XX[:, dim2] = PY.ravel()

            if   transform == 'torch':
                Z = pred_func(torch.from_numpy(XX).type(torch.FloatTensor))
            elif transform == 'numpy':
                Z = pred_func(XX)
            else:
                raise Exception(__name__ + f'.plot_decision_contour: Unknown matrix type = {matrix}')

            Z = Z.reshape(PX.shape)

            # --------------------------------------
            ## Plot

            fig, axs = plt.subplots()

            # Contour
            cs = plt.contourf(PX, PY, Z, cmap = plt.cm.Spectral)

            # Events as dots
            plt.scatter(X[0:MAXP, dim1], X[0:MAXP, dim2], c = y[0:MAXP], cmap = plt.cm.binary)

            plt.xlabel(f'x[{dim1}] {ids[dim1]}')
            plt.ylabel(f'x[{dim2}] {ids[dim2]}')
            plt.colorbar(cs, ticks = np.linspace(0.0, 1.0, 11))
            
            plt.savefig(targetdir + f'{dim1}-{dim2}.pdf', bbox_inches='tight')
            
            # --------        
            fig.clf()
            plt.close()
            gc.collect()


def plot_xgb_importance(model, tick_label, importance_type='gain', label=None, sort=True):
    """
    Plot XGBoost model feature importance
    
    Args:
        model:           xgboost model object
        dim:             feature space dimension
        tick_label:      feature names
        importance_type: type of importance metric

    Returns
        fig, ax
    """
    fscores = model.get_score(importance_type=importance_type)
    
    dim    = len(tick_label) 
    xx     = np.arange(dim)
    yy     = np.zeros(dim)
    labels = []

    # Try, Except needed because xgb does Not return (always) for all of them
    for i in range(dim):
        try:
            yy[i] = fscores[f'f{i}'] # Feature name 'f{i}''
        except:
            yy[i] = 0.0
        
        labels.append(f'{tick_label[i]} ({yy[i]:0.1f}) [{i}]')
    
    # Sort them
    if sort:
        s_ind  = np.array(np.argsort(yy), dtype=int)
        yy     = yy[s_ind]
        labels = [labels[i] for i in s_ind]

    # Plot
    fig,ax = plt.subplots(figsize=(0.5 * (np.ceil(dim/6) + 2), np.ceil(dim/6) + 2))
    plt.barh(xx, yy, align='center', height=0.5, tick_label=labels)
    plt.xlabel(f'F-score ({importance_type})')
    plt.title(f'[{label}]')
    
    return fig, ax
