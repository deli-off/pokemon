var elList = document.querySelector("[data-list]")

renderPokemons()

function renderPokemons() {
    for (let i = 0; i < pokemons.length; i++) {
        elList.innerHTML = elList.innerHTML + getPokemonHTML(pokemons[i])
    }
}

function getPokemonHTML(pokemon) {
    return ` <li class="pokemons_item">
      <div class="pokemons_item-image">
        <img src="${pokemon.img}" width="157" height="157" alt="${pokemon.name}">
      </div>
      <div class="pokemons__item-content">
        <h3>${pokemon.name}</h3>
        <div class="pokemons__item-type">${joinArray(pokemon.type, ", ")}</div>
          <div class="pokemons__item-sizes">
            <div class="pokemons__item-size">${pokemon.weight}</div>
            <div class="pokemons__item-size">${pokemon.height}</div>
          </div>
      </div>
    </li>`;
}

function joinArray(arr, separator = "") {
    var str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];

        if (i !== arr.length - 1) {
            str += separator;
        }
    }
    return str;
}