const poke_container = document.getElementById('poke-container');
const pokemon_count = 110;
const colors = {
    fire: '#fddfdd',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poisen: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5e5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',
    poison: '#cfdae2'
}

const main_types = Object.keys(colors);
// console.log(main_types);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);

    createPokemonCard(data)
}
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    // gives us the 1st letter in Capital
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    // so we can write ids like "001" instead of "1"
    const id = pokemon.id.toString().padStart(3, '0');

    // console.log(pokemon.types);
    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    console.log(poke_types);

    const color = colors[type]
    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
        <div class="img-container">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span> </small>
        </div>
    `
    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);
}
fetchPokemons();