const random_num_fact_url = 'https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true';
const num_fact_url = 'https://numbersapi.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f86e131a91mshd66e2778335add9p1c2191jsn00c9f864e441',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

const btn = document.querySelector('.btn');
const random_btn = document.querySelector('.random-btn');
const fact = document.querySelector('.fact');
const inputNum = document.getElementById('number');

btn.addEventListener('click', numFact);
random_btn.addEventListener('click', getRandomFact);
async function numFact() {
    try {
        let facts = num_fact_url + inputNum.value + '/trivia?fragment=true&notfound=floor&json=true';
        const response = await fetch(facts, options);
        const result = await response.json();
        fact.innerHTML = `${result.text}`
        console.log(result);
    } catch (error) {
        fact.innerHTML = "Sorry, Could not found any information on that number"
    }
}

async function getRandomFact() {
    try {
        const response = await fetch(random_num_fact_url, options);
        const result = await response.json();
        fact.innerHTML = `${result.text}`;
        inputNum.value = `${result.number}`;
        console.log(result);
    } catch (error) {
        fact.innerHTML = "Sorry Could not found any Random Fact"
    }
}
getRandomFact();
