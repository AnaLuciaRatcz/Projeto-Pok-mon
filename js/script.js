//procura e guarda os elementos que vamos usar no javascript
const imgSpace = document.querySelector("#img-space");
const inputNameNumber = document.querySelector("#input-name-number");
//previous and next buttons
const buttonOne = document.querySelector("#button-1");
const buttonTwo = document.querySelector("#button-2"); 
//spinning
const fadeElement = document.querySelector("#fade");
const LoaderElement = document.querySelector("#loader");
//search and clear buttons
const btnSearch = document.querySelector("#btn-search");
const btnClear = document.querySelector("#btn-clear");
//modal button
const closeButton = document.querySelector("#close-message")
//modal message
const messageElement = document.querySelector("#message");
const messageElementText = document.querySelector("#message p");

// usei let pq o valor vai variar
let pokemonId = 1; //significa que vai começar a contar do pokémon número 1

//Get customer Pokemon from API (função)
const getPokemon = async (pokemon) => {

    toggleLoader(); // comando, já criei essa função
    
    inputNameNumber.blur();// não criei essa função, já é própria do input

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const response = await fetch(apiUrl);// fetch é uma função própria para fazer consulta de api

    //Show error and reset input

    if (response.status === 404){ //função
        inputNameNumber.value ="";
        imgSpace.setAttribute("src", "img/pokebola.png");
        toggleLoader(); //comando
        toggleMessage("Texto inválido, tente novamente.")//comando, já criei a função
        return;
    }

    const data = await response.json(); // espere a promessa ser realizada

    console.log(data);
    //função
    imgSpace.setAttribute("src",
    data.sprites.other["official-artwork"].front_default);

     pokemonId = data.id;

     inputNameNumber.value = data.name;
    
    toggleLoader(); //comando
};

//Show or ride loader (função)
const toggleLoader = () => {
    fadeElement.classList.toggle("hide");
    LoaderElement.classList.toggle("hide");
};

//Search button (função)
btnSearch.addEventListener("click", function(){

    const valor = inputNameNumber.value;

    getPokemon(valor);     
});

//Clear button (função)
btnClear.addEventListener("click", function(){

    inputNameNumber.value = ""; 
    imgSpace.setAttribute("src","img/pokebola.png");     
} );

//Show or hide message (função)
const toggleMessage = (msg) =>{
    messageElementText.innerText = msg;

    fadeElement.classList.toggle("hide");
    messageElement.classList.toggle("hide");
}

//Close message modal (função)
closeButton.addEventListener("click", () => toggleMessage()); 

//Previous and next buttons (3 funções seguidas)
const startSearch = () =>{
    buttonOne.disabled = (pokemonId <= 1);
};

buttonOne.addEventListener("click",() =>{
    if(pokemonId > 1){
        pokemonId--;
        getPokemon(pokemonId);
    }
});

buttonTwo.addEventListener("click", () =>{
    pokemonId++;
    getPokemon(pokemonId);
});





