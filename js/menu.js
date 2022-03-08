const toggleButton = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const pageBody = document.querySelector('body');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  menu.classList.toggle('active');
  pageBody.classList.toggle('overflow-hidden');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleButton.classList.remove('active');
    menu.classList.remove('active');
  });
});