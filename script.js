function saveLocalStorage(nomeDaChave, valor) {
    localStorage.setItem(nomeDaChave, JSON.stringify(valor));
}
// cria paleta de cores no local storage
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

// cria button cores aleatorias

function createButtonColor() {
    const buttonColor = document.createElement('button');
    buttonColor.id = 'button-random-color';
    buttonColor.innerText = 'Cores aleatórias';
    body.appendChild(buttonColor);
}
createButtonColor();

// button limpar

function createButtonClear() {
    const buttonClear = document.createElement('button');
    buttonClear.id = 'clear-board';
    buttonClear.innerText = 'Limpar';
    body.appendChild(buttonClear);
}
createButtonClear();

// source: https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
function createRandomColors() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b})`;
}

const buttonColorClick = document.getElementById('button-random-color');
const arrayColor = document.getElementById('color-palette');

// cria paleta de cores

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

//cria quadrado maior

function createPaintingSquare() {
    const bigSquare = document.createElement('div');
    bigSquare.id = 'pixel-board';
    bigSquare.style.width = '250px';
    body.appendChild(bigSquare);
}
createPaintingSquare();

const fatherSquare = document.getElementById('pixel-board');

//cria quadrado menor

function smallSquare() {
    for (let index = 0; index < 25; index += 1) {
        const childSquare = document.createElement('div');
        childSquare.className = 'pixel';
        childSquare.style.backgroundColor = 'white';
        childSquare.style.border = '1px solid black';
        childSquare.style.width = '40px';
        childSquare.style.height = '40px';
        childSquare.style.display = 'inline-block';
        childSquare.style.margin = '3px';
        fatherSquare.appendChild(childSquare);
    }
}
smallSquare();

// coloca a cor preta como selected ao abrir a pagina

const colorsSelected = document.querySelectorAll('.color');

function blackColorClass() {
    colorsSelected[0].classList.add('selected');
}

//Seleciona as cores da paleta (consegui visualizar pelo inspecionar) e evento de click

function selectedColor(event) {
    for (let index = 0; index < colorsSelected.length; index += 1) {
        if (event.target === colorsSelected[index]) {
            colorsSelected[index].classList.add('selected');
        } else {
            colorsSelected[index].classList.remove('selected');
        }
    }
}

for (let index = 0; index < colorsSelected.length; index += 1) {
    colorsSelected[index].addEventListener('click', selectedColor);
    colorsSelected[index].classList.remove('selected');
}

blackColorClass();

//adiciona o evento de click nas cores 

function clickColor(event) {
    const selectedElement = document.querySelector('.selected').style.backgroundColor;
    const eventClick = event.target;
    if (eventClick.classList.contains('pixel')) { // Porque utilizei classList.contains https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
        eventClick.style.backgroundColor = selectedElement;
    }
}
fatherSquare.addEventListener('click', clickColor);

//Percorre os pixels e adiciona o evento click no limpar

const selectedClear = document.getElementById('clear-board');

function clickAndClear() {
    const selectedPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < selectedPixels.length; index += 1) {
        selectedPixels[index].style.backgroundColor = 'white';
    }
}
selectedClear.addEventListener('click', clickAndClear);
