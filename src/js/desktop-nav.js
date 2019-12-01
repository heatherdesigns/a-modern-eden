const navBtn = document.querySelector('.c-header__menu-btn');
const navList = document.querySelector('.c-header__list');
let navOpen;
const windowSize = 640; // unstacknav breakpoint

function openNavList() {
  navBtn.setAttribute('aria-expanded', true);
  navList.setAttribute('aria-hidden', false);
  navBtn.textContent = 'Close';
}

function closeNavList() {
  navBtn.setAttribute('aria-expanded', false);
  navList.setAttribute('aria-hidden', true);
  navBtn.textContent = 'Menu';
}

// Set initial values dependent upon the browser window size
if (window.innerWidth >= windowSize) {
  openNavList();
  navOpen = true;
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
  if (window.innerWidth >= windowSize) {
    openNavList();
  } else if (window.innerWidth < windowSize && navOpen === false) {
    closeNavList();
  }
});

// when looking for the window height
// console.log(window.innerHeight);
