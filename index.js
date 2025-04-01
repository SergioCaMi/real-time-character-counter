// Buena suerte ! :)
const characterMaxLength = document.getElementById("textarea").getAttribute("maxlength");


const txtArea = document.getElementById("textarea");

txtArea.addEventListener("input", e=>{
    document.getElementById("total-counter").textContent = (document.getElementById("textarea").value).length;

    document.getElementById("remaining-counter").textContent = (document.getElementById("textarea").value).length - characterMaxLength;

});



