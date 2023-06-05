const speedEl = document.getElementById('speed');
const textEl = document.getElementById('text');
const text = "Like literally so Cute!";

let idx = 1;
let speed = 300 / speedEl.value;

textEffect();

function textEffect() {
    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(textEffect, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
})