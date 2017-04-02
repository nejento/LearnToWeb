// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;
let currentWindow = remote.getCurrentWindow();
//let style = getComputedStyle(currentWindow);

currentWindow.on('resize', e => {
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

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});