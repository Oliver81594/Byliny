var vzor = 
{
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
                ["Baza čierna","ks"], ["Bazalka pravá", "b"], ["Bedrovník anízový", "b"], ["Bedrovník väčší", "b"], ["Blen čierny", "b"], ["Bolehlav škvrnitý", ""], ["Borievka obyčajná", "ks"], ["Borovica lesná", "s"], ["Brečtan popínavý", ""], ["Breza previsnutá", "s"], ["Brusnica čučoriedková", "k"], ["Brusnica obyčajná", "pk"], ["Buk lesný", "s"],
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
            mesiace:["máj, ","jún, ","júl, ","august, ","september"],
            casti:["listy, ", "kvitnúca vňať"],
            text:"Na liečebné účely sa od mája do septembra zbiera kvitnúca vňať a listy. Sušia sa prirodzene v tieni, pri umelom sušení by teplota nemala presiahnuť 40℃. Kvalitná droga si uchováva zelenú farbu a nedrobí sa."
        },
        liecba:{
            liecitelstvo:"Alchemilka je jeden z najlepších prostriedkov na gynekologické problémy. Tlmí nadmerné krvácanie a bolestivosť pri menštruácii. Pitie čaju sa odporúča tehotným ženám ako prevencia potratu a na optimálny vývoj plodu aj an ľahší pôrod. Zmierňuje klimakterické ťažkosti, lieči biely výtok. Zvonka sa používa na výplachy pri gynekologických zápaloch a na hemoroidy, pretože potláča svrbenie slizníc. Pomáha aj pri kŕčových bolestiach svalstva, pri krvácaní z nosa alebo ako kloktadl, vo forme klystíru sa užíva napríklad pri zápale hrubého čreva. Odvar či šťava vytlačená z čerstvej vňate sa používa na umývanie rán, podliatin a vredov.",
            fandly:"Ak si ženy budú umývať lono vodou, v ktorej sa varila alchemilka stále budú mať také malé prsníky, ako keď boli panny. Rovnaký účinok bude mať aj šatka nameočená do tejto vody a priložená na prsníky. Proti padajúcej chorobe(epilepsii) zmiešaj rovnaké množstvo alechemilky a plavúňa, hoď ho na žeravé uhlie a dym ťahaj do seba ústami i nosom.",
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
            mesiace:["marec, ", "apríl, ", "august, ", "september, ", "október"],
            casti:["koreň alebo podzemok, ", "plod"],
            text:"Podzemné časti dvojročných rastlín sa vykopávajú na jeseň (september - október), staršie rastliny možno zbierať aj skoro na jar (marec - apríl). Umyté podzemky sa sušia v tieni pri teplote do 35℃, priveľmi hrubé kúsky sa môžu rozpoliť. Sušíme iba sivohnedo alebo červenkasto sfarbené časti. Plody zbierame v auguste a v septembri odrezávaním zrelých okolíkov, po dosušení z nich semená vydrobíme a vytriedime. Vňať (mladé výhonky) zbierame v máji a v júni, sušia sa umelo pri teplote do 40℃."
        },
        liecba:{
            liecitelstvo:"Koreň a plody archangeliky už v stredoveku patrili k povzbudzujúcim prostriedkom na trávenie -  zvyšujú tvorbu žalúdočných šťiav a upokojujú črevá. Archangelika je močopudná a uľahčuje odkašliavanie. Celkovo posilňuje a tonizuje, pomáha pri nervovom vyčerpaní, hystérii a nespavosti, pridáva sa do relaxačných a revitalizujúcich kúpeľov. Vhodná je ako kloktadlo pri zápaloch ústnej dutiny, obklady z odvaru sa používajú pri svalových bolestiach. Obľúbená je aj ako zelené korenie do polievok alebo v cukrárstve, kde sa kandizuu mladé výhonky, využíva sa i pri výrobe žalúdočných likérov. Prášková droga z podzemku býva prísadou do šňupacieho tabaku.",
            fandly:"Archangelika je výborná medicína nielen proti morovej nákaze, ale aj proti všelijakým jedom. Užíva sa aj jej koreň. Je to taká výborná bylina, že niet tých peňazí, ktorými by sa dala zaplatiť. Vyháňa jed, rozdeľuje krv, zohrieva život [brucho], chráni pred morovou nákazou, hasí horúčnosti a pálčivosti atď. Rozháňa nadúvanie, studenú zimnicu, ťažobu na prsiach i na žalúdku, kašeľ, ak sa prežúva v ústach. Mierni bolesť zubov a hojí pohryzenie besným psom, ak sa priloží na ranu. Urob si z nej prášok, zmiešaj ho s cukrom a tak užívaj. Namoč ju do vína alebo do páleného a pi ráno aj večer.",
        },
        recept:{
            nazov:"Posilňujúci a upokojujúci kúpeľ",
            ingrediencie:["100g nakrájaného sušeného koreňa", "2l vody"],
            priprava:"Koreň zalejeme studenou vodou, uvedieme do varu a varíme 10 až 15 minút. Necháme ešte 15 minút lúhovať, precedíme a vlejeme do kúpeľa, ktorý je vhodný najmä pri myalgiách."
        },
        upozornenie:{
            x:1,
            text:"Vo veľkých dávkach môze spočiatku pôsobiť povzbudzujúco, ale neskôr ochromuje centrálnu nervovú sústavu. U citlivých osôb vyvoláva čerstva šťavaprecitlivenosť na slnko, alergické vyrážky a opuchy."
        }
    },
    {
        zaklad:{
            nazov:"Arnika horská",
            latinsky:"Arnica montana",
            strana:"14"
        },
        opis:{
            popis:"Arnika horská je trváca bylina s plazivým valcovitým podzemkom, z ktorého vyrastá ružica prízemných vajcovitých listov. Stonka býva riedko rozkonárená a dosahuje výšku 10 až 60 cm. Súkvetia sú vrcholové úbory s priemerom 4 až 8 cm, zložené z oranžovožltých kvetov. Kvitne od júna do augusta. Plod je nažka s chocholcom.",
            vyskyt:"Druh sa vyskytuje len v Európe, najmä v hornatejších polohách na lúkach, pastvinách, vresoviskách, trávnatých stráňach, na lesných čistinách či v kosodrevine. U nás sa arnika pestuje na zber v malom."
        },
        zber:{
            mesiace:["jún, ", "júl, ", "august, ", "september, ", "október"],
            casti:["koreň/podzemok, ", "kvet"],
            text:"Najčastejšie zbierame celé úbory, niekedy iba kvety, výnimočne podzemok s koreňmi. Dbáme na to, aby súkvetia neodkvitali, na zber sa vyberáme od júna do augusta. Sušíme v tieni spravidla umelo pri teplote do 40℃. Podzemok sa zbiera po odkvitnutí v septembri a v októbri, pozdĺžne sa rozkrojí a suší sa v tieni."
        },
        liecba:{
            liecitelstvo:"Arnika horská patrí medzi veľmi cenné liečivé byliny. Používala sa na natieranie všetkých možných poranení, na reumatizmus, liečbu mŕtvice i vysokého tlaku. Podporuje činnosť žalúdka, čriev a obličiek, pôsobí antibioticky, antibakteriálne, antisepticky, proti plesniam a hubám, upravuje menštruačný cyklus. Má široké uplatnenie pri kardiologických ťažkostiach, zvyšuje krvný tlak, priamo pôsobí na srdcový sval, lieči anginu pectoris, žilovú nedostatočnosť. V tejto oblasti ju nemožno odporúčať na domácu liečbu, pretože nesprávne užívanie môže mať fatálne následky. Zvonka spoľahlivo a rýchlo podporuje hojenie rán, nikdy však nie otvorených a hlbokých poranení, odstraňuje vyrážky a reumatické bolesti, je súčasťou celého radu protizápalových a regeneračných krémov, pleťových vôd a prísad do kúpeľa.",
            fandly:"Bylina má v sobě pryskyřice a oleje chutnající hořce; působí zvláštne na ústrojí zažívací. Na kůži zpúsobí květy čerstvé svrbění a pálení. Kořen má podobný účinek. Užívá se zvláště v horké nemoci a v zimnici; též proti vodnatelosti a plícním chorobám; jindy též se jí užívalo proti úplavici, křečím, krvotokům, hostci aj. Hodí se výborně proti ochrnutí, zhmožděnině a mrtvici. Zevňe dáva sa květ svářený neb listí k zahřívání při ochrnutí neb ořesení; také tinktura se v takovém případe potřebuje.",
        },
        recept:{
            nazov:"Arnikový olej",
            ingrediencie:["2 až 3 hrste čerstvých arnikových úborov", ""],
            priprava:"Úbory natlačíme do fľaše - najvhodnejšia j so širokým zabrúseným hrdlom -, vzduchotesne ju uzatvoríme a položíme na slnečný okenný parapet. Po niekoľkých dňoch sa na dne objaví oranžová tekutin, ktorá obsahuje cenný komplex látok, tzv. arnikový olej. Je to veľmi účinný prostriedok an rany, popáleniny, vyrážky, vredy, zápaly, kĺby či žily."
        },
        upozornenie:{
            x:1,
            text:"Po požití veľkých dávok je rastlina jedovatá, dokonca smrteľne. Tehotné ženy by sa jej mali vyhýbať,  pretože prekrvuje panvové orgány, najmä maternicu. Nemožno ju odporúčať ani dojčiacim matkám. Zvonka môže u citlivých osôb vyvolať alergické reakcie."
        }
    },


    
    {
        zaklad:{
            nazov:"Borovica lesná",
            latinsky:"Pinus sylvestris",
            strana:"30"
        },
        opis:{
            popis:"Borovica lesná (sosna), je strom dorastajúci do výšky približne 40m, s priemerom kmeňa asi 1m. Má mohutný koreňový systém s výrazným kolovitým hlavným koreňom a s množstvom bočných koreňov, čo jej ako pionierskej drevine umožňuje rásť aj na extrémnych stanovištiach. Mladé stromčeky majú červenohnedú kôru, neskôr sa pokrývajú sivohnedou rozpraskanou borkou. Ihlice sú zoskupené po dve do zväzkov a sú dlhé 5 až 7cm. žlté samčie kvety sú uložené v jahňadovitých šištičkách, samičie piestikovité šištičky sú obyčajne ružové. Kvitne v máji. Šišky sú pokryté drevnatými šupinami a ich vývoj od opelenia až po otvorenie a vypadanie semien trvá takmer tri roky.",
            vyskyt:"Sosna je euroázijský strom a medzi stromovitými drevinami má najväčší areál rozšírenia na svete. Rastie pri mori aj vo výške 2700 m. n. m. na Kaukaze, od južného Španielska až za severnú polárnu kružnicu vo Švédsku a na Kamčatke, vyskytuje sa asi na tretine severnej pologule. U nás sa jej prirodzené stanovištia zmenšujú z dôvodu konkurencie borovice hladkej (vejmutovky) a borovice čiernej, ale bežne sa vysádza a pestuje v rámci lesného hospodárstva."
        },
        zber:{
            mesiace:["jaunuár, ", "február, ", "marec, ", "apríl, ", "máj, ", "jún, ", "júl, ", "august, ", "september, ", "október, ", "november, ", "december"],
            casti:["semená, ", "púčiky, ", "vňať, ", "živica", "listy, ", "kôra"],
            text:"Púčiky zbierame v marci a v apríli pred rozvinutím, sušíme ich v tenkej vrstve v tieni. Majú výraznú vôňu. Skladujeme ich v dobre uzatvárateľných nádobách. Mladé výonkya šištičky zbierame v máji. Môžeme z nich pripravit sirup proti kašľu. Príležitostne počas celého roka zbierame živicu, na priamu spotrebu čerstvé ihličie alebo kôru. Semená zo zrelých šišiek získavame v zimných mesiacoch od novembra do marca."
        },
        liecba:{
            liecitelstvo:"Podľa starých herbárov sa na liečebné účely dala použit prakticky akákoľvek časť borovice - púčiky, mladé výhonky a šištičky liečili kašeľ a suchoty (tuberkulózu), kúpeľ z nich sťahoval lono, poklesnutú maternicu či poklesnutý konečník. Borovicové jadierka pôsobili močopudne a dezinfekčne pri zápale obličiek či močového mechúra, olejom z nich sa natierali znehybnené kon%catiny po mŕtvici. Náplasti so živicou čistili vredy a rany. Kúpeľ v odvare z borovicového ihličia potláča bolesť svalov a chorých kĺbov. Drevené ihličie zmierňuje zápaly, hojí rany a vredy v ústach. Odvar z kôry zastavuje hnačku a podporuje močenie.",
            fandly:"Proti boleniu zubov pomôžu mladé výhonky borovice, uvarené v octe, keď sa s ním vyplakujú ústa. Osobitný účinok na bolesti zubov má suchá smola z borovice. Pripravuje sa z nej štvoro liekov, jeden silnejši ako druhý. Napríklad vezmi na pokrievku dva-tri žeravé uhlíky, hoď na ne suchú smolu z borovice a hneď prilož lievik, aby sa dym mohol cezeň dostať až k boľavému zubu. Alebo vezmi slez, v ktorom si najskôr spálil usušenú smolu z borovice, pridaj rovnaké množstvo páleného vína a to drž teplé na zube a bolesť prestane.",
        },
        recept:{
            nazov:"Posilňujúci kúpeľ",
            ingrediencie:["1kg mladých výhonkov", "3l vody"],
            priprava:"Výhonky povaríme asi 30 minút a scedíme. Odvar pridáme do kúpeľa. Prekrvuje pokožku, pomáha pri reumatizme a dne, zmierňuje bolesti svalov, má relaxačný účinok, zmierňuje stres depresie. Teplota kúpeľa nemá prekročiť 34℃ a trvať by mal najviac 20 minút"
        },
        upozornenie:{
            x:1,
            text:"Borovica nie je vhodná pre osoby so zápalom obličiek, pečene alebo tráviacej sústavy. Vo vyšších dávkach na citlivé osoby pôsobí dráždivo."
        }
    },



    {
        zaklad:{
            nazov:"Borievka obyčajná",
            latinsky:"Juniperus communis",
            strana:"28"
        },
        opis:{
            popis:"Borievka je ihličnatý vždyzelený ker či menší strom s jedným alebo niekoľkými  kmeňmi. Dosahuje výšku aj vyše 10m, ale častejšie sú nižšie exempláre do 2-3m. Ihlice sú sivozelené, vyradtajú v trojpočetných praslenoch, sú široké 1,5mm a dlhé 10-18mm. Kôra je spočiatku hladká, neskô rozpukaná, odlupuje sa vo vláknach. Samčie peľnicové kvety sú žlté a mnohotyčinkové, samičie pestikové kvety sú šiškovité a zelenkasté. Kvitne v apríli a v máji. Plod je guľovitá šišková bobuľa veľká do 1cm, spočiatku zelená a v čase dozrievania na konci druhého roka čiernomodrá, hnedá alebo červenohnedá. Borievka je dlhoveká, známe sú jedince staré vyše 2000 rokov.",
            vyskyt:"Borievka je rozšírená na celej severnej pologuli, prenesená bola aj do Južnej Ameriky. U nás  ustupuje, vyskytuje sa roztrúsene vo slvetlých ihličnatých lesoch, na slnečných pastvinách, piesčinách, na skalnatých miestach, vresoviskách a slatinách, a to od nížin až po horské oblasti."
        },
        zber:{
            mesiace:["február, ", "marec, ", "október, ", "november"],
            casti:["plody, ", "kôra"],
            text:"Používajú sa najmä zreleé šiškové bobule, zriedkavomladá kôra či vrcholy konárikov. Bobule zbierame na jeseň v októbri a v novembri striasaním do plachiet, pred ďalším spracovaním odstránime zošuverené a nezrelé borievky. Kvalitné plody sušíme v tieni pri miernej teplote do 35℃. Pri zbere nezabúdame na ochranné rukavice."
        },
        liecba:{
            liecitelstvo:"Plody (borievky) sú výrazne močopudné a antiseptické, takže sa využívajú pri zápaloch močových ciest alebo pri zadržiavaní tekutín v tele - borievkový éterický olej podnecuje činnosť obličiek. Zelpšujú trávenie, podporujú chuť do jedla a pôsobia proti plynatosti. Priaznivo ovplyvňujú látkovú premenu. Vďaka éterickým olejom s dezinfekčnými účinkami sa môžu užívať pri kašli a nachladnutí. Zvonka pomáhajú pri reumatizme, pri bolestiach kĺbov či chrbtice, pretože zvyšujú prekrvenie pokožky a pôsobia hojivo. Vyrába sa z nich olejový výťažok na natiranie, tinktúra, využívajú sa aj na výrobu destilátov (napríklad džinu, borovičky).",
            fandly:"Borievky čistia prsia, pľúca, pečeň a obličky, vyháňajú piesok, odstraňujú hlien, chránia pred šľakom [porážkou] a závratom. Tieto zrnká ani nemožno dosť vynchváliť, robia priam zázraky, ak sa každé ráno užijú tri alebo štyri. Ale tehotné ženy nech sa chránia nielen zŕn, ale aj dymu z nich. Komu páchne z úst, nech si ráno a večer natrie hrianku borievkovým olejom a nech ju zje. Keď sa ústa vymývajú borievkami uvarenými s ružou v octe z červeného vína, pôsobia hojivo na každú bolesť zubov",
        },
        recept:{
            nazov:"Borievková tinktúra",
            ingrediencie:["za hrsť borievok", "1/2 l 40-60% alkoholu"],
            priprava:"Borievky 2 týždne macerujeme v alkohole, až vznikne voňavá tinktúra. Užívame dva razy denne 10 kvapiek na kocke cukru alebo ňou potierame boľavé reumatické kĺby"
        },
        upozornenie:{
            x:1,
            text:"Vnútorné používanie borievky musí byť kontrolované, pretože popri priaznivých účinkoch dráždi obličky. Nie je vhodná pre tehotné ženy."
        }
    }
];