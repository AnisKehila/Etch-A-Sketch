// defines variables & consts
let container = document.getElementById('container');
let controlPanel = document.getElementById('control-panel');
let grid = document.createElement('div');
let mouseDown = false;
let clearBtn = document.querySelector('input[value = Clear]');
let displaySize = document.querySelector('span');
let sizeSelector = document.querySelector('input[type = range]');
let modeBtns = document.querySelectorAll('.mode');
let mode = 'color';
// remove the active class
function removeActive() {
    modeBtns.forEach(modeBtn => modeBtn.classList.remove('active'));
}
// setting coloring mode
modeBtns.forEach(modeBtn => modeBtn.addEventListener('click' , () => {
    removeActive();
    modeBtn.classList.add('active');
    mode = modeBtn.getAttribute('data-mode');
}));

// append grid to DOM
grid.classList.add('grid');
container.appendChild(grid);

// Clear the game space function
function clear() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {pixel.style = 'background-color: white;'});
}
// Reset game  function
function resetGame() {
    grid.innerHTML = '';
    startGame();
}
// Coloring pixels in the grid
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function colorPixels(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    if(mode === 'color') {
        let colorSelector = document.querySelector('input[type = color]');
        let color = colorSelector.value;
        this.style = `background-color: ${color};`;
    } else if(mode === 'eraser') {
        this.style = `background-color: white`
    } else if(mode === 'rainbow'){
        let random = Math.floor(Math.random() * 256);
        let random1 = Math.floor(Math.random() * 256);
        let random2 = Math.floor(Math.random() * 256);
        this.style = `background-color: rgb(${random} ,${random1} ,${random2} )`;
    }
}
// Game Logic
function startGame() {
    let size = sizeSelector.value;
    displaySize.innerText = `${size} x ${size}`;
    for(let i=0; i<size*size; i++) {
        var pixel = document.createElement('div');
        pixel.classList.add('pixel');
        grid.appendChild(pixel);
        pixel.addEventListener('mousedown' , colorPixels); 
        pixel.addEventListener('mouseover' , colorPixels); 
    }
    grid.style = `  
        display: grid;
        grid-template-columns: repeat(${size}, 1fr);
        grid-template-rows: repeat(${size}, 1fr);                             
    `;
}


clearBtn.addEventListener('click' , clear);
sizeSelector.addEventListener('input' , resetGame);


window.onload = () => {startGame();}
