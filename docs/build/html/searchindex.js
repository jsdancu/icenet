Search.setIndex({docnames:["index","modules/icebrk","modules/icefit","modules/iceid","modules/icenet","modules/iceplot","modules/icetrg","notes/cmssw","notes/installation","notes/introduction","notes/markup"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules/icebrk.rst","modules/icefit.rst","modules/iceid.rst","modules/icenet.rst","modules/iceplot.rst","modules/icetrg.rst","notes/cmssw.rst","notes/installation.rst","notes/introduction.rst","notes/markup.rst"],objects:{"icebrk.common":{init:[1,1,1,""]},"icebrk.cutstats":{apply_cuts:[1,1,1,""],collect_info_stats:[1,1,1,""],collect_mcinfo_stats:[1,1,1,""],init_stat_objects:[1,1,1,""],triplet_cuts:[1,1,1,""]},"icebrk.fasthistos":{initialize:[1,1,1,""]},"icebrk.features":{construct_new_branches:[1,1,1,""],generate_feature_names:[1,1,1,""],getdimension:[1,1,1,""]},"icebrk.histos":{calc_MC_observables:[1,1,1,""],calc_batch_MC_observables:[1,1,1,""],calc_batch_observables:[1,1,1,""],calc_observables:[1,1,1,""],pickle_files:[1,1,1,""]},"icebrk.loop":{hdf5_append:[1,1,1,""],hdf5_write_handles:[1,1,1,""],hist_flush:[1,1,1,""],initarrays:[1,1,1,""],poweranalysis:[1,1,1,""],process:[1,1,1,""]},"icebrk.tools":{construct_MC_tree:[1,1,1,""],construct_MC_truth:[1,1,1,""],construct_input_vec:[1,1,1,""],construct_kinematics:[1,1,1,""],construct_output_vec:[1,1,1,""],deltar_3:[1,1,1,""],find_connected_triplets:[1,1,1,""],get_first_indices:[1,1,1,""],index_of_first_signal:[1,1,1,""],index_of_last_signal:[1,1,1,""],print_MC_event:[1,1,1,""]},"icefit.abcd":{ABCD_2NLL:[2,1,1,""],ABCD_eq:[2,1,1,""],ABCD_err:[2,1,1,""],test_abcd:[2,1,1,""]},"icefit.cortools":{H_score:[2,1,1,""],I_score:[2,1,1,""],bw2bins:[2,1,1,""],freedman_diaconis_bin:[2,1,1,""],gaussian_mutual_information:[2,1,1,""],hacine_entropy_bin:[2,1,1,""],hacine_joint_entropy_bin:[2,1,1,""],mutual_information:[2,1,1,""],optbins2d:[2,1,1,""],optbins:[2,1,1,""],pearson_corr:[2,1,1,""],scott_bin:[2,1,1,""],test_constant:[2,1,1,""],test_gaussian:[2,1,1,""]},"icefit.em":{EM_frac:[2,1,1,""],gausspdf:[2,1,1,""],mixture_nll:[2,1,1,""],test_EM:[2,1,1,""]},"icefit.jacobian":{get_full_hessian:[2,1,1,""],get_gradient:[2,1,1,""],get_jacobian:[2,1,1,""],observed_fisher_info:[2,1,1,""],test_dimension_interfaces:[2,1,1,""],test_hessians:[2,1,1,""],test_jacobians:[2,1,1,""]},"icefit.lognormal":{lognormal_param:[2,1,1,""],rand_lognormal:[2,1,1,""],rand_powexp:[2,1,1,""],test_accuracy:[2,1,1,""],test_lognormal:[2,1,1,""]},"icefit.mine":{MINENet:[2,2,1,""],estimate:[2,1,1,""],sample_batch:[2,1,1,""],train:[2,1,1,""],train_mine:[2,1,1,""]},"icefit.mine.MINENet":{forward:[2,3,1,""],training:[2,4,1,""]},"icefit.statstools":{analytical_extreme_npdf:[2,1,1,""],clopper_pearson_err:[2,1,1,""],cormat2covmat:[2,1,1,""],mc_extreme_multivariate_npdf:[2,1,1,""],mc_extreme_npdf:[2,1,1,""],p2zscore:[2,1,1,""],poisson_ratio:[2,1,1,""],poisson_tail:[2,1,1,""],prodratio_eprop:[2,1,1,""],test_extreme_npdf:[2,1,1,""],test_ratios:[2,1,1,""],welch_ttest:[2,1,1,""]},"iceid.common":{fast_conversion:[3,1,1,""],init:[3,1,1,""],init_multiprocess:[3,1,1,""],load_root_file_multiprocess:[3,1,1,""],load_root_file_new:[3,1,1,""],slow_conversion:[3,1,1,""],splitfactor:[3,1,1,""]},"iceid.graphio":{get_edge_features:[3,1,1,""],get_edge_index:[3,1,1,""],get_node_features:[3,1,1,""],graph2torch:[3,1,1,""],parse_graph_data:[3,1,1,""],parse_graph_data_np:[3,1,1,""],parse_tensor_data:[3,1,1,""]},"icenet.algo":{analytic:[4,0,0,"-"],flr:[4,0,0,"-"],nmf:[4,0,0,"-"]},"icenet.algo.analytic":{fox_wolfram_boost_inv:[4,1,1,""],gram_matrix:[4,1,1,""],ktmetric:[4,1,1,""]},"icenet.algo.flr":{predict:[4,1,1,""],train:[4,1,1,""]},"icenet.algo.nmf":{ML_nmf:[4,1,1,""],ML_update_H:[4,1,1,""],ML_update_W:[4,1,1,""]},"icenet.deep":{bnaf:[4,0,0,"-"],cnn:[4,0,0,"-"],dbnf:[4,0,0,"-"],deps:[4,0,0,"-"],dopt:[4,0,0,"-"],gcnn:[4,0,0,"-"],graph:[4,0,0,"-"],maxo:[4,0,0,"-"],mlgr:[4,0,0,"-"],pgraph:[4,0,0,"-"],predict:[4,0,0,"-"],train:[4,0,0,"-"]},"icenet.deep.bnaf":{BNAF:[4,2,1,""],MaskedWeight:[4,2,1,""],Permutation:[4,2,1,""],Sequential:[4,2,1,""],Tanh:[4,2,1,""]},"icenet.deep.bnaf.BNAF":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.bnaf.MaskedWeight":{forward:[4,3,1,""],get_weights:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.bnaf.Permutation":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.bnaf.Sequential":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.bnaf.Tanh":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.cnn":{CNN:[4,2,1,""],CNN_DMAX:[4,2,1,""]},"icenet.deep.cnn.CNN":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.cnn.CNN_DMAX":{forward:[4,3,1,""],maxout:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.dbnf":{Dataset:[4,2,1,""],compute_log_p_x:[4,1,1,""],create_model:[4,1,1,""],get_pdf:[4,1,1,""],load_models:[4,1,1,""],predict:[4,1,1,""],train:[4,1,1,""]},"icenet.deep.deps":{DEPS:[4,2,1,""],PEN1_max:[4,2,1,""],PEN1_mean:[4,2,1,""],PEN_max:[4,2,1,""],PEN_mean:[4,2,1,""]},"icenet.deep.deps.DEPS":{binarypredict:[4,3,1,""],forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.deps.PEN1_max":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.deps.PEN1_mean":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.deps.PEN_max":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.deps.PEN_mean":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.dopt":{Dataset:[4,2,1,""],DualDataset:[4,2,1,""],log_softmax:[4,1,1,""],log_sum_exp:[4,1,1,""],logsumexp:[4,1,1,""],model_to_cuda:[4,1,1,""],multiclass_cross_entropy:[4,1,1,""],multiclass_cross_entropy_logprob:[4,1,1,""],multiclass_focal_entropy:[4,1,1,""],multiclass_focal_entropy_logprob:[4,1,1,""],train:[4,1,1,""],weights_init_all:[4,1,1,""],weights_init_normal:[4,1,1,""],weights_init_uniform_rule:[4,1,1,""]},"icenet.deep.gcnn":{GCN:[4,2,1,""],GCN_layer:[4,2,1,""]},"icenet.deep.gcnn.GCN":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.gcnn.GCN_layer":{forward:[4,3,1,""],reset_param:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph":{DECNet:[4,2,1,""],ECNet:[4,2,1,""],GATNet:[4,2,1,""],GINENet:[4,2,1,""],MLP:[4,1,1,""],NNNet:[4,2,1,""],PANNet:[4,2,1,""],SAGENet:[4,2,1,""],SGNet:[4,2,1,""],SUPNet:[4,2,1,""],SplineNet:[4,2,1,""],SuperEdgeConv:[4,2,1,""],test:[4,1,1,""],train:[4,1,1,""]},"icenet.deep.graph.DECNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.ECNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.GATNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.GINENet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.NNNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.PANNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.SAGENet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.SGNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.SUPNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.SplineNet":{forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.graph.SuperEdgeConv":{forward:[4,3,1,""],message:[4,3,1,""]},"icenet.deep.maxo":{MAXOUT:[4,2,1,""]},"icenet.deep.maxo.MAXOUT":{binarypredict:[4,3,1,""],forward:[4,3,1,""],maxout:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.mlgr":{MLGR:[4,2,1,""]},"icenet.deep.mlgr.MLGR":{binarypredict:[4,3,1,""],forward:[4,3,1,""],softpredict:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.pgraph":{PANConv:[4,2,1,""],PANDropout:[4,2,1,""],PANUMPooling:[4,2,1,""],PANXHMPooling:[4,2,1,""],PANXUMPooling:[4,2,1,""]},"icenet.deep.pgraph.PANConv":{forward:[4,3,1,""],message:[4,3,1,""],panentropy:[4,3,1,""],panentropy_sparse:[4,3,1,""],update:[4,3,1,""]},"icenet.deep.pgraph.PANDropout":{forward:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.pgraph.PANUMPooling":{filter_adj:[4,3,1,""],forward:[4,3,1,""],topk:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.pgraph.PANXHMPooling":{filter_adj:[4,3,1,""],forward:[4,3,1,""],panentropy_sparse:[4,3,1,""],topk:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.pgraph.PANXUMPooling":{filter_adj:[4,3,1,""],forward:[4,3,1,""],panentropy_sparse:[4,3,1,""],topk:[4,3,1,""],training:[4,4,1,""]},"icenet.deep.predict":{pred_cut:[4,1,1,""],pred_cutset:[4,1,1,""],pred_flow:[4,1,1,""],pred_flr:[4,1,1,""],pred_graph_xgb:[4,1,1,""],pred_torch:[4,1,1,""],pred_torch_graph:[4,1,1,""],pred_xgb:[4,1,1,""]},"icenet.deep.train":{getgraphmodel:[4,1,1,""],getgraphparam:[4,1,1,""],raytune_main:[4,1,1,""],train_cdmx:[4,1,1,""],train_cnn:[4,1,1,""],train_dmax:[4,1,1,""],train_dmlp:[4,1,1,""],train_flow:[4,1,1,""],train_flr:[4,1,1,""],train_graph:[4,1,1,""],train_graph_xgb:[4,1,1,""],train_lgr:[4,1,1,""],train_xgb:[4,1,1,""],train_xtx:[4,1,1,""]},"icenet.optim":{adam:[4,0,0,"-"],adamax:[4,0,0,"-"],scheduler:[4,0,0,"-"]},"icenet.optim.adam":{Adam:[4,2,1,""]},"icenet.optim.adam.Adam":{step:[4,3,1,""],substitute:[4,3,1,""],swap:[4,3,1,""]},"icenet.optim.adamax":{Adamax:[4,2,1,""]},"icenet.optim.adamax.Adamax":{step:[4,3,1,""],substitute:[4,3,1,""],swap:[4,3,1,""]},"icenet.optim.scheduler":{ReduceLROnPlateau:[4,2,1,""]},"icenet.optim.scheduler.ReduceLROnPlateau":{step:[4,3,1,""]},"icenet.tools":{aux:[4,0,0,"-"],aux_torch:[4,0,0,"-"],icemap:[4,0,0,"-"],iceroot:[4,0,0,"-"],icevec:[4,0,0,"-"],io:[4,0,0,"-"],plots:[4,0,0,"-"],prints:[4,0,0,"-"],process:[4,0,0,"-"],reweight:[4,0,0,"-"],stx:[4,0,0,"-"]},"icenet.tools.aux":{Metric:[4,2,1,""],arrays2matrix:[4,1,1,""],bin2int:[4,1,1,""],bin_array:[4,1,1,""],binaryvec2int:[4,1,1,""],binom_coeff_all:[4,1,1,""],binomial:[4,1,1,""],binvec2powersetindex:[4,1,1,""],binvec_are_equal:[4,1,1,""],count_targets:[4,1,1,""],create_model_filename:[4,1,1,""],deltaphi:[4,1,1,""],deltar:[4,1,1,""],generatebinary:[4,1,1,""],generatebinary_fixed:[4,1,1,""],hardclass:[4,1,1,""],int2onehot:[4,1,1,""],jagged2tensor:[4,1,1,""],longvec2matrix:[4,1,1,""],los2lol:[4,1,1,""],merge_connected:[4,1,1,""],multiclass_roc_auc_score:[4,1,1,""],number_of_set_bits:[4,1,1,""],pick_ind:[4,1,1,""],split:[4,1,1,""],split_start_end:[4,1,1,""],to_edges:[4,1,1,""],to_graph:[4,1,1,""],weight2onehot:[4,1,1,""],x2ind:[4,1,1,""]},"icenet.tools.aux_torch":{load_torch_checkpoint:[4,1,1,""],load_torch_model:[4,1,1,""],save_torch_model:[4,1,1,""]},"icenet.tools.icemap":{icemap:[4,2,1,""],test_icecube_concat:[4,1,1,""],test_icecube_indexing:[4,1,1,""]},"icenet.tools.iceroot":{load_tree:[4,1,1,""],load_tree_stats:[4,1,1,""]},"icenet.tools.icevec":{hepmc2vec4:[4,1,1,""],vec4:[4,2,1,""]},"icenet.tools.icevec.vec4":{abs_delta_phi:[4,3,1,""],abseta:[4,5,1,""],beta:[4,5,1,""],boost:[4,3,1,""],costheta:[4,5,1,""],deltaR:[4,3,1,""],deltaphi:[4,3,1,""],dot3:[4,3,1,""],dot4:[4,3,1,""],e:[4,5,1,""],eta:[4,5,1,""],gamma:[4,5,1,""],m2:[4,5,1,""],m:[4,5,1,""],mt:[4,5,1,""],p3:[4,5,1,""],p3mod2:[4,5,1,""],p3mod:[4,5,1,""],phi:[4,5,1,""],phi_PIPI:[4,3,1,""],pt2:[4,5,1,""],pt:[4,5,1,""],px:[4,5,1,""],py:[4,5,1,""],pz:[4,5,1,""],rapidity:[4,5,1,""],rotateSO3:[4,3,1,""],rotateX:[4,3,1,""],rotateY:[4,3,1,""],rotateZ:[4,3,1,""],scale:[4,3,1,""],setE:[4,3,1,""],setMagThetaPhi:[4,3,1,""],setP3:[4,3,1,""],setPt2RapPhiM2:[4,3,1,""],setPtEtaPhi:[4,3,1,""],setPtEtaPhiM:[4,3,1,""],setPxPyPzE:[4,3,1,""],setX:[4,3,1,""],setXYZ:[4,3,1,""],setXYZM:[4,3,1,""],setXYZT:[4,3,1,""],setY:[4,3,1,""],setZ:[4,3,1,""],t:[4,5,1,""],theta:[4,5,1,""],x:[4,5,1,""],y:[4,5,1,""],z:[4,5,1,""]},"icenet.tools.io":{DATASET:[4,2,1,""],Data:[4,2,1,""],apply_madscore:[4,1,1,""],apply_zscore:[4,1,1,""],apply_zscore_tensor:[4,1,1,""],calc_madscore:[4,1,1,""],calc_zscore:[4,1,1,""],calc_zscore_tensor:[4,1,1,""],checkinfnan:[4,1,1,""],fastarray1:[4,2,1,""],get_gpu_memory_map:[4,1,1,""],impute_data:[4,1,1,""],pick_vars:[4,1,1,""],process_memory_use:[4,1,1,""],showmem:[4,1,1,""],split_data:[4,1,1,""],torch_cuda_total_memory:[4,1,1,""]},"icenet.tools.io.Data":{classfilter:[4,3,1,""]},"icenet.tools.io.fastarray1":{add:[4,3,1,""],reset:[4,3,1,""],update:[4,3,1,""],values:[4,3,1,""]},"icenet.tools.plots":{MVA_plot:[4,1,1,""],ROC_plot:[4,1,1,""],annotate_heatmap:[4,1,1,""],binned_1D_AUC:[4,1,1,""],binned_2D_AUC:[4,1,1,""],density_MVA_output:[4,1,1,""],plot_AUC_matrix:[4,1,1,""],plot_correlations:[4,1,1,""],plot_decision_contour:[4,1,1,""],plot_matrix:[4,1,1,""],plot_reweight_result:[4,1,1,""],plot_selection:[4,1,1,""],plot_train_evolution:[4,1,1,""],plothist1d:[4,1,1,""],plotvar:[4,1,1,""],plotvars:[4,1,1,""]},"icenet.tools.prints":{colored_row:[4,1,1,""],print_colored_matrix:[4,1,1,""],print_flow:[4,1,1,""],print_variables:[4,1,1,""],printbar:[4,1,1,""],printbranch:[4,1,1,""],set_arr_format:[4,1,1,""]},"icenet.tools.process":{compute_predictions:[4,1,1,""],evaluate_models:[4,1,1,""],read_config:[4,1,1,""],train_models:[4,1,1,""]},"icenet.tools.reweight":{balanceweights:[4,1,1,""],compute_ND_reweights:[4,1,1,""],pdf_1D_hist:[4,1,1,""],pdf_2D_hist:[4,1,1,""],reweight_1D:[4,1,1,""],reweightcoeff1D:[4,1,1,""],reweightcoeff2D:[4,1,1,""],reweightcoeff2DFP:[4,1,1,""]},"icenet.tools.stx":{apply_cutflow:[4,1,1,""],construct_columnar_cuts:[4,1,1,""],construct_exptree:[4,1,1,""],eval_boolean_exptree:[4,1,1,""],eval_boolean_syntax:[4,1,1,""],parse_boolean_exptree:[4,1,1,""],print_exptree:[4,1,1,""],test_syntax_tree_flip:[4,1,1,""],test_syntax_tree_parsing:[4,1,1,""],test_syntax_tree_simple:[4,1,1,""],tree_node:[4,2,1,""]},"iceplot.iceplot":{binwidth:[5,1,1,""],change2density_labels:[5,1,1,""],chi2_cost:[5,1,1,""],colors:[5,1,1,""],create_axes:[5,1,1,""],edge2centerbins:[5,1,1,""],fuse_histograms:[5,1,1,""],generate_colormap:[5,1,1,""],hist:[5,1,1,""],hist_filled_error:[5,1,1,""],hist_obj:[5,1,1,""],hist_to_density:[5,1,1,""],hist_to_density_fullspace:[5,1,1,""],histhepdata:[5,1,1,""],histmc:[5,1,1,""],hobj:[5,2,1,""],ordered_legend:[5,1,1,""],plot_horizontal_line:[5,1,1,""],ratioerr:[5,1,1,""],set_axis_ticks:[5,1,1,""],set_global_style:[5,1,1,""],stepspace:[5,1,1,""],superplot:[5,1,1,""],test_iceplot:[5,1,1,""],tick_calc:[5,1,1,""],tick_creator:[5,1,1,""]},"icetrg.common":{init:[6,1,1,""],load_root_file:[6,1,1,""],process_root:[6,1,1,""],splitfactor:[6,1,1,""]},icebrk:{PDG:[1,0,0,"-"],common:[1,0,0,"-"],cutstats:[1,0,0,"-"],fasthistos:[1,0,0,"-"],features:[1,0,0,"-"],histos:[1,0,0,"-"],loop:[1,0,0,"-"],tools:[1,0,0,"-"]},icefit:{abcd:[2,0,0,"-"],cortools:[2,0,0,"-"],em:[2,0,0,"-"],jacobian:[2,0,0,"-"],lognormal:[2,0,0,"-"],mine:[2,0,0,"-"],statstools:[2,0,0,"-"]},iceid:{common:[3,0,0,"-"],graphio:[3,0,0,"-"]},iceplot:{iceplot:[5,0,0,"-"]},icetrg:{common:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:property"},terms:{"0":[1,2,3,4,5,6,8],"0001":2,"001":[2,4],"002":4,"01":[1,2],"02":4,"02002":4,"025":2,"03144":4,"05":[2,8],"0605197":2,"07":4,"07868":4,"08":4,"1":[1,2,4,5,8,9],"10":[4,8],"100":2,"1000":[2,4],"10000":1,"100000":2,"1000000":2,"10000000000":1,"1000000000000":5,"1024":1,"11":[4,8],"11133339":4,"12":[2,3,4,5],"120":5,"128":[2,4],"15":[2,5],"150":2,"1508":4,"1602":4,"1708":4,"1974":2,"1978":2,"1981":2,"1992":2,"1d":[2,4],"1e":[2,3,4,5],"2":[1,2,4,8,9],"200":2,"2012":2,"2014":4,"2018":2,"2021":8,"27s_t":2,"2d":[2,4],"2logl":2,"3":[2,4,5,8,9],"30":[2,4,5],"32":[2,4],"34":5,"4":[2,4,5,8,9],"40":[2,4],"400":4,"457":2,"487":2,"5":[1,2,4,5,9],"50":4,"500":4,"512":1,"6":[4,5,8,9],"64":4,"65":2,"7":[4,5,9],"70":4,"74":8,"75":[4,5],"8":[4,5,8,9],"80":4,"9":[4,5,8,9],"90":4,"96":[2,4],"975":2,"999":4,"boolean":4,"case":2,"class":[1,2,3,4,5,6,9],"default":[2,4,5],"do":8,"export":[7,8],"final":2,"float":4,"function":[1,2,3,4,5,9],"import":8,"int":4,"long":4,"new":[1,4],"return":[1,2,3,4,5,6],"true":[1,2,3,4,5],"try":8,"var":4,"while":[2,4],A:[2,4,5],AND:4,For:5,If:[2,8],Into:4,It:4,NOT:4,No:8,OR:[4,7],On:2,The:[2,4,7,8,9],Then:8,_checkpoint:4,_evolut:4,_i:4,_j:4,aachen:4,ab:[1,2,4],abcd_2nll:2,abcd_eq:2,abcd_err:2,abcdguide_draft18oct18:2,abcdmethod:2,abs__eta:4,abs_delta_phi:4,abseta:4,accumul:1,accur:2,accuraci:[2,4],activ:[3,4,8],active_color:4,active_dim:4,ad:2,add:4,addit:2,addition:4,adj_matrix:4,advanc:5,after:[1,4],afterdrop:4,afterward:[2,4],against:4,aggr:4,aggr_out:4,aggreg:4,ai:4,al:2,algorithm:[2,4],all:[1,2,4,5],all_ob:5,alpha:2,alreadi:[1,8],also:4,altern:4,although:[2,4],amsgrad:4,an:[3,4,5],anaconda3:8,anaconda:8,analog:4,analysi:[1,9],analyt:2,analytical_extreme_npdf:2,angl:4,angular:4,ani:[3,4],annot:4,annotate_heatmap:4,anoth:2,anti:4,append:[1,4],appli:4,apply_cut:1,apply_cutflow:4,apply_madscor:4,apply_zscor:4,apply_zscore_tensor:4,approx:4,approxim:2,ar:[1,4],arbitrari:4,archiv:8,area:4,arg:[1,2,3,4,6],argument:[3,4,6],arrai:[1,2,3,4,5,6],arrays2matrix:4,arxiv:[2,4],assess:2,auc:4,auto:4,autobin:2,automat:2,automethod:2,auxiliari:4,avail:4,averag:[2,4],ax:[4,5],axi:[4,5],b:[1,2,4,5,7,9],b_pdf:4,background:[4,6],balanc:4,balanceweight:4,bar:4,base:[2,4,9],bash:8,basi:4,basic:2,batch:[1,2,4],batch_norm:4,batch_ob:1,batch_siz:2,bayesian:2,bbox_inch:4,befor:4,being:2,below:[2,8],beta:[2,4],between:[2,4,5],bi:2,bia:[2,4],bin2int:4,bin:[2,4,5],bin_arrai:4,bin_edg:4,binari:[1,4],binarypredict:4,binaryvec2int:4,bind:4,binedg:4,binedges_a:4,binedges_b:4,binned_1d_auc:4,binned_2d_auc:4,binom_coeff_al:4,binomi:[2,4],bins_i:2,bins_x:2,binscal:5,binvec2powersetindex:4,binvec_are_equ:4,binwidth:[2,5],biometrika:2,bit:4,bivari:2,block:4,blog:4,bmat:1,bnaf:9,bool:[2,4],boost:[4,9],bootstrap:2,bottom_prc:5,bound:2,branch:[1,4],brute:2,buffer:[1,4],built:4,bw2bin:2,bw:2,c:[2,4,8],calc_batch_mc_observ:1,calc_batch_observ:1,calc_madscor:4,calc_mc_observ:1,calc_observ:1,calc_zscor:4,calc_zscore_tensor:4,calcul:[2,4,5],call:[2,4],callabl:4,callback_best:4,callback_reduc:4,cambridg:4,can:[2,4,8],capac:4,card:8,care:[2,4],carlo:2,cast:2,cat:7,cbin:5,cd:[7,8],cdf:2,cdim:4,cdmx_param:4,cell:4,centerbin:5,cern:[2,7],ch:[2,7],chain:1,chang:5,change2density_label:5,channel:4,characterist:4,check:[1,4],checkinfnan:4,checkpoint:[4,9],chi2:5,chi2_cost:5,choos:4,chosen:4,chunk:[1,4],chunkbuff:1,cl68:2,cl:2,class_id:[3,4,6],classfilt:4,classic:4,classid:4,classif:4,classifi:[4,6,9],cli:1,client:8,clip_gradi:4,clone:[7,8],clopper:2,clopper_pearson_err:2,close:4,closur:4,cm:7,cmap:4,cmdx_model:4,cmsenv:7,cmsrel:7,cmsrun:7,cmsset_default:7,cmssw:0,cmssw_10_2_22:7,cnn:9,cnn_dmax:4,code:[4,9],coeffici:[2,4],col:4,collect:[1,4],collect_info_stat:1,collect_mcinfo_stat:1,color:[4,5],colorbar:4,colored_row:4,colormap:5,column:4,columnar:4,com:[4,7,8],combin:4,commandlin:[3,4,6],common:4,compar:4,compil:[8,10],complet:[4,8],complex:4,compoment:4,compon:[2,4],comput:[2,4],compute_log_p_x:4,compute_nd_reweight:4,compute_predict:4,condit:[1,2],confid:2,config:[4,9],config_path:4,configur:[4,9],connect:[1,4],constant:[2,4],construct:[1,4],construct_columnar_cut:4,construct_exptre:4,construct_input_vec:1,construct_kinemat:1,construct_mc_tre:1,construct_mc_truth:1,construct_new_branch:1,construct_output_vec:1,constructor:5,contain:4,contour:4,conv_aggr:4,conv_onli:4,conv_typ:4,convent:2,convert:[2,4],convolut:4,coord:3,coordin:3,copi:7,core:4,cormat2covmat:2,correct:2,correl:[2,4],correspond:4,cost:5,costheta:4,could:8,count:[1,2,4,5],count_target:4,cours:2,cov:2,covari:2,cpu:[2,4,8],creat:[1,8,10],create_ax:5,create_model:4,create_model_filenam:4,creator:5,cross:4,cs:2,csc2541_2021:2,cuda:4,cudatoolkit:8,cudnn:8,current:4,curv:4,curvatur:2,custom:4,cut:[1,4],cutflow:[1,4],cutlist:4,cvmf:7,d:[1,2,4],d_in:4,d_out:4,data:[1,2,3,4,5,6],data_graph:4,data_kin:4,data_tensor:4,data_trn:4,data_v:4,dataload:4,dataset:[1,4],datatyp:[3,6],deactiv:8,decai:1,decim:4,decis:[4,9],decnet:4,deep:9,defin:[2,4],definit:2,delta2_ij:4,deltaphi:4,deltar:[1,4],deltar_3:1,densiti:[2,4,5],density_mva_output:4,depend:[2,8],deriv:2,descent:2,descript:4,det:4,deta:4,dev:[8,9],develop:[0,9],deviat:[2,4],devic:[4,8],device_lib:8,device_typ:4,df:2,diaconi:2,diagon:4,dictionari:[1,3,4,6],differ:[1,2,3,4,6],dim1:2,dim2:2,dim:[2,4,5,9],dimens:[2,4],dimension:4,direct:4,directori:4,distanc:4,distribut:[2,4],divid:2,dn:5,doc:[9,10],document:[9,10],domain:2,dot3:4,dot4:4,dot:4,doublet:4,dphi:4,dpi:5,dr2_ij:4,dr_match:1,driven:8,dropout:4,dropout_cnn:4,dropout_mlp:4,dtype:[3,4],dual:4,dualdataset:4,dualtrain:4,dx:[2,5],dynam:8,e:[1,2,4,8],e_:2,each:[1,4],early_stop:4,ecnet:4,edg:[4,5],edge2centerbin:5,edge_attr:4,edge_index:4,edge_mask_list:4,edge_weight:4,edgebin:5,edges_a:4,edges_b:4,edu:2,efron:2,either:2,electron:[3,6,9],element:4,els:8,em:4,em_frac:2,embed:4,en:[2,10],encod:[1,4],end:4,endpoint:2,enough:1,entropi:[2,4],entry_start:[4,6],entry_stop:[4,6],entrystart:[3,4,6],entrystop:[3,4,6],env:8,ep:[2,3,4,5],epoch:4,equal:4,equal_frac:4,equivari:[4,9],err:5,error:[2,4,5],errorprop:2,estim:2,et:2,eta1:[1,4],eta2:[1,4],eta3:1,eta:4,etc:4,eval:7,eval_boolean_exptre:4,eval_boolean_syntax:4,evalu:[2,4],evaluate_model:4,event:[1,2,4,5,6],everi:[2,4],evolut:4,evt_index:1,evtgroups:1,exampl:[2,4],execut:8,exist_ok:4,exp:[2,4],expans:[2,4,5],expect:2,experi:8,exponenti:2,expr:4,express:4,extend:4,extrem:2,extreme_value_theori:2,f:[1,2,4,5],f_k:4,factor:[4,9],fail:[2,4,8],fals:[1,2,4,5],fashion:4,fast_convers:3,fastarray1:4,fd:2,featur:[2,3,4],feedforward:9,field:4,fig:[4,9],figsiz:[4,5],figur:[4,9],file:[1,3,4,6],filenam:[1,4,8],filetyp:4,fill_valu:4,filter_adj:4,filter_s:4,find:[1,4],find_connected_triplet:1,first:[1,4],fisher:2,fit:[2,9],fix:[2,4],float64:4,flow:[4,9],flush:1,focal:4,folder:4,follow:[2,7,8,9],font:5,font_siz:5,fontsiz:5,forc:2,forg:8,format:[3,4],former:[2,4],formula:[2,4],forward:[2,4],found:1,fourvector:4,fox_wolfram_boost_inv:4,frac:[2,4],fraction:[2,4],frameon:5,framework:[7,8],free:2,freedman:2,freedman_diaconis_bin:2,frob:4,from:[1,2,4,5,6,8],full:[2,4],func:2,func_load:4,func_predict:[1,4],furthermor:4,fuse:5,fuse_histogram:5,g:[1,2,4,8],gamma:[2,4],gamma_:4,gatnet:4,gaussian:2,gaussian_mutual_inform:2,gausspdf:2,gb:4,gcn:4,gcn_layer:4,gener:[2,4],generate_colormap:5,generate_feature_nam:1,generatebinari:4,generatebinary_fix:4,geometr:[3,4,8,9],get:[1,4,5],get_device_nam:8,get_edge_featur:3,get_edge_index:3,get_first_indic:1,get_full_hessian:2,get_gpu_memory_map:4,get_gradi:2,get_jacobian:2,get_node_featur:3,get_pdf:4,get_weight:4,getdimens:1,getgraphmodel:4,getgraphparam:4,gharbi:2,ginenet:4,git:[7,8],github:[4,8],give:[2,4],global:[3,4,5],global_on:3,global_pool:4,goe:[7,8],gpu:4,gpus_per_tri:4,grad:4,gradient:[2,9],gram:4,gram_matrix:4,graph2torch:3,graph:9,graphic:8,green:4,grid_on:4,gumbel_distribut:2,h5dataset:1,h:[2,4],h_data:5,h_mc:5,h_score:2,hacin:2,hacine2d:2,hacine_entropy_bin:2,hacine_joint_entropy_bin:2,handl:[1,4],hard:4,hardclass:4,hd5dir:1,hdf5:[1,9],hdf5_append:1,hdf5_write_handl:1,hdfarrai:3,heatmap:4,hepdata:5,hepmc2vec4:4,hepmc3:4,here:[2,4],hessian:2,hidden:2,hidden_dim:2,high:6,hinklei:2,hist:5,hist_edg:4,hist_filled_error:5,hist_flush:1,hist_list:5,hist_obj:5,hist_to_dens:5,hist_to_density_fullspac:5,histhepdata:5,histmc:5,histogram:[1,2,4,5,9],histtyp:5,hlt:[6,9],hobj:[1,5],hoc:2,home:8,hook:[2,4],hot:4,how:[4,10],howev:8,html:10,http:[2,4,7,8,10],i:[2,4,5],i_scor:2,ic:8,icebrk:[0,9],icefit:[0,9],iceid:[0,9],icenet:[8,9],iceplot:[0,9],icetrg:[0,9],id:[3,4,6,9],id_rsa:7,identifi:4,ignor:[2,4],iid:4,imag:[3,4],image_clu_:4,image_clu_eta:4,image_clu_phi:4,image_var:3,implement:4,implicit:[3,4,6],imput:4,impute_data:4,in_channel:4,in_dim:4,in_featur:4,inactive_color:4,includ:4,ind:4,independ:2,index:[0,4],index_of_first_sign:1,index_of_last_sign:1,indic:4,inf:4,infinit:8,info:[1,2,8],infoflow:4,inform:[1,2,4],infostat:1,infostats_bc:1,init:[1,3,6],init_func:4,init_multiprocess:3,init_stat_object:1,initarrai:1,initi:[1,3,4,6],inmod:2,input:[1,2,3,4,6,9],input_s:2,instal:[0,7],instanc:[2,4],instead:[2,4],instr:4,instruct:8,int2onehot:4,integ:4,integr:[2,4,5],interest:4,interv:2,introduct:0,invers:2,iodir:1,is_avail:8,ismc:[1,6],iter:[2,4],its:[2,4],j:4,j_:4,jacobian:4,jag:[1,3,4,6],jagged2tensor:4,joint:2,jon:2,just:[2,5],k1:2,k2:2,k:[2,4,9],k_p4:1,keat:2,kei:[1,4],kinemat:[1,3,4,6],knn:4,knn_k:4,knuth:2,kt2_i:4,kt2_j:4,kt:4,ktmetric:4,kwarg:[1,2,4,5],l02_taylor_approxim:2,l1_p4:1,l2:2,l2_p4:1,l:[2,4],label:[1,4,5],labels:5,labelsize_ratio:5,lambda1:2,lambda2:2,larg:2,last:[1,4],latter:[2,4],layer:4,layer_list:4,ld_library_path:8,learn:[2,4,9],left:8,legend:5,legend_count:5,legend_fonts:[4,5],legend_handlelength:5,legend_properti:5,letter:2,level:[2,4,6],lib:8,libcusolv:8,libcuspars:8,librari:[8,9],like:4,likelihood:[2,4,9],lim:5,limit:2,linear:[2,4,5],linewidth:5,link:8,linux:8,list:[1,4,5,8],list_local_devic:8,listoset:4,llr:4,ln:8,load:[3,4,6,8],load_model:4,load_root_fil:6,load_root_file_multiprocess:3,load_root_file_new:3,load_start_epoch:4,load_torch_checkpoint:4,load_torch_model:4,load_tre:4,load_tree_stat:4,loader:4,local:10,log:[2,4],log_:2,log_phat:4,log_softmax:4,log_sum_exp:4,logic:4,logist:[4,9],logl:2,lognormal_param:2,logsoftmax:4,logsumexp:4,longvec2matrix:4,loop:[2,4,8],lorentz:4,los2lol:4,loss:[2,4],low:2,lower:2,lr:[2,4],lrang:2,ls:5,lw:5,m2:4,m:[2,4,10],ma_et:2,machin:8,macro:[4,9],mad:4,made:2,mag:4,main:[1,2,4,9],mainloop:4,make:[8,10],makedir:4,mani:4,manipul:4,map:4,margin:[2,4],mark:4,marker:4,markup:0,mask:4,maskedweight:4,mass:5,master:10,match:1,mathbf:4,mathcal:4,matric:[3,4,6],matrix:[2,4],max:[2,4],max_reg:4,maxev:[1,3,6],maximum:[1,2,4],maxit:4,maxm:2,maxn:1,maxout:[4,9],maxt3:1,maxval:2,mc:[1,2,3,5,6],mc_extreme_multivariate_npdf:2,mc_extreme_npdf:2,mc_xs_scale:5,mcdata:5,mcinfostat:1,mcinfostats_bc:1,mean:[2,4],measur:[2,4],median:[2,4],member:4,memori:4,merg:4,merge_connect:4,messag:4,met:4,method:[2,4],metric:4,mi:2,mi_lb:2,mieskolainen:[7,8],min_scor:4,minbin:2,mine_ema:2,minenet:2,minibatch:4,minim:[2,5],minimum:[2,4],minmax:4,minorticks_on:5,miss:4,mixtur:2,mixture_nl:2,mkdir:8,ml:4,ml_nmf:4,ml_update_h:4,ml_update_w:4,mlp:4,mlp_dim:4,mode:[1,2],model:[2,4,9],model_to_cuda:4,modeldir:4,modelnam:4,modifi:4,modul:[0,2,4],moment:4,momentum:4,mont:2,more:[2,4],moreov:4,most:4,move:2,mt:4,mu:[2,4],mu_b:2,mu_d:2,multi:4,multiclass:4,multiclass_cross_entropi:4,multiclass_cross_entropy_logprob:4,multiclass_focal_entropi:4,multiclass_focal_entropy_logprob:4,multiclass_roc_auc_scor:4,multidimension:4,multilabel:1,multilay:9,multinomi:[4,9],multipl:[2,4],multipli:4,multivari:2,mutual:2,mutual_inform:2,mva:[1,4],mva_plot:4,mynet:4,n1:2,n2:2,n:[1,2,4,5],n_algo:1,n_class:4,n_dim:4,n_mva_bin:4,n_weight:1,name:[3,4,6,8],nan:4,nanotron:7,nat:2,nbin:[2,4],nchannel:4,ncol:4,nearest:4,need:[2,4,8],neg:[2,4],neighbour:4,net:[2,9],netparam:4,netvar:4,network:[2,4,9],neural:[2,4,9],neuron:4,nll:2,nn:4,nnnet:4,node:[3,4],noise_std:2,non:[1,2,4],none:[1,2,3,4,5,6],nonlinear:4,norm:4,normal:[1,2,4,5,9],normal_distribut:2,note:[2,8],npoint:4,nrow:4,ntot:2,num:4,num_class:4,num_edg:3,num_edge_featur:3,num_it:2,num_nod:[3,4],num_node_featur:3,num_unit:4,number:[1,2,4],number_of_set_bit:4,numer:4,numpi:[4,9],nvcc:8,nvidia:8,nxn:[2,4],ob:1,obj:1,object:[1,2,3,4,5],observ:[1,2,4,5],observed_fisher_info:2,observed_inform:2,obtain:2,occupi:4,off:3,one:[2,4],onehot:4,ones:4,onli:[1,2,3,4],open:1,oper:[1,4],opt:2,optbin:2,optbins2d:2,optim:2,optimal_design:2,option:4,order:[4,5],ordered_legend:5,ordereddict:4,org:[2,4,10],os:4,oserror:8,other:[4,8],otherwis:4,otim:2,out:4,out_channel:4,out_dim:4,out_featur:4,outlier:2,output:[1,3,4,6,9],outputp:1,outputxi:1,over:5,overlaid:5,overlap:8,overridden:[2,4],oxford:2,p2zscore:2,p3:4,p3mod2:4,p3mod:4,p4track:3,p4vec:3,p:[2,4],p_:2,p_valu:2,p_x:2,p_z:2,pad:1,pairwis:4,pan:4,pan_pool_weight:4,panconv:4,panconv_filter_weight:4,pandropout:4,panentropi:4,panentropy_spars:4,pannet:4,panpool_filter_weight:4,panumpool:4,panxhmpool:4,panxumpool:4,param:[2,4],paramet:[1,2,3,4,6],parametr:2,pars:4,parse_boolean_exptre:4,parse_graph_data:3,parse_graph_data_np:3,parse_tensor_data:3,parser:4,partial:4,particl:4,pass:[2,4],path:[1,3,4,6],pattern:2,pdf:[2,4],pdf_1d_hist:4,pdf_2d_hist:4,pdf_a:4,pdf_b:4,pearson:2,pearson_corr:2,pearson_correlation_coeffici:2,pen1_max:4,pen1_mean:4,pen:4,pen_max:4,pen_mean:4,per:[1,2,4],percent:2,percentil:2,perceptron:4,perform:[2,4],perm:4,permut:[4,9],phat:4,phi1:[1,4],phi2:[1,4],phi3:1,phi:4,phi_:4,phi_pipi:4,physic:[1,2],pick:8,pick_ind:4,pick_var:4,pickl:[1,9],pickle_fil:1,pip:8,plot:[5,9],plot_auc_matrix:4,plot_correl:4,plot_decision_contour:4,plot_horizontal_lin:5,plot_matrix:4,plot_reweight_result:4,plot_select:4,plot_train_evolut:4,plotdir:4,plothist1d:4,plotvar:4,plt:4,point:[2,4],poisson:2,poisson_ratio:2,poisson_tail:2,polyak:4,pool:4,posit:[2,4],possibl:[1,2],post:4,power:[2,5],poweranalysi:1,powerset:[1,4],ppf:2,practic:2,pre:4,precis:4,pred_cut:4,pred_cutset:4,pred_flow:4,pred_flr:4,pred_func:4,pred_graph_xgb:4,pred_torch:4,pred_torch_graph:4,pred_xgb:4,previou:[1,4],print:[1,8],print_colored_matrix:4,print_exptre:4,print_flow:4,print_mc_ev:1,print_vari:4,printbar:4,printbranch:4,printmax:1,printout:4,probabl:[2,4],problem:[2,4,8],process:1,process_memory_us:4,process_root:6,procnumb:3,prod:2,prod_:4,prodratio_eprop:2,produc:7,producenano:7,product:[2,4],project:7,propag:[2,4],properti:4,proport:2,protect:2,pt2:4,pt:4,ptetaphim:3,pth:4,pub:[2,7],pure:4,px:4,pxpypz:3,py:[4,7],pypars:4,python:[4,8],pytorch:[3,4,8,9],pz:4,qset:1,quantil:2,question:4,r:[2,4,8,9],radiu:4,ram:4,rand_lognorm:2,rand_powexp:2,random:2,rang:[2,5],rap:4,rapid:4,rate:2,ratio:[2,4,5,9],ratio_error_plot:5,ratio_plot:5,ratioerr:5,ravier:2,raytun:4,raytune_main:4,rb:1,rdbu:4,re:[3,4],read:[1,2],read_config:4,reader:4,receiv:4,recip:[2,4],reco:1,recognit:2,reconstruct:1,recurs:4,red:4,reducelronplateau:4,reevalu:4,refer:[2,4],reference_class:4,regist:[2,4],regress:[4,9],regular:4,rel:[2,4],relat:2,relu:4,remov:8,rep:4,replac:4,repo:8,repres:[2,4],represent:4,requir:[4,8],reset:4,reset_param:4,reshap:4,reso:4,respect:4,rest:[4,10],restructuredtext:10,restucturedtext:10,result:4,return_dict:3,return_ful:2,reweight_1d:4,reweightcoeff1d:4,reweightcoeff2d:4,reweightcoeff2dfp:4,rgross:2,rho:2,rngseed:4,robust:4,roc:4,roc_plot:4,root:[3,4,6],root_path:[3,6],rootfil:[4,6],rootnam:4,rotatei:4,rotateso3:4,rotatex:4,rotatez:4,routin:4,row:4,rule:[2,4],run:[2,4],runtim:7,rwmode:1,s1:2,s2:[2,4],s:[2,4,8],s_pdf:4,sagenet:4,sampl:[2,4,5],sample_batch:2,satisfi:8,save:[4,9],save_torch_model:4,savefig:4,saver:4,scalar:[2,3,4,6],scale:[2,4,5],scan:2,score:[2,4],scott2d:2,scott:2,scott_bin:2,scram:7,scram_arch:7,scramv1:7,script:9,search:2,second:2,see:[2,4],select:[1,2,4],separ:8,seper:4,sequenti:4,serif:5,set:[1,2,4,5,7,8],set_arr_format:4,set_axis_tick:5,set_global_styl:5,set_of_vari:4,sete:4,seti:4,setmagthetaphi:4,setp3:4,setpt2rapphim2:4,setptetaphi:4,setptetaphim:4,setpxpypz:4,setup:[0,4],setx:4,setxyz:4,setxyzm:4,setxyzt:4,setz:4,sgnet:4,sh:[7,8],shannon:2,shape:[3,4],should:[2,4],show:8,showmem:4,sigma:[2,4],sigma_a:5,sigma_ab:5,sigma_b:5,sigmaa:2,sigmaab:2,sigmab:2,sign:4,signal:[1,2,4,6],signalclass:4,silent:[2,4],simultan:4,sinc:[2,4],singl:[2,4],size:[2,4],slc7_amd64_gcc700:7,slow:2,slow_convers:3,smi:8,so:[4,8],soft:4,softmax:4,softpredict:4,softwar:8,someth:[2,8],sourc:[1,2,3,4,5,6,7,8,10],space:[4,5,8],sparsetensor:4,special:4,specif:4,specifi:4,splinenet:4,split:[3,4,6],split_data:4,split_start_end:4,splitfactor:[3,6],sqrt:4,squar:[2,4],src:7,stabil:4,stabl:4,stackoverflow:4,standard:[2,4],start:[4,5],state_dict:4,statist:[1,2,4,9],statu:8,std:[2,4],stdout:4,steer:9,step:[4,5,8],stephist:5,stepspac:5,stop:5,str:4,strategi:4,string:[3,4],structur:4,studi:[2,8],style:[3,5],subclass:[2,4],sublist:1,substitut:4,success:2,suitabl:4,sum:[2,4,5],sum_:[2,4],sup:2,superedgeconv:4,superplot:5,superposit:5,superset:1,supnet:4,support:4,sure:8,swap:4,symbol:8,syntax:4,system:[4,8],t:[2,4],t_:2,tail:2,take:[2,4],taken:2,talk:2,tanh:4,target:[2,3,4],targetdir:4,task:4,taylor:[2,5],temporari:8,tensor:[3,4],tensorflow:8,test:[2,4,5,7,9],test_abcd:2,test_accuraci:2,test_const:2,test_dimension_interfac:2,test_em:2,test_extreme_npdf:2,test_gaussian:2,test_hessian:2,test_icecube_concat:4,test_icecube_index:4,test_iceplot:5,test_jacobian:2,test_lognorm:2,test_ratio:2,test_syntax_tree_flip:4,test_syntax_tree_pars:4,test_syntax_tree_simpl:4,text:4,textual:4,them:[2,4],theori:2,theta:[2,4],thi:[1,2,4,8,10],threshold:4,tick:5,tick_calc:5,tick_creat:5,tight:4,timvieira:4,titl:4,tmp:8,tmpdir:8,to_edg:4,to_graph:4,togeth:[1,4],tol:4,too:8,tool:[2,8,9],topk:4,torch:[4,8],torch_cuda_total_memori:4,torch_spars:4,toronto:2,total:[4,5],totalweight:5,train:2,train_cdmx:4,train_cnn:4,train_dmax:4,train_dmlp:4,train_flow:4,train_flr:4,train_graph:4,train_graph_xgb:4,train_lgr:4,train_min:2,train_model:4,train_xgb:4,train_xtx:4,transform:4,treat:4,treatment:4,tree:[1,4,6,9],tree_nod:4,trgbit:4,trial:2,trick:4,trigger:[6,9],triplet:[1,4],triplet_cut:1,trk_eta:4,trk_pt:4,trn:4,trn_auc:4,trn_weight:4,trn_x:4,truth:[1,4],tupl:4,turn:4,twiki:2,two:[2,4,5],txt:8,type:[1,2,3,4,5,6],typic:[2,3],typo3:10,u:4,um:4,unbias:2,unbin:2,uncertainti:2,under:[0,4,10],uniform:4,union:4,uniqu:5,unit:[2,4,5],univari:2,unknown:2,unless:4,unnorm:4,untest:4,up:4,updat:4,upper:2,uproot:4,us:[2,3,4,8,9,10],use_cuda:2,v:[2,4],val:4,val_auc:4,val_x:4,valid:4,valrang:4,valu:[2,4],variabl:[2,3,4,6],varianc:[2,4],variou:4,varlist:4,vars_kin:4,vec4:4,vector:[1,2,3,4,6],verbos:[1,2,4],veri:2,version:[2,4,8],versu:2,via:[1,2,4],visibl:5,visual:[2,4,5],vmax:4,vmin:4,vol:8,vram:4,vs:4,w:[1,2,3,4],wa:4,wb:1,we:[1,4],weak:2,weight2onehot:4,weight:[2,3,4,5],weight_decai:4,weights_doublet:4,weights_init_al:4,weights_init_norm:4,weights_init_uniform_rul:4,welch:2,welch_ttest:2,wget:8,where:[1,4],which:4,white:4,width:2,wiki:[2,10],wikipedia:[2,10],window:2,wise:2,within:[2,4],without:[2,4],wnorm:1,work:[2,4,8],wrapper:[4,5],write:1,www:2,x1:2,x1_trn:4,x1_val:4,x2:2,x2_trn:4,x2_val:4,x2ind:4,x86_64:8,x:[1,2,3,4,5,6],x_a:4,x_arr:4,x_b:4,x_bin:4,x_binedg:4,x_i:[2,4],x_j:4,x_kin:4,x_m:4,x_mad:4,x_mu:4,x_n:2,x_rot:4,x_std:4,x_trn:4,x_trn_2d:4,x_val:4,x_val_2d:4,xcorr_flow:4,xdim:5,xgboost:9,xlabel:[4,5],xlim:5,xtick_step:5,xy:4,xyz:4,xz:2,y:[1,2,3,4,5,6,8],y_arr:4,y_bin:4,y_binedg:4,y_out:4,y_rot:4,y_soft:4,y_trn:4,y_true:4,y_val:4,yaml:[3,4,6],ylabel:[4,5],ylabel_ratio:5,ylim:5,ylim_ratio:5,you:8,your:8,youtub:2,yscale:5,ytick_ratio_step:5,ytick_step:5,z:[2,4],z_:2,z_arr:4,z_dim:4,zero:[1,4],zorder:5},titles:["icenet Documentation","icebrk","icefit","iceid","icenet","iceplot","icetrg","CMSSW setup","Installation","Introduction","Markup"],titleterms:{"public":7,abcd:2,adam:4,adamax:4,algo:4,algorithm:9,analyt:4,autom:8,aux:4,aux_torch:4,bnaf:4,cmssw:7,cnn:4,command:8,common:[1,3,6],conda:8,cortool:2,cuda:8,cutstat:1,dbnf:4,deep:4,dep:4,document:0,dopt:4,em:2,environ:8,fasthisto:1,featur:1,flr:4,folder:9,gcnn:4,github:7,gpu:8,graph:4,graphio:3,histo:1,icebrk:1,icefit:2,iceid:3,icemap:4,icenet:[0,4],iceplot:5,iceroot:4,icetrg:6,icevec:4,includ:9,indic:0,instal:8,introduct:9,io:4,jacobian:2,kei:7,lognorm:2,loop:1,markup:10,maxo:4,mine:2,mlgr:4,nmf:4,note:0,optim:4,option:8,packag:[0,9],path:8,pdg:1,pgraph:4,plot:4,pre:8,predict:4,preliminari:[7,8],print:4,process:4,refer:0,releas:7,reweight:4,schedul:4,setup:[7,8],ssh:7,statstool:2,structur:9,stx:4,support:8,tabl:0,tool:[1,4],train:4,virtual:8}})