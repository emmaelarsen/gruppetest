/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

document.write("<h1>Hej verden</h1>");

/** 
*Javascripets byggeklodser 
**/

//gammeldags måde at skrive var på (globalt tilgængelig)
var magi = "Hokus pokus filiokus filihankat!";
var markup = "<strong>";
var markupX = "</strong>";

//mere moderne måde at skrive var på - kun tilgængelig inde i funktion - sikkerhed så folk ikke bare kan læse dine variabler

let citat = ' "Jylland mellem tvende have." ';

// Hvis en værdi ikke ændres
const navn = "<br>H.C. Andersen (1805-1875)";

document.write(markup + citat + markupX + navn);

// JS kan også regne - tal skal der ikke " omkring, når man skal regne 
let a = 2;
let b = 777;
let c = a * b;
console.log(c);

let d = c + 333;
console.log(d);

//data typer: number, string, objekter

//liste

var cars = [
    "Saab",
    "Volvo",
    "BMW",
    "Citröen",
    "Tesla",
    "Nissan",
    "Opel",
];

let husk = [
    "ost",
    "mælk",
    "smør",
];

//korte kodelinjer er lettere at forstå...
document.write (
    "<p>" + 
    husk [0] + 
    "</p>"
);


// LOOP ...

/**
for (
let i = 0;  -------> variabel
i<3; --------------> betingelse som stopper loopet når det er nået
i++) --------------> tæller, ++ lægger en til værdien af i
**/


for (let i = 0; i< cars.length; i++){
   document.write ("<li>" + cars[i] + "</li>" );
}

// Min egen liste

for (let i = 0; i< husk.length; i++){
   document.write ("<li class='mad'>" + husk[i] + "</li>" );
}


/**
* Document Objekt Modellen 

**/


// tilføj html

//var element = document.getElementById("minAside");
//element.innerHTML = "<h1 class='mad'>Her er en overskrift</h1>";

/*
let galleri = document.getElementById("minAside");
galleri.innerHTML="fnjfndjgjkren";
galleri.style.color="#fff";


var kort = [
"../images/helloween.jpg",
    
"../images/greenman.jpg",
    
"../images/marselis.jpg",
    
];



// loope listen ud

for (let n=0; n < kort.length; n++) {
    console.log ("<img src='" + kort[n] + "'>");
    galleri.innerHTML += "<img src='" + kort [n] + "'>";
    
}


// funktioner - kan regne nogle tal ud for os

function regnDenUd(nero, caecar) {
  return nero * caecar;   // The function returns the product of p1 and p2
}

console.log(regnDenUd(666 , 777));

*/

//Billede zoom 

// get the click on the div and fire off animaition
document.getElementById("zoom").onclick = function() {
    console.log('nogen klikker på mig');
  addAnimation();
};

/* now the background will move */
function addAnimation() {
  // moveIt is a css class
  // toggle: noget skifter fra én tilstand til en anden og tilbage igen
  document.getElementById("zoom").classList.toggle("moveIt");
}


