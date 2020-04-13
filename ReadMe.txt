1. we use "electron-builder" & "electron-updater" to update
   "npm install electron-builder"
   "npm install electron-updater"   
2. add config info in package.json
   main information : "scripts" & "build"
2. add "auto update code" code block in main.js   
   notice:"autoUpdater" come from "electron-updater"
   "uploadUrl" is "http://127.0.0.1/download/" 
3. build package
   exec cmdline "npm run dist", we will generate install package in build dir.
   eg:Electron4.Setup.1.0.11.exe
	  Electron4.Setup.1.0.11.exe.blockmap
      latest.yml
4. copy install package
      "Electron4.Setup.1.0.11.exe"
	  "Electron4.Setup.1.0.11.exe.blockmap"
      "latest.yml"
   to http://127.0.0.1/download ( E:\IISFile\download of 127.0.0.1)
5. open old version electron app, it will check latest.yml under "http://127.0.0.1/download/"
   if has new version, it will automatic copy new package to dir "C:\Users\ahu\AppData\Local\electron4-updater\pending"
   It will install to dir "C:\Users\ahu\AppData\Local\Programs\Electron4"
   if we click "Restart" on diglog.
6. we can check log in dir "C:\Users\ahu\AppData\Roaming\Electron4\logs\main.log"
