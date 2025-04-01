// Buena suerte ! :)
const characterMaxLength = document.getElementById("textarea").getAttribute("maxlength");
const txtArea = document.getElementById("textarea");
const spanTotalCounter = document.getElementById("total-counter");
const spanRemainingCounter = document.getElementById("remaining-counter");

spanTotalCounter.textContent = 0;
spanRemainingCounter.textContent = characterMaxLength

txtArea.addEventListener("input", e=>{
    spanTotalCounter.textContent = (document.getElementById("textarea").value).length;
    spanRemainingCounter.textContent = characterMaxLength - txtArea.value.length;
});



