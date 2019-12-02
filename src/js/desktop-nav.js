const navBtn = document.querySelector('.c-header__menu-btn');
const navList = document.querySelector('.c-header__list');
const navContainer = document.querySelector('.c-header__container');
const nav = document.querySelector('.c-header__nav');
let navOpen;
let initialWindowState;
const windowSize = 640; // unstacknav breakpoint

function openNavList() {
  navBtn.setAttribute('aria-expanded', true);
  navList.setAttribute('aria-hidden', false);
  navContainer.classList.add('expand-container');
  nav.classList.add('expand-nav');
  navContainer.classList.remove('hide-container'); // remove if not needed
  nav.classList.remove('hide-nav'); // remove if not needed
  navBtn.textContent = 'Close';
}

function closeNavList() {
  navBtn.setAttribute('aria-expanded', false);
  navList.setAttribute('aria-hidden', true);
  navContainer.classList.add('hide-container'); // remove if not needed
  nav.classList.add('hide-nav'); // remove if not needed
  navContainer.classList.remove('expand-container');
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
  navOpen = false;
}

navBtn.addEventListener('click', () => {
  if (navOpen === false) {
    openNavList();
    navOpen = true;
  } else {
    closeNavList();
    navOpen = false;
  }
});

window.addEventListener('resize', () => {
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
