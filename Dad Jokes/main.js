const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const endpoint = "https://icanhazdadjoke.com";

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
function generateJoke() {
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }
    fetch(endpoint, config)
        .then(response => response.json())
        .then(data => {
            jokeElement.innerHTML = data.joke;
        })
}