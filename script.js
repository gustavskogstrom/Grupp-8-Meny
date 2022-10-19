const meat = document.getElementById("meat"); 
const fish = document.getElementById("fish");
const veg = document.getElementById("veg");

/*buttons*/

const mainMeat = document.querySelector(".köttBox");
const mainFishs = document.querySelector(".fiskBox");
const mainVegs = document.querySelector(".vegetariskBox");
/**/ 

meat.addEventListener("click", function () {

    mainMeat.classList.add("boxOne");
    mainFishs.classList.add("boxOne");
    mainVegs.classList.add("boxOne");

    
    mainMeat.classList.remove("boxTwo");
    mainFishs.classList.remove("boxTwo");
    mainVegs.classList.remove("boxTwo");

    mainMeat.classList.remove("boxThree");
    mainFishs.classList.remove("boxThree");
    mainVegs.classList.remove("boxThree");
});



fish.addEventListener("click", function () {

    mainMeat.classList.add("boxTwo");
    mainFishs.classList.add("boxTwo");
    mainVegs.classList.add("boxTwo");

    mainMeat.classList.remove("boxOne");
    mainFishs.classList.remove("boxOne");
    mainVegs.classList.remove("boxOne");

    mainMeat.classList.remove("boxThree");
    mainFishs.classList.remove("boxThree");
    mainVegs.classList.remove("boxThree");

});


veg.addEventListener("click", function () {
    
    mainMeat.classList.add("boxThree");
    mainFishs.classList.add("boxThree");
    mainVegs.classList.add("boxThree");

    mainMeat.classList.remove("boxTwo");
    mainFishs.classList.remove("boxTwo");
    mainVegs.classList.remove("boxTwo");

    mainMeat.classList.remove("boxOne");
    mainFishs.classList.remove("boxOne");
    mainVegs.classList.remove("boxOne");

});
