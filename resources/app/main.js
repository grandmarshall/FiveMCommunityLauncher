const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path') 
let $ = require('jquery')

let win  

require('update-electron-app')()

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.setFullScreen(true);
   win.setMenuBarVisibility(false);
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true,
      frame: false,
      toolbar: false
   }));
}  

app.on('ready', createWindow);