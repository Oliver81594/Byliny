var vzor = {
    zaklad:{
        nazov:"",
        latinsky:"",
        strana:""
    },
    opis:{
        popis:"",
        vyskyt:""
    },
    zber:{
        mesiace:["", ""],
        casti:["", ""],
        text:""
    },
    liecba:{
        liecitelstvo:"",
        fandly:"",
    },
    recept:{
        nazov:"",
        ingrediencie:["", ""],
        priprava:""
    },
    upozornenie:{
        x:0,
        text:""
    }
}
var zoznam =   [["Alchemilka obyčajná","b"], ["Archangelika lekárska", "b"], ["Arnika horská", "b"],
                ["Baza čierna","ks"], ["Bazalka pravá", "b"], ["Bedrovník anízový", "b"], ["Bedrovník väčší", "b"], ["Blen čierny", "b"], ["Bolehlav škvrnitý", ""], ["Borievka obyčajná", "s"], ["Borovica lesná", "s"], ["Brečtan popínavý", ""], ["Breza previsnutá", "s"], ["Brusnica čučoriedková", "k"], ["Brusnica obyčajná", "pk"], ["Buk lesný", "s"],
                ["Cesnak cibulový", "b"], ["Cesnak medvedí", "b"], ["Cyklamén purpurový", "b"], ["Čakanka obyčajná", "b"], ["Čemerica čierna", "b"], ["Čerešňa višňová", "ks"], ["Čiernohlávok obyčajný", "b"], 
                ["Ďatelina lúčna", "b"], ["Deväťsil lekársky", "b"], ["Divozel sápovitý", "b"], ["Dráč obyčajný", "k"], ["Drieň obyčajný", "ks"], ["Dub letný", "s"], ["Dula podlhovastá", "s"], ["Durman obyčajný", "b"], ["Dúška materina", "pk"],
                ["Fazuľa šarlátová", ""], ["Fenikel obyčajný", "b"], ["Fialka trojfarebná", "b"], 
                ["Hadovník väčši", "b"], ["Hloh obyčajný",""], ["Hluchavka biela", "b"], ["Horec žltý", "b"], ["Hrach siaty", ""], ["Chmeľ obyčajný", "b"], ["Chren dedinský", "b"],
                ["Ihlica tŕnitá", "pk"], ["Imelo biele", "k"], 
                ["Jablčník obyčajný", "b"], ["Jahoda obyčajná", "b"], ["Jarabina vtáčia", "s"], ["Jastrabina lekárska", ""], ["Javor mliečny", "s"], ["Jedľa biela", "s"], ["Jelša lepkavá", "ks"], 
                ["Kapsička pastierska", "b"], ["Karbinec európsky", "b"], ["Komonica lekárska", "b"], ["Konopa siata", "b"], ["Konvalinka vonavá", "b"], ["Kôpor voňavý", "b"], ["Koriander siaty", "b"], ["Kosatec nemecký", "b"], ["Kostihoj lekársky", "b"], ["Kotvičník zemný", "b"], ["Krasovlas bezbyľový", "b"], ["Krušina jelšová", "k"], ["Krvavec lekársky", "b"], ["Kukurica siata", ""], ["Kýchavica biela", "b"],
                ["Ľan siaty", "b"], ["Lastovičník väčší", "b"], ["Lekno biele", "b"], ["Levanduľa úzkolistá", "pk"], ["Lieska obyčajná", "ks"], ["Ligurček lekársky", "b"], ["Lipa malolistá", "s"], ["Lipkavec marinkový", "b"], ["Lopúch väčší", "b"], ["Ľubovník bodkovaný", "b"], ["Ľuľkovec zlomocný", "b"], ["Ľuľok sladkohorký", "pk"], ["Lykovec jedovatý", "k"],
                ["Machovka čerešňová", "b"], ["Mak siaty", "b"], ["Mak vlčí", "b"], ["Marena farbiarska", "b"], ["Mäta", "b"], ["Medovka lekárska", "b"],["Moruša čierna", "s"], ["Mrkva obyčajná", "b"],
                ["Náprstník červený", "b"], ["Nátržník husí", "b"], ["Nátržník vzpriamený", "b"], ["Nechtík lekársky", "b"], ["Nevädza poľná", ""],
                ["Oman pravý", "b"], ["Orech kráľovský", "s"], ["Ostružina černicová", "k"], ["Ostružina malinová", "k"], ["Ovos siaty", ""],
                ["Pagaštan konský", "s"], ["Palina abrotská", "pk"], ["Palina pravá", "b"], ["Pamajorán obyčajný", "b"], ["Paštrnák siaty", "b"], ["Pečeňovník trojlaločný", ""], ["Pestrec mariánsky", ""], ["Petržlen záhradný", ""], ["Plavúň obyčajný", "b"], ["Pľúcnik lekársky", "b"], ["Podbeľ liečivý", "b"], ["Pohánka jedlá", "b"], ["Posed biely", ""], ["Potočnica lekárska", "b"], ["Praslička roľná", "b"], ["Pŕhľava dvojdomá", "b"], ["Prvosienka jarná", "b"], ["Púpava", "b"], ["Pupenec roľný", "b"], ["Puškvorec obyčajný", "b"], ["Pyštek obyčajný", "b"],
                ["Rasca lúčna", "b"], ["Rebríček obyčajný", "b"], ["Rozmarín lekársky", "k"], ["Rozpuk jedovatý", "b"], ["Rumanček kamilkový", "b"], ["Ruta voňavá", "pk"], ["Ruža", "k"], ["Ruža sípová", "k"], 
                ["Sedmokráska obyčajná", "b"], ["Senovka grécka", "b"], ["Skorocel kopijovitý", "b"], ["Skorocel väčší", "b"], ["Sladič obyčajný", ""], ["Sladovka hladkoplodá", "b"], ["Slez lesný", "b"], ["Slivka trnková", "k"], ["Smrek obyčajný", "s"], ["Snežienka", "jarná"], ["Srdcovník obyčajný", "b"], ["Stavikrv vtáčí", "b"], ["Šafran siaty", "b"], ["Šalvia lekárska", "pk"], ["Štetka lesná", "b"],
                ["Topoľ čierny", "s"], ["Topoľ osikový", "s"], ["Túžobník brestový", "b"], 
                ["Uhorka siata", "b"], 
                ["Vachta trojlistá", ""], ["Valeriána lekárska", "b"], ["Vavrín vznešený", "ks"], ["Veronika lekárska", "b"], ["Vinič hroznorodý", ""], ["Vratič obyčajný", "b"], ["Vŕba biela", "s"], ["Vres obyčajný", "k"],
                ["Yzop lekársky", "pk"],
                ["Zádušník brečtanovitý", "b"], ["Zeler voňavý", "b"], ["Zemedym lekársky", "b"], ["Zemežlč menšia", "b"], ["Zimozeleň menšia", "b"], ["Zlatobyľ obyčajná", "b"], ["Žindava európska", "b"]];

var register = [
    {
        zaklad:{
            nazov:"Alchemilka obyčajná",
            latinsky:"Alchemilla vulgaris",
            strana:"10"
        },
        opis:{
            popis:"Alchemilka obyčajná je trváca bylina pomerne premenlivého vzhľadu, pretože ide o agregátny druh, ktorý zahŕňa celý rad poddruhov a množstvo krížencov. Rastlina má drevnatý podzemok, z ktorého vyrastajú početné listy a kvitnúce stonky. Listy bývajú na rube a na stopkách chlpaté, na líci sú holé a v ich strede sa značnú časť doobedia často udržiavajú kvapky rosy. Súkvetie sa skladá z drobných žltozelených kvetov. Kvitne od mája do septembra.",
            vyskyt:"Alchemilka sa vyskytuje najmä v miernom podnebnom pásme Európy a západnej ázie, v severnej Afrike a vo východnej časti Severnej Ameriky. U nás rastie veľmi hojne od nížin až po horské oblasti na lúkach a pastvinách, pri prameniskách, vo svetlých vlhších lesoch, popri potokoch a cestách. Najľhšie ju nájdeme na horských lúkach."
        },
        zber:{
            mesiace:["5, ","6, ","7, ","8, ","9"],
            casti:["listy, ", "kvitnúca vňať"],
            text:"Na liečebné účely sa od mája do septembra zbiera kvitnúca vňať a listy. Sušia sa prirodzene v tieni, pri umelom sušení by teplota nemala presiahnuť 40℃. Kvalitná droga si uchováva zelenú farbu a nedrobí sa."
        },
        liecba:{
            liecitelstvo:"Alchemilka je jeden z najlepších prostriedkov na gynekologické problémy. Tlmí nadmerné krvácanie a bolestivosť pri menštruácii. Pitie čaju sa odporúča tehotným ženám ako prevencia potratu a na optimálny vývoj plodu aj an ľahší pôrod. Zmierňuje klimakterické ťažkosti, lieči biely výtok. Zvonka sa používa na výplachy pri gynekologických zápaloch a na hemoroidy, pretože potláča svrbenie slizníc. Pomáha aj pri kŕčových bolestiach svalstva, pri krvácaní z nosa alebo ako kloktadl, vo forme klystíru sa užíva napríklad pri zápale hrubého čreva. Odvar či šťava vytlačená z čerstvej vňate sa používa na umývanie rán, podliatin a vredov.",
            fandly:"Ak si ženy budú umývať lono vodou, v ktorej sa varila alchemilka stále budú mať také malé prsníky, ako keď boli panny. Rovnaký účinok bude mať aj šatka nameočená do tejto vody a priložená na prsníky. Proti padajúcej chorobe(epilepsii) zmiešaj rovnaké množstvo alechemilky a plavúňa, hoď ho na žeravé uhlie a dymťahaj do seba ústami i nosom.",
        },
        recept:{
            nazov:"Odvar z alchemilky",
            ingrediencie:["3 kávové lyžičky pokrájanej suchej vňate alchemilky", "1/4 l vody"],
            priprava:"Vňať zalejeme studenou vodou, uvedieme do varu a odstavíme. Po 15 minútach precedíme a vypijeme. Odporúčaná dávka je jedna šálka dva razy denne. Čaj môžeme pripraviť aj z čerstvej vňate, pijeme ho nesladený. Pri silnej menštruácii sa odporúča piť rovnako pripravenú čajovú zmes z alchemilky a rebríčka v pomere 1:1."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    {
        zaklad:{
            nazov:"Archangelika lekárska",
            latinsky:"Archangelica officinalis",
            strana:"12"
        },
        opis:{
            popis:"Archangelika je dvojročná až viacročná statná bylina, so stonkou často vyskou vyše 2 metre. Stonka je vzpriamená, dutá, červenohnedej farby a rastlina ju vytvára najskôr v druhom roku, niekedy však až po desiatich rokoch alebo ešte neskôr. Má zelenkasté súkvetia - veľké okolíky zložené z 20 až 40 okolíčkov. Kvitne v júli a v auguste a po odkvitnutí odumiera. Plody sú podlhovasté bledožlté dvojnažky. Má repovitý podzemok a väčší počet hnedých koreňov hrubých 1 až 1,5cm.",
            vyskyt:"Archangelika je rozšírená v chladnejších oblastiach Európy a severnej Ázie. Nájdeme ju pozdĺž lesných horských potokov, na čistinách, prameniskách a vlhkých lúkach. Na potreby farmaceutického a potravinárskeho priemyslu sa pestujú vyšľachtené kultivary."
        },
        zber:{
            mesiace:["3, ", "4, ", "8, ", "9, ", "10"],
            casti:["koreň alebo podzemok, ", "plod"],
            text:"Podzemné časti dvojročných rastlín sa vykopávajú na jeseň (september - október), staršie rastliny možno zbierať aj skoro na jar (marec - apríl). Umyté podzemky sa sušia v tieni pri teplote do 35℃, priveľmi hrubé kúsky sa môžu rozpoliť. Sušíme iba sivohnedo alebo červenkasto sfarbené časti. Plody zbierame v auguste a v septembri odrezávaním zrelých okolíkov, po dosušení z nich semená vydrobíme a vytriedime. Vňať (mladé výhonky) zbierame v máji a v júni, sušia sa umelo pri teplote do 40℃."
        },
        liecba:{
            liecitelstvo:"Koreň a plody archangeliky už v stredoveku patrili k povzbudzujúcim prostriedkom na trávenie -  zvyšujú tvorbu žalúdočných šťiav a upokojujú črevá. Archangelika je močopudná a uľahčuje odkašliavanie. Celkovo posilňuje a tonizuje, pomáha pri nervovom vyčerpaní, hystérii a nespavosti, pridáva sa do relaxačných a revitalizujúcich kúpeľov. Vhodná je ako kloktadlo pri zápaloch ústnej dutiny, obklady z odvaru sa používajú pri svalových bolestiach. Obľúbená je aj ako zelené korenie do polievok alebo v cukrárstve, kde sa kandizuu mladé výhonky, využíva sa i pri výrobe žalúdočných likérov. Prášková droga z podzemku býva prísadou do šňupacieho tabaku.",
            fandly:"",
        },
        recept:{
            nazov:"",
            ingrediencie:["", ""],
            priprava:""
        },
        upozornenie:{
            x:1,
            text:"Vo veľkých dávkach môze spočiatku pôsobiť povzbudzujúco, ale neskôr ochromuje centrálnu nervovú sústavu. U citlivých osôb vyvoláva čerstva šťavaprecitlivenosť na slnko, alergické vyrážky a opuchy."
        }
    }
];