import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
	ICommandPalette
	} from '@jupyterlab/apputils';


/**
 * Initialization data for the astropicture extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'astropicture',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension astropicture is activated!');
    console.log('ICommandPalette:', palette);
  }
};

export default extension;
