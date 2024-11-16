         const divs = document.querySelectorAll(".tabcontent");
         const parent = document.querySelector(".parent");
        
        const openCity = (city) => {
          console.log(city);
           for(let i = 0; i < divs.length; i++) {
            parent.classList.add("border");
            if(divs[i].id === city){
              divs[i].classList.remove("hidden");
            }
            else{
              divs[i].classList.add("hidden");
            }
          }
        }