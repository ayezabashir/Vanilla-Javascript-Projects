const random_num_fact_url = 'http://numbersapi.com/random/trivia?json';
const num_fact_url = 'http://numbersapi.com/';

const btn = document.querySelector('.btn');
const random_btn = document.querySelector('.random-btn');
const fact = document.querySelector('.fact');
const inputNum = document.getElementById('number');

btn.addEventListener('click', numFact);
function numFact() {
    numUrl = num_fact_url + inputNum.value + '?json';
    fetch(numUrl)
        .then(resp => resp.json())
        .then(data => fact.innerHTML = `${data.text}`)
        .catch(() => fact.innerHTML = "Sorry, Could not found any information on that number")
}

random_btn.addEventListener('click', getRandomFact);
getRandomFact();
function getRandomFact() {
    fetch(random_num_fact_url)
        .then(resp => resp.json())
        .then(data => {
            fact.innerHTML = `${data.text}`
            inputNum.value = `${data.number}`
        })
}