document.body.addEventListener('click', function (event) {
    if (event.target.dataset.section) {
        handleSectionTrigger(event)
    } else if (event.target.dataset.modal) {
        handleModalTrigger(event)
    } else if (event.target.classList.contains('modal-hide')) {
        hideAllModals()
    }
});

function handleSectionTrigger (event) {
    hideAllSectionsAndDeselectButtons();

    // Highlight clicked button and show view
    event.target.classList.add('is-selected');

    // Display the current section
    const sectionId = event.target.dataset.section + '-section';
    document.getElementById(sectionId).classList.add('is-shown');

    // Save currently active button in localStorage
    const buttonId = event.target.getAttribute('id');
    storage.set('activeSectionButtonId', buttonId, function (err) {
        if (err) return console.error(err)
    })
}