const Api_URL = 'https://api.datamuse.com/words?rel_syn='
const wordSearchForm = document.getElementById('word-search-form');
const copybtn = document.getElementById('copy-btn');
const wordAppBody = document.querySelector('.word-app-body');
const wordListContainer = document.getElementById('word-list');
const loadingSpinner = document.getElementById('spinner');

let wordNotFound = true;

const getInputWord = () => {
    wordAppBody.style.display = 'none';
    wordSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let searchWord = wordSearchForm.search_word.value;
        fetchSynonyms(searchWord);
    })
}

getInputWord();
const fetchSynonyms = async (searchWord) => {
    let url = Api_URL + searchWord;
    try {
        loadingSpinner.style.display = 'flex';
        let resp = await fetch(url);
        let data = await resp.json();
        loadingSpinner.style.display = 'none';
        renderWords(data);
    } catch (err) {
        console.log(err);
    }
}

const renderWords = (wordsArr) => {
    let htmlCode;
    if (wordsArr.length > 0) {
        wordNotFound = false;
        htmlCode = wordsArr.map(word => {
            return `<span class="word-item">${word.word}</span>`
        });
        wordListContainer.innerHTML = htmlCode.join(" ")
    } else {
        wordNotFound = true;
        htmlCode = "No Search result found";
        wordListContainer.innerHTML = htmlCode;
    }
    wordAppBody.style.display = 'block';
}

const copyWord = () => {
    if (!wordNotFound) {
        let words = (wordListContainer.textContent).split(" ");
        let filterWords = words.filter(word => word.length !== 0);
        let wordToCopy = filterWords.join(", ");
        navigator.clipboard.writeText(wordToCopy);
    } else {
        console.log("nothing to copy")
    }
}

copybtn.addEventListener('click', copyWord);
