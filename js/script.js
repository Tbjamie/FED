// VARS 

var hamburgerButton = document.querySelector('header ul li:last-of-type button')
var hamburgerMenuOpen = document.querySelector('header nav')
var mainHeaderMobile = document.querySelector('header ul')
var hamburgerCloseButton = document.querySelector('header nav > button')


// FUNCTIONS

function hamburgerOpen() {
    mainHeaderMobile.style.display = 'none'
    hamburgerMenuOpen.style.transform = 'translateX(0)'
}

function hamburgerClose() {
    hamburgerMenuOpen.style.transform = 'translateX(30em)'
    setTimeout(bringMenuBack, 200)
}

function bringMenuBack() {
    mainHeaderMobile.style.display = 'flex'
}


// EVENTS

hamburgerButton.addEventListener('click', hamburgerOpen)
hamburgerCloseButton.addEventListener('click', hamburgerClose)
