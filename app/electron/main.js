const { app, BrowserWindow, ipcMain, protocol, session } = require('electron');
const localShortcut = require('electron-localshortcut');
const { channels } = require('../src/shared/constants');

require('@electron/remote/main').initialize();

const path = require('path');

const isDevelopment = process.env.NODE_ENV === "development";

let mainWindow;

function createWindow () {

    mainWindow = new BrowserWindow({ 
        width: 1000, 
        height: 600,
        minWidth: 500,
        minHeight: 300,
        frame: false,
        show: false,
        backgroundColor: '#313440',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // Load our HTML
    if (isDevelopment) {
      mainWindow.loadURL("http://localhost:40992");
    } else {
      mainWindow.loadFile("app/dist/index.html");
    }

    mainWindow.show();

    mainWindow.openDevTools();
    
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    localShortcut.register(mainWindow, 'F5', function() {
        console.log('F5 is pressed');
        mainWindow.reload();
    })
    localShortcut.register(mainWindow, 'CommandOrControl+R', function() {
      console.log('CommandOrControl+R is pressed');
      mainWindow.reload();
    });
}

app.on('ready', async () => {
    protocol.registerFileProtocol('global', (request, callback) => {
      console.log(request.url);
      const url = request.url.substr(9);
      console.log(url);
      callback({ path: url });
    })

    createWindow();

    const reactDevToolsPath = path.join(
      app.getAppPath(),
      '/app/electron/extensions/fmkadmapgofadopljbjfkapdkoienihi'
    );
   
    try {
      await session.defaultSession.loadExtension(reactDevToolsPath)
    } catch (e) {
      console.error(e);
    }
});

app.on('browser-window-created', (_, window) => {
  require("@electron/remote/main").enable(window.webContents);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})

ipcMain.on(channels.APP_INFO, (event) => {
    event.sender.send(channels.APP_INFO, {
      appName: app.getName(),
      appVersion: app.getVersion(),
    });
});
