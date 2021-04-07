bylina = localStorage.getItem("PrisielSomZ");
console.log(bylina);

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
nadpis.textContent = bylina;
nazov.textContent = alchemilka.zaklad.latinsky;
popis.textContent = alchemilka.opis.popis;
vyskyt.textContent = alchemilka.opis.vyskyt;
zberText.textContent = alchemilka.zber.text;
liecitelstvo.textContent = alchemilka.liecba.liecitelstvo;
fandly.textContent = alchemilka.liecba.fandly;
receptNazov.textContent = alchemilka.recept.nazov;
recept.textContent = alchemilka.recept.priprava;


for(i = 0; i < alchemilka.zber.mesiace.length; i++){
    mesiac = document.createElement("i");
    mesiac.textContent = alchemilka.zber.mesiace[i];
    mesiace.append(mesiac);
}

for(i = 0; i < alchemilka.zber.casti.length; i++){
    cast = document.createElement("i");
    cast.textContent = alchemilka.zber.casti[i];
    casti.append(cast);
}

for(i = 0; i < alchemilka.recept.ingrediencie.length; i++){
    ingrediencia = document.createElement("i");
    ingrediencia.textContent = alchemilka.recept.ingrediencie[i];
    ingrediencie.append(ingrediencia);
}