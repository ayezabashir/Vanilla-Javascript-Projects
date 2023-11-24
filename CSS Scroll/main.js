let items = document.querySelectorAll('li');
let colors = ['#00c1b5', '#ff651a', '#ffbe00', '#1d3fbb', '#e30512']
const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
}
const init = () => {
    for (let i = 0; i < items.length; i++) {
        items[i].style.minHeight = getRandom(100, 105) + 'vh';
        items[i].style.background = colors[i];
    }
}
init();