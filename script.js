const inputEl = document.getElementById('toggle__btn');
const month = document.querySelector('.mon');
const year = document.querySelector('.year');
const yearly = document.querySelectorAll('.yearly');
const monthly = document.querySelectorAll('.monthly');

updateColor();

function updateColor() {
    if(inputEl.checked) {
        monthly.forEach(mo => {mo.style.display = 'none'});
        yearly.forEach(mo => {mo.style.display = 'block'});

        year.style.color = "black";
        month.style.color = "";
        
    }
    else {
        monthly.forEach(mo => {mo.style.display = 'block'});
        yearly.forEach(mo => {mo.style.display = 'none'});

        month.style.color = "black";
        year.style.color = "";
    }
}

inputEl.addEventListener("input", ()=> {
    updateColor();
})


//---------- Hamburger event -----------

const barEl = document.querySelector('.bar');
const navbar = document.querySelector('.nav__wrapper');
const close = document.getElementById('close');

if(barEl) {
    barEl.addEventListener("click", () => {
        navbar.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', ()=> {
        navbar.classList.remove('active');
    })
}
