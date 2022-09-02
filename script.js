function saveLocalStorage(nomeDaChave, valor) {
    localStorage.setItem(nomeDaChave, JSON.stringify(valor));
}

const colorPallet = document.getElementById('color-palette');
function createPalletColors() {
    const emptyArray = [];
    for (let index = 0; index < 4; index += 1) {
        const div = document.createElement('div');
        div.className = 'color';
        div.style.backgroundColor = createRandomColors();
        if (index === 0) {
            div.style.backgroundColor = 'black';
        } 
        emptyArray.push(div.style.backgroundColor);
        colorPallet.appendChild(div);
    }
    saveLocalStorage('colorPalette', emptyArray);
}

const body = document.getElementById('overview');

function createButtonColor() {
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
const arrayColor = document.getElementById('color-palette');

function createGenerator() {
    const arrayColorChildren = arrayColor.children;
    const arrayChangeColor = [];
    for (let index = 0; index < arrayColorChildren.length; index += 1) {
        let fixColor = createRandomColors();
        if (index === 0) {
            fixColor = 'black';
        }
        arrayChangeColor.push(fixColor);
    arrayColorChildren[index].style.backgroundColor = fixColor;
    
    } saveLocalStorage('colorPalette', arrayChangeColor);
}

buttonColorClick.addEventListener('click', createGenerator);

function recoverStorage(nomeDaChave) {
    const saveColor = JSON.parse(localStorage.getItem(nomeDaChave));
    for (let index = 0; index < 4; index += 1) {
        const div = document.createElement('div');
        div.className = 'color';
        div.style.backgroundColor = saveColor[index];
        if (index === 0) {
            div.style.backgroundColor = 'black';
        }
        colorPallet.appendChild(div);
    }
}

if (localStorage.getItem('colorPalette') === null) {
    createPalletColors();
} else {
    recoverStorage('colorPalette');
}


function createPaintingSquare() {
    const bigSquare = document.createElement('div');
    bigSquare.id = 'pixel-board';
    bigSquare.style.width = '250px';
    body.appendChild(bigSquare);
}
createPaintingSquare();

function smallSquare() {
    const fatherSquare = document.getElementById('pixel-board');
    for (let index = 0; index < 25; index += 1) {
        const childSquare = document.createElement('div');
        childSquare.className = 'pixel';
        childSquare.style.backgroundColor = 'white';
        childSquare.style.border = '1px solid black';
        childSquare.style.width = '40px';
        childSquare.style.height = '40px';
        childSquare.style.display = 'inline-block';
        fatherSquare.appendChild(childSquare);
    }
}
smallSquare();

function blackColorClass() {
    const colorBlack = document.getElementsByClassName('color')[0];
    colorBlack.className = 'selected';
    colorBlack.classList.add('selected', 'color');
}
blackColorClass();