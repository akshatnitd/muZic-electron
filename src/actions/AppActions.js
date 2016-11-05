import electron from 'electron';

import app from '../lib/app';

const ipcRenderer = electron.ipcRenderer;

const start = () => {
    ipcRenderer.send('appReady');
};

const restart = () => {
    ipcRenderer.send('appRestart');
};

const close = () => {
    if (app.config.get('minimizeToTray')) {
        app.browserWindows.main.hide();
        ipcRenderer.send('showTray');
    } else {
        app.browserWindows.main.destroy();
    }
};

const minimize = () => {
    app.browserWindows.main.minimize();
};

const maximize = () => {
    if (app.browserWindows.main.isMaximized()) { 
        app.browserWindows.main.unmaximize(); 
    } else { 
        app.browserWindows.main.maximize();
    }
};

const fullScreen = () => {
    if (app.browserWindows.main.isFullScreen()) {
        app.browserWindows.main.setFullScreen(false);
    } else {
        app.browserWindows.main.setFullScreen(true);
    }
};

export default {
    close,
    restart,
    start,
    minimize,
    maximize,
    fullScreen,
    app: {
        restart
    }
};
