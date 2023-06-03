const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Yoohoo!',
    'Some Toaster',
    'Oh man!',
    'Gracias!',
]

const types = [
    'info',
    'success',
    'danger'
]

button.addEventListener('click', () => createNotfication())

function createNotfication(msg = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());

    notif.innerText = msg ? msg : getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]

}