const btn = document.querySelector('button');
const tooltip_text = document.getElementById('tooltiptext');
const inpt = document.querySelector('input');
const copyText = function(e) {
tooltip_text.innerHTML = "text copied";
if(inpt.value.trim())
 navigator.clipboard.writeText(inpt.value.trim());
else
console.log("chl bsdk");
inpt.select();
}

const mouseEnter = () => {
    document.querySelector(".parent").style.display = "block";
};

const mouseOut = () => {
    document.querySelector(".parent").style.display = "none";
    tooltip_text.innerHTML = "copy to clipboard";
}