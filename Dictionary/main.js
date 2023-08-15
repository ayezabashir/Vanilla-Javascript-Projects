const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const sound = document.getElementById('sound');
const searchResult = document.querySelector('.search-result');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    let searchWord = document.getElementById('search-word').value;
    let word = url + searchWord;
    fetch(word)
        .then(resp => resp.json())
        .then(data => {
            searchResult.innerHTML = `
            <div class="word">
                <h2>${searchWord}</h2>
                <button onclick="playSound()" class="icon">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic || data[0].phonetics[1].text} </p>
            </div>
            <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <div class="sentence">
                <b>Sentence: </b>
                <i>${data[0].meanings[0].definitions[0].example || 'No sentence found'}</i>
            </div>
            `;
            sound.setAttribute("src", `${data[0].phonetics[0].audio || data[0].phonetics[1].audio}`);
        })
        .catch(() => {
            searchResult.innerHTML = `
            <h3 class="error">Could not find the word</h3>
            `
        })
})

function playSound() {
    sound.play();
}