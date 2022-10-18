const rätter = [
    { Rätt: "Fläskfiléplanka", category: "Kött", pris: 149, ingredienser: ["Duchesse mos", "rödvinssky", "bearnaise", "stekta grönsaker"] },
    { Rätt: "Biff Rydberg", category: "Kött", pris: 175, ingredienser: ["Tärnad oxfilé", "potatis och gullök", "dijonsenapskräm", "rå äggula"] },
    { Rätt: "Spicy Cheeseburger", category: "Kött", pris: 155, ingredienser: ["180 gram högrevsburgare med sallad", "tomat", "picklade rödlök", "cheddarost med jalapenos", "barbecuesås i briochebröd", "pommes och rökig ranch-aioli"] },
    { Rätt: "Halloumi burgare", category: "Vegetarisk", pris: 155, ingredienser: ["Sallad", "tomat", "rödlök", "guacamole", "brochebröd", "pommes och aioli"] },
    { Rätt: "Fish n Chips", category: "Fisk", pris: 149, ingredienser: ["Beer-batter", "panerad torskrygg", "dill-aioli", "halstrad citron", "pommes"] },
    { Rätt: "Husets schnitzel", category: "Kött", pris: 175, ingredienser: ["200 gram välbankad schnitzel", "*Borås största*", "citron", "kapris", "anjovis", "kryddsmör", "rödvinssky", "stekt potatis"] },
    { Rätt: "Caesarsallad halv", category: "Kött", pris: 85, ingredienser: ["Varm kyckling", "bacon", "krutonger", "parmesan", "caesardressing"] },
    { Rätt: "Caesarsallad hel", category: "Kött", pris: 139, ingredienser: ["Varm kyckling", "bacon", "krutonger", "parmesan", "caesardressing"] },
    { Rätt: "Laxsallad med Quinoa", category: "Fisk", pris: 159, ingredienser: ["Grillad lax", "quinoa", "cocktailtomater", "blandsallad", "morot julienne", "rödlök", "vinägrett"] },
    { Rätt: "Krämig kycklingpasta", category: "Kött", pris: 169, ingredienser: ["Soltrokade tomater", "basilika", "grönsaker", "parmesan"] },
    { Rätt: "Musslor al cava halv", category: "Fisk", pris: 109, ingredienser: ["Ångkokta musslor i en krämig sås gjord på cava", "cream fraiche", "jalapenos", "pommes", "aioli"] },
    { Rätt: "Musslor al cava hel", category: "Fisk", pris: 189, ingredienser: ["Ångkokta musslor i en krämig sås gjord på cava", "cream fraiche", "jalapenos", "pommes", "aioli"] },
    { Rätt: "Grillad oxfile", category: "Kött", pris: 259, ingredienser: ["200 gram oxfile", "rödvinssås", "frästa grönsaker", "serveras med potatisgratäng", "(går att få med pommes och beanaise)"] }
];
//billigast först, detta syns änsålänge endast i consolen, samma med dyrast först
/*const sortedRätter = rätter.sort((a, b) => (a.pris < b.pris ? 1 :
    -1));
    console.log(sortedRätter);*/

//dyraste först
const kott = document.querySelector(".box2");
const pris = document.getElementById("sortering");
pris.addEventListener("change", e => {
    //tömmer html när man sorterar
    kott.innerHTML = "";
    //får tillbaka en sorterad array med rätter
    const sortedMeals = sortering(e.target.value);
    //kastar in värdet i webbläsare
    listMeals(sortedMeals);
})
//funktionen under körs ovanför
const sortering = (option) => {
    //filter ny array, 
    if (option === "ascending") {
        return rätter.filter(x => x.category === "Kött").sort((a, b) => (a.pris > b.pris ? 1 :
            -1));
    }
    return rätter.filter(x => x.category === "Kött").sort((a, b) => (a.pris < b.pris ? 1 :
        -1));
}
//listar det som visas
const listMeals = (arr) => {
    // x deklarers och används under
    arr.forEach((x,) => {
        //skapat nya divar som sedan används lite längre ner
        const div = document.createElement("div");
        const rätt = document.createElement("div");
        const pris = document.createElement("span");
        //på diven finns klasslista, lägga till med add
        div.classList.add("meal");
        //x är representerat i varje objekt, skriver ut Rubrik, pris, ingredienser
        rätt.textContent = x.Rätt;
        pris.textContent = " " + x.pris;

        div.appendChild(rätt);
        rätt.appendChild(pris);
        //x är mina rätt objekt
        const ingrediensWrap = document.createElement("div");
        ingrediensWrap.classList.add("ingrediens");

        x.ingredienser.forEach(a => {
            //elementet span används för att manipulera utseendet på texten
            const ingred = document.createElement("span");
            ingred.textContent = a + ", ";
            ingrediensWrap.appendChild(ingred);
        })
        //appenchild lägger till ett element som det sista barnet till ett förälder-element
        div.appendChild(ingrediensWrap);
        kott.appendChild(div);
    })
}
//tar man bort detta har man en tom sida fram tills man väljer något av fallande/stigande
listMeals(rätter);

