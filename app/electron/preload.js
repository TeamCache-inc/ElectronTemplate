const { ipcRenderer, desktopCapturer } = require('electron');
const remote = require('@electron/remote');
const path = require('path');
const electronStorage = require('./electronStorage');

electronStorage.setDefaultPath(path.join(remote.app.getAppPath(), 'src', 'data'))

window.ipcRenderer = ipcRenderer;
window.path = path;
window.fs = window.require('fs');
window.childProcess = window.require('child_process');
window.electronStorage = electronStorage;

let curWindow;

window.onMinimize = () => {
    curWindow = remote.BrowserWindow.getFocusedWindow()
    curWindow.minimize()
};

window.onMaximize = () => {
    curWindow = remote.BrowserWindow.getFocusedWindow()
    if(curWindow.isMaximized())
        curWindow.restore()
    else
        curWindow.maximize()
};

window.onClose = () => {
    curWindow = remote.BrowserWindow.getFocusedWindow()
    curWindow.close()
};

window.electronEnv = {
    home: remote.app.getPath('home'),
}

window.api = {
    openFileInWindows: (path) => {
        remote.shell.openPath(path);
    },
    openNewWindow: (url) => {
        // const BrowserWindow = remote.BrowserWindow;
        // let newWindow = new BrowserWindow({ 
        //     width: 1000, 
        //     height: 600,
        //     minWidth: 500,
        //     minHeight: 300,
        //     frame: false,
        //     show: false,
        //     backgroundColor: '#313440',
        //     webPreferences: {
        //         nodeIntegration: true,
        //         preload: path.join(__dirname, 'preload.js'),
        //     }
        // });
    
        // // mainWindow.loadURL(startUrl);
        // newWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    
        // newWindow.maximize()
        
        // newWindow.show()
        
        // newWindow.on('closed', function () {
        //     newWindow = null;
        // });
    },
    openDirectoryPicker: async (callback) => {
        const pathArray = await remote.dialog.showOpenDialog({properties: ['openDirectory']});
        callback(pathArray?.filePaths?.[0]);
    },
    openDirectoryInExplorer: async (directoryPath) => {
        remote.shell.openPath(directoryPath)
    },
};
