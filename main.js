const { app, BrowserWindow, dialog } = require('electron')
const log = require('electron-log');
const updater = require('electron-simple-updater');
const pkg = require('./package.json');
const AppName = pkg.productName

function createWindow () {   
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 并且为你的应用加载index.html
  win.loadFile('index.html')

  // 打开开发者工具
  //win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。
//alex hu================================================
//require('update-electron-app')()
// const server = "https://electron4.now.sh"
// const feed = `${server}/update/${process.platform}/${app.getVersion()}`
// autoUpdater.setFeedURL(feed)

updater.init({
  checkUpdateOnStart: false,
  autoDownload: false,
  logger:log
});

setInterval(() => {  
  updater.checkForUpdates() 
}, 60000)

updater.on('update-available', (meta) => {
  console.log('[updater] update avaiable', meta.version);
  updater.downloadUpdate();
});
updater.on('update-not-available', (meta) => {
  console.log('[updater] update not avaiable', meta.version);  
});
updater.on('update-downloading', (meta) => {
  console.log('[updater] update is downloading', meta.version);
});
updater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: AppName+' Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  }
  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) updater.quitAndInstall()
  })
});
updater.on('error', (err) => {
  console.error('There was a problem updating the application')
  console.error(message)
});
