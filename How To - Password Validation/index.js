const head = document.querySelector('#heading');
const inpt = document.querySelector('#psw');
const msg = document.querySelector('#message');
const letter = document.querySelector('#letter');
const capital = document.querySelector('#capital');
const number = document.querySelector('#number');
const length = document.querySelector('#length');

inpt.addEventListener('focus', () => {
  msg.classList.remove('hidden');
})

inpt.addEventListener('blur', () => {
    msg.classList.add('hidden');
})

inpt.addEventListener('input', () => {
    const lowerCase = /[a-z]/g;
    if(inpt.value.match(lowerCase)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    } else {
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    const upperCase = /[A-Z]/g;
    if(inpt.value.match(upperCase)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    } else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    const numbers = /[0-9]/g;
    if(inpt.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }
    
    if(inpt.value.length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
})

const gradients = [
    'bg-gradient-to-r from-blue-400 via-teal-300 to-green-300',
    'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    'bg-gradient-to-r from-blue-400 via-teal-300 to-green-300',
    'bg-gradient-to-br from-purple-400 to-pink-600',
    'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
    'bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200',
    'bg-gradient-to-tr from-teal-200 via-cyan-300 to-blue-400',
    'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600',
    'bg-gradient-to-bl from-blue-500 to-indigo-700',
];

let id = 0;
setInterval(() => {
  head.className =  `text-xl sm:text-2xl font-bold text-center py-6
    bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 ${gradients[id]}`
    id = (id + 1) % gradients.length;
  }, 1000);