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

pokemonList.forEach(function(pokemon){
    document.write('Name: ' + pokemon.name + '<br>');
    let heightComment = "";
    if(pokemon.height >= 0.6)
        heightComment = " (Wow, that’s big!)";
    else
        heightComment = " (Wow, that’s small!)";
    document.write('Height: ' + pokemon.height + ' m' + heightComment + '<br>');
    document.write('Type: ' + pokemon.types + '<br>');
    document.write("<br>");
});
