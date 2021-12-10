// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  Menu,
  MenuItem,
  globalShortcut,
  shell,
  nativeImage,
  nativeTheme,
} = require("electron")
// Since dark mode's not done, nag at everyone to do it

if (!nativeTheme.shouldUseDarkColors) {
  console.warn("Dark theme not done yet. Let's change that!")
}
const path = require("path")

function createWindow() {
  // Create the browser window.
  var image = nativeImage.createFromPath(__dirname + "./icon.png")
  // where public folder on the root dir

  image.setTemplateImage(true)

  const mainWindow = new BrowserWindow({
    width: process.env.freecatWindowWidth
      ? process.env.freecatWindowWidth
      : 800,
    height: process.env.freecatWindowHeight
      ? process.env.freecatWindowHeight
      : 600,
    webPreferences: {
      icon: image,
      webviewTag: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  })

  //  const menu = new Menu()
  //  menu.append(new MenuItem({
  //    label: 'File',
  //    submenu: [{
  //      role: 'Help',
  //      accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
  //      click: () => {  }
  //    }]
  //  }));
  /* Rickroll. Do not uncomment.
  app.on('ready', () => {
    globalShortcut.register('CommandOrControl+C', () => {
      shell.openExternal("https://youtu.be/dQw4w9WgXcQ");
    });
    globalShortcut.register("CommandOrControl+W", () => {
      shell.openExternal("https://youtu.be/dQw4w9WgXcQ");
    });
  globalShortcut.register("CommandOrControl+Shift+Esc", () => {
    shell.openExternal("https://youtu.be/dQw4w9WgXcQ");
  });
});
*/
  /* Menu.setApplicationMenu(menu); */
  // and load the index.html of the app.
  mainWindow.loadFile("index.html")

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready").then(() => {
  createWindow()

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    mainWindow.setAppDetails({
      appId: Math.random().toString(),
      appIconPath: "./",
    })
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform == "darwin") app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
