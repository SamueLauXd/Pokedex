const contedorCharmander = document.querySelector('.contenedor-charmander');
const detalleCharmander = document.querySelector('.detalle-charmander');
const evCharmander = document.querySelector('.charmander-ev');
//Get pokemon data and display on screen

function getCharmander(evolution){
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
    .then(response => response.json())
    .then(data => {
        showCharmander(data);
        showChDetail(data);
    })
}

function showCharmander(pokemonCh){
    const charmander = document.createElement('img');
    charmander.src = pokemonCh.sprites.versions["generation-v"]["black-white"].animated.front_default;

    const name = document.createElement('h3');
    name.textContent = pokemonCh.species.name;

    contedorCharmander.appendChild(charmander);
    contedorCharmander.appendChild(name);
}

getCharmander(4);

//Button and show detail events

function showChDetail(pokemonChDetail){

    // salud

    const detalleHp = document.createElement('p');
    detalleHp.textContent = pokemonChDetail.stats[0].base_stat;

    const hpIcon = document.createElement('img');
    hpIcon.src = 'assets/Hp.png';

    const hpContainer = document.createElement('div');
    hpContainer.appendChild(hpIcon);
    hpContainer.appendChild(detalleHp);


    // ataque


    const detalleAtaque = document.createElement('p');
    detalleAtaque.textContent = pokemonChDetail.stats[1].base_stat;

    const attackIcon = document.createElement('img');
    attackIcon.src = 'assets/Attack.png';

    const attackContainer = document.createElement('div');
    attackContainer.appendChild(attackIcon);
    attackContainer.appendChild(detalleAtaque);


    // defensa


    const detalleDefensa = document.createElement('p');
    detalleDefensa.textContent = pokemonChDetail.stats[2].base_stat;

    const defenseIcon = document.createElement('img');
    defenseIcon.src = 'assets/Defense.png';

    const defenseContainer = document.createElement('div');
    defenseContainer.appendChild(defenseIcon);
    defenseContainer.appendChild(detalleDefensa);


    // velocidad


    const detalleVelocidad = document.createElement('p');
    detalleVelocidad.textContent = pokemonChDetail.stats[5].base_stat;

    const speedIcon = document.createElement('img');
    speedIcon.src = 'assets/Speed.png';

    const speedContainer = document.createElement('div');
    speedContainer.appendChild(speedIcon);
    speedContainer.appendChild(detalleVelocidad);
    
    
    detalleCharmander.appendChild(hpContainer);
    detalleCharmander.appendChild(attackContainer);
    detalleCharmander.appendChild(defenseContainer);
    detalleCharmander.appendChild(speedContainer);
}

contedorCharmander.addEventListener('click', (e) =>{
    getCharmander(6);
},{once: true});

// evCharmander.addEventListener('click', (e) => {
//     getCharmander(6);
// });