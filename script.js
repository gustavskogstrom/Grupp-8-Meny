const rätter = [
    { Rätt: "Fläskfiléplanka", category: "Kött", pris: 149 },
    { Rätt: "Biff Rydberg", category: "Kött", pris: 175 },
    { Rätt: "Spicy Cheeseburger", category: "Kött", pris: 155 },
    { Rätt: "Halloumi burgare", category: "Vegetarisk", pris: 155 },
    { Rätt: "Fish n Chips", category: "Fisk", pris: 149 },
    { Rätt: "Husets schnitzel", category: "Kött", pris: 175 },
    { Rätt: "Caesarsallad halv", category: "Kött", pris: 85 },
    { Rätt: "Caesarsallad hel", category: "Kött", pris: 139 },
    { Rätt: "Laxsallad med Quinoa", category: "Fisk", pris: 159 },
    { Rätt: "Krämig kycklingpasta", category: "Kött", pris: 169 },
    { Rätt: "Musslor al cava halv", category: "Fisk", pris: 109 },
    { Rätt: "Musslor al cava hel", category: "Fisk", pris: 189 },
    { Rätt: "Grillad oxfile", category: "Kött", pris: 259 }
];
//billigast först, detta syns änsålänge endast i consolen, samma med dyrast först
/*const sortedRätter = rätter.sort((a, b) => (a.pris < b.pris ? 1 :
    -1));
    console.log(sortedRätter);*/
//dyraste först
const sortedRätter = rätter.sort((a, b) => (a.pris < b.pris ? 1 :
    -1));

    console
//console.log(sortedRätter);

//const allergi = document.getElementsByClassName("form-check.value");
//här försök till att filtrera bort det man är allergisk mot
/*
const sum = rätter.filter(rätter => rätter.category.charAt(0) === 'K').map(rätter => rätter.Kött).reduce((accumulator, value) => accumulator + value, 0);
//här försöker jag sortera ut rätter
function myFunction() {
    let rätt = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "Du valde: " + rätt;
}*/

/*
const val = document.getElementsByClassName("val");
const kött = document.getElementsByClassName("kött");
const fisk = document.getElementsByClassName("fisk");
const vegetarisk = document.getElementsByClassName("vegetarisk");




if (kött > fisk && kött > vegetarisk) {
    document.getElementById("svar").innerHTML = "kött";
}*/

//dessa 2 funktioner har med sidmeny att göra, öppna och stänga funktionen 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




//dessa har med sidmenyn att göra, gör så att man öppnar de rätta sidorna vid tryck
const rätter1 = document.querySelector(".rätter");
const mySidenav = document.querySelector("#mySidenav");
const kött = document.querySelector(".kött");

rätter1.addEventListener("click", e => {
    console.log("rätter1")
})

mySidenav.addEventListener("click", e => {
    console.log(e)
})

kött.addEventListener("click", e => {
    console.log(e)
})