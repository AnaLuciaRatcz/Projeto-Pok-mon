const imgSpace = document.querySelector("#img-space");
const inputNameNumber = document.querySelector("#input-name-number");
const buttonOne = document.querySelector("#button-1");
const buttonTwo = document.querySelector("#button-2"); 
//spinning
const fadeElement = document.querySelector("#fade");
const LoaderElement = document.querySelector("#loader");

const btnSearch = document.querySelector("#btn-search");
const btnClear = document.querySelector("#btn-clear");

const closeButton = document.querySelector("#close-message")

let pokemonId = 1;

// Validate Name Number Input
inputNameNumber.addEventListener("keypress", (e)=>{
    
    const key = String.fromCharCode(e.which);
});

//Get Pokemon event
inputNameNumber.addEventListener("keypress",(e) => {

    const inputValue = e.target.value;
});

//Get customer Pokemon from API
const getPokemon = async (pokemon) => {

    toggleLoader();
    
    inputNameNumber.blur();

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const response = await fetch(apiUrl);

    //Show error and reset input

    if (response.status === 404){
        inputNameNumber.value ="";
        toggleLoader();
        toggleMessage("Texto inválido, tente novamente.")
        return;
    }

    const data = await response.json();

    console.log(data);

    imgSpace.setAttribute("src", data.sprites.other["official-artwork"].front_default);

     pokemonId = data.id;

     inputNameNumber.value = data.name;
    
    toggleLoader();


};

//Show or ride loader
const toggleLoader = () => {
    fadeElement.classList.toggle("hide");
    LoaderElement.classList.toggle("hide");
};

//Search button
btnSearch.addEventListener("click", function(){

    const valor = inputNameNumber.value;

    getPokemon(valor);     
});

//Clear button
btnClear.addEventListener("click", function(){

    const valor = inputNameNumber.value = "";               
} );

//Show or hide message
const toggleMessage = (msg) =>{

    const messageElement = document.querySelector("#message");

    const messageElementText = document.querySelector("#message p");

    messageElementText.innerText = msg;

    fadeElement.classList.toggle("hide");
    messageElement.classList.toggle("hide");
}

//Close message modal
closeButton.addEventListener("click", () => toggleMessage()); 

//Previous and next buttons
const startSearch = () =>{
    buttonOne.disabled = (pokemonId <= 1); true || false
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





