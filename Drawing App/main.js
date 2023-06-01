const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const brushSize = document.getElementById('size');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const getColor = document.getElementById('color');
const clear = document.getElementById('clear');

increase.addEventListener('click', increaseBrushSize);
decrease.addEventListener('click', decreaseBrushSize);
getColor.addEventListener('input', selectColor);

function selectColor() {
    color = getColor.value;
}

function increaseBrushSize() {
    if (brushSize.innerHTML >= 20) {
        return;
    } else {
        brushSize.innerHTML = ++size;
    }
}
function decreaseBrushSize() {
    if (brushSize.innerHTML <= 1) {
        brushSize.innerHTML = 1;
        size = 1;
    } else {
        brushSize.innerHTML = --size;
    }
}


let size = brushSize.innerText;
let color = getColor.value;
let x;
let y;
let isPressed = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;

    x = undefined;
    y = undefined;
})
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})