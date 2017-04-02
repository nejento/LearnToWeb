const links = document.querySelectorAll('link[rel="import"]');

// Import and add each page to the DOM
Array.prototype.forEach.call(links, function (link) {
    let template = link.import.querySelector('.template');
    let clone = document.importNode(template.content, true);
    if (link.href.match('sideNav.html')) {
        document.querySelector('div.menu').appendChild(clone);
    } else if (link.href.match('cheatsheet.html')) {
        document.querySelector('div.cheatsheet').appendChild(clone);
    } else {
        document.querySelector('.content').appendChild(clone);
    }
});
