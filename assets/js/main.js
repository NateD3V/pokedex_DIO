const pokemonLista = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const maxRecords = 151;
const limit = 10;
let offset = 0;



// Declara uma função chamada converterPokemonParaLi que recebe um objeto pokemon como parâmetro e retorna uma string
// que contém um elemento HTML li com as informações do pokemon
function converterPokemonParaLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}" onclick="window.location.href='detalhes.html?id=${pokemon.number}'">
            <span class="numero">#${pokemon.number}</span>
            <span class="nome">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) =>`<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
                    
        </li>
    `
}



// Declara uma constante chamada pokemonLista e atribui o 
// elemento HTML com o id pokemonList


loadPokemonItens(offset, limit)

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = [])=>{
        pokemonLista.innerHTML += pokemons.map(converterPokemonParaLi).join('')
    })
    
}

loadMore.addEventListener('click',()=> {
    offset += limit
    const qtdRecordNextPage = offset + limit
    if (qtdRecordNextPage >= maxRecords) {
        const newLimit =  maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadPokemonItens(offset,limit)
    }
    
})