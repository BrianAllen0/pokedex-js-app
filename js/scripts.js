let pokemonRepository = (function () {
    let pokemonList = [];
    let bulbasaurObject = {
        name: 'Bulbasaur',
        height: 0.7,
        types: ['Grass', 'Poison']
    }
    let charmanderObject = {
        name: 'Charmander',
        height: 0.6,
        types: ['Fire']
    }
    let squirtleObject = {
        name: 'Squirtle',
        height: 0.5,
        types: ['Water']
    }
    pokemonList.push(bulbasaurObject, charmanderObject, squirtleObject);
    
    function getAll() {
        return pokemonList;
    }
    function add(newPokemon) {
        pokemonList.push(newPokemon);
    }
    return {
        getAll: getAll,
        add: add
    }
})();

let pokemonList = document.querySelector('.pokemon-list');
pokemonRepository.getAll().forEach(function(pokemon){
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button')
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
});