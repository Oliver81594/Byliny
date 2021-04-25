var register = document.getElementById("register");
var menu = document.getElementById("menu")
var check = [1,1,1,1,1,1]; //poradie: bylina, ker, strom, poleker, ker aj strom(kstrom), ostatné
var dlzka = zoznam.length;

function priradID(){
    id = this.id;
    localStorage.setItem("PrisielSomZ", id);
}

function zmaz() {
    while (register.firstChild) {
        register.removeChild(register.firstChild);
    }
}

function pridajEl(klas){   //funkcia prida element s nazvom rastliny - klas(class) - pridava dany klas danemu typu rastliny
        meno = document.createElement("a");
        meno.className = "list-group-item list-group-item-action";
        meno.className = "list-group-item list-group-item-action " + klas;
        meno.href = "Bylina/bylina.html";
        meno.textContent = zoznam[i][0];
        meno.setAttribute("id", zoznam[i][0]);
        meno.addEventListener("click", priradID);
        register.append(meno);
}

function vypis(druhy){
    for (i = 0; i < dlzka; i++){
        if (zoznam[i][1] == "b" && druhy[0] == 1){
            pridajEl("bylina");
        }
        else{
            if (zoznam[i][1] == "k" && druhy[1] == 1){
                pridajEl("ker");
            }
            else{
                if (zoznam[i][1] == "s" && druhy[2] == 1){
                    pridajEl("strom");
                }
                else{
                    if (zoznam[i][1] == "pk" && druhy[3] == 1){
                        pridajEl("poloker");
                    }
                    else{
                        if (zoznam[i][1] == "ks" && druhy[4] == 1){
                            pridajEl("kstrom");
                        }
                        else{
                            if (zoznam[i][1] == "" && druhy[5] == 1){
                                pridajEl("");
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

menu.addEventListener("click", zmena);