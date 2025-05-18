const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 700,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('executar-vbs', () => {
  const vbsPath = path.join(__dirname, 'regedits', 'executar.vbs');

  exec(`cscript //Nologo "${vbsPath}"`, (err, stdout, stderr) => {
    if (err) {
      console.error('Erro ao executar o VBS:', err);
      return;
    }
    console.log('Saída do script:', stdout);
  });
});


ipcMain.on('remover-reg', () => {
  const regPath = path.join(__dirname, 'regedits', 'remover.reg');

  exec(`regedit /s "${regPath}"`, (err, stdout, stderr) => {
    if (err) {
      console.error('Erro ao executar o Regedit:', err);
      return;
    }
    console.log('Regedit removido com sucesso!');
  });
});