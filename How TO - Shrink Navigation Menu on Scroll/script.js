const logo = document.querySelector('#logo');
const nav = document.querySelector('.navbar');
const btn = document.querySelector('button');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
// let clicked = false;

btn.onclick = () => {
   const isOpen = menu.classList.toggle('hidden');
   console.log(isOpen);

   if(!isOpen) {
    main.classList.remove('mt-[100px');
    main.classList.add('mt-[220px]');
   } else {
    main.classList.remove('mt-[220px]');
    main.classList.add('mt-[100px]');
   }
}

window.onscroll = () => {
  if(window.innerWidth > 640 && window.scrollY > 80) {
    nav.style.padding = "30px 10px";
    logo.style.fontSize = "15px";
  } else if(window.innerWidth > 640 && window.scrollY < 80) {
    nav.style.padding = "80px 10px";
    logo.style.fontSize = "20px";
  }

  if(window.innerWidth < 640 && window.scrollY > 80) {
   logo.style.fontSize = "15px";
  } else {
    logo.style.fontSize = "20px";
  }
}

menu.onclick = (e) => {
    if (e.target.tagName === 'A') {
        // Find the currently active element
        const currentActive = document.querySelector('.menu .active');
        
        // Remove the active class from the previously active item
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        
        // Add the active class to the clicked item
        e.target.parentElement.classList.add('active');
    }
}


