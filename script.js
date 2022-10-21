
const rätter = [
    { Rätt: "Fläskfiléplanka", category: "Kött", pris: 149, ingredienser: ["Duchesse mos", "rödvinssky", "bearnaise", "stekta grönsaker"], allergi: ["potatis", "ägg", "grönsaker"] },
    { Rätt: "Biff Rydberg", category: "Kött", pris: 175, ingredienser: ["Tärnad oxfilé", "potatis och gullök", "dijonsenapskräm", "rå äggula"], allergi: ["potatis", "lök", "ägg"] },
    { Rätt: "Spicy Cheeseburger", category: "Kött", pris: 155, ingredienser: ["180 gram högrevsburgare med sallad", "tomat", "picklade rödlök", "cheddarost med jalapenos", "barbecuesås i briochebröd", "pommes och rökig ranch-aioli"], allergi:["grönsaker", "tomat", "lök", "ost", "gluten", "potatis"] },
    { Rätt: "Halloumi burgare", category: "Vegetarisk", pris: 155, ingredienser: ["Sallad", "tomat", "rödlök", "guacamole", "brochebröd", "pommes och aioli"], allergi: ["grönsaker", "tomat", "lök", "avocado", "gluten", "potatis"] },
    { Rätt: "Fish n Chips", category: "Fisk", pris: 149, ingredienser: ["Beer-batter", "panerad torskrygg", "dill-aioli", "halstrad citron", "pommes"], allergi: ["gluten", "citrus", "potatis"] },
    { Rätt: "Husets schnitzel", category: "Kött", pris: 175, ingredienser: ["200 gram välbankad schnitzel", "*Borås största*", "citron", "kapris", "anjovis", "kryddsmör", "rödvinssky", "stekt potatis"], allergi: ["griskött", "gluten", "Borås", "citron", "kapris", "anjovis", "laktos", "potatis"] },
    { Rätt: "Caesarsallad halv", category: "Kött", pris: 85, ingredienser: ["Varm kyckling", "bacon", "krutonger", "parmesan", "caesardressing"], allergi: ["griskött", "gluten", "laktos"] },
    { Rätt: "Caesarsallad hel", category: "Kött", pris: 139, ingredienser: ["Varm kyckling", "bacon", "krutonger", "parmesan", "caesardressing"], allergi: ["griskött", "gluten", "laktos"] },
    { Rätt: "Laxsallad med Quinoa", category: "Fisk", pris: 159, ingredienser: ["Grillad lax", "quinoa", "cocktailtomater", "blandsallad", "morot julienne", "rödlök", "vinägrett"], allergi: ["tomat", "grönsaker", "lök"] },
    { Rätt: "Krämig kycklingpasta", category: "Kött", pris: 169, ingredienser: ["Soltrokade tomater", "basilika", "grönsaker", "parmesan"], allergi:["tomat", "grönsaker", "laktos"] },
    { Rätt: "Musslor al cava halv", category: "Fisk", pris: 109, ingredienser: ["Ångkokta musslor i en krämig sås gjord på cava", "cream fraiche", "jalapenos", "pommes", "aioli"], allergi: ["laktos", "potatis"] },
    { Rätt: "Musslor al cava hel", category: "Fisk", pris: 189, ingredienser: ["Ångkokta musslor i en krämig sås gjord på cava", "cream fraiche", "jalapenos", "pommes", "aioli"], allergi: ["laktos", "potatis"] },
    { Rätt: "Grillad oxfile", category: "Kött", pris: 259, ingredienser: ["200 gram oxfile", "rödvinssås", "frästa grönsaker", "serveras med potatisgratäng", "(går att få med pommes och beanaise)"], allergi: ["grönsaker", "potatis", "ägg", "laktos"] }
];
//här samlas alla variabler
//hämtar hem variablerna
const pris = document.getElementById("sortering");
const buttons = document.querySelectorAll(".mat");
const kott = document.getElementById("kol1");
//dessa är tomma
let sorter = "";
let foodChoice = "";
//slut på variabler
//tom sträng, blir vad man väljer



//HÄR BÖRJAR KNAPPVAL
//eventlistenere på knappen, e är mitt event det visar vilket typ av event, i detta fall klicket, beror på vad man väljer för event, klick, hoover, change osv
//e.target = elementet som triggas igång, i detta fall är det knappen
buttons.forEach(button => {
    button.addEventListener("click", e => {
        kott.innerHTML = "";
        //e.target = elementet, vill utgå från foodchoice för att få ut rätt maträtt
        foodChoice = e.target.value
        const filtreradArray = sortering();
        //värdet man får när man trycker på knappen skickas in i filtrera rätter
        listMeals(filtreradArray);
    })
})



//skapa loop som loopar igenom mina rätter och skriver ut det
//filtrerar arraylistan
const listMeals = (filtreradArray) => {
    // x deklarers och används under
    console.log(filtreradArray);
    //loopar igenom listan
    filtreradArray.forEach((x,) => {
        //skapat nya divar som sedan används lite längre ner
        const div = document.createElement("div");
        const rätt = document.createElement("h3");
        const pris = document.createElement("span");
        //på diven finns klasslista, lägga till med add
        div.classList.add("meal");
        //x är representerat i varje objekt, skriver ut Rubrik, pris, ingredienser
        rätt.textContent = x.Rätt;
        pris.textContent = " " + x.pris;
        //appenchild lägger till det elementet man vill ha som skickas in i ett annat element
        div.appendChild(rätt);
        rätt.appendChild(pris);
        //x är mina rätt objekt
        const ingrediensWrap = document.createElement("div");
        ingrediensWrap.classList.add("ingrediens");
        //loopar igenom ingredienser för att få ut rätt, ta bort detta och ingredienser faller bort
        x.ingredienser.forEach(a => {
            const ingred = document.createElement("span");
            ingred.textContent = a + ", ";
            ingrediensWrap.appendChild(ingred);
        })
        //appenchild lägger till ett element som det sista barnet till ett förälder-element
        div.appendChild(ingrediensWrap);
        kott.appendChild(div);

    })
}// SLUT PÅ KNAPPVAL 

//HÄR BÖRJAR FALLANDE ELLER STIGANDE PRISER
//sätte eventlist på elementet pris
pris.addEventListener("change", e => {
    //tömmer html när man sorterar
    kott.innerHTML = "";
    //sorterar värdena för att kunna visa det valda
    sorter = e.target.value;
    //får tillbaka en sorterad array med rätter
    const sortedMeals = sortering();
    //kastar in värdet i webbläsare
    listMeals(sortedMeals);
})
//funktionen under körs ovanför
const sortering = () => {
    //filter ny array, fallande eller stigande, kör igenom "foodChoice" vilket är samtliga rätter 
    if (sorter === "ascending") {
        return rätter.filter(x => x.category === foodChoice).sort((a, b) => (a.pris > b.pris ? 1 :
            -1));
    } else if (sorter === "descending") {
        return rätter.filter(x => x.category === foodChoice).sort((a, b) => (a.pris < b.pris ? 1 :
            -1));
    }
    //returnerar den valda categorin och låter användaren välja antgingen fallande eller stigande
    return rätter.filter(x => x.category === foodChoice);
    
    

}



















