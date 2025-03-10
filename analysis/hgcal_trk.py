# HGCAL "Tracklet level study" steering code
#
# Mikael Mieskolainen, 2022
# m.mieskolainen@imperial.ac.uk

# icenet system paths
import sys
sys.path.append(".")
import pickle

# icenet
from icenet.tools import process
from icenet.tools import aux
from icenet.tools import plots
from icenet.tools import io

# icehgcal
from icehgcal import common

# Main function
#
def main() :
    
    cli, cli_dict  = process.read_cli()
    runmode   = cli_dict['runmode']
    args, cli = process.read_config(config_path=f'configs/hgcal', runmode=runmode)
    
    X = common.read_data_tracklet(args=args, runmode=runmode)    

    if runmode == 'train' or runmode == 'eval':
        data = common.process_tracklet_data(args=args, X=X)
    
    if   runmode == 'train':
        #process.make_plots(data=data['trn'], args=args)
        process.train_models(data_trn=data['trn'], data_val=data['val'], args=args)

    elif runmode == 'eval':
        process.evaluate_models(data=data['tst'], args=args)
    
    print(__name__ + f' [done]')

if __name__ == '__main__' :
   main()
