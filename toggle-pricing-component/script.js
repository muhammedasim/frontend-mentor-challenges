const planToggleBtn = document.getElementById('plan-toggle');
const monthlyPrice = document.getElementsByClassName('monthly-price');
const annuallyPrice = document.getElementsByClassName('annually-price');

planToggleBtn.addEventListener('change', () => {
  let x;
  for(x of monthlyPrice) {
    x.classList.toggle('d-flex');
  }
  let y;
  for(y of annuallyPrice) {
    y.classList.toggle('d-flex');
  }
});