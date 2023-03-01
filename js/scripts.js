let pokemonRepository = (function () {
    let pokemonList = [];
    pokemonList.push({name: 'Bulbasaur', height: 0.7, types: ['Grass', 'Poison']}, {name: 'Charmander', height: 0.6, types: ['Fire']}, {name: 'Squirtle', height: 0.5, types: ['Water']});
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonUnorderedList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button')
        listItem.appendChild(button);
        pokemonUnorderedList.appendChild(listItem);
    }
    return {
        getAll: getAll,
        addListItem: addListItem
    }
})();

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});
