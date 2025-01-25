const search = document.querySelector('.search');
const close = document.querySelector('.close');
const parent = document.querySelector('.parent');

const openSearch = () => {
    parent.classList.remove('hidden');
}

const closeSearch = () => {
  parent.classList.add('hidden');
}