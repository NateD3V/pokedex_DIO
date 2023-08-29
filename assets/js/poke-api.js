const pokeApi = {}

function convertPokeApiDetailtoPokemon(pokeDetail) {
    const pokemon = new Pokemon ()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    

    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response)=> response.json())
    .then(convertPokeApiDetailtoPokemon)

    
}


pokeApi.getPokemons = (offset = 0, limit = 5) => {
    // Declara uma constante chamada url e atribui uma string que contém a 
    // URL da API de pokémon com os parâmetros offset e limit
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url) // Usa a função fetch para fazer uma requisição HTTP GET para a URL
        .then((response) => response.json()) // Usa uma arrow function para retornar uma promessa que resolve para o corpo da resposta em formato JSON
        .then((jsonBody) => jsonBody.results) // Usa uma arrow function para retornar apenas a propriedade results do corpo da resposta, que é um array de objetos pokemon
        .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests)=> Promise.all(detailRequests))
        .then((pokemonsDetails)=> pokemonsDetails)
           
}
