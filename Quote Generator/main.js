let content = document.querySelector('.content');
let btn = document.getElementById('btn');
let url = 'https://api.quotable.io/random';

btn.addEventListener('click', getQuoute)

function getQuoute() {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            content.innerHTML = `
        <q id="quote">${data.content}</q>
        <h3 id="author"> ${data.author} </h3>
        `
        })
        .catch(() =>
            content.innerHTML = `
                <h3>Could not find Quote<h3/>
            `
        )
}

getQuoute();