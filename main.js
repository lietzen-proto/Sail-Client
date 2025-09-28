const { app, BrowserWindow } = require('electron')
const { exec, spawn } = require('child_process');
const fs = require('fs');
const userprefs = JSON.parse(fs.readFileSync("./settings.json"))
// Load user prefs (for stuff like devmenus and such)
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    icon: "icon.ico",
  })

  win.loadFile('index.html')
  console.log("Loading User Settings (For Node.JS layer)")
  if(userprefs["node"]["menubarenabled?"]==false){
    win.removeMenu()
  }
  console.log("(Default: False) | menubarenabled?: "+userprefs["node"]["menubarenabled?"])
}

app.whenReady().then(() => {
  createWindow()
})
