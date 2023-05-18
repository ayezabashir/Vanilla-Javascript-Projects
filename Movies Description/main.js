const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fd13946ff92096dbea97ee938350a03a&page=1';
const IMG_PATH = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fd13946ff92096dbea97ee938350a03a&query="'

const form = document.getElementById('form');
const search = document.getElementById('search')
const main = document.getElementById('main');
// get intial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results);
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        // using object destructuring to get data
        const { title, poster_path, vote_average, overview, release_date } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="release">
         ${release_date}
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieElement);
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

// Search Results
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searcTerm = search.value;

    if (searcTerm && searcTerm !== '') {
        getMovies(SEARCH_API + searcTerm);
        search.value = ''
    } else {
        window.location.reload();
    }
})