const api_url = 'https://api.datamuse.com/words?ml=';
const input = document.getElementById('word');
const form = document.querySelector('.form');
const wrapper = document.querySelector('.wrapper');

form.addEventListener('submit', searchSynonym);

async function searchSynonym(e) {
    e.preventDefault();
    let searchWord = input.value;
    let resp = await fetch(api_url + searchWord);
    let result = await resp.json();
    wrapper.innerHTML = `
        <div class="result-container">
          <span id="synonym">${result[0].word}</span>
          <span id="synonym">${result[1].word}</span>
          <span id="synonym">${result[2].word}</span>
          <span id="synonym">${result[3].word}</span>
          <span id="synonym">${result[4].word}</span>
          <span id="synonym">${result[5].word}</span>
          <span id="synonym">${result[6].word}</span>
          <span id="synonym">${result[7].word}</span>
          <span id="synonym">${result[8].word}</span>
          <span id="synonym">${result[9].word}</span>
          <span id="synonym">${result[10].word}</span>
          <span id="synonym">${result[11].word}</span>
          <span id="synonym">${result[12].word}</span>
          <span id="synonym">${result[13].word}</span>
          <span id="synonym">${result[14].word}</span>
          <span id="synonym">${result[15].word}</span>
          <span id="synonym">${result[16].word}</span>
          <span id="synonym">${result[17].word}</span>
          <span id="synonym">${result[18].word}</span>
        </div>
        <button id="copy" onclick="copyWords()">Copy Synonyms</button>
    `
}

function copyWords() {
    let word = wrapper.innerText;
    navigator.clipboard.writeText(word);
}