const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    // console.log(currentActive);
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

let update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
            // console.log(index, currentActive);
        }
        else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    let currentProgress = (actives.length - 1) / (circles.length - 1) * 100;

    progress.style.width = currentProgress + "%";

    if (currentActive === 1) {
        prev.disabled = true;
        next.disabled = false;
    } else if (currentActive === circles.length) {
        next.disabled = true;
        prev.disabled = false;
    }
}