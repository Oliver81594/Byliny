var prisielSomZ = localStorage.getItem("PrisielSomZ");
var bylina;
for (var i = 0; i < register.length; i++){
    if(prisielSomZ == register[i].zaklad.nazov){
        bylina = register[i];
    }
}


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
var upozornenieText = document.getElementById("upozornenieText");
var upozornenieDiv = document.getElementById("upozornenieDiv");
nadpis.textContent = bylina.zaklad.nazov;
nazov.textContent = bylina.zaklad.latinsky;
popis.textContent = bylina.opis.popis;
vyskyt.textContent = bylina.opis.vyskyt;
zberText.textContent = bylina.zber.text;
liecitelstvo.textContent = bylina.liecba.liecitelstvo;
fandly.textContent = bylina.liecba.fandly;
receptNazov.textContent = bylina.recept.nazov;
recept.textContent = bylina.recept.priprava;
upozornenieText.textContent = bylina.upozornenie.text;

for(var i = 0; i < bylina.zber.mesiace.length; i++){
    var mesiac = document.createElement("i");
    if (i > 0){
        mesiac.textContent = ", " + bylina.zber.mesiace[i];
    }
    else{
        mesiace.textContent = bylina.zber.mesiace[i];
    }
    mesiace.append(mesiac);
}

for(var i = 0; i < bylina.zber.casti.length; i++){
    var cast = document.createElement("i");
    if (i > 0){
        cast.textContent = ", " + bylina.zber.casti[i];
    }
    else{
        cast.textContent = bylina.zber.casti[i];
    }
    casti.append(cast);
}

for(var i = 0; i < bylina.recept.ingrediencie.length; i++){
    var ingrediencia = document.createElement("i");
    ingrediencia.textContent = bylina.recept.ingrediencie[i];
    ingrediencie.append(ingrediencia);
}

if(bylina.upozornenie.x == 1){
    upozornenieDiv.style.opacity = 1;
}