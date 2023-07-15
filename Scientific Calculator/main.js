console.log("Scientific Calculator");

var screen = document.querySelector('#screen');
var btns = document.querySelectorAll('.btn');

btns.forEach(
    (btn) => btn.addEventListener('click', (e) => {
        console.log(e.target);
        btnText = e.target.innerText;
        console.log(btnText);

        if (btnText == "×") {
            btnText = "*";
        }
        else if (btnText == "÷") {
            btnText = "/";
        }
        screen.value += btnText;
    })
);

function fact() {
    let i = screen.value;
    let sum = 1;
    for (let j = 1; j <= i; j++) {
        sum = sum * j;
    }
    screen.value = sum;
}

function backspace() {
    screen.value = screen.value.slice(0, screen.value.length - 1);
}

function clearAll() {
    screen.value = "";
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function power() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function solve() {
    screen.value = eval(screen.value);
}