const parent = document.querySelector('.parent');
const btn = document.querySelector('button');
const main = document.querySelector('.main');
let width = window.screen.width;

window.addEventListener('resize', () => {
   width = window.screen.width;
   main.style.marginLeft = width < 450 ? '150px' : '250px';
})
const closeNav = () => {
  parent.classList.remove('open');
  main.style.marginLeft = '0';
}

const showNav = () => {
    parent.classList.add('open');
    main.style.marginLeft = width < 450 ? '150px' : '250px';
}