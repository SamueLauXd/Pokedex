const contenedorSquirtle = document.querySelector('.contenedor-squirtle');
const detalleSquirtle = document.querySelector('.detalle-squirtle');
let apiSquirtle;

//Get pokemon data and display on screen

function getSquirtle(){
    fetch('https://pokeapi.co/api/v2/pokemon/7/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        showSquirtle(data);
        showSqDetail(data);
        apiSquirtle = data;
        return apiSquirtle;
    })
}

function showSquirtle(pokemonSq){
    const squirtle = document.createElement('img');
    squirtle.src = pokemonSq.sprites.versions["generation-v"]["black-white"].animated.front_default;

    const name = document.createElement('h3');
    name.textContent = pokemonSq.species.name;

    contenedorSquirtle.appendChild(squirtle);
    contenedorSquirtle.appendChild(name);
}

getSquirtle();

//Button and show detail events

function showSqDetail(pokemonSqDetail){

    // salud

    const detalleHp = document.createElement('p');
    detalleHp.textContent = pokemonSqDetail.stats[0].base_stat;

    const hpIcon = document.createElement('img');
    hpIcon.src = 'assets/Hp.png';

    const hpContainer = document.createElement('div');
    hpContainer.appendChild(hpIcon);
    hpContainer.appendChild(detalleHp);


    // ataque


    const detalleAtaque = document.createElement('p');
    detalleAtaque.textContent = pokemonSqDetail.stats[1].base_stat;

    const attackIcon = document.createElement('img');
    attackIcon.src = 'assets/Attack.png';

    const attackContainer = document.createElement('div');
    attackContainer.appendChild(attackIcon);
    attackContainer.appendChild(detalleAtaque);


    // defensa


    const detalleDefensa = document.createElement('p');
    detalleDefensa.textContent = pokemonSqDetail.stats[2].base_stat;

    const defenseIcon = document.createElement('img');
    defenseIcon.src = 'assets/Defense.png';

    const defenseContainer = document.createElement('div');
    defenseContainer.appendChild(defenseIcon);
    defenseContainer.appendChild(detalleDefensa);


    // velocidad


    const detalleVelocidad = document.createElement('p');
    detalleVelocidad.textContent = pokemonSqDetail.stats[5].base_stat;

    const speedIcon = document.createElement('img');
    speedIcon.src = 'assets/Speed.png';

    const speedContainer = document.createElement('div');
    speedContainer.appendChild(speedIcon);
    speedContainer.appendChild(detalleVelocidad);


    detalleSquirtle.appendChild(hpContainer);
    detalleSquirtle.appendChild(attackContainer);
    detalleSquirtle.appendChild(defenseContainer);
    detalleSquirtle.appendChild(speedContainer);
}

contenedorSquirtle.addEventListener('click', (e) =>{
    showSqDetail(apiSquirtle);
},{once: true});