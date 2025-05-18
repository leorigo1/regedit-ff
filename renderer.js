const { ipcRenderer } = require('electron');

document.getElementById('abrir-regedit')
.addEventListener('click', () => { ipcRenderer.send('executar-vbs');
});


document.getElementById('remover')
.addEventListener('click', () => { ipcRenderer.send('remover-reg');
});