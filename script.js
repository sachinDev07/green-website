const inputEl = document.getElementById('toggle__btn');
const month = document.querySelector('.mon');
const year = document.querySelector('.year');

// inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateColor();

function updateColor() {
    if(inputEl.checked) {
        year.style.color = "black";
        month.style.color = "";
    }
    else {
        month.style.color = "black";
        year.style.color = "";
    }
}

inputEl.addEventListener("input", ()=> {
    updateColor();
})

// function updateLocalStorage() {
//     localStorage.setItem("mode", JSON.stringify(inputEl.checked));
// }