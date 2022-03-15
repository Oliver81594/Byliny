var index = document.getElementById("index");
var menu = document.getElementsByClassName("menu");
var check = [1,1,1,1,1,1]; //poradie: bylina, ker, strom, poleker, ker aj strom(kstrom), ostatné
var dlzka = zoznam.length;

var pocetB = 0, 
    pocetK = 0, 
    pocetS = 0, 
    pocetPk = 0, 
    pocetKs = 0, 
    pocetO = 0;

function priradID(){
    var id = this.id;
    localStorage.setItem("PrisielSomZ", id);
}

function zmaz() {
    while(index.firstChild) {
        index.removeChild(index.firstChild);
    }
}

function pridajEl(klas){   //funkcia prida element s nazvom rastliny - klas(class) - pridava dany klas danemu typu rastliny
        var meno = document.createElement("a");
        meno.className = "list-group-item list-group-item-action";
        meno.className = "list-group-item list-group-item-action " + klas;
        meno.href = "Bylina/bylina.php";
        meno.textContent = zoznam[i][0];
        meno.setAttribute("id", zoznam[i][0]);
        meno.addEventListener("click", priradID);
        index.append(meno);
}

function vypis(druhy){
    for (i = 0; i < dlzka; i++){
        if (zoznam[i][1] == "b" && druhy[0] == 1){
            pridajEl("bylina");
            pocetB ++;
        }
        else{
            if (zoznam[i][1] == "k" && druhy[1] == 1){
                pridajEl("ker");
                pocetK ++;
            }
            else{
                if (zoznam[i][1] == "s" && druhy[2] == 1){
                    pridajEl("strom");
                    pocetS ++;
                }
                else{
                    if (zoznam[i][1] == "pk" && druhy[3] == 1){
                        pridajEl("poloker");
                        pocetPk ++;
                    }
                    else{
                        if (zoznam[i][1] == "ks" && druhy[4] == 1){
                            pridajEl("kstrom");
                            pocetKs ++;
                        }
                        else{
                            if (zoznam[i][1] == "o" && druhy[5] == 1){
                                pridajEl("");
                                pocetO ++;
                            }
                        }
                    }
                }
            }
        }
    }
}

function zmena(){
    if(document.getElementById("bylinaCheck").checked == true){
        check[0] = 1;
    }
    else{ check[0] = 0;}

    if(document.getElementById("kerCheck").checked == true){
        check[1] = 1;
    }
    else{ check[1] = 0;}
    
    if(document.getElementById("stromCheck").checked == true){
        check[2] = 1;
    }
    else{ check[2] = 0;}
    
    if(document.getElementById("polokerCheck").checked == true){
        check[3] = 1;
    }
    else{ check[3] = 0;}
    
    if(document.getElementById("kstromCheck").checked == true){
        check[4] = 1;
    }
    else{ check[4] = 0;}
    
    if(document.getElementById("ostatneCheck").checked == true){
        check[5] = 1;
    }
    else{ check[5] = 0;}
    
    zmaz();
    
    vypis(check);
}



vypis(check);
check = [0,0,0,0];

menu[0].addEventListener("click", zmena);
menu[1].addEventListener("click", zmena);
