document.addEventListener('DOMContentLoaded', () => {
  // Open and close menu when in mobile view
  const mainnav = document.querySelector('.temples-navigation');
  const hambutton = document.querySelector('#menu');
  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
  });

  // Determine active page and dispaly above photos
  const navheader = document.querySelector('#current-page');
  const navItemLink = document.querySelectorAll(".temples-navigation li a");
  navItemLink.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navheader.textContent = item.textContent;
    });
  });

  // Turn off show menu if @media critera is met
  // const mq = window.matchMedia("(min-width: 40em)");
  // mq.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     hambutton.classList.remove("show");
  //     mainnav.classList.remove(".show");
  //   }
  // })
});
