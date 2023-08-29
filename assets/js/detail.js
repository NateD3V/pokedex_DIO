const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then(response => response.json())
  .then(pokemon => {
    const pokemonDetails = document.getElementById('pokemonDetails');
    pokemonDetails.classList.add(pokemon.types[0].type.name);

    


    // Crie um elemento de parágrafo e defina o texto para o nome do Pokémon
    const name = document.createElement('p');
    name.textContent = `${pokemon.name}`;
    name.classList.add('nomeDetail')
    pokemonDetails.appendChild(name);

    // Crie um elemento de parágrafo e defina o texto para o número do Pokémon
    const number = document.createElement('p');
    number.textContent = `# ${pokemon.id}`;
    number.classList.add('numberDetail')
    pokemonDetails.appendChild(number);

    

    // Crie um elemento de imagem e defina o atributo src para a foto do Pokémon
    const img = document.createElement('img');
    img.src = pokemon.sprites.other.dream_world.front_default;
    pokemonDetails.appendChild(img);
    
    // Crie um elemento de parágrafo e defina o texto para o tipo(s) do Pokémon
    const types = document.createElement('p');
    types.textContent = `Tipo(s): ${pokemon.types.map(type => type.type.name).join(' | ')}`;
    pokemonDetails.appendChild(types);
    types.classList.add('typesDetail')

    types.classList.add(pokemon.types[0].type.name);

    // Crie um elemento de parágrafo e defina o texto para as habilidades do Pokémon
    const abilities = document.createElement('p');
    abilities.textContent = `Habilidade(s): ${pokemon.abilities.map(ability => ability.ability.name).join(' | ')}`;
    pokemonDetails.appendChild(abilities);
    abilities.classList.add('abilities')

    const height = document.createElement('p');
    height.textContent = `Altura: ${pokemon.height}`;
    height.classList.add('heightDetail')
    pokemonDetails.appendChild(height);
    
  });