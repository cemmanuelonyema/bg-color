const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const linearColorText = document.querySelector('h3');
const body = document.querySelector('#gradient');

function setGradient() {
    const bgGradient =   body.style.background = 'linear-gradient(to right bottom, ' + color1.value + ', ' + color2.value + ')';
    linearColorText.textContent = bgGradient;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);