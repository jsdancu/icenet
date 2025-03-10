Introduction
=======================

The library structure is the following.

.. contents::
    :local:

Folder structure
-----------------------

.. code-block:: none

	-analysis     Main steering macros and scripts
	-checkpoint   Saved models
	-configs      Input configuration
	-docs         Documentation
	-figs         Output figures
	-icebrk       B/R(K) functions
	-icedqcd      DQCD functions
	-icefit       Fitting and statistics functions
	-icehgcal     HGCAL functions
	-iceid        Electron ID functions
	-icenet       Deep learning classes & functions
	-iceplot      Plotting tools
	-icetrg       HLT trigger functions
	-tests        Test and steering scripts
	-output       HDF5, pickle outputs
	-dev          Development code


Algorithms/packages included
-----------------------------
.. code-block:: none

	1.  Factorized (dim-by-dim) likelihoods & ratios using histograms [numpy]
	2.  Gradient boosted decision trees [xgboost]
	3.  Multinomial Logistic Regression [pytorch]
	4.  MAXOUT multilayer feedforward network [pytorch]
	5.  Deep Normalizing Flow (BNAF) based likelihoods & ratios [pytorch]
	6.  Permutation Equivariant Networks (DeepSets) [pytorch]
	7.  CNN Networks [pytorch]
	8.  Graph Neural Nets (graph-, node-, edge-level inference) [pytorch-geometric]
	9.  Variational autoencoders [pytorch]
	10. Neural mutual information estimator [pytorch]
	11. ...


Training methodologies included
-----------------------------
.. code-block:: none
	
	1. Model distillation
	2. Conditional (parametric) classifiers
	3. Deep domain adaptation (via gradient reversal)
	4. Automated hyperparameter tuning (via raytune)
	5. Algorithmically [de]correlated (regulated) networks
	6. ...

