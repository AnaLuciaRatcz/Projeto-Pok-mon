const inputImg = document.querySelector("#input-img");
const inputNameNumber = document.querySelector("#input-name-number");
const buttonOne = document.querySelector("#button-1");
const buttonTwo = document.querySelector("#button-2");

// Validate Name Number Input
inputNameNumber.addEventListener("keypress", (e)=>{
    const regex = /^[a-zA-Z0-9]*$/;
    const key = String.fromCharCode(e.which);

    //Allow only letters and numbers
if (!regex.test(key)){
    e.preventDefault();
    return;
}
});

//Get Pokemon event
inputNameNumber.addEventListener("keypress",(e) => {
    const inputValue = e.target.value;

    //check if we have correct length
    if(inputValue.length === 7){
        getPokemon(inputValue);
    }
});

//Get customer Pokemon from API
const getPokemon = async (pokemon) => {
    
    inputNameNumber.blur();

    const apiUrl = `https://pokeapi.co/${"name"}/json/`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    console.log(data);
};



