cislo = Number(localStorage.getItem("PrisielSomZ"));
var bylina = register[cislo];

var nadpis = document.getElementById("nadpis");
var nazov = document.getElementById("popis.nadpis");
var popis = document.getElementById("popis.text");
var vyskyt = document.getElementById("vyskyt");
var mesiace = document.getElementById("mesiace");
var casti = document.getElementById("casti");
var zberText = document.getElementById("zber.text");
var liecitelstvo = document.getElementById("liecitelstvo");
var fandly = document.getElementById("fandly");
var recept = document.getElementById("recept");
var ingrediencie = document.getElementById("ingrediencie");
var receptNazov = document.getElementById("recept.nazov");
nadpis.textContent = bylina.zaklad.nazov;
nazov.textContent = bylina.zaklad.latinsky;
popis.textContent = bylina.opis.popis;
vyskyt.textContent = bylina.opis.vyskyt;
zberText.textContent = bylina.zber.text;
liecitelstvo.textContent = bylina.liecba.liecitelstvo;
fandly.textContent = bylina.liecba.fandly;
receptNazov.textContent = bylina.recept.nazov;
recept.textContent = bylina.recept.priprava;


for(i = 0; i < bylina.zber.mesiace.length; i++){
    mesiac = document.createElement("i");
    mesiac.textContent = bylina.zber.mesiace[i];
    mesiace.append(mesiac);
}

for(i = 0; i < bylina.zber.casti.length; i++){
    cast = document.createElement("i");
    cast.textContent = bylina.zber.casti[i];
    casti.append(cast);
}

for(i = 0; i < bylina.recept.ingrediencie.length; i++){
    ingrediencia = document.createElement("i");
    ingrediencia.textContent = bylina.recept.ingrediencie[i];
    ingrediencie.append(ingrediencia);
}

if (bylina.upozornenie.x == 1){
    console.log("p");
}