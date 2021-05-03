var vyhladavac = document.getElementById("vyhladavac");
var kluc; //slovo, ktore je hladane
var vysledky = [];
var cast_textu_kde_hladame;

function hladaj(){                   //funkcia hladaj prejde vsetky byliny v registri a vsetky texty ku kazdej byline. Ak najde tak vypluje nazov byliny
    for(i = 0; i < register.length; i++){
        if(register[i].zaklad.nazov.search(kluc) != -1  || register[i].zaklad.latinsky.search(kluc) != -1  || register[i].opis.popis.search(kluc) != -1  || register[i].opis.vyskyt.search(kluc) != -1  || register[i].zber.text.search(kluc) != -1  || register[i].liecba.liecitelstvo.search(kluc) != -1  || register[i].liecba.fandly.search(kluc) != -1  || register[i].recept.nazov.search(kluc) != -1 || register[i].recept.priprava.search(kluc) != -1  || register[i].upozornenie.text.search(kluc) != -1){
            vysledky.push(register[i].zaklad.nazov);
        }
        for(a = 0; a < register[i].zber.mesiace; a++){              //for cyklus tu je preto, ze metodu search mozem pouzit len na string, nie na pole => musim prezerat kazdy string v poli
            if(register[i].zber.mesiace[a].search(kluc) != -1){
                vysledky.push(register[i].zaklad.nazov);
            }
        }
        for(b = 0; b < register[i].zber.casti; b++){
            if(register[i].zber.casti[b].search(kluc) != -1){
                vysledky.push(register[i].zaklad.nazov);
            }
        }
        for(c = 0; c < register[i].recept.ingrediencie; c++){
            if(register[i].recept.ingrediencie[c].search(kluc) != -1){
                vysledky.push(register[i].zaklad.nazov);
            }
        }
    }
    console.log(vysledky);
}

function spracuj(event){             //funkcia spracuj caka kedy uzivatel stlaci enter, nasledne spusti funckiu hladaj
    if(event.key == "Enter"){
        kluc = new RegExp(vyhladavac.value, "i");       //RegExp je funkcia, ktora zmeni string na regular expression. Icko znamena, ze nezalezi ci je prve pismeno velke alebo male
        hladaj();
    }
}

vyhladavac.addEventListener("keydown", spracuj);