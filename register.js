var zoznam =   [["Alchemilka obyčajná","b"], ["Archangelika lekárska", "b"], ["Arnika horská", "b"],
                ["Baza čierna","k"], ["Bazalka pravá", "b"], ["Bedrovník anízový", "b"], ["Bedrovník väčší", "b"], ["Blen čierny", "b"], ["Bolehlav škvrnitý", "b"], ["Borievka obyčajná", "s"], ["Borovica lesná", "s"], ["Brečtan popínavý", ""], ["Breza previsnutá", "s"], ["Brusnica čučoriedková", "k"], ["Brusnica obyčajná", "k"], ["Buk lesný", "s"],
                ["Cesnak cibulový", "b"], ["Cesnak medvedí", "b"], ["Cyklamén purpurový", "b"], ["Čakanka obyčajná", "b"], ["Čemerica čierna", "b"], ["Čerešňa višňová", "s"], ["Čiernohlávok obyčajný", "b"], 
                ["Ďatelina lúčna", "b"], ["Deväťsil lekársky", "b"], ["Divozel sápovitý", "b"], ["Dráč obyčajný", "k"], ["Drieň obyčajný", "s"], ["Dub letný", "s"], ["Dula podlhovastá", "s"], ["Durman obyčajný", "b"], ["Dúška materina", "b"],
                ["Fazuľa šarlátová", ""], ["Fenikel obyčajný", "b"], ["Fialka trojfarebná", "b"], 
                ["Hadovník väčši", "b"], ["Hloh obycajný",""], ["Hluchavka biela", "b"], ["Horec žltý", "b"], ["Hrach siaty", "b"], ["Chmeľ obyčajný", "b"], ["Chren dedinský", "b"],
                ["Ihlica tŕnitá", ""], ["Imelo biele", "k"], 
                ["Jablčník obyčajný", "b"], ["Jahoda obyčajná", "b"], ["Jarabina vtáčia", "s"], ["Jastrabina lekárska", "b"], ["Javor mliečny", "s"], ["Jedľa biela", "s"], ["Jelša lepkavá", "s"], 
                ["Kapsička pastierska", "b"], ["Karbinec európsky", "b"], ["Komonica lekárska", "b"], ["Konopa siata", "b"], ["Konvalinka vonavá", "b"], ["Kôpor voňavý", "b"], ["Koriander siaty", "b"], ["Kosatec nemecký", "b"], ["Kostihoj lekársky", "b"], ["Kotvičník zemný", "b"], ["Krasovlas bezbyľový", "b"], ["Krušina jelšová", "k"], ["Krvavec lekársky", "b"], ["Kukurica siata", ""], ["Kýchavica biela", "b"],
                ["Ľan siaty", "b"], ["Lastovičník väčší", "b"], ["Lekno biele", "b"], ["Levanduľa úzkolistá", ""], ["Lieska obyčajná", ""], ["Ligurček lekársky", "b"], ["Lipa malolistá", "s"], ["Lipkavec marinkový", "b"], ["Lopúch väčší", "b"], ["Ľubovník bodkovaný", "b"], ["Ľuľkovec zlomocný", "b"], ["Ľuľok sladkohorký", ""], ["Lykovec jedovatý", "k"],
                ["Machovka čerešňová", "b"], ["Mak siaty", "b"], ["Mak vlčí", "b"], ["Marena farbiarska", "b"], ["Mäta", "b"], ["Medovka lekárska", "b"],["Moruša čierna", "s"], ["Mrkva obyćajná", "b"],
                ["Náprstník červený", "b"], ["Nátržník husí", "b"], ["Nátržník vzpriamený", "b"], ["Nechtík lekársky", ""], ["Nevädza poľná", "b"],
                ["Omn pravý", "b"], ["Orech kráľovský", "s"], ["Ostružina černicová", "k"], ["Ostružina malinová", "k"], ["Ovos siaty", "b"],
                ["Pagaštan konský", "s"], ["Palina abrotská", ""], ["Palina pravá", "b"], ["Pamajorán obyčajný", "b"], ["Paštrnák siaty", "b"], ["Pečeňovník trojlaločný", ""], ["Pestrec mariánsky", ""], ["Petržlen záhradný", ""]];

var register = [{
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
}];