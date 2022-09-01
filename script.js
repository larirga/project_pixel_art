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
createRandomColors();

const buttonColorClick = document.getElementById('button-random-color')

function createGenerator() {
    const colorBlack = document.getElementsByClassName('color')[0];
    const arrayColor = document.getElementById('color-palette');
    const arrayColorChildren = arrayColor.children;
    for (let index = 0; index < arrayColorChildren.length; index += 1) {
        if (arrayColorChildren[index] !== colorBlack) {
            arrayColorChildren[index].style.backgroundColor = createRandomColors();
        }
    }
}

buttonColorClick.addEventListener('click', createGenerator);