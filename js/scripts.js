let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let detailsCloseButton = document.querySelector('.details-close-button');
    let detailsContainer = document.querySelector('.details-container');
    

    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            let image = document.querySelector('.details-visual-display__image');
            let name = document.querySelector('.details-visual-display__name');
            let height = document.querySelector('.details-stats__height');
            let weight = document.querySelector('.details-stats__weight');
            let typelist = document.querySelector('.details-stats__type');
            // clear old data
            typelist.replaceChildren();
            // add new data
            image.src = pokemon.imageUrl;
            name.innerText = pokemon.name;  //pokeapi uses measurements multipled by 10
            height.innerText = 'Height: ' + (pokemon.height/10) + 'm';
            weight.innerText = 'Weight: ' + (pokemon.weight/10) + 'kg';
            pokemon.types.forEach(type => {
                let newType = document.createElement('li');
                let typeText = (type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1));
                newType.innerText = typeText;
                newType.classList.add('type-' + typeText);
                typelist.appendChild(newType);
            });
        });
        showDetailsModal();
    }

    function showDetailsModal() {
        detailsContainer.classList.add('is-visible');
    }

    function closeDetailsModal() {
        detailsContainer.classList.remove('is-visible');
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) { // this is where the details object is declared, it is passed to showdetails as 'pokemon'   
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
        }).catch(function(e) {
            console.error(e);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: (item.name.charAt(0).toUpperCase() + item.name.slice(1)),
                    detailsUrl: item.url
                };
                addListItem(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    function addListItem(pokemon) {
        let pokemonUnorderedList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        
        button.addEventListener('click', function(){showDetails(pokemon);})
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button')
        
        listItem.appendChild(button);
        pokemonUnorderedList.appendChild(listItem);
    }

    window.addEventListener('keydown', (event) => {
        let modalVisible = detailsContainer.classList.contains('is-visible');
        if(event.key === 'Escape' && modalVisible) {
            closeDetailsModal();
        }
    });

    window.addEventListener('click', (event) => {
        let modalVisible = detailsContainer.classList.contains('is-visible');
        if(event.target === detailsContainer && modalVisible) {
            closeDetailsModal();
        }
    });

    detailsCloseButton.addEventListener('click', (event) => {
        closeDetailsModal();
    });

    return {
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList
    }
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});