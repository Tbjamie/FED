// VARS 

var hamburgerButton = document.querySelector('header ul li:last-of-type button')
var hamburgerMenuOpen = document.querySelector('header nav')
var mainHeaderMobile = document.querySelector('header ul')
var hamburgerCloseButton = document.querySelector('header nav > button')
var headerTransparent = document.querySelector('header')
var body = document.querySelector('body')
var details = document.querySelectorAll('details');
var hamburgerMenuBlur = document.querySelector('#home main::after')

var pageChecker = window.location.href;
var mediaQuery750 = window.matchMedia('(min-width: 750px)')

// FUNCTIONS

function hamburgerOpen() {
    if(!mediaQuery750.matches) {
        mainHeaderMobile.style.display = 'none';
        hamburgerMenuOpen.style.transform = 'translateX(0)';
        console.log("HET WERKT")
    } else if(mediaQuery750.matches) {
        mainHeaderMobile.style.display = 'none';
        hamburgerMenuOpen.style.transform = 'translateX(16.5em)';
    }
}

// console.log(hamburgerMenuBlur);

function hamburgerClose() {
    hamburgerMenuOpen.style.transform = 'translateX(60em)';
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

function headerAboutRiot() {
    if(pageChecker.includes("about-riot")) {
        reactiveHeader();
    } else {
        return;
    }
}

// details.forEach((targetDetail) => {
//   targetDetail.addEventListener("click", () => {
//     // Close all the details that are not targetDetail.
//     details.forEach((detail) => {
//       if (detail !== targetDetail) {
//         detail.removeAttribute("open");
//       }
//     });
//   });
// });

// BRON: https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai 


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


// EXCECUTES

headerAboutRiot();
