// mobile menu toggle effect
const navToggler = document.querySelector('.nav-toggler');
// toggle hamburger-icon
navToggler.addEventListener('click', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.icon-close');
  const mNavMenu = document.querySelector('.m-nav-menu');
  const mNavMenuStyle = getComputedStyle(mNavMenu);
  hamburgerIcon.classList.toggle('d-none');
  closeIcon.classList.toggle('d-none');
  
  if (mNavMenuStyle.display === 'none') {
    mNavMenu.style.display = 'flex';
  } else {
    mNavMenu.style.display = 'none';
  }
});



// choice carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});

// quntity button
quantity = document.getElementById('quantity');

button_up = document.getElementById('up');
button_down = document.getElementById('down');

button_up.onclick=function() {setQuantity('up');}
button_down.onclick=function() {setQuantity('down');}

function setQuantity(upordown) {
    var quantity = document.getElementById('quantity');

    if (quantity.value > 1) {
      console.log('worked');
        if (upordown == 'up'){++quantity.value;}
        else if (upordown == 'down'){--quantity.value;}}
    else if (quantity.value == 1) {
        if (upordown == 'up'){++quantity.value;}}
    else
        {quantity.value=1;}
};

for_m_quantity = document.getElementById('for-m-quantity');

for_m_button_up = document.getElementById('for-m-up');
for_m_button_down = document.getElementById('for-m-down');

for_m_button_up.onclick=function() {setQuantityM('up');}
for_m_button_down.onclick=function() {setQuantityM('down');}

function setQuantityM(upordown) {
    var quantity = document.getElementById('for-m-quantity');

    if (quantity.value > 1) {
      console.log('worked');
        if (upordown == 'up'){++quantity.value;}
        else if (upordown == 'down'){--quantity.value;}}
    else if (quantity.value == 1) {
        if (upordown == 'up'){++quantity.value;}}
    else
        {quantity.value=1;}
};


// cuppon add btn
const cupponBtn = document.querySelector('#cuppon-add-btn');

cupponBtn.addEventListener('click', () => {
  
  const cupponInputField = document.querySelector('#cuppon-code');

  cupponBtn.classList.add('d-none');
  cupponInputField.classList.add('d-block');
});