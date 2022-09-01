// const colorPallet = document.getElementById('color-pallete')
// function createPalletColors() {
//     for (let index = 0; index < 4; index += 1) {
//         const div = document.createElement('div');
//         div.className = 'color';
//         colorPallet.appendChild(div);
        
//     }
// }
// createPalletColors();
function createButtonColor() {
    const body = document.getElementById('overview');
    const buttonColor = document.createElement('button');
    buttonColor.id = 'button-random-color';
    buttonColor.innerText = 'Cores aleatórias';
    body.appendChild(buttonColor);
}
createButtonColor();
// source: https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
function createRandomColors() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b})`;
}

const buttonColorClick = document.getElementById('button-random-color');
const colorBlack = document.getElementsByClassName('color')[0];
const arrayColor = document.getElementById('color-palette');
const arrayColors2 = document.getElementsByClassName('color');

function createGenerator() {
    const arrayColorChildren = arrayColor.children;
    const arrayChangeColor = [];
    for (let index = 0; index < arrayColorChildren.length; index += 1) {
        const fixColor = createRandomColors();
        arrayChangeColor.push(fixColor);
        if (arrayColorChildren[index] !== colorBlack) {
            arrayColorChildren[index].style.backgroundColor = fixColor;
        }
    } localStorage.setItem('colorPalette', JSON.stringify(arrayChangeColor));
}

buttonColorClick.addEventListener('click', createGenerator);

window.onload = function() {
    const saveColor = JSON.parse(localStorage.getItem('colorPalette'));
    for (let index = 0; index < arrayColors2.length; index += 1) {
        if (arrayColors2[index] !== colorBlack) {
            arrayColors2[index].style.backgroundColor = saveColor;
            
        }
    }
}

// function savedColor() {
//     localStorage.setItem('colorPalette', JSON.stringify();
//     const generator = JSON.parse(localStorage.getItem('colorPalette'));
//     document.style.backgroundColor = generator
// }