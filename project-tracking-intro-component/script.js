const navToggler = document.querySelector('.nav-toggler');
// toggle hamburger-icon
navToggler.addEventListener('click', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.icon-close');
  const navMenu = document.querySelector('.nav-menu');
  const navMenuStyle = getComputedStyle(navMenu);
  hamburgerIcon.classList.toggle('d-none');
  closeIcon.classList.toggle('d-none');
  
  if (navMenuStyle.display === 'none') {
    navMenu.style.display = 'flex';
  } else {
    navMenu.style.display = 'none';
  }
});