const navBtn = document.querySelector('.c-header__menu-btn');
const navList = document.querySelector('.c-header__list');
const nav = document.querySelector('.c-header__nav');
let navOpen;
let initialWindowState;
const windowSize = 640; // unstacknav breakpoint

function openNavList() {
  clearTimeout();
  navBtn.setAttribute('aria-expanded', true);
  navList.setAttribute('aria-hidden', false);
  nav.classList.add('expand-nav');
  nav.classList.remove('hide-nav');
  navBtn.textContent = 'Close';
}

function closeNavList() {
  navBtn.setAttribute('aria-expanded', false);
  navList.setAttribute('aria-hidden', true);
  nav.classList.remove('expand-nav');
  navBtn.textContent = 'Menu';

  setTimeout(() => {
    nav.classList.add('hide-nav');
  }, 900);
}

// assign classes on click only that will trigger the mobile nav animation
const discoverListItem = document.querySelector('.c-header__item--discover');
const aboutListItem = document.querySelector('.c-header__item--about');
const sellListItem = document.querySelector('.c-header__item--sell');

const discoverText = document.querySelector('.c-header__text--discover');
const aboutText = document.querySelector('.c-header__text--about');
const sellText = document.querySelector('.c-header__text--sell');

function show() {
  discoverListItem.classList.add('discover-show');
  aboutListItem.classList.add('about-show');
  sellListItem.classList.add('sell-show');

  discoverListItem.classList.remove('discover-hide');
  aboutListItem.classList.remove('about-hide');
  sellListItem.classList.remove('sell-hide');

  discoverText.classList.add('discover-text-show');
  aboutText.classList.add('about-text-show');
  sellText.classList.add('sell-text-show');

  discoverText.classList.remove('discover-text-hide');
  aboutText.classList.remove('about-text-hide');
  sellText.classList.remove('sell-text-hide');
}

function hide() {
  discoverListItem.classList.remove('discover-show');
  aboutListItem.classList.remove('about-show');
  sellListItem.classList.remove('sell-show');

  discoverListItem.classList.add('discover-hide');
  aboutListItem.classList.add('about-hide');
  sellListItem.classList.add('sell-hide');

  discoverText.classList.remove('discover-text-show');
  aboutText.classList.remove('about-text-show');
  sellText.classList.remove('sell-text-show');

  discoverText.classList.add('discover-text-hide');
  aboutText.classList.add('about-text-hide');
  sellText.classList.add('sell-text-hide');
}

function removeAll() {
  discoverListItem.classList.remove('discover-hide');
  aboutListItem.classList.remove('about-hide');
  sellListItem.classList.remove('sell-hide');

  discoverText.classList.remove('discover-text-hide');
  aboutText.classList.remove('about-text-hide');
  sellText.classList.remove('sell-text-hide');
}

function closeMobileNavOnClick() {
  hide();
  removeAll();
  navBtn.setAttribute('aria-expanded', false);
  navList.setAttribute('aria-hidden', true);
  nav.classList.remove('expand-nav');
  navBtn.textContent = 'Menu';
}

// Set initial values dependent upon the browser window size
if (window.innerWidth >= windowSize) {
  openNavList();
  navOpen = true;
  // initialWindowState is used to close the nav menu when the window is resized
  initialWindowState = true;
} else {
  closeNavList();
  nav.classList.add('hide-nav'); // add hide-nav immediately upon page load
  navOpen = false;
}

navBtn.addEventListener('click', () => {
  if (navOpen === false) {
    openNavList();
    show();
    navOpen = true;
  } else {
    closeNavList();
    hide();
    navOpen = false;
  }
});

window.addEventListener('resize', () => {
  // remove all hide classes on resize
  removeAll();
  // nav should always be open at large screen sizes
  if (window.innerWidth >= windowSize) {
    openNavList();
  // the intial state of the nav should be closed at small screens
  } else if (window.innerWidth < windowSize && initialWindowState === true) {
    closeNavList();
    navOpen = false;
    initialWindowState = false; // causes a double click to open
  // keep the nav list closed on window resize if the `Close` button has been clicked
  } else if (window.innerWidth < windowSize && navOpen === false) {
    closeNavList();
  }
});

// when a mobile nav item is clicked upon, close the mobile nav and remove mobile animation classes
discoverListItem.addEventListener('click', () => {
  if (window.innerWidth < windowSize) {
    closeMobileNavOnClick();
    navOpen = false;
  }
});

aboutListItem.addEventListener('click', () => {
  if (window.innerWidth < windowSize) {
    closeMobileNavOnClick();
    navOpen = false;
  }
});

sellListItem.addEventListener('click', () => {
  if (window.innerWidth < windowSize) {
    closeMobileNavOnClick();
    navOpen = false;
  }
});
