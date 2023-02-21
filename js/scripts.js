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
for (let index = 0; index < pokemonList.length; index++) {
    document.write('Name: ' + pokemonList[index].name + '<br>');
    let heightComment = "";
    if(pokemonList[index].height >= 0.6)
        heightComment = " (Wow, that’s big!)";
    else
        heightComment = " (Wow, that’s small!)";
    document.write('Height: ' + pokemonList[index].height + ' m' + heightComment + '<br>');
    document.write('Type: ' + pokemonList[index].types + '<br>');
    document.write("<br>");
}