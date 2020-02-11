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

$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});

function jello() {
    h2.onmouseover.classList.add('animated', 'jello');
}



// MDB Lightbox Init

$('.carousel').carousel();