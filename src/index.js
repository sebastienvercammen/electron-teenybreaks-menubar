const fs = require('fs');
const path = require('path');
const {
    Menu
} = require('electron');
const menubar = require('menubar');

// Path varies between npm vs bundled execution.
var srcPath = path.join(process.cwd(), '/src/');

if (!fs.existsSync(srcPath)) {
    srcPath = path.join(process.cwd(), 'resources/app/src/');
}

// Initialize menubar.
const mb = menubar({
    dir: srcPath,
    tooltip: 'Teeny Breaks',
    preloadWindow: true,
    width: 800,
    height: 400
});

// Update right-click tray menu.
const contextMenu = Menu.buildFromTemplate([{
    label: 'Quit',
    type: 'normal',
    role: 'quit'
}]);

// Everything's loaded.
mb.on('ready', function mbReady() {
    console.log('app is ready');
    mb.tray.setContextMenu(contextMenu);
});
