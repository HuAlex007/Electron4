const { app, BrowserWindow, dialog } = require('electron')
const log = require('electron-log');
const pkg = require('./package.json');
const AppName = pkg.productName
const appVersion = pkg.version;
const { autoUpdater } = require("electron-updater");
// 更新服务器地址，比如"http://192.168.56.1/download/"
//import {uploadUrl} from "../renderer/config/config";

function createWindow() {
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

//alex hu================================================ 

autoUpdater.autoDownload = true // Open自动更新
autoUpdater.autoInstallOnAppQuit = true // APP退出的时候自动安装

const uploadUrl = "http://192.168.56.1/download/"
autoUpdater.setFeedURL(uploadUrl)

// 每次运行APP检测更新。这里设置延时10s是为了避免还未开始渲染，更新检测就已经完成(网速超快，页面加载跟不上)。
setTimeout(() => {
  autoUpdater.checkForUpdates() // 检测是否有更新
}, 10000)

//update-available
autoUpdater.on('update-available', (meta) => {
  log.info('[updater] update avaiable', meta.version);
  autoUpdater.downloadUpdate();
});
//update-not-available
autoUpdater.on('update-not-available', () => {
  log.info('[updater] update not avaiable, for ' + app.getVersion());
});
//downloading
autoUpdater.on('update-downloading', (meta) => {
  log.info('[updater] update is downloading', meta.version)
});
//downloaded
autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: AppName + ' Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  }
  //dialog.showMessageBox(dialogOpts).then((returnValue) => {
  //  if (returnValue.response === 0) autoUpdater.quitAndInstall()
  //})
});
//error
autoUpdater.on('error', (message) => {
  log.error('There was a problem updating the application')
  log.error(message)
});

