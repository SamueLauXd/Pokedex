const bulbasurContainer = document.querySelector('.contenedor-bulbasur');
const detalleBulbasur = document.querySelector('.detalle-bulbasur')
let apiBulbasur;

//Get pokemon data and display on screen

function getBulbasur() {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(data => {
        showBulbasur(data);
        showBuDetail(data);
        apiBulbasur = data;
        return apiBulbasur;
    });
}

function showBulbasur(pokemon){
    const bulbasur = document.createElement('img');
    bulbasur.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;

    const name = document.createElement('h3');
    name.textContent = pokemon.species.name;

    bulbasurContainer.appendChild(bulbasur);
    bulbasurContainer.appendChild(name);
}

getBulbasur();

//Button and show detail events

function showBuDetail(pokemonBuDetail){
    // salud

    const detalleHp = document.createElement('p');
    detalleHp.textContent = pokemonBuDetail.stats[0].base_stat;

    const hpIcon = document.createElement('img');
    hpIcon.src = 'assets/Hp.png';

    const hpContainer = document.createElement('div');
    hpContainer.appendChild(hpIcon);
    hpContainer.appendChild(detalleHp);


    // ataque


    const detalleAtaque = document.createElement('p');
    detalleAtaque.textContent = pokemonBuDetail.stats[1].base_stat;

    const attackIcon = document.createElement('img');
    attackIcon.src = 'assets/Attack.png';

    const attackContainer = document.createElement('div');
    attackContainer.appendChild(attackIcon);
    attackContainer.appendChild(detalleAtaque);


    // defensa


    const detalleDefensa = document.createElement('p');
    detalleDefensa.textContent = pokemonBuDetail.stats[2].base_stat;

    const defenseIcon = document.createElement('img');
    defenseIcon.src = 'assets/Defense.png';

    const defenseContainer = document.createElement('div');
    defenseContainer.appendChild(defenseIcon);
    defenseContainer.appendChild(detalleDefensa);


    // velocidad


    const detalleVelocidad = document.createElement('p');
    detalleVelocidad.textContent = pokemonBuDetail.stats[5].base_stat;

    const speedIcon = document.createElement('img');
    speedIcon.src = 'assets/Speed.png';

    const speedContainer = document.createElement('div');
    speedContainer.appendChild(speedIcon);
    speedContainer.appendChild(detalleVelocidad);
    
    
    detalleBulbasur.appendChild(hpContainer);
    detalleBulbasur.appendChild(attackContainer);
    detalleBulbasur.appendChild(defenseContainer);
    detalleBulbasur.appendChild(speedContainer);
}

bulbasurContainer.addEventListener('click', (e) =>{
    showBuDetail(apiBulbasur);
},{once: true});