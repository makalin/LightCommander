const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const fs = require('fs');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('index.html');

  // Add application menu
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        { role: 'quit', label: 'Quit' }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Dark Mode',
          click: () => {
            mainWindow.webContents.send('toggle-dark-mode');
          }
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);

  ipcMain.handle('list-files', async (_, dir) => {
    try {
      const files = await fs.promises.readdir(dir, { withFileTypes: true });
      return files.map(file => ({
        name: file.name,
        isDirectory: file.isDirectory(),
      }));
    } catch (error) {
      return { error: error.message };
    }
  });

  ipcMain.handle('file-operation', async (_, { operation, source, target }) => {
    try {
      switch (operation) {
        case 'copy':
          await fs.promises.copyFile(source, target);
          break;
        case 'move':
          await fs.promises.rename(source, target);
          break;
        case 'delete':
          await fs.promises.unlink(source);
          break;
      }
      return { success: true };
    } catch (error) {
      return { error: error.message };
    }
  });

  ipcMain.handle('read-file', async (_, filePath) => {
    try {
      const content = await fs.promises.readFile(filePath, 'utf8');
      return { content };
    } catch (error) {
      return { error: error.message };
    }
  });

  ipcMain.handle('write-file', async (_, { filePath, content }) => {
    try {
      await fs.promises.writeFile(filePath, content, 'utf8');
      return { success: true };
    } catch (error) {
      return { error: error.message };
    }
  });

 ipcMain.on('toggle-dark-mode', () => {
    mainWindow.webContents.send('toggle-dark-mode');
  });
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
});
