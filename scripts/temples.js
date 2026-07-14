document.addEventListener('DOMContentLoaded', () => {
  const mainnav = document.querySelector('.temples-navigation');
  const hambutton = document.querySelector('#menu');
  hambutton.addEventListener('click', () => {
  	mainnav.classList.toggle('show');
  	hambutton.classList.toggle('show');
  });
});