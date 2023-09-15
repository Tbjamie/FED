// VARS 

var hamburgerButton = document.querySelector('header ul li:last-of-type button')
var hamburgerMenuOpen = document.querySelector('header nav')
var mainHeaderMobile = document.querySelector('header ul')
var hamburgerCloseButton = document.querySelector('header nav > button')
var headerTransparent = document.querySelector('header')
var body = document.querySelector('body')

// FUNCTIONS

function hamburgerOpen() {
    mainHeaderMobile.style.display = 'none';
    hamburgerMenuOpen.style.transform = 'translateX(0)';
}

function hamburgerClose() {
    hamburgerMenuOpen.style.transform = 'translateX(30em)';
    setTimeout(bringMenuBack, 200);
}

function bringMenuBack() {
    mainHeaderMobile.style.display = 'flex';
}

function reactiveHeader() {
    hamburgerButton.style.backgroundColor = 'var(--menugrey)';
    headerTransparent.style.backgroundColor = 'var(--headergrey)';
    headerTransparent.style.borderBottom = '2px solid var(--grey)';
}

// function getPosition() {
//     return body.scrollTop;
// }

// console.log(getPosition())

// function positionStatusCheck() {
//     setInterval(getPosition, 100)
//     if(getPosition = '0') {
//         console.log('het is nu 0')
//     } else {
//         console.log('zeg gwn iets')
//     }
// }

// positionStatusCheck()

// function positionStatusCheck() {
//     setInterval(getPosition, 1);
//     console.log("het werkt")
// }

// console.log(positionStatusCheck());


// EVENTS

hamburgerButton.addEventListener('click', hamburgerOpen);
hamburgerCloseButton.addEventListener('click', hamburgerClose);
body.onscroll = reactiveHeader;
