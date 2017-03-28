// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;
let currentWindow = remote.getCurrentWindow();
//let style = getComputedStyle(currentWindow);

currentWindow.on('resize', e => {
    /*console.log(currentWindow.getSize()[1] - 64);
    console.log(style);*/
    //let color = currentWindow.getComputedStyle(document.body).getPropertyValue('--area-size');
    //document.body.style.setProperty('--area-size', (currentWindow.getSize()[1] - 64) + "px");
    document.body.style.setProperty('--area-size', (currentWindow.getSize()[1] -64) + "px", '');
});

document.querySelector('.min-button').addEventListener('click', e => {
    let window = remote.getCurrentWindow();
    window.minimize();
});

document.querySelector('.max-button').addEventListener('click', e => {
    let window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
});

document.querySelector('.close-button').addEventListener('click', e => {
    let window = remote.getCurrentWindow();
    window.close();
});