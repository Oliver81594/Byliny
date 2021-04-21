var register = document.getElementById("register");


function priradID(){
    id = this.id;
    localStorage.setItem("PrisielSomZ", id);
}



for (i = 0; i < zoznam.length; i++){
    meno = document.createElement("a");
    meno.className = "list-group-item list-group-item-action";
    if (zoznam[i][1] == "b"){
        meno.className = "list-group-item list-group-item-action bylina";
    }
    if (zoznam[i][1] == "s"){
        meno.className = "list-group-item list-group-item-action strom";
    }
    if (zoznam[i][1] == "k"){
        meno.className = "list-group-item list-group-item-action ker";
    }
    meno.href = "Bylina/bylina.html";
    meno.textContent = zoznam[i][0];
    meno.setAttribute("id", i);
    meno.addEventListener("click", priradID);
    register.append(meno);
}

