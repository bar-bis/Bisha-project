var button1 = document.getElementById('framework-btn');
var framework = document.getElementById('framework');
var mainPage = document.getElementById('main-page');
var h2 = document.getElementById('h2');

function showIt() {
    framework.classList.remove('hide');
}

function hideModal() {
    framework.classList.add('hide');
}



// MDB Lightbox Init

$('.carousel').carousel();
