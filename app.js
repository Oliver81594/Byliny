var alchemilka = {privlastok:"obyčajná", latinsky:"Alchemilla vulgaris", zber:[1,2,3], časti:["listy","kvitnúca vňať"], strana:10}
var archangelika = {privlastok:"lekárska", latinsky:"Archangelica officinalis", zber:[3,5,8,9,10], časti:["koreň, podzemok","plod"], strana:12}
var arnika = {privlastok:"horská", latinsky:"Arnica montana", zber:[6,7,8,9,10], časti:["koreň, podzemok","kvet"], strana:14}
var baza = {privlastok:"čierna", latinsky:"Sambucus nigra", zber:[4,5,6,7,8,9], časti:["kvet","listy, plod"], strana:16}
var bazalka = {privlastok:"pravá", latinsky:"Ocimum basilicum", zber:[6,7,8,9], časti:["vňať"], strana:18}
var bedrovnikAnizovy = {privlastok:"anízový", latinsky:"Pimpinella anisum", zber:[8,9], časti:["plod"], strana:20}
var bedrovnikVacsi = {privlastok:"väčší", latinsky:"Pimpinella major", zber:[3,4], časti:["koreň, podzemok"], strana:22}


var kvet = {
    zaklad:{
        privlastok:"",
        latinsky:"",
        strana:""
    },
    opis:{
        popis:"",
        vyskyt:""
    },
    zber:{
        mesiace:"",
        časť:"",
        text:""
    },
    liecba:{
        liecitelstvo:"",
        fandly:"",
        recept:""
    }
}

var register = document.getElementById("register")
var zoznam =   ["Alchemilka obyčajná", "Archangelika lekárska", "Arnika horská",
                "Baza čierna", "Bazalka pravá", "Bedrovník väčší", "Blen čierny", "Bolehlav škvrnitý", "Borievka obyčajná", "Borovica lesná", "Brečtan popínavý", "Breza previsnutá", "Brusnica čučoriedková", "Brusnica obyčajná", "Buk lesný",
                "Cesnak cibulový", "Cesnak medvedí", "Cyklamén purpurový", "Čakanka obyčajná", "Čemerica čierna", "Čerešňa višňová", "Čiernohlávok obyčajný", 
                "Ďatelina lúčna", "Deväťsil lekársky", "Divozel sápovitý", "Dráč obyčajný", "Drieň obyčajný", "Dub letný", "Dula podlhovastá", "Durman obyčajný", "Dúška materina",
                "Fazuľa šarlátová", "Fenikel obyčajný", "Fialka trojfarebná", 
                "Hadovník väčši", "Hloh obycajný", "Hluchavka biela", "Horec žltý", "Hrach siaty", "Chmeľ obyčajný", "Chren dedinský",
                "Ihlica tŕnitá", "Imelo biele", 
                "Jablčník obyčajný", "Jahoda obyčajná", "Jarabina vtáčia", "Jastrabina lekárska", "Javor mliečny", "Jedľa biela", "Jelša lepkavá", 
                "Kapsička pastierska", "Karbinec európsky", "Komonica lekárska", "Konopa siata", "Konvalinka vonavá", "Kôpor voňavý", "Koriander siaty", "Kosatec nemecký", "Kostihoj lekársky", "Kotvičník zemný", "Krasovlas bezbyľový", "Krušina jelšová", "Krvavec lekársky", "Kukurica siata", "Kýchavica biela",
                "Ľan siaty", "Lastovičník väčší", "Lekno biele", "Levanduľa úzkolistá", "Lieska obyčajná", "Ligurček lekársky", "Lipa malolistá", "Lipkavec marinkový", "Lopúch väčší", "Ľubovník bodkovaný", "Ľuľkovec zlomocný", "Ľuľok sladkohorký", "Lykovec jedovatý",
                ""]


function priradID(){
    id = this.id
    localStorage.setItem("PrisielSomZ", id)
}

for (i = 0; i < zoznam.length; i++){
    meno = document.createElement("a")
    meno.className = "list-group-item list-group-item-action"
    meno.href = "Bylina/bylina.html"
    meno.textContent = zoznam[i]
    meno.setAttribute("id", zoznam[i])
    meno.addEventListener("click", priradID)
    register.append(meno)
}

