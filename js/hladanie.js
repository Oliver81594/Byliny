var vyhladavac = document.getElementById("vyhladavac");
var kluc; //slovo, ktore je hladane
var vysledky = [];
var cast_textu_kde_hladame;

function zobraz_vysledky(){
    zmaz();
    for (v = 0; v < vysledky.length; v++){
        for (i = 0; i < zoznam.length; i++){
            if (zoznam[i][0] == vysledky[v]){
                switch(zoznam[i][1]){
                    case "b":
                        pridajEl("bylina");
                        break;
                    case "k":
                        pridajEl("ker");
                        break;
                    case "s":
                        pridajEl("strom");
                        break;
                    case "ks":
                        pridajEl("kstrom");
                        break;
                    case "pk":
                        pridajEl("poloker");
                        break;
                    case "o":
                        pridajEl("ostatne");
                }
            }
        }
    }
}

function hladaj(){                   //funkcia hladaj prejde vsetky byliny v registri a vsetky texty ku kazdej byline. Ak najde tak vypluje nazov byliny
    for(i = 0; i < register.length; i++){
        if(register[i].zaklad.nazov.search(kluc) != -1  || register[i].zaklad.latinsky.search(kluc) != -1  || register[i].opis.popis.search(kluc) != -1  || register[i].opis.vyskyt.search(kluc) != -1  || register[i].zber.text.search(kluc) != -1  || register[i].liecba.liecitelstvo.search(kluc) != -1  || register[i].liecba.fandly.search(kluc) != -1  || register[i].recept.nazov.search(kluc) != -1 || register[i].recept.priprava.search(kluc) != -1  || register[i].upozornenie.text.search(kluc) != -1){
            vysledky.push(register[i].zaklad.nazov);
        }
        if(register[i].zber.mesiace.includes(vyhladavac.value) == true || register[i].zber.casti.includes(vyhladavac.value) == true || register[i].recept.ingrediencie.includes(vyhladavac.value) == true){
            if (vysledky.includes(register[i].zaklad.nazov) == false){ // aby sa nestalo, ze sa dvakrat zapise rovnaka bylina - raz z textov a raz z polí
                vysledky.push(register[i].zaklad.nazov);
            }
        }
    }
    zobraz_vysledky();
}

function spracuj(event){             //funkcia spracuj caka kedy uzivatel stlaci enter, nasledne spusti funckiu hladaj
    if(event.key == "Enter"){
        string = vyhladavac.value.replace(/[\n\r]/g, ''); //odstrani nove riadky
        kluc = new RegExp(string, "i");       //RegExp je funkcia, ktora zmeni string na regular expression. Icko znamena, ze nezalezi ci je prve pismeno velke alebo male
        console.log(kluc);
        hladaj();
        vysledky = [];
    }
}

vyhladavac.addEventListener("keydown", spracuj);