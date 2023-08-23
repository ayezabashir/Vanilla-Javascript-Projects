const random_num_fact_url = 'http://numbersapi.com/random/trivia?json';
const num_fact_url = 'http://numbersapi.com/';

const random_btn = document.querySelector('.random-btn');
const fact = document.querySelector('.fact');
const inputNum = document.getElementById('number');

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