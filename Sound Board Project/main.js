const sounds = ['victory', 'wrong', 'tada', 'gasp', 'boo', 'applause'];

sounds.forEach(sound => {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSound();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopSound() {
    sounds.forEach(sound => {
        let aud = document.getElementById(sound);
        aud.pause();
        aud.currentTime = 0;
    })
}