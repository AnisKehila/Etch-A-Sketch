// defines variables & consts
let container = document.getElementById('container');
let controlPanel = document.getElementById('control-panel');
let grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

function startGame() {
    let sizeSelector = document.querySelector('input[type = range]')
    let size = sizeSelector.value;
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
// Game Logic
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function colorPixels(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    let colorSelector = document.querySelector('input[type = color]');
    let color = colorSelector.value;
    this.style = `background-color: ${color};`;
}



window.onload = () => {startGame();}
