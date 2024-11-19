const btn = document.querySelectorAll(".btn");
const parent = document.querySelector(".parent");
const row = document.querySelector(".row");

parent.addEventListener("click", (e) => {
  if(e.target.tagName == "BUTTON") { //if(e.target.classList.contains("btn"))
   let num = e.target.innerHTML;
   if(num === '1') {
    row.style.gridTemplateColumns = "repeat(1, 1fr)";
   }
   else if(num === '2') {
    row.style.gridTemplateColumns = "repeat(2, 1fr)";

   }
   else {
    row.style.gridTemplateColumns = "repeat(4, 1fr)";
   }
  }
})

for(let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(e) {
    let current = document.querySelector(".active");
    current.className = current.className.replace("active", "");
    this.className += " active";
  })
}