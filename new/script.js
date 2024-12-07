const inpt = document.querySelector('input');
const list = document.querySelectorAll("ul li");



const handler = (e) => {
    console.log(e.target.value);
    const val = e.target.value;
    list.forEach((item) => {
        if(item.innerHTML.toLowerCase().includes(val.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })    
}

inpt.addEventListener('input', handler);

