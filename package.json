{
  "name": "Electron4",
  "version": "1.0.3",
  "license": "MIT",
  "description": "My Electron4 description",
  "author": "AlexHu",
  "productName": "Electron4",
  "main": "main.js",
  "scripts": {
    "postinstall": "electron-builder install-app-deps",
    "start": "npm install && electron .",
    "pack": "electron-builder --dir",
    "dist": "electron-builder --publish always"
  },
  "build": {
    "productName": "Electron4",
    "appId": "com.hualex007.Electron4",
    "copyright": "hualex007",
    "artifactName": "Electron4.Setup.${version}.${ext}",
    "directories": {
      "output": "build"
    },
    "win": {
      "icon": "build/icon/icon.ico",
      "target": [
        {
          "target": "nsis",
          "arch": [
            "x64",
            "ia32"
          ]
        }
      ]
    },
    "nsis": {
      "oneClick": false,
      "allowElevation": true,
      "allowToChangeInstallationDirectory": true,
      "installerIcon": "./build/icon/icon.ico",
      "uninstallerIcon": "./build/icon/icon.ico",
      "installerHeaderIcon": "./build/icon/icon.ico",
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true,
      "shortcutName": "Electron4"
    },
    "publish": [
      {
        "provider": "generic",
        "url": "http://10.2.153.91/download/"
      }
    ],
    "files": [
      "./**/*"
    ]
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/HuAlex007/Electron4.git"
  },
  "bugs": {
    "url": "https://github.com/HuAlex007/Electron4/issues"
  },
  "devDependencies": {
    "electron": "^8.2.0",
    "electron-builder": "^22.4.1",
    "electron-winstaller": "^4.0.0"
  },
  "dependencies": {
    "@electron-forge/publisher-electron-release-server": "^6.0.0-beta.50",
    "electron-log": "^4.1.1",
    "electron-simple-updater": "^2.0.8",
    "electron-updater": "^4.2.5",
    "update-electron-app": "^1.5.0"
  }
}
