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

document.body.addEventListener('click', e => {
    if (e.target.dataset.section) {
        loadSite(e);
        console.log("test1");
    } /*else if (event.target.dataset.modal) {
        handleModalTrigger(event)
    } else if (event.target.classList.contains('modal-hide')) {
        hideAllModals()
    }*/
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

function loadSite(event) {
    hideSites();
    const sectionId = event.target.dataset.section + '-section';
    document.getElementById(sectionId).classList.add('is-shown');
}

function hideSites() {
    const sections = document.querySelectorAll('.is-shown');
    Array.prototype.forEach.call(sections, function (section) {
        section.classList.remove('is-shown');
    });
    console.log("test");

    /*const buttons = document.querySelectorAll('.nav-button.is-selected');
    Array.prototype.forEach.call(buttons, function (button) {
        button.classList.remove('is-selected')
    });*/
}