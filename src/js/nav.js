const navBtn = document.querySelector('.c-header__menu-btn');
const navList = document.querySelector('.c-header__list');
let isNavOpen;
let initialWindowStateIsDesktop;
const desktopWindowSizeBreakpoint = 640; // unstacknav breakpoint

function openNavList() {
  navBtn.setAttribute('aria-expanded', true);
  navList.setAttribute('aria-hidden', false);
  navBtn.textContent = 'Close';
  document.body.classList.remove('mobile-nav-closed');
  document.body.classList.add('mobile-nav-open');
}

function closeNavList() {
  navBtn.setAttribute('aria-expanded', false);
  navList.setAttribute('aria-hidden', true);
  navBtn.textContent = 'Menu';
  document.body.classList.add('mobile-nav-closed');
  document.body.classList.remove('mobile-nav-open');
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
  navBtn.textContent = 'Menu';
  document.body.classList.add('mobile-nav-closed');
  document.body.classList.remove('mobile-nav-open');
}

// Set initial values dependent upon the browser window size
if (window.innerWidth >= desktopWindowSizeBreakpoint) {
  openNavList();
  isNavOpen = true;
  initialWindowStateIsDesktop = true;
} else {
  closeNavList();
  isNavOpen = false;
}

navBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearTimeout(); // stop any mobile nav animations upon click

  if (isNavOpen === false) {
    openNavList();
    show();
    isNavOpen = true;
  } else {
    setTimeout(closeNavList, 1200); // WIP - adjust timing!!!
    hide();
    isNavOpen = false;
  }

  e.stopPropogation();
});

window.addEventListener('resize', () => {
  // remove all hide classes on resize
  removeAll();

  // remove text-show classes as well
  discoverText.classList.remove('discover-text-show');
  aboutText.classList.remove('about-text-show');
  sellText.classList.remove('sell-text-show');

  // nav should always be open at large screen sizes
  if (window.innerWidth >= desktopWindowSizeBreakpoint) {
    openNavList();
  // the intial state of the nav should be closed at small screens
  // eslint-disable-next-line max-len
  } else if (window.innerWidth < desktopWindowSizeBreakpoint && initialWindowStateIsDesktop === true) {
    closeNavList();
    isNavOpen = false;
    initialWindowStateIsDesktop = false;
  // keep the nav list closed on window resize if the `Close` button has been clicked
  } else if (window.innerWidth < desktopWindowSizeBreakpoint && isNavOpen === false) {
    closeNavList();
  }
});

// when a mobile nav item is clicked upon, close the mobile nav and remove mobile animation classes
function listItemClick() {
  if (window.innerWidth > desktopWindowSizeBreakpoint) {
    closeMobileNavOnClick();
    openNavList();
    isNavOpen = true;
    initialWindowStateIsDesktop = true;
  } else {
    closeMobileNavOnClick();
    isNavOpen = false;
    closeNavList();
  }
}

discoverListItem.addEventListener('click', () => {
  listItemClick();
});

aboutListItem.addEventListener('click', () => {
  listItemClick();
});

sellListItem.addEventListener('click', () => {
  listItemClick();
});
