// VARS

var hamburgerButton = document.querySelector('header ul li:last-of-type button')
var hamburgerMenuOpen = document.querySelector('header nav')
var mainHeaderMobile = document.querySelector('header ul')
var hamburgerCloseButton = document.querySelector('header nav > button')
var headerTransparent = document.querySelector('header')
var body = document.querySelector('body')
var details = document.querySelectorAll('details');
var menublur = document.querySelector('main > div')
var navDetailsFirst = document.querySelector('header nav > ul:first-of-type li:nth-of-type(2)')
var navDetailsLast = document.querySelector('header nav > ul:first-of-type > li:nth-of-type(3)')
var navDetailsDropdownFirst = document.querySelector('header nav > ul:nth-of-type(2)')
var navDetailsDropdownLast = document.querySelector('header nav > ul:last-of-type')

var detailsFirst = document.querySelector('#about-riot section details:first-of-type')
var detailsSecond = document.querySelector('#about-riot section details:nth-of-type(2)')
var detailsThird = document.querySelector('#about-riot section details:nth-of-type(3)')
var detailsFourth = document.querySelector('#about-riot section details:nth-of-type(4)')
var detailsLast = document.querySelector('#about-riot section details:last-of-type')
var detailsBackground = document.querySelector('#about-riot section:nth-of-type(3) article:first-of-type')

var detailsFirstSummary = document.querySelector('#about-riot section details:first-of-type summary')
var detailsSecondSummary = document.querySelector('#about-riot section details:nth-of-type(2) summary')
var detailsThirdSummary = document.querySelector('#about-riot section details:nth-of-type(3) summary')
var detailsFourthSummary = document.querySelector('#about-riot section details:nth-of-type(4) summary')
var detailsLastSummary = document.querySelector('#about-riot section details:last-of-type summary')

var detailsFirstSummarySpan = document.querySelector('#about-riot section details:first-of-type summary span')
var detailsSecondSummarySpan = document.querySelector('#about-riot section details:nth-of-type(2) summary span')
var detailsThirdSummarySpan = document.querySelector('#about-riot section details:nth-of-type(3) summary span')
var detailsFourthSummarySpan = document.querySelector('#about-riot section details:nth-of-type(4) summary span')
var detailsLastSummarySpan = document.querySelector('#about-riot section details:last-of-type summary span')

var pageChecker = window.location.href;
var mediaQuery750 = window.matchMedia('(min-width: 750px)')
var mediaQuery960 = window.matchMedia('(min-width: 960px)')
var mediaQuery1025 = window.matchMedia('(min-width: 1025px)')

var detailOpenChecker = "closed";

// FUNCTIONS

function hamburgerOpen() {
    if (!mediaQuery750.matches) {
        mainHeaderMobile.style.display = 'none';
        hamburgerMenuOpen.style.transform = 'translateX(0)';
    } else if (mediaQuery960.matches) {
        mainHeaderMobile.style.display = 'none';
        hamburgerMenuOpen.style.transform = 'translateX(100%)';
        setTimeout(() => {
            menublur.style.display = 'block';
        }, 50)
    } else if (mediaQuery750.matches) {
        mainHeaderMobile.style.display = 'none';
        hamburgerMenuOpen.style.transform = 'translateX(54%)';
        setTimeout(() => {
            menublur.style.display = 'block';
        }, 50)
    }
}

function hamburgerClose() {
    hamburgerMenuOpen.style.transform = 'translateX(60em)';
    setTimeout(bringMenuBack, 200);
    setTimeout(() => {
        menublur.style.display = 'none';
    }, 50)


    if (mediaQuery960.matches) {
        hamburgerMenuOpen.style.transform = 'translateX(120em)'
    }
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
    if (pageChecker.includes("about-riot")) {
        reactiveHeader();
    } else {
        return;
    }
}

details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

// BRON: https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai 


function changeDetailsBackground() {
    if (mediaQuery960.matches && detailOpenChecker == "closed") {
        detailsBackground.style.backgroundImage = 'url("../images/detailsimage960-1.jpeg")'
        detailOpenChecker = "open"
        detailsSecondSummary.style.fontSize = "inherit";
        detailsThirdSummary.style.fontSize = "inherit";
        detailsFourthSummary.style.fontSize = "inherit";
        detailsLastSummary.style.fontSize = "inherit";

        detailsSecondSummary.style.fontWeight = "300";
        detailsThirdSummary.style.fontWeight = "300";
        detailsFourthSummary.style.fontWeight = "300";
        detailsLastSummary.style.fontWeight = "300";

        detailsSecondSummarySpan.style.backgroundColor = "var(--grey)";
        detailsThirdSummarySpan.style.backgroundColor = "var(--grey)";
        detailsFourthSummarySpan.style.backgroundColor = "var(--grey)";
        detailsLastSummarySpan.style.backgroundColor = "var(--grey)";
        
        detailsSecondSummarySpan.style.padding = "0.3em .1em";
        detailsThirdSummarySpan.style.padding = "0.3em .1em";
        detailsFourthSummarySpan.style.padding = "0.3em .1em";
        detailsLastSummarySpan.style.padding = "0.3em .1em";
    } else {
        detailsBackground.style.backgroundImage = 'url("../images/glhf-riot.png")'
        detailOpenChecker = "closed"
        detailsSecondSummary.style.fontSize = "1.625rem";
        detailsThirdSummary.style.fontSize = "1.625rem";
        detailsFourthSummary.style.fontSize = "1.625rem";
        detailsLastSummary.style.fontSize = "1.625rem";

        detailsSecondSummary.style.fontWeight = "bold";
        detailsThirdSummary.style.fontWeight = "bold";
        detailsFourthSummary.style.fontWeight = "bold";
        detailsLastSummary.style.fontWeight = "bold";

        detailsSecondSummarySpan.style.backgroundColor = "transparent";
        detailsThirdSummarySpan.style.backgroundColor = "transparent";
        detailsFourthSummarySpan.style.backgroundColor = "transparent";
        detailsLastSummarySpan.style.backgroundColor = "transparent";
        
        detailsSecondSummarySpan.style.padding = "0";
        detailsThirdSummarySpan.style.padding = "0";
        detailsFourthSummarySpan.style.padding = "0";
        detailsLastSummarySpan.style.padding = "0";
    }
}

function changeDetailsBackground2() {
    if (mediaQuery960.matches && detailOpenChecker == "closed") {
        detailsBackground.style.backgroundImage = 'url("../images/detailsimage960-2.jpeg")'
        detailOpenChecker = "open"
        detailsFirstSummary.style.fontSize = "inherit";
        detailsThirdSummary.style.fontSize = "inherit";
        detailsFourthSummary.style.fontSize = "inherit";
        detailsLastSummary.style.fontSize = "inherit";

        detailsFirstSummary.style.fontWeight = "300";
        detailsThirdSummary.style.fontWeight = "300";
        detailsFourthSummary.style.fontWeight = "300";
        detailsLastSummary.style.fontWeight = "300";

        detailsFirstSummarySpan.style.backgroundColor = "var(--grey)";
        detailsThirdSummarySpan.style.backgroundColor = "var(--grey)";
        detailsFourthSummarySpan.style.backgroundColor = "var(--grey)";
        detailsLastSummarySpan.style.backgroundColor = "var(--grey)";
        
        detailsFirstSummarySpan.style.padding = "0.3em .1em";
        detailsThirdSummarySpan.style.padding = "0.3em .1em";
        detailsFourthSummarySpan.style.padding = "0.3em .1em";
        detailsLastSummarySpan.style.padding = "0.3em .1em";
    } else {
        detailsBackground.style.backgroundImage = 'url("../images/glhf-riot.png")'
        detailOpenChecker = "closed"
        detailsFirstSummary.style.fontSize = "1.625rem";
        detailsThirdSummary.style.fontSize = "1.625rem";
        detailsFourthSummary.style.fontSize = "1.625rem";
        detailsLastSummary.style.fontSize = "1.625rem";

        detailsFirstSummary.style.fontWeight = "bold";
        detailsThirdSummary.style.fontWeight = "bold";
        detailsFourthSummary.style.fontWeight = "bold";
        detailsLastSummary.style.fontWeight = "bold";

        detailsFirstSummarySpan.style.backgroundColor = "transparent";
        detailsThirdSummarySpan.style.backgroundColor = "transparent";
        detailsFourthSummarySpan.style.backgroundColor = "transparent";
        detailsLastSummarySpan.style.backgroundColor = "transparent";
        
        detailsFirstSummarySpan.style.padding = "0";
        detailsThirdSummarySpan.style.padding = "0";
        detailsFourthSummarySpan.style.padding = "0";
        detailsLastSummarySpan.style.padding = "0";
    }
}

function changeDetailsBackground3() {
    if (mediaQuery960.matches && detailOpenChecker == "closed") {
        detailsBackground.style.backgroundImage = 'url("../images/detailsimage960-3.jpeg")'
        detailOpenChecker = "open"
        detailsFirstSummary.style.fontSize = "inherit";
        detailsSecondSummary.style.fontSize = "inherit";
        detailsFourthSummary.style.fontSize = "inherit";
        detailsLastSummary.style.fontSize = "inherit";

        detailsFirstSummary.style.fontWeight = "300";
        detailsSecondSummary.style.fontWeight = "300";
        detailsFourthSummary.style.fontWeight = "300";
        detailsLastSummary.style.fontWeight = "300";

        detailsFirstSummarySpan.style.backgroundColor = "var(--grey)";
        detailsSecondSummarySpan.style.backgroundColor = "var(--grey)";
        detailsFourthSummarySpan.style.backgroundColor = "var(--grey)";
        detailsLastSummarySpan.style.backgroundColor = "var(--grey)";
        
        detailsFirstSummarySpan.style.padding = "0.3em .1em";
        detailsSecondSummarySpan.style.padding = "0.3em .1em";
        detailsFourthSummarySpan.style.padding = "0.3em .1em";
        detailsLastSummarySpan.style.padding = "0.3em .1em";
    } else {
        detailsBackground.style.backgroundImage = 'url("../images/glhf-riot.png")'
        detailOpenChecker = "closed"
        detailsFirstSummary.style.fontSize = "1.625rem";
        detailsSecondSummary.style.fontSize = "1.625rem";
        detailsFourthSummary.style.fontSize = "1.625rem";
        detailsLastSummary.style.fontSize = "1.625rem";

        detailsFirstSummary.style.fontWeight = "bold";
        detailsSecondSummary.style.fontWeight = "bold";
        detailsFourthSummary.style.fontWeight = "bold";
        detailsLastSummary.style.fontWeight = "bold";

        detailsFirstSummarySpan.style.backgroundColor = "transparent";
        detailsSecondSummarySpan.style.backgroundColor = "transparent";
        detailsFourthSummarySpan.style.backgroundColor = "transparent";
        detailsLastSummarySpan.style.backgroundColor = "transparent";
        
        detailsFirstSummarySpan.style.padding = "0";
        detailsSecondSummarySpan.style.padding = "0";
        detailsFourthSummarySpan.style.padding = "0";
        detailsLastSummarySpan.style.padding = "0";
    }
}

function changeDetailsBackground4() {
    if (mediaQuery960.matches && detailOpenChecker == "closed") {
        detailsBackground.style.backgroundImage = 'url("../images/detailsimage960-4.jpeg")'
        detailOpenChecker = "open"
        detailsFirstSummary.style.fontSize = "inherit";
        detailsSecondSummary.style.fontSize = "inherit";
        detailsThirdSummary.style.fontSize = "inherit";
        detailsLastSummary.style.fontSize = "inherit";

        detailsFirstSummary.style.fontWeight = "300";
        detailsSecondSummary.style.fontWeight = "300";
        detailsThirdSummary.style.fontWeight = "300";
        detailsLastSummary.style.fontWeight = "300";

        detailsFirstSummarySpan.style.backgroundColor = "var(--grey)";
        detailsSecondSummarySpan.style.backgroundColor = "var(--grey)";
        detailsThirdSummarySpan.style.backgroundColor = "var(--grey)";
        detailsLastSummarySpan.style.backgroundColor = "var(--grey)";
        
        detailsFirstSummarySpan.style.padding = "0.3em .1em";
        detailsSecondSummarySpan.style.padding = "0.3em .1em";
        detailsThirdSummarySpan.style.padding = "0.3em .1em";
        detailsLastSummarySpan.style.padding = "0.3em .1em";
    } else {
        detailsBackground.style.backgroundImage = 'url("../images/glhf-riot.png")'
        detailOpenChecker = "closed"
        detailsFirstSummary.style.fontSize = "1.625rem";
        detailsSecondSummary.style.fontSize = "1.625rem";
        detailsThirdSummary.style.fontSize = "1.625rem";
        detailsLastSummary.style.fontSize = "1.625rem";

        detailsFirstSummary.style.fontWeight = "bold";
        detailsSecondSummary.style.fontWeight = "bold";
        detailsThirdSummary.style.fontWeight = "bold";
        detailsLastSummary.style.fontWeight = "bold";

        detailsFirstSummarySpan.style.backgroundColor = "transparent";
        detailsSecondSummarySpan.style.backgroundColor = "transparent";
        detailsThirdSummarySpan.style.backgroundColor = "transparent";
        detailsLastSummarySpan.style.backgroundColor = "transparent";
        
        detailsFirstSummarySpan.style.padding = "0";
        detailsSecondSummarySpan.style.padding = "0";
        detailsThirdSummarySpan.style.padding = "0";
        detailsLastSummarySpan.style.padding = "0";
    }
}

function changeDetailsBackground5() {
    if (mediaQuery960.matches && detailOpenChecker == "closed") {
        detailsBackground.style.backgroundImage = 'url("../images/detailsimage960-5.jpeg")'
        detailOpenChecker = "open"
        detailsFirstSummary.style.fontSize = "inherit";
        detailsSecondSummary.style.fontSize = "inherit";
        detailsThirdSummary.style.fontSize = "inherit";
        detailsFourthSummary.style.fontSize = "inherit";

        detailsFirstSummary.style.fontWeight = "300";
        detailsSecondSummary.style.fontWeight = "300";
        detailsThirdSummary.style.fontWeight = "300";
        detailsFourthSummary.style.fontWeight = "300";

        detailsFirstSummarySpan.style.backgroundColor = "var(--grey)";
        detailsSecondSummarySpan.style.backgroundColor = "var(--grey)";
        detailsThirdSummarySpan.style.backgroundColor = "var(--grey)";
        detailsFourthSummarySpan.style.backgroundColor = "var(--grey)";
        
        detailsFirstSummarySpan.style.padding = "0.3em .1em";
        detailsSecondSummarySpan.style.padding = "0.3em .1em";
        detailsThirdSummarySpan.style.padding = "0.3em .1em";
        detailsFourthSummarySpan.style.padding = "0.3em .1em";
    } else {
        detailsBackground.style.backgroundImage = 'url("../images/glhf-riot.png")'
        detailOpenChecker = "closed"
        detailsFirstSummary.style.fontSize = "1.625rem";
        detailsSecondSummary.style.fontSize = "1.625rem";
        detailsThirdSummary.style.fontSize = "1.625rem";
        detailsFourthSummary.style.fontSize = "1.625rem";

        detailsFirstSummary.style.fontWeight = "bold";
        detailsSecondSummary.style.fontWeight = "bold";
        detailsThirdSummary.style.fontWeight = "bold";
        detailsFourthSummary.style.fontWeight = "bold";

        detailsFirstSummarySpan.style.backgroundColor = "transparent";
        detailsSecondSummarySpan.style.backgroundColor = "transparent";
        detailsThirdSummarySpan.style.backgroundColor = "transparent";
        detailsFourthSummarySpan.style.backgroundColor = "transparent";
        
        detailsFirstSummarySpan.style.padding = "0";
        detailsSecondSummarySpan.style.padding = "0";
        detailsThirdSummarySpan.style.padding = "0";
        detailsFourthSummarySpan.style.padding = "0";
    }
}

function detailsBackgroundPage() {
    if (pageChecker.includes("about-riot")) {
        detailsFirst.addEventListener('click', changeDetailsBackground);
        detailsSecond.addEventListener('click', changeDetailsBackground2);
        detailsThird.addEventListener('click', changeDetailsBackground3);
        detailsFourth.addEventListener('click', changeDetailsBackground4);
        detailsLast.addEventListener('click', changeDetailsBackground5);
    } else {
        return;
    }
}

function menu1025() {
    if(mediaQuery1025.matches) {
        hamburgerMenuOpen.style.opacity = '1';
    } else {
        return;
    }
}

function dropdownAppear1() {
    if(mediaQuery1025.matches) {
        navDetailsDropdownFirst.style.display = 'flex';
    } else {
        return;
    }
}

function dropdownDisappear1() {
    if(mediaQuery1025.matches) {
        navDetailsDropdownFirst.style.display = 'none';
    } else {
        return;
    }
}

function dropdownAppear2() {
    if(mediaQuery1025.matches) {
        navDetailsDropdownLast.style.display = 'flex';
    } else {
        return;
    }
}

function dropdownDisappear2() {
    if(mediaQuery1025.matches) {
        navDetailsDropdownLast.style.display = 'none';
    } else {
        return;
    }
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
navDetailsFirst.addEventListener('mouseover', dropdownAppear1);
navDetailsDropdownFirst.addEventListener('mouseover', dropdownAppear1);
navDetailsFirst.addEventListener('mouseout', dropdownDisappear1);
navDetailsLast.addEventListener('mouseover', dropdownAppear2);
navDetailsDropdownLast.addEventListener('mouseover', dropdownAppear2);
navDetailsLast.addEventListener('mouseout', dropdownDisappear2);

// EXCECUTES

headerAboutRiot();
detailsBackgroundPage();
menu1025();

