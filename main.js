const { app, BrowserWindow } = require('electron')
const { exec, spawn } = require('child_process');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    icon: "icon.ico",
  })

  win.loadFile('index.html')
  //win.removeMenu()
}

app.whenReady().then(() => {
  createWindow()
  spawn("python3 ./server/main.py", "-s -q")
})
