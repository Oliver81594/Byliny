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
                ["Baza čierna","ks"], ["Bazalka pravá", "b"], ["Bedrovník anízový", "b"], ["Bedrovník väčší", "b"], ["Blen čierny", "b"], ["Bolehlav škvrnitý", "o"], ["Borievka obyčajná", "ks"], ["Borovica lesná", "s"], ["Brečtan popínavý", "o"], ["Breza previsnutá", "s"], ["Brusnica čučoriedková", "k"], ["Brusnica obyčajná", "pk"], ["Buk lesný", "s"],
                ["Cesnak cibulový", "b"], ["Cesnak medvedí", "b"], ["Cyklamén purpurový", "b"], ["Čakanka obyčajná", "b"], ["Čemerica čierna", "b"], ["Čerešňa višňová", "ks"], ["Čiernohlávok obyčajný", "b"], 
                ["Ďatelina lúčna", "b"], ["Deväťsil lekársky", "b"], ["Divozel sápovitý", "b"], ["Dráč obyčajný", "k"], ["Drieň obyčajný", "ks"], ["Dub letný", "s"], ["Dula podlhovastá", "s"], ["Durman obyčajný", "b"], ["Dúška materina", "pk"],
                ["Fazuľa šarlátová", "o"], ["Fenikel obyčajný", "b"], ["Fialka trojfarebná", "b"], 
                ["Hadovník väčší", "b"], ["Hloh obyčajný","o"], ["Hluchavka biela", "b"], ["Horec žltý", "b"], ["Hrach siaty", "o"], ["Chmeľ obyčajný", "b"], ["Chren dedinský", "b"],
                ["Ihlica tŕnitá", "pk"], ["Imelo biele", "k"], 
                ["Jablčník obyčajný", "b"], ["Jahoda obyčajná", "b"], ["Jarabina vtáčia", "s"], ["Jastrabina lekárska", "o"], ["Javor mliečny", "s"], ["Jedľa biela", "s"], ["Jelša lepkavá", "ks"], 
                ["Kapsička pastierska", "b"], ["Karbinec európsky", "b"], ["Komonica lekárska", "b"], ["Konopa siata", "b"], ["Konvalinka voňavá", "b"], ["Kôpor voňavý", "b"], ["Koriander siaty", "b"], ["Kosatec nemecký", "b"], ["Kostihoj lekársky", "b"], ["Kotvičník zemný", "b"], ["Krasovlas bezbyľový", "b"], ["Krušina jelšová", "k"], ["Krvavec lekársky", "b"], ["Kukurica siata", "o"], ["Kýchavica biela", "b"],
                ["Ľan siaty", "b"], ["Lastovičník väčší", "b"], ["Lekno biele", "b"], ["Levanduľa úzkolistá", "pk"], ["Lieska obyčajná", "ks"], ["Ligurček lekársky", "b"], ["Lipa malolistá", "s"], ["Lipkavec marinkový", "b"], ["Lopúch väčší", "b"], ["Ľubovník bodkovaný", "b"], ["Ľuľkovec zlomocný", "b"], ["Ľuľok sladkohorký", "pk"], ["Lykovec jedovatý", "k"],
                ["Machovka čerešňová", "b"], ["Mak siaty", "b"], ["Mak vlčí", "b"], ["Marena farbiarska", "b"], ["Mäta", "b"], ["Medovka lekárska", "b"],["Moruša čierna", "s"], ["Mrkva obyčajná", "b"],
                ["Náprstník červený", "b"], ["Nátržník husí", "b"], ["Nátržník vzpriamený", "b"], ["Nechtík lekársky", "b"], ["Nevädza poľná", "o"],
                ["Oman pravý", "b"], ["Orech kráľovský", "s"], ["Ostružina černicová", "k"], ["Ostružina malinová", "k"], ["Ovos siaty", "o"],
                ["Pagaštan konský", "s"], ["Palina abrotská", "pk"], ["Palina pravá", "b"], ["Pamajorán obyčajný", "b"], ["Paštrnák siaty", "b"], ["Pečeňovník trojlaločný", "o"], ["Pestrec mariánsky", "o"], ["Petržlen záhradný", "o"], ["Plavúň obyčajný", "b"], ["Pľúcnik lekársky", "b"], ["Podbeľ liečivý", "b"], ["Pohánka jedlá", "b"], ["Posed biely", "o"], ["Potočnica lekárska", "b"], ["Praslička roľná", "b"], ["Pŕhľava dvojdomá", "b"], ["Prvosienka jarná", "b"], ["Púpava", "b"], ["Pupenec roľný", "b"], ["Puškvorec obyčajný", "b"], ["Pyštek obyčajný", "b"],
                ["Rasca lúčna", "b"], ["Rebríček obyčajný", "b"], ["Rozmarín lekársky", "k"], ["Rozpuk jedovatý", "b"], ["Rumanček kamilkový", "b"], ["Ruta voňavá", "pk"], ["Ruža", "k"], ["Ruža sípová", "k"], 
                ["Sedmokráska obyčajná", "b"], ["Senovka grécka", "b"], ["Skorocel kopijovitý", "b"], ["Skorocel väčší", "b"], ["Sladič obyčajný", "o"], ["Sladovka hladkoplodá", "b"], ["Slez lesný", "b"], ["Slivka trnková", "k"], ["Smrek obyčajný", "s"], ["Snežienka", "jarná"], ["Srdcovník obyčajný", "b"], ["Stavikrv vtáčí", "b"], ["Šafran siaty", "b"], ["Šalvia lekárska", "pk"], ["Štetka lesná", "b"],
                ["Topoľ čierny", "s"], ["Topoľ osikový", "s"], ["Túžobník brestový", "b"], 
                ["Uhorka siata", "b"], 
                ["Vachta trojlistá", "o"], ["Valeriána lekárska", "b"], ["Vavrín vznešený", "ks"], ["Veronika lekárska", "b"], ["Vinič hroznorodý", "o"], ["Vratič obyčajný", "b"], ["Vŕba biela", "s"], ["Vres obyčajný", "k"],
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
            mesiace:["máj","jún","júl","august","september"],
            casti:["listy", "kvitnúca vňať"],
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
            mesiace:["marec", "apríl", "august", "september", "október"],
            casti:["koreň alebo podzemok", "plod"],
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
            mesiace:["jún", "júl", "august", "september", "október"],
            casti:["koreň/podzemok", "kvet"],
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
            nazov:"Baza čierna",
            latinsky:"Sambucus nigra",
            strana:"16"
        },
        opis:{
            popis:"Baza čierna je husto rozkonárený ker alebo strom, výnimočne dosahujúci výšku až 7m. Na kmeni býva borka pozdĺžne rozpraskaná, bledohnedá až sivá, na konároch je zelená. Konáre majú vnútri belavú hubovitú dreň, tzv. bazovú dušu. Súkvetie je chocholík s priemerom 10 až 25cm. Po odkvitnutí žltobielych kvietkov dozrievajú guľovité čierne kôstkovice s 3 kôstkami a krvavočervenou dužinou. Kvitne od konca mája do začiatku júla.",
            vyskyt:"Bazu nájdeme v celej Európe okrem najsevernejších oblastí, ďalej v západnej Ázii cez Kaukaz po Kaspické more, prenesená bola do Severjnej aj Južnej Ameriky a na Azory. Uprednostňuje vlhké humózne pôdy bohaté na dusík. Pôvodne rástla v pobrežných kroviskách a lužných lesoch na zaplavovanej pôde, keďže však semená roznášajú vtáky rusom, rýchlo sa rozšírila do najrozličnejších lokalít, ako sú skládky, rumoviská, čistiny, zanedbané parky a záhrady."
        },
        zber:{
            mesiace:["apríl", "máj", "jún", "júl", "august", "september"],
            casti:["kvety", "listy", "plody"],
            text:"Droga je kvet, list a plod. Súkvetia sa odstrihávajú nožnicami za suchého počasia a voľne sa ukladajú do košov. Obyčajne sa sušia celé, zavesené na špagátoch, niekedy sa po zvädnutí jemne strhávajú iba kvety. Pri sušení musíme dať pozor, aby sa kvety nesparili a aby si zachovali farbu. Plody bazy dozrievajú v auguste a v septembri a môžu sa aj sušiť - najprv na slnku, potom sa dosúšajú umelým teplom. Zvráskavené bobule potom strhávame zo stopiek. Veľmi rozšírené sú rozmanité spôsoby konzervovania čerstvých plodov vo forme zaváranín, sirupov, vín a likérov. Čerstvé listy na priame použitie môžeme trhať v priebehu takmer celého vegetačného obdobia - od apríla do septembra."
        },
        liecba:{
            liecitelstvo:"Kvety bazy vyvolávajú potenie, sú močopudné, znižujú horúčku a priaznivo pôsobia na steny ciev. S obľubou sa preto podávajú pri nachladnutí a pri cievnych chorobách. Plody bazy zmierňujú bolesť, osvedčili sa najmä pri migrénach a neuralgiách, blahodarne pôsobia aj pri kŕčoch orgánov tráviacej sústavy a pri plynatosti. Čaj z plodov má mierne laxatívny účinok. Bazový ocot - teda ocot, v ktorom sa vylúhovali bazové kvety - slúži na masáže bolestivého svalstva. Listy sa používajú na zábaly, napríklad pri reumatizme, dokonca pomáhajú na zvonka dostupné nádory, vnútorne vo forme záparu čistia krv a využívajú sa aj do čajov proti akné. Skoro na jar môžeme listové púčiky a drobné lístky pridávať do polievok ako zelené korenie.",
            fandly:"Baza prijatá do života [brucha] má veľkú vyháňaciu silu, podobne aj jej koreň uvarený vo víne pomáha pri vodnatieľke a je veľmi na osoh. Pi odvar z bazy čiernej a vyženieš zimnicu tretiačku [objavujúcu sa každý 3. deň].",
        },
        recept:{
            nazov:"Bazový lekvár",
            ingrediencie:["2 diely pretlaku z bazových plodov", "1 diel cukru", "želírovací prípravok", "citrón", "škorica", "klinčeky"],
            priprava:"Umyté zrelé plody rozvaríme vo vode na kašu, po vychladnutí prelisujeme, pridáme zodpovedajúce množstvo cukru a trochu želírovacieho prípravku. Za stáleho miešania, aby sa lekvár nepripálil, necháme odpariť na požadovanú hustotu. Lekvár uchovávame v chlade v menších flašiach, pretože po otvorení ľahko splesnivie. Na zlepšeniechuti pri varení môžeme pridať pokrájaný citrón, škoricu a klinčeky. Jeden až dva týždne užívame 3-4 lyžice denne pri rozličných neuralgiách, ischiase, zápale trojklaného alebo medzirebrového nervu, pri bolestiach hlavy, reumatizme a ako šetrné preháňadlo."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },

    {
        zaklad:{
            nazov:"Bazalka pravá",
            latinsky:"Ocicum basilicum",
            strana:"18"
        },
        opis:{
            popis:"Bazalka pravá je jednoročná kríčkovito rastúca bylina s výškou 30 až 40cm. Stonka býva jednoduchá alebo rozkonárená. Kvety majú bielu, žltobielu až ružovkastú farbu a sú usporiadané do paklasov dlhých až 25cm. Kvitne od júna do septembra. Plod je drobná tmavá tvrdka, ktorá vo vlhku silno slizovatie. Existuje celý rad vyšľachtených kultivarov s výraznou premenlivosťou vzhľadu - ôžu mať farbu od zelenej až po fialovú a kučeravé listy. Celá rastlina má výraznú, veľmi aromatickú a korenistú vôňu aj chuť.",
            vyskyt:"Bazalka pochádza z Indie, pestovali ju aj v starom Egypte, o čom svedčia vence z bazalky v staroegyptských pyramídach. Do európskych záhrad a kuchýň sa dostala v stredoveku a čerstvá aj sušená je dodnes veľmi obľúbeným korením, najmä v talianskej a vo francúzskej kuchyni. Vo svete na mnohých miestach splanieva, napríklad v Severnej Amerike alebo v Číne, u nás sa s obľubou pestuje, splanieva však iba veľmi zriedka."
        },
        zber:{
            mesiace:["jún", "júl", "august", "september"],
            casti:["vňať", ""],
            text:"Príjemne voňajúca, husto olistená vňať sa zbiera v čase plného kvitnutia od júna do septembra až tri razy ročne. Rastliny orezávame 10 až 15cm nad zemou, aby mohliznovu vyhnať. Sušia sa v tieni na vetranom mieste v tenkých vrstvách pri teplote do 35℃."
        },
        liecba:{
            liecitelstvo:"Bazalka uľahčuje trávenie, potláča plynnatosť a priaznivo ovplyvňuje činnosť tráviacej sústavy, okrem toho dezinfikuje močové cesty. Využíva sa pri zápaloch horných dýchacíc ciest, pretože podporuje odkašlavanie, má aj potopudne a upokojujúce účinky. Kloktadlo z bazalkového záparu dezinfikuje ústnu dutinu a hrdlo, priložené čerstvé listy hoja zapareniny. Výrazne aromatické éterické oleje sa využívajú vo voňarkástve, vôňou pripomínajú zmes ruží a klinčekov. Ako korenie by bazalka nemala chýbať v nijakej kuchyni. Bazalka bola liečivom na rozmanité choroby už v staroveku (Egypt, India). Jej názov pochádza  z gréckeho slova basileus, čiže kráľ. Neskôr sa omylom odvodzoval z latinského slova  basilicus, teda bazilišok, a bola zatracovaná ako diabolská bylina.",
            fandly:"Odvar z jej semena posilňuje srdce a rozháňa mdloby. Jej byľ priviazaná na čelozmierňuje bolenie hlavy, namočená do octu roztrháva mdlobu. Ak bradavice zvrchu poškrabeš nožom a posypeš popolom zo semena bazalky, vyhoja sa. Namoč na noc semeno bazalkydo ružovej vody, voda zhustne a stane sa lepkavou. Hojí nákazy v hrdle, popukané pery a jazyk.",
        },
        recept:{
            nazov:"Bazalkový olej",
            ingrediencie:["2 hrste čerstvých listov alebo celej rastliny", "400ml olivového oleja"],
            priprava:"V pare alebo v horúcej vode paríme buď iba listy 10 sekúnd, alebo celé rastliny aj so stonkami 30 sekúnd. Prudko ich schladíme v ľadovej vode a rozmixujeme s olivovovým olejom. Necháme 24 hodín v chlade macerovať a potom precedíme cez plátno alebo husté nekovové sitko. Olej sa používa najmä v studenej kuchyni, ale je vhodný aj na vonkajšie použitie. Natieraním sa ním dajú zmierňovať následky hmyzieho uštipnutia, zábal pomáha pri zápale priedušiek, najmä u detí."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },

    {
        zaklad:{
            nazov:"Bedrovník anízový",
            latinsky:"Pimpinella anisum",
            strana:"20"
        },
        opis:{
            popis:"Bedrovník anízový (aníz) je jednoročná bylina dorastajúca do výśky 30 až 50cm. Má vzpriamenú, hore rozkonárenú stonku a tri tvary listov. Biele kvety sú usporiadnané do okolíkov so 7 až s 15 lúčmi. Kvitne od júna do augusta. Plod (takisto označovaný aníz) je dvojnažka, jej veľkosť a farba sa menia podľa kultivaru aj oblasti pôvodu. Pre farmáciu je cenný najmä svetlý, veľkoplodý aníz z juhu Talianska a španielsky z Andalúzie.",
            vyskyt:"Bedrovník anízový má dlhú históriu, najstarśie správy o ňom pochádzajú z obdobia približne 1500 rokov pred Kr. z egyptských záznamov, ale už predtým bol rozšírený v Sýrii, Grécku a na Cypre. Na sever od Á"
        },
        zber:{
            mesiace:["august", "september"],
            casti:["plody", ""],
            text:"Plody bedrovníka sa zbierajú v auguste a v septembri, keď okolíky začínajú od stredu žltnúť a dvojnažky sa sfarbujú do sivozelena. Zbierame zrána, kým sú rastliny vlhké, inak by plody ľahko opadali. Odrezané čati bedrovníka zviažeme do malých zväzkov a zavesíme dole hlavou. Plody takto dozrevajú asi 2 tyždne a popritom sa suśia. Vypadávajúce semená zachytávame na podložke, nevypdané semená vyšúchame a všetko preosejeme."
        },
        liecba:{
            liecitelstvo:"V stredoveku sa pre bedrovník tradoval prívlastok všeliek a býval neoddeliteľnou súčasťou liečiv. Plody sú vďaka",
            fandly:"Aníz dáva dychu vôňu, tvári mladiství vzhľad a zaháňa ťažké sny",
        },
        recept:{
            nazov:"Odvar proti čkaniu a kolikám", 
            ingrediencie:["1 polievková lyžica podrveného anízu", "250ml vody a lebo mlieka"],
            priprava:"Podrvený aníz nasypeme do vriacej vody alebo vriaceho mlieka a varíme 6 až 10 minút. Užívame pri úpornom čkaní, kŕčoch na hrudi, keď si nemôžeme odkašlať a pri brušnej kolike u detí. Podáva sa dva až tri razy denne do ústupu ťažkostí."
        },
        upozornenie:{
            x:1,
            text:"Nadmerná konzumácia anízových likérov môže vzhľadom na obsah látok s estrogénovými účinkami u žien spôsobovať hormonálne poruchy."
        }
    },

    {
        zaklad:{
            nazov:"Bedrovník väčší",
            latinsky:"Pimpinella major",
            strana:""
        },
        opis:{
            popis:"Bedrovník väčší je trváca bylina s hrubým vretenovitým koreňom, dorastajúca do výšky 40 až 120 cm. Stonka je dutá, hranatá a ryhovaná. Súkvetie je okolík zložený z 9 až 15 okolíčkov, ktoré majú po 14 až 26 bielych alebo ružovkastých kvetov. Plod je vajcovitá rebrovitá dvojnažka. Kvitne od Júna do septembra. Bedrovník väčší sa veľmi podobá na drobnejší bedrovník lomikameňový (Pimpinella saxifraga). Oba druhy obsahujú tie isté účinné látky a majú rovnaké využitie.",
            vyskyt:"Bedrovník je bežne rozšírený v Európe, severná hranica jeho výskytu prechádza juhom Švédska a Fínska, južná hranica prebieha stredným Španielskom a Bulharskom, na východe zasahuje na Kaukaz. U nás často rastie na vlhších lúkach, vo svetlých lesoch a kroviskách, v sadoch, na medziach, násypoch, v priekopách a pod."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Korene sa zbierajú na jar (marec, apríl), zo starších rastlín na jeseň (september, október). Po vykopaní a rýchlom umytí studenou vodou ich pozdĺžne rozkrojíme a sušíme v tenkých vrstvách v tieni pri teplotách do 35°C. Korene musíme dobre uskladniť, pretože ľahko vlhnú a potom ich napadá hmyz."
        },
        liecba:{
            liecitelstvo:"Kedysi sa verilo, že bedrovník chráni pred morom, býval neoddeliteľnou súčasťou obľúbených všeliekov. Používa sa koreň, ktorý sa suší alebo využíva na výrobu liehových a vodných výťažkov. Slúži na dezinfekciu močových ciest a ako prostriedok proti vytváraniu obličkových kameňov. Uľahčuje odkašliavanie, preto je prospešný pri kataroch priedušiek, pri kašli, zachrípnutí a astme. Zvonka je vhodný ako kloktadlo pri ochoreniach ústnej dutiny a hrtana. Vzhľadom na protizápalové a hojivé účinky sa z neho pripravovali kúpele na ťažko sa hojace rany. Nadrobno nasekané mladé čerstvé lístky sa pridávajú do zeleninových šalátov, polievok a omáčok, pri výrobe piva sa aromatický koreň osvedčil na zvýraznenie chuti.",
            fandly:"Z bedrovníka možno užiť alebo prijať v nápoji čokoľvek - koreň, byľ alebo semeno, pomáha pri bolestivom nadúvaní, ako medicína proti jedom, betrom v žalúdku, v obličkách, mechúre alebo miešku. Urýchľuje aj ženskú chorobu [menštruáciu] a čistenie a je vôbec veľmi užitočný na všetko čo sa vylučuje z tela močom.",
        },
        recept:{
            nazov:"Tinktúra z bedrovníka",
            ingrediencie:["1 diel koreňa bedrovníka", "5 dielov 60 až 65% liehu alebo destilátu"],
            priprava:"Dobre umytý a nakrájaný koreň vložíme do uzatvárateľného pohára a zalejeme liehom alebo destilátom. Pri izbovej teplote na tmavom mieste lúhujeme 7 až 10 dní, pričom pohárom občas potrepeme, naposledy 24 hodín pred prefiltrovaním. Do pohára s vodou dáme 15 - 30 kvapiek a pijeme tri razy denne. Môže slúžiť aj ako kloktadlo pri ochoreniach ústnej dutiny a hrtana."
        },
        upozornenie:{
            x:1,
            text:"Pri styku so šťavou z čerstvých rastlín môže pokožka citlivých osôb reagovať vyrážkami, pri vnútornom použití u nich tinktúra či zápar vyvoláva precitlivenosť na svetlo. Bedrovník sa nesmie vnútorne užívať počas tehotenstva."
        }
    },

    {
        zaklad:{
            nazov:"Blen čierny",
            latinsky:"Hyoscyamus niger",
            strana:""
        },
        opis:{
            popis:"Blen je niekedy jednoročná, väčšinou však dvojročná lepkavo chlpatá bylina. Dosahuje výšku 30 až 80 cm.Stonka býva vzpriamená, jednoduchá alebo rozkonárená, s hustými, v niektorých prípadoch až 40 cm dlhými listami. Kvety vyrastajú na krátkej stopke, vytvárajú husté závinky, kalich je zvonkovito rúrkovitá, koruna široko lievikovitá, špinavožltá a fialovo žilkovaná. Plod je tobolka a jedna rastlina môže vytvoriť až 10 000 semien. Kvitne od konca mája do septembra.",
            vyskyt:"Rastie v Európe, v západnej Ázii, na južnej Sibíri a na severozápade Afriky. Prenesený bol aj do Ameriky, Austrálie a na Nový Zéland. U nás ho nájdeme na rumoviskách a na skládkach, okolo ciest aj ako poľnú burinu, predovšetkým v teplejších oblastiach. Kedysi býval veľmi hojný, dnes je však čoraz vzácnejší. Ešte v polovici 20. storočia sa pestoval v mnohých európskych krajinách a v USA ako liečivá bylina. Dnes sa na farmaceutické účely pestuje príbuzný druh blen lekársky (Hyoscyamus muticus), ktorý má vyšší obsah alkaloidov."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Listy a vňať zbierame na začiatku kvitnutia od júna do augusta. Nesmú sa utlačiť, preto ich rýchlo sušíme v tieni, prípustná teplota je 40°C. Semená získavame z toboliek vymlátením. Zbierame ich krátko pred úplným dozretím tak, že odrežeme vrchnú časť vňate a necháme ich dozrieť. Pri zbere pracujeme v rukaviciach a oči si chránime okuliarmi, pretože ide o prudko jedovatú rastlinu."
        },
        liecba:{
            liecitelstvo:"Blen obsahuje tropánové alkaloidy, ktoré výrazne ovplyvňujú centrálnu nervovú sústavu, najmä mozog. V malých dávkach dráždi, vo väčších spôsobuje ochrnutie a rozširuje očné zrenice. Ovplyvňuje činnosť žliaz a hladkého svalstva, preto zápar z listov odstraňuje kŕče pri žlčníkových a obličkových kolikách. Astmatikom sa odporúčalo fajčenie cigariet s prímesou blenových semien. Keďže blen tlmí činnosť žliaz, osvedčil sa pri zbýšenej sekrécii žalúdočných štiav a pri žalúdkových vredoch, pri nadmernom slinení a potení. Slúžil aj ako anestetikum pri operáciách, pri bolestiach zubov sa vdychovali výpary z blenových semien. Placka z jačmennej múky a blenu sa prikladala no opuchy semenníkov, kĺbov alebo na bolestivé prsníky po pôrode.",
            fandly:"V homeopatii užíva se šťáva [blenu] s lihem smíšená proti červům a bolestem křečovitým, proti padoucnici, posunčině [chorea, zrádnik], kašli, zimnici, horečce, blbosti, zánětům mozku i střev, proti vzteklině, neduhům očním, souchotinám, proti průjmu a dávení; proti prudkému bolení hlavy, proti chrlení krve a křečím v měchýři. Dávají se 1 - 2 kapky 1- až 6-krát rozředěné, jednou neb několikrát denně, dle okolností.",
        },
        recept:{
            nazov:"Blenový olej",
            ingrediencie:["10 dag nakrájaných listov alebo vňate", "70 dag olivového oleja"],
            priprava:"Olej zmiešame s drogou a vo vodnom kúpeli ohrievame asi 30 minút. Potom ho prelejeme do fľaše, uzatvoríme a necháme týždeň odležať, každý deň ho potrasieme. Nakoniec ho prefiltrujeme do tmavej fľaše a skladujeme na tmavom mieste. Natierame na bolestivé reumatické kĺby či masírujeme bolestivé miesta pri neuralgiách."
        },
        upozornenie:{
            x:1,
            text:"V stredoveku sa pestoval na travičské a magické účely - bol neoddeliteľnou súčasťou nápojov lásky a čarovných mastí. Treba sa vyvarovať nebezpečných experimentov, pretože otravy bývajú smrteľné."
        }
    },
    
    {
        zaklad:{
            nazov:"Bolehlav škvrnitý",
            latinsky:"Conium maculatum",
            strana:""
        },
        opis:{
            popis:"Bolehlav škvrnitý je jednoročná až dvojročná mohutná rastlina, dosahujúca výšku až 2 m. Stonka je husto rozkonárená, dole purpurovo škvrnitá. Listy sú dva- až trikrát perovito zložené. Biele kvety vytvárajú dlhostopkaté okolíky s 10 až 20 okolíčkami. Kvitne od júna do septembra. Plod je dvojnažka a po dozretí sa ľahko rozpadáva, jedna rastlina môže vyprodukovať až 15 000 semien. Bolehlav vžrazne páchne po myšacine.",
            vyskyt:"Druh je rozšírený v Európe a Ázii, nájdeme ho i v Afrike a prenesený bol aj do Ameriky a na Nový Zéland. U nás je pomerne hojný najmä v teplejších oblastiach. Obľubuje miesta bohaté na dusík, preto rastie v okolí hnojísk, v húštinách, na krovitých stráňach, pri potokoch a v priekopách."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Zbiera sa vňať a plody. Zrelé plody dosúšame pri prirodzenej teplote.Vzhľadom na jedovatosť celej rastliny dbáme, aby sme bolehlav sušili oddelene od iných byliniek, a po manipulácii s čerstvou rastlinou si vždy umyjeme ruky mydlom. Jedovatý alkaloid koniín sa vstrebáva aj pokožkou alebo vdychovaním pri dlhšie trvajúcom privoniavaní k čerstvej byline."
        },
        liecba:{
            liecitelstvo:"Vňať a listy sa používali roztlačené ako obklady na opuchy a zápaly žliaz, ako je tuberkulóza krčných lymfatických uzlín. Predpisovali sa aj proti syfilisu a pri artritíde a dne. Najviac sa používala tinktúra a masť. Bolehlav slúyil ako upokojujúci liek na zmiernenie bolesti alebo na uvoľnenie kŕčov hladkého svalstva.",
            fandly:"Potom sa prechádzal, a keď, ako povedal, zacítil v nohách ťažobu, ľahol si, a ten, kto mu jed podal, dotýkajúc sa ho, po chíľach skúšal mu nohy, dole i hore, a potom stisknúc mu silno chodidlo, sa pýtal, či to cíti, a on povedal, že nie. A potom zase lýtka, a takto postupujúc nahor, ukazoval, že chladne a tuhne. A sám sa ho dotýkal ďalej a povedal, že až sa mu to dostane k srdcu, vtedy že skoná.",
          },
        recept:{
            nazov:"",
            ingrediencie:["", ""],
            priprava:"Keďže je prudko jedovatý, dnes sa prakticky nepoužíva."
        },
        upozornenie:{
            x:1,
            text:"Najjedovatejšou časťou rastliny sú plody, ktoré sú nebezpečné aj tým, že sa dajú ľahko zameniť za aníz."
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
            mesiace:["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
            casti:["semená", "púčiky", "vňať", "živica", "listy", "kôra"],
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
            nazov:"Brečtan popínavý",
            latinsky:"Hedera helix",
            strana:""
        },
        opis:{
            popis:"Brečtan je trváca vždyzelená drevina plaziaca sa po zemi alebo po kmeňoch stromov a po múroch. Táto popínavá rastlina býva dlhá až 20 m. Listy sú 3- až 5-laločné, s dlhými stopkami, na kvitnúcich konároch sú široko kopijovité. Kvitne na jeseň v septembri a otkóbri. Plod je guľatá čierna bobuľa vo veľkosti hrachu.",
            vyskyt:"Rastie v Európe a juhozápadnej Ázii, prenesený bol aj do Južnej Ameriky. U nás sa vyskytuje hojne, miestami vytvára koberce alebo súvisle porastá múry. Nájdeme ho v tienistých listnatých lesoch či na skalách, starých múroch a na cintorínoch. Pestuje sa aj ako okrasná rastlina, čo viedlo k vyšľachteniu celého radu kultivarov."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Na liečebné účely sa zbierajú mladé zdravé listy, najlepšie na jar alebo v lete. Sušíme ich na slnku alebo v tieni tak, aby nezhnedli. Zhnednuté listy po usušení odstránime."
        },
        liecba:{
            liecitelstvo:"Aj keď je brečtan jedovatý (najjedovatejšou časťou rastliny sú bobule), využíva sa v ľudovom liečiteľstve. Mladé listy obsahujú najmä saponíny, glykozidy, alkaloidy, triesloviny, rozličné kyseliny a veľa ďalších látok. Brečtan podporuje vykašliavanie, preto sa z neho pripravuje zápar či tinktúra napríklad na chronický katar priedušiek, astmu, nachladnutie či zapálené sliznice. Podporuje aj činnosť pečene a žlčníka. Zvonka sa používa na omývanie kožných vyrážok či na prípravu sedacieho kúpeľa pri liečbe hemoroidov. Obklad z listov pomáha pri bolestiach kĺbov, na drobné popáleniny prikladáme obklad z listov povarených niekoľko minút.",
            fandly:"Listí jeho u víně vařené rány stahuje veliké a zavierá, spáleniny léčí, též pruotrže [pruh] u víně vařený. Aby vlasy nikdy nerostly, vzíti vodnatost [šťavu] jeho a blénovů, smiesiti to se krví netopýřovú a pomaž miesto, z něhož by vytrhal vlasy.",
        },
        recept:{
            nazov:"Sedací kúpeľ",
            ingrediencie:["za hrsť čerstvých listov", "1 l vody"],
            priprava:"Čerstvo natrhané listy zalejeme studenou vodou a necháme cez noc lúhovať. Ráno výťažok ohrejeme po bod varu a po vychladnutí na teplotu ľudského tela ho precedíme a nalejeme do vane. Kúpeľ slúži na liečbu vonkajších hemoroidov."
        },
        upozornenie:{
            x:1,
            text:"Vzhľadom na toxicity sa nesmie užívať vo veľkých dávkach ani dlhodobo. V malých dávkach rozširuje cievy, vo väčších ich, naopak, zužuje a spomaľuje tep srdca. Na citlivé osoby môže dráždivo pôsobiť už kontakt s čerstvou rastlinou."
        }
    },
    

    {
        zaklad:{
            nazov:"Breza previsnutá",
            latinsky:"Betula pendula",
            strana:"34"
        },
        opis:{
            popis:"Breza je strom s elegantne prevísajúcimi konármi, vysoký až 25m. Borka na mladých konároch je hnedá, na starších striebristá, hladká, s hnedými priečnymi bradavicami, odlupuje sa v papierovitých pruhoch. V dolnej časti kmeňa je tmavohnedosivá, hrubo rozpukaná a kostrbatá. Listy sú na líci sviežozelené a na rube sivozelené, s pílkovitým okrajom. Kvety sú v jednopohlavných jahňadách, samčie sú sediace a dlhé 3 až 7cm, samičie sú stopkaté, s dĺžkou 1 až 2cm. Kvitne v apríli a v máji. Plod je nažka.",
            vyskyt:"Breza previsnutá je rozšírená v celej Európe, na východe po celej Sibíri až do Kórey a Japonska. Je to nenáročná, často pionierska drevina, ktorá prirodzene rastie na sutinových svahoch, odlesnených plochách, navážkach alebo haldách hlušiny, preto sa s obľubou a cielene vysádza na rekultivované plochy. U nás je to bežný strom, rastie v lesoch a parkoch."
        },
        zber:{
            mesiace:["marec", "apríl", "máj", "jún"],
            casti:["miazga", "listy", "púčiky"],
            text:"Predmetom zberu sú mladé lepkavé listy, listové púčiky a miazga. Mladé listy odtrhávame v apríli až júni bez prímesi jahniad a krátkych konárikov. Pri zbere dbáme na zdravotný stav stromu a netrháme ani listy z koncových konárov, ani priveľa listov z jedného stromu. Keďže listy sú náchylné na zaparenie, pri zbere ich ukladáme voľne a sušíme prirodzenou teplotou v tieni vo vrstve do 5 cm. Listové púčiky zbierame tiež od apríla do júna. Najšetrnejší spôsob zberu je z čerstvo zožatých stromov. Musia sa sušiť umelým teplom, najlepšie na sitách. Miazgu (brezovú vodu) získavame navŕtaním kmeňa vo výške asi 1,5 m nad zemou. Do otvoru vložíme odtokový žliabok (napríklad zrezanú slamku) a podeň umiestnime zbernú nádobu."
        },
        liecba:{
            liecitelstvo:"Brezová voda je obľúbený prostriedok ľudového liečiteľstva. Tak sko čaje z lístia a púčikov je vhodná na vnútorné aj vonkajšie použitie. Breza má silné močopudné účinky, preto sa využíva na očistné kúry a na odvodňovanie, pri obličkových kameňoch a zápaloch orgánov vylučovacej sústavy. Zbavuje telo škodlivín a solí, preto má význam pri liečbe kĺbov, reumatizmu a artrózy. Detoxikácia organizmu omladzuje pleť a zmierňuje akné. Breza prospieva koži aj pri vonkajšom použití, hojí vyrážky, plesňové ochorenie, blahodarne pôsobí na vlasovú pokožku, likviduje lupiny, upravuje činnosť mazových žliaz a zmierňuje vypadávanie vlasov.",
            fandly:"Brezová voda odstaňuje z tela pehy, fľaky a iné hnisavé vyrážky, lišaje a znamenia a pokožku skrášľuje a zjemňuje. Ak sa ňou vymývajú ústa, hojí v nich hnilobu [hnis]. Kto ráno vypije šesť lotov [1 lót = 17,5 g] brezovej vody, láme a vyháňa kameň a pôsobí aj proti zlatenici [žltačke] a žltosti. Biela kožtička z brezového dreva hojí akékoľvek rany, ak sa na ne prikladá. Je to vyskúšané.",
        },
        recept:{
            nazov:"Čaj (odvar) na prečistenie krvi",
            ingrediencie:["10 lyžíc brezových listov", "5 lyžíc pŕhľavy", "5 lyžíc bazových kvetov", "5 lyžíc trnkových kvetov"],
            priprava:"Štyri lyžičky zmesi zalejeme ¼ l vody a uvedieme ju do varu. Na 15 minút odstavíme. Popíjame ráno a večer vždy čerstvo pripravený."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },

    {
        zaklad:{
            nazov:"Brusnica čučoriedková",
            latinsky:"Vaccinium myrtillus",
            strana:""
        },
        opis:{
            popis:"Brusnica čučoriedková (čučoriedka) je rozkonárený ker vysoký 10 až 60 cm, s opadavými, v mladosti sviežozelenými lístkami. Kvety sú jednotlivé, krčiažkovité, biele alebo ružovkasté, vyrastajú v pazuchách listov. V závislosti od nadmorskej výšky stanovišťa kvitne od apríla do júna. Plody sú čierne, modro inovatené a mnohosemenné dužinaté bobule. Dužina je červenofialová, má sladkokyslú chuť. Čučoriedky dozrievajú od júla do augusta.",
            vyskyt:"Brusnica čučoriedková je rozšírená v Európe a severnej Ázii. Vytvára súvislé porasty vo vlhších ihličnatých a zmiešaných lesoch, na vresoviskách a rašeliniskách. U nás sa hojne vyskytuje najmä v horách, v stredných polohách roztrúsene a v najteplejších oblastiach výnimočne."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Používajú sa mladé lístky alebo celé vrcholy konárikov (vňať) a, samozrejme, plody. Lístie sa zbiera strhávaním od mája do júna a pomerne ľahko sa suší v tieni aj na slnku vo vrstve až do 5 cm, pretože sa nezaparuje. Vňať znesie pri sušení vrstvu hrubú až 15 cm. Je dôležité, aby si listy zachovali pôvodnú farbu. Plody zbierame, až keď sú celkom zrelé, ručne alebo hrebeňmi, sušíme ich na slnku alebo v tieni, odporúča sa dosúšanie umelým teplom. Nedostatočne vysušené plody ľahko plesnivejú a pri skladovaní ich treba chrániť pred hmyzom."
        },
        liecba:{
            liecitelstvo:"Odvar z mladých listov a plody znižujú hladinu cukru v krvi, preto sa ich konzumácia odporúča najmä§ diabetikom. Sušené plody sa osvedčili aj proti hnačkám, pri črevnom katare, žalúdočných kŕčoch, zápale močového mechúra alebo hrubého čreva. Optimalizujú množstvo a stav črevných baktérií, pôsobia proti baktérii Esherichia coli a stafylokokom. Farbivo z plodov regeneruje očny purpur (rodopsín) a zbyšuje ostrosť zraku, zlepšuje videnie za šera a pri umelom osvetlení. Zvonka sa odvar z listov a plodov používa na výplachy, napríklad pri zápale ústnej dutiny a hrtana, pretože pôsobí zvieravo a dezinfekčne. Čerstvou šťavou sa liečia afty a opary. Obklady z odvaru z listov prikladáme na kožu postihnutú plesňovými ochoreniami. Výťažok získaný zliatím lyžice sušených čučoriedok šálkou vriacej vody po vychladnutí používame na natieranie rán, popálením a ekzémov.",
            fandly:"K barvení plátna nebo předena na modro. Vezmi plný hrnec vytlačených černých jahod [čučoriedok], k tomu plný koflík vinného octa, dva loty utlučeného kamenci, půl lotu utlučeného vitrolium [zelenej skalice] a vše spolu svař, schlaď, do vlažného toho roztoku ponoř přadeno nebo plátno, vysuš ve větru, vyper ve studené vodě, a bude zbarveno na modro. Chceš-li, aby bylo zbarvení světlejší, přidej k tomu dva loty duběnek, utlučených na prášek.",
        },
        recept:{
            nazov:"Čaj pre diabetikov",
            ingrediencie:["2 lyžičky nakrájaných listov", "1/3 l vody"],
            priprava:"Listy povaríme 10 minút vo vode a necháme ochladnúť. Popíjame 2 šálky denne."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Brusnica obyčajná",
            latinsky:"Vaccinium vitis-idaea",
            strana:""
        },
        opis:{
            popis:"Brusnica obyčajná je vždyzelený nízky drevnatejúci poloker s výškou 5 až 30 cm. Je husto rozkonárený a má lesklé kožovité lístky, ktoré neopadávajú ani v zime. Na rube sú bledšia a majú hnedé bodky, čo je bezpečný odlišovací znak od podobnej jedovatej medvedice lekárskej (Arctostaphylos uva-ursi). Kvety sú biele alebo ružovkasté, majú zvonkovité koruny a vyrastajú vo vrcholových strapcoch. Kvitne v júni a v júli. Plody sú lesklé guľaté bobule s množstvom semien, v čase úplnej zrelosti červené, vzácne aj biele alebo žltkasté. Dozrievajú v júli až septembri.",
            vyskyt:"Areál rozšírenia brusnice siaho od Eur=opy cez Malú Áziu až do severovýchodnej Číny, kórey a Japonska. U nás hojne rastie vo svetlých, najmä v borovicových lesoch, na vresoviskách, pastvinách, horských lúkach, skalách a rašeliniskách. Nájdeme ju aj v nížinách, ale častejšie sa vyskytuje v horách."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Využívajú sa listy a, samozrejme, plody. Listy získavame radšej šetrným otrhávaním ako strhávaním. Nie sú náchylné na zaparenie, preto sa dajú sušiť na slnku alebo v tieni vo vrstvách do 3 cm. Zbierajú sa od apríla do jesene. Správne usušená droga di uchováva sviežu tmavozelenú farbu.Zriedkavo sa zbiera opatrne suší aj brusnicový kvet, zápar z neho sa podáva pri reumatických ťažkostiach."
        },
        liecba:{
            liecitelstvo:"Brusnice sa bežne konzumujú, sú bohatým zdrojom vitamínov, minerálov a antioxidantov. V prírodnom liečiteľstve sa používajú sušené plody a najmä listy. Látky v brusnicových drogách pôsobia antibakteriálne a močopudne, spoľahlivo pomáhajú pri infekčných zápaloch močových ciest tým, že ich dezinfikujú. Podobný dezinfekčný účinok majú aj na žlčové cesty, čo sa využíva pri liečbe žlčníka. Mierne pôsobia proti hnačke, ako pomocný prostriedok slúžia ja pri liečbe cukrovky.",
            fandly:"Usušené a na prášek utlučené tyto červené jahůdky [brusnice] mocně zastavují červenou nemoc [dyzentériu] a jiné výtoky břišní. Vnitřně požití týž prášek prospíva při kamenu.",
        },
        recept:{
            nazov:"Macerát - výťažok za studena",
            ingrediencie:["1 - 3 polievkové lyžice brusnicových listov", "1/2 l studenej vody"],
            priprava:"Brusnicové listy zalejeme studenou vodou a lúhujeme 8 hodín. Tesne pred použitím necháme krátko prejsť varom a hneď scedíme. Dlhšie trvajúcemu varu sa treba vyhnúť, pretože by sa ním uvoľnilo nežiaduce množstvo trieslovín, ktoré najmä u detí spôsobujú žalúdočnú nevoľnosť a vracanie."
        },
        upozornenie:{
            x:1,
            text:"Brusnice a prípravky z nich nie sú vhodné pre osoby s poruchami pečene a pre pacientov s obličkovou diétou. Na trvalé či dlhodobé užívanie sa brusnica neodporúča, najdlhšie by sa mala podávať 2 mesiace a maximálne 4 mesiace v roku."
        }
    },

    {
        zaklad:{
            nazov:"Buk lesný",
            latinsky:"Fagus sylvatica",
            strana:""
        },
        opis:{
            popis:"Buk lesný je mohutný opadavý listnatý strom, ktorý môže dosahovať výšku až 50 m. Máva štíhly valcovitý kmeň s priemerom aj vyše metra a hladkú striebristosivú kôru. Púčiky sú dlhé až 2,5 cm, listy majú krátku stopku a elipsovitý, čepeľovitý tvar, žilnatina je bledšia. Kvitne v apríli a v máji. Kvety sú jednopohlavné, samčie vyrastajú vo zväzkoch z pazúch listov, samičie po 2 na vrcholoch konárov. Plody sú nažky (bukvice), po 2 až 3 uzatvorené v hnedej drevnatej, mäkko ostnatej čiaške. Plody dozrievajú na jeseň. Strom sa dožíva až 400 rokov.",
            vyskyt:"Buky nájdeme v celej Európe, v Bulharsku rastú pri mori, v Grécku na Olympe až vo výške 2 000 m n. m. Nájdeme ich na celom území Slovenska v zmiešaných lesoch, ale často vytvárajú monokultúrne bučiny, pretože dospelé stromy korunami silno tienia väčšine ostatných drevín a potláčajú ich rast."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"V máji zbierame mladé bukové listy, používame ich čerstvé alebo ich sušíme v tieni pri bežnej teplote. Zrelé bukvice zbierame v septembri až októbri, bylupujeme ich a nechávame obschnúť, môžeme ich aj opražiť. Kôru získavame po celý rok z mladých konárov, najlepšie pri orezávaní konárov alebo zo zoťatých stromov. Púčiky sa zbierajú v marci až apríli."
        },
        liecba:{
            liecitelstvo:"Bukové listy a kôra sa používali na „schladenie hlavy“, proti horúčke a na podporu bystrej mysle. Bodový výťažok (macerát) z púčikov je podporný prostriedok pri nedostatočnej činnosti obličiek, pri vytváraní močového piesku, pri opuchoch a zápaloch kĺbov a pri tvorbe výrastkov. Vylúpané bukvice obsahujú olej, ktorý sa pamerom nenasýtených mastných kyselín vyrovná olivovému.",
            fandly:"Mladé listy sa pridávajú do jarných šalátov, obsahujú vlákninu, bielkoviny, minerály a vitamíny rozpustné vo vode. Žuvanie čerstvých listov hojí afty a iné poranenia ústnej sliznice. Vlažný zápar z podrvených listov lieči jačmeň na oku, zmierňuje dermatitídy a svrbiace vyrážky vrátane kiahní. Teplý zápar sa používa na omrzliny a studený na popáleniny. Podobne pôsobí aj odvar z dubovej kôry.",
        },
        recept:{
            nazov:"Odvar z bukovej kôry",
            ingrediencie:["za hrsť bukovej kôry ( 15 - 20 dag čerstvej kôry)", "1 l vody"],
            priprava:"Bukovú kôru namočíme do studenej vody, uvedieme do mierneho varu a varíme asi 30 minút. Po vychladnutí precedíme. Vlažný odvar používame na omývanie svrbiacich vyrážok, najmä takých, ktoré vyvolávajú pocit pálenia. Kúpeľ pôsobí sťahujúco, dezinfikuje a má protizápalové účinky. Uplatňuje sa aj pri liečbe vonkajších hemoroidov alebo na výplachu konečníka. Vnútorne ho možno použiť ako liek proti hnačke."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Cesnak cibulový",
            latinsky:"Allium cepa",
            strana:""
        },
        opis:{
            popis:"Cesnak cibuľový, čiže cibuľa kuchynská, je dvoj- až viacročná bylina, ktorá si v prvom alebo v druhom roku vytvára zásobný orgán, tzv. cibuľu. Koreni plytko, listy sp rúrkovité, duté, končisté, tmavozelené a voskovo oinovatené. V druhom roku rastlina vyháňa stonku s kvetmi vysokú 60 až 110 cm. Súkvetie je paokolík z bledozelených až ružovkastých kvetov. Kvitne v júli a v auguste. Plody sú tobolky.",
            vyskyt:"Divoká cibuľa dodnes rastie v Afganistane, Iráne a Turkménsku, preto možno predpokladať že cibuľa kuchynská pochádza z Prednej Ázie. Už odpradávna sa pestovala ako kultúrna rastlina napríklad v starom Egypte, Číne, vo východnej Indii aj v Malej Ázii. Dnes sa pestuje na celom svete."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Cibuľu zbierame v auguste a v septembri. Zberová zrelosť sa prejavuje zožltnutím a zoschnutím vňate, ktorá ostáva vlhká už iba v kŕčku. Cibule povyťahované z pôdy dosúšame dva týždne priamo na záhonoch alebo za daždivého počasia na roštoch v dobre vetranej miestnosti. PO celý čas nechávame vňať na cibuli, až po 3 až 4 týždňoch ju odkrútime a stiahneme aj vrchnú zahlinenú šupku. Vňať však môžeme aj nechať na cibuli a využiť ju na zväzovanie do vrkočov alebo do zväzkov maximálne po 15 kusoch."
        },
        liecba:{
            liecitelstvo:"Cibuľa nie je iba kráľovná kuchyne, je aj uznávaná liečivá rastlina. Jej konzumácia poskytuje telu množstvo životne dôležitých látok a zvyšuje jeho obranyschopnosť. Vďaka látkam s antibiotickými účinkami pomáha pri liečbe angíny, chrípky a ochorení horných dýchacích ciest. Má silné protizápalové účinky, preto sa cibuľovým odvarom dajú liečiť zápaly ústnej dutiny, mandlí, hltana, ale aj močového mechúra a obličiek. Cibuľa znižuje krvný tlak, hladinu cukru v krvi, cholesterol prospieva cievam, žilám aj srdcu. Má priaznivý vplyv na trávenie, aj keď citlivým osobám spôsobuje plynatosť. Je vynikajúca i na vonkajšie použitie, či už surová na rozličné uštipnutia hmyzom, alebo krátko podusená na protizápalové obklady, napríklad v kombinácii s feniklom hojí zápaly šliach. Cibuľová šťava sa kvapká do nosa alebo pri bolestivom zápale do ucha. Blahodarne vplýva na vlasovú pokožku, výťažky z cibule, pŕhľavy, z brezy a imela preto bývajú súčasťou rozličných vlasových prípravkov.",
            fandly:"Aby ťa nikdy neboleli zuby, usilovne si ich čisti. Každý deň ich umývaj vodou. Občas si ich vydrhni šťavou alebo vodou z cibule. Semená fenikla rozdrv na prášok a nasyp do vydlabanej cibule. Cibuľu upeč a vytlač z nej ščavu. Keď ju kvapkáš do ucha, vraciaš stratený alebo zosilňuješ slabý sluch. Stare ženy na vyhnatie hlíst používajú takúto medecínu: Nakrájajú čerstvú cibuľu, dajú ju na noc máčať do čerstvej studničnej vody a na druhý deň dajú vypiť.",
        },
        recept:{
            nazov:"Šťava proti kašľu",
            ingrediencie:["1 cibuľa", "kryštálový alebo krupicový cukor"],
            priprava:"Cibuľu ošúpeme a nakrájame na kolieska hrubé asi 3 mm. Na dno pohára s uzáverom (napríklad od detskej výživy) vložíme koliesko cibule, zasypeme ho lyžicou cukru a pridáme %dalšie kolisko. Takro po vrstvách naplníme pohár, pričom navrch dáme cukor. Uzatvoríme a necháme v chlade. Cibuľa pustí šťavu, z ktorej tri razy denne užívame za lyžicu. Namiesto cukru môžeme použiť med."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Cesnak medvedí",
            latinsky:"Allium ursinum",
            strana:""
        },
        opis:{
            popis:"Cesnak medvedí je trváca cibuľová rastlina, dosahujúca výšku 20 až 40 cm. Z úzkej valcovitej cibule vyrastajú 2 až 3 stopkaté listy kopijovitého tvaru a vzpriamená, takmer oblá byľ. Kvety sú drobné, biele, po 6 až 20 pologuľovitom paokolíku. Kvitne od apríla do júna, plod je tobolka.",
            vyskyt:"Cesnak medvedí je európska bylina, na východe zasahuje až na Kaukaz. Obľubuje vlhké pôdy, preto najčastejšie rastie v lužných a listnatých lesoch, pozdĺž potokov a na úpätí svahov. U nás sa miestami vyskytuje hojne, inde zriedkavo, preto treba pri jeho zbere postupovať zodpovedne a šetrne."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Zbierajú sa listy, vňať aj cibule. Na zber nadzemných častí sa treba vydať v apríli až júni, teda v období vegetačného rastu cesnaku. Rastlina pučí ešte pred olistením stromov, zakvitne, vytvorí plody a nadzemná časť odumrie. V lete by sme ju hľadali zbytočne. Cibule zbierame v júli, a to iba z pestobaných rastlín. Cesnak medvedí sa používa čerstvý, sušením sa jeho účinné látky strácajú. Na dlhodobejšie skladovanie sa pripravuje tinktúra."
        },
        liecba:{
            liecitelstvo:"Cesnak medvedí patrí medzi skoré jarné byliny, teda také, ktoré medveďom po prebudení zo zimného spánku slúžia ako prvá potrava. Tak ako medveďom, aj ľuďom poskytuje vitamíny a minerálne látky, dezinfikuje tráviacu sústavu a zvyšuje chuť do jedla. V ľudovom liečiteľstve je cesnak právom vysoko hodnotený, odporúča sa najmä na zníženie vysokého tlaku, proti artérioskleróze, na poruchy trávenia, zníženie hladiny cukru v krvi a na posilnenie imunity. Zabíja črevné parazity, ako prírodné antibiotikum likviduje baktérie, poradí si aj s plesňami. Podporuje činnosť žlčníka a pečene, potláča málokrvnosť. Celkovo optimalizuje látkovú premenu a omladzuje organizmus.",
            fandly:"Cesnak medvedí usuš, rozdrv na prach a za jednu štvrtku [1 štvrtka = asi 4,5 g] z neho uvar vo víne. Ak to víno budeš piť, otvorí ti pečeň a slezinu.",
        },
        recept:{
            nazov:"Víno z cesnaku medvedieho",
            ingrediencie:["za hrsť čerstvých listov", "1/4 l bieleho vína"],
            priprava:"Očistené a umyté listy nakrájame nadrobno, zalejeme bielym vínom a krátko povaríme. Scedíme, podľa chuti osladíme medom a pomaly, po dúškoch, popíjame. Užívame každý druhý deň, napríklad proti črevným parazitom, pri poruchách trávenia, vysokom tlaku alebo na posilnenie imunity."
        },
        upozornenie:{
            x:1,
            text:"Cesnakové éterické oleje môžu vyvolávať vážne alergické reakcie, ktoré sa po požití prejavujú opuchnutím hrdla a dýchacími ťažkosťami. Šťava z rastliny môže podráždiť pokožku až po začervenanie a vytvorenie vyrážok. Nadmerné užívanie cesnaku môže spôsobiť hnačku a plynatosť, dokonca aj zápaly obličiek."
        }
    },
    
    {
        zaklad:{
            nazov:"Cyklamén purpurový",
            latinsky:"Cyclamen purpurascens",
            strana:""
        },
        opis:{
            popis:"Cyklámen je trváca bylina vysoká 5 až 12 cm. Má guľovitú, mierne sploštenú podzemnú hľuzu s početnými vláknitými koreňmi. Okrúhle, srdcovité listy sú na líci zelené, s belavými škvrnami, na rube červenofialové. Kvety vyrastajú jednotlivo na stonkách dlhých 5 až 12 cm, majú rúrkovitú karmínovú až fialovočervenú korunu. Kvitne od júla do septembra. Plod je tobolka obsahujúca semená.",
            vyskyt:"Cyklámen purpurový pochádza zo strednej a juhozápadnej Európy, čiastočne zasahuje aj na Balkánsky polostrov. U nás je to nepôvodný druh, bol vysadený na viacerých miestach, niekde splanel. Nájdeme ho v listnatých lesoch a krovickách. Je vzácny a chránený."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Na liečebné účely sa zbierala hľuza, väčšinou po odkvitnutí v októbri a v novembri. Dnes je cyklámen vo voľnej prírode chránený medzinárodným dohovorom CITES a jeho zber je zakázaný. (CITES je oficiálne používaná skratka pre Dohovor o medzinárodnom obchode s ohrozenými druhmi voľne žijúcich živočíchov a voľne rastúcich rastlín - Convention on International Trade in Endangered Species of Wild Fauna and Flora.)"
        },
        liecba:{
            liecitelstvo:"Na výrobu liekov slúži podzemná hľuza - saponíny, ktoré sa v nej nachádzajú, pôsobia upokojujúco, tlmia bolesť a liečia zápaly, preto sa cyklámen najčastejšie používa na liečbu reumatických alebo artritických ochorení. Kedysi sa podával pri menštruačných poruchách, vypätých emocionálnych stavoch či tráviacich ťažkostiach. Aplikoval sa aj proti hadiemu uhryznutiu a na urýchlenie pôrodu. Šťava z koreňa, vdychovaná nosom, má vraj afrodiziakálne účinky. Najnovšie lekárske štúdie potvrdili, že terapia nosovým sprejom s extraktom cyklámenu vedie k výraznému zlepšeniu ťažkostí pri zápaloch nosových a vedľajších nosových dutín. Cyklámen purpurový sa uvádzal už v herbároch zo 16. storočia pod názvom svinský orech. Tento názov bol odvodený od divých svíň, ktoré vyrývajú a požierajú jeho guľovité hľuzy bez akýchkoľvek následkov, aj keď práve podzemné časti obsahujú jedovaté látky so silnými hemolytickými účinkami.",
            fandly:"Cyklámen je znamenitá medecína proti bolesti a hučaniu v ušiach aj proti hluchote. Koreň cyklámenu vydlab znútra, naplň olejom z horkých mandlí a otvor znova uzavri. Takto pripravený koreň upeč v horúcom popole a potom zneho vytlač šťavu. Šťavu púšťaj do ucha, keď sa chystáš na odpočinok.",
        },
        recept:{
            nazov:"Tinktúra z cyklámenu",
            ingrediencie:["100 g hľuzy", " 500 ml čistého 40 - 60 % liehu"],
            priprava:"Očistené hľuzy rýchlo nakrájame na plátky, vložíme do fľaše a zalejeme liehom. Fľašu uzatvoríme a pri izbovej teplote necháme týždeň odstáť, občas ňou potrasieme. Na ôsmy deň tinktúru prefiltrujeme, čím ju zbavíme nadbytočných usadenín a kúskov rastliny. Tinktúrou potierame boľavé reumatické kĺby, nikdy ju neužívame vnútorne."
        },
        upozornenie:{
            x:1,
            text:"Na domácu liečby je cyklámen priveľmi nebezpečný, už pri nízkych dávkach (300 mg) totiž môže dôjsť k otrave. Tehotné a dojčiace ženy ho nesmú užívať."
        }
    },
    
    {
        zaklad:{
            nazov:"Čakanka obyčajná",
            latinsky:"Cichorium intybus",
            strana:""
        },
        opis:{
            popis:"Čakanka je trváca bylina vysoká vyše metra. Má vretenovitý koreň, ktorý pri poranení roní mliečnu šťavu. V Prvom roku vyháňa iba ružicu prízemných listov, stonka vyrastá až v druhom roku. je rozkonárená a rozkvitajú na nej súkvetia - úbory - veľké až 4 cm, ktoré majú bledomodrú, iba zriedka ružovú alebo bielu farbu. Kvitne od júla do septembra. Plod je nažka s chocholcom na vrchole (premenený kalich).",
            vyskyt:"Rozšírená je v celej Eurázii. Prenesená bola i do Severnej a Južnej Ameriky, Austrálie, na Nový Zéland a na Azory. DArí sa jej v teplejších oblastiach, iba zriedkavo sa vyskytuje vo výške nad 600 m n. m. U nás je pomerne hojná, nájdeme ju na okrajoch ciest, na medziach, pastvinách a na suchých lúkach."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Zbieram kvitnúcu vňať. Kvety sa ráno otvárajú iba za slnečného počasia a popoludní sa zase zatvárajú. Vňať dobre schne a suší sa v tenšej vrstve v tieni a bez obracania. Správne usušená vňať má zelenú až sivozelenú farby, kvety pri sušení vyblednú až dobiela. Koreň na liečebné účely získavame iba z voľne rastúcich rastlín. Vyrývame ho na jeseň v septembri a v októbri, čo najrýchlejšie ho umyjeme a nakrájame na kúsky dlhé asi 15 cm. Na sušenie je vhodnejšie umelé teplo až do teploty 50 °C alebo tieň."
        },
        liecba:{
            liecitelstvo:"V ľudovom liečiteľstve sa používa celá rastlina, no najmä usušený koreň, a to pri žlčníkových ťažkostiach a poruchách tráviacej sústavy. Podáva sa vo forme odvaru a prisudzuje sa mu schopnosť „čistiť krv“, preto sa odporúča piť aj pri vyrážkach a vriedkovitej pokožke. Pri týchto problémoch sa postihnutá koža čakankovým odvarom aj umýva a ošetruje. Horčiny obsiahnuté v rastline podporujú liečbu pri poruchách pečene a žlčníka, zlepšujú trávenie a chuť do jedla. Z mladých listov si môžeme pripraviť šalát so značným obsahom vitamínu C, mladé listové výhonky (púčiky) sú obľúbenou zeleninou najmä v zimnom období. Usušené a upražené korene po zomletí slúžili ako náhrada zrnkovej kávy, tzv. cigória, ktorá sa po Európe rozšírila najmň v období zhoršeného zásobavania kávou za napoleonských vojen. Na výroby cigórie sa používa koreň pestovanej čakanky, jej pitie sa odporäča na zlepšenie trávenia pri jednotvárnej strave.",
            fandly:"Hasí rozpálenú slezinu a pečeň, stolicou odstraňuje z tela hlieny a žlč a je výbornou medecínou proti zimnici, zlatenici [žltačke] a vodnateľnosti. Užíva sa aj bylina ja koreň aj šťava vytlačená z byliny. Byľ a koreň sa môžu variť vo víne, v pive alebo bo bode, koreň sa jedáva pocukrovaný. Pomáha aj proti opuchom.",
        },
        recept:{
            nazov:"Odvar z čakanky",
            ingrediencie:["1 lyžica najemno nakrájaného koreňa alebo zmesi koreňa s vňaťou", "1/4 l vody"],
            priprava:"Drogu necháme prejsť varom, na 10 minút odstavíme a prededíme. Necháme celkom vychladnúť a popíjame ráno a večer pri žlčníkových ťažkostiach, pri rekonvalescencii po infekčných chorobách pečene (napríklad žltačke) alebo pri liečbe močového mechúra."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },

    {
        zaklad:{
            nazov:"Čemerica čierna",
            latinsky:"Helleborus niger",
            strana:""
        },
        opis:{
            popis:"Čemerica čierna je tuhá trváca bylina vysoká 15 až 30 cm. Má vzpriamenú stonku a holé kožovité listy so stopkou, ktorá je naspodku červeno škvrnitá. Kvety sú jednocuhé špinavobiele až ružovkasté a veľké 5 až 8 cm. Kvitne od januára do marca, preto bolo vyšľachtených množstvo kultivarov čemerice ako okrasnej rastliny. Plod je mnohosemenný mechúrik.",
            vyskyt:"Pochádza z južnej a zo strednej Európy. Vyskytuje sa najmä na vápencových pôdach horských polôh do výšky až 1 800 m n. m. - vo Východných Alpách, v Apeninách, Dinátskych pohoriach. U nás rastie v podhorských oblastiach, no pestuje sa aj v záhradách, odkiaľ občas splanieva."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Koreň sa zbiera v marci. Musí sa očistiť od hliny a pri umývaní ho pridlaho nenamáčame, aby nenasiakol vodou. Suší sa v tieni alebo pri umelom teple maximálne do teploty 45°C. Dobre usušená droga je bez pachu, má pálčivú a horkú chuť."
        },
        liecba:{
            liecitelstvo:"Čemerica čierna dostala druhové meno podľa čiernohnedej až čiernej farby hrubého podzemku. Účinnou látkou sú najmä glykozidy, ktoré spomaľujú činnosť srdca a tým zlepšujú aktivity srdcového svalu, pôsobia aj močopudne a preháňavo. Čemerica sa kedysi používala v psychiatrii, podávala sa duševne chorým na „vyhnanie zlého ducha” - neborák musl vdychovať prášok z podzemku, ktorý dráždi sliznice a vyvoláva kýchanie, a takto mal vykýchať šialenstvo Melanchólia sa ličila neprestajným nosením uvareného koreňa zabaleného v bielom plátne pri sebe. Drvený koreň bežne slúžil sako šnupací prášok. Zbonka sa sypal na rany, pretože lokálne umŕtvuje. Odvarom alebo masťou z koreňa sa hubili vši a liečil sa svrab. Glykozidy, ktoré čemerica obsahuje, sú nebezpečne jedovaté. Otrava sa prejavuje pálením v ústach, silným slinením, vracaním, hnačkou, rozšírenými zrenicami, závratmi až bezvedomím. Zdravotné komplikácie vznikajú aj po konzumácii mlieka od kráv, ktoré spásli väčšie množstvo čemerice. Dnes sa na domácu liečby vôbec nepoužíva.",
            fandly:"Čemerica čierna purguje [čistí] a vyháňa v stolici všelijaké vlhkosti. Má sa dávať najmä tým, čo majú padpcu chorobu [epilepsiu] a ktorým chodia po rozume a ťažké myšlienky, ako aj tým, ktorí sú obťažení kŕčom z podagry [dny]. Jej koreň sa cez noc máča vo vode, potom sa precedí a obyčajne ráno sa v teple z neho vypije pol pohára. Čemerica silno čistí oboma koncami, spodkom aj vrchom. Galenos však radí neužívať ju vnútorne, ale prikladať iva zvonku proti prašivine a iným nečistotám rozšíreným po tele.",
        },
        recept:{
            nazov:"Ľudová mágia - Faustova zmes na vyháňanie zlých duchov",
            ingrediencie:["prášok z koreňa čemerice", "cesnak", "sírny kvet"],
            priprava:"Rozdrvený sušený koreň zmiešame so sušeným cesnakom a sírnym kvetom, zmes nasypeme na žeravé drevené uhlia a vyslovujeme tajomné formulky. Alebo: Keď budeš pred sebou rozsýpať prášok z koreňa, nepozorovane sa dostaneš, kam budeš chcieť."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Čerešňa višňová",
            latinsky:"Cerasus vulgaris",
            strana:""
        },
        opis:{
            popis:"Višňa je listnatý ker alebo strom, väčšinou dorastajúci do výšky 8 až 10 m. Kôra má hnedú až fialovkastú farby a odlupuje sa vo vodorovných pruhoch. Mladé konáre sú lesklé, spočiatku bledozelené neskôr červenohnedé. Listy sú vajcovité, končisté, s pílkovitým okrajom, na líci tmavozelené, na rube bledšie a žilnaté. Kvety majú päť bielych korunných lupienkov, rozkvitajú v apríli až máji. Plody sú stopkaté guľaté kôstkovice.",
            vyskyt:"Pôvodná domovina višne je pravdepodobne juhovýchodná Európa, západná Ázia a severná India. Rastie v miernom podnebnom pásme a pestovaním sa rozšírila do celého sveta. U nás patrí medzi obľúbené ovocné stromy. Ako planú ju nájdeme na rumoviskách stráňach, medziach, okrajoch lesa alebo popri cestách, kde sa v minulosti aj bežne vysádzala."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"V ľudovom liečiteľstve je viňa strom so širokou škálou uplatnenia. V júni a v júli zbierame zrelé plody - konzumujú sa priamo alebo sa ďalej spracúvajú na sirupy, zaváraniny, likéry a ovocné víno, kandizujú sa a sušia. Stopky sa pomerne ľahko sušia a uchovávajú, môžu sa pomlieť na prášok Čerstvé slúžia na výrobu tinktúry bohatej na od. Živicu zbierame príležitostne, lístia na priame využitie."
        },
        liecba:{
            liecitelstvo:"Plody višne sú obľúbené a zdravé ovocie. Obsahujú vitamíny skupiny B a ďalšie, organizmu dodávajú stopové prvky, napríklad jód, železo, horčík, draslík, podporujú tvorby červených krviniek, stimulujú imunitný systém a látkovú premenu. Konzumácia niekoľkých višní (alebo čerešní) denne reguluje hladinu kyseliny močovej v tele a pôsobí preventívne proti vzniku dny. Chráni väzivá a kĺby, znižuje bolesť a zápaly pri artritíde, podporuje zdravý stav kože a ďasien. Stopky višní sú vynikajúci tradičný prostriedok proti zadržiavaniu vody, liečia chronické aj akútne ťažkosti s močovými cestami, odstraňujú močové kamene, podporujú látkovú premenu, bývajú súčasťou diabetických čajov, pôsobia aj proti hnačke, mierne znižujú krvný tlak, prospievajú štítnej žľaze. Umývanie odvarom z višňových listov zastavuje kvácanie. Živica rozpustená v octe prospieva vlasovej pokožke, likviduje lupiny a chrastičky vo vlasoch malých detí.",
            fandly:"Z višní připravuje se Confortativum čili posilnění, jehož možno užívati po celý rok: Vezmi libobolné množství kyselých višní, moč je ve směsi medu a cukru po dvě neděle; pak uvař nápoj z yzopu, růže, fialky a lékořice, okořeň dle libosti skořicí, hřebíčkem a muškátovým květem, přidej dobrého vína a v této tekutině nechej višně  opět 14 dnů státi; posléze usuš tyto višně na slunci. Možno je dávati na stůl vlhké nebo suché.",
        },
        recept:{
            nazov:"Nápoj na liečbu cukrovky",
            ingrediencie:["50 g vňate mäty", "10 g vňate ľubovníka", "10 g koreňa ibiša", "10 g višňových alebo čerešňových stopiek", "10 g kukuričných „vlasov”"],
            priprava:"Zmes zalejeme 2 l vody a zvaríme na polovicu. Keď nápoj vychladne, scedíme ho a nalejeme do fľaše, ktorú vzduchotesne uzatvoríme. Ráno z neho vypijeme za šálku, zvyšok popíjame počas dňa každé 2 hodiny po dúškoch (lyžiciach). V rámci pitného režimu liečby podporíme pitím slabého zelerového odvaru."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },

    {
        zaklad:{
            nazov:"Čiernohlávok obyčajný",
            latinsky:"Prunella vulgaris",
            strana:""
        },
        opis:{
            popis:"Čiernohlávok obyčajný je trváca, 5 až 25 cm vysoká bylina. Stonka býva väčšinou nerozkonárená a zakončená paklasom modrofialových kvetov. Listy sú stopkaté, najvyšší pár sedí tesne pod súkvetím. Kvitne od júna do augusta, na kosených lúkach kvitne aj viac ráz ročne až do októbra. Plody sú guľaté lesklé tvrdky.",
            vyskyt:"Rastie v celej Európe vrátane Islandu, v severnej Afrike, na Sibíri a vo východnej Ázii, prenesený bol aj do Severnej a Južnej Ameriky, Austrálie na Nový Zéland. U nás je hojný na celom území. Najviac obľubuje vlhké lúky, ale nájdeme ho aj v parkoch, na medziach a lesných čistinách."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Zbierame kvitnúcu vňač, ktorú sušíme v tenkej vrstve v tieni. Aby listy nesčerneli, teplota by nemala presiahnuť 35 °C. Mladé listy čiernohlávka, zbierané na jar, môžeme použiť v kuchyni ako súčasť jarných šalátov alebo do jarných nákypov a plniek s mladou žihľavou a ďalšími bylinkami."
        },
        liecba:{
            liecitelstvo:"Čiernohlávok zvyšuje zrážavosť krvi a podporuje hojenie rán. Vďaka protizápalovým účinkom zápar slúži aj ako kloktadlo pri angíne alebo iných infekčných ochoreniach ústnej dutiny a hrdla. Zápar sa užíva i pri žalúdočných ťažkostiach, pomáha pri kŕčoch a zápaloch. Čiernohlávok posilňuje organizmus pri chrípke a nachladnutí, prospieva pečeni, močovému mechúru a pľúcam. Má nespochybniteľný antibiotický antivírusový účinok, likviduje celý rad patogénnych plesní. Na hemoroidy ho možno užívať vnútorne aj zvonka vo forme kúpeľov. Kúpeľ navyše upokojuje a zmierňuje bolesť svalov a kĺbov. Na hojenie rán sa používajú obklady z roztlačených čerstvých rastlín, pretože ich šťava zastavuje krvácanie a má dezinfekčný účinok. Môžeme použiť aj zásyp z najemno pomletej usušenej drogy, ktorý čistí a dezinfikuje rany, čím potláča tvorbu hnisu. Odvar zo sušených rastlín zastavuje krvácanie.",
            fandly:"Hojí zápal hrdla (angínu), vredy v hrdle, pľúca ja všetky rany, rozháňa seknutú krv, hojí aj boľavé zuby. Používa sa na vyplakovanie (gargarizovanie) alebo sa priloží na boľavé miesto. Proti infekciám na jazyku a proti zápalom a horúčosti úst naozaj pomôže vyplakovanie vodou z čiernohlávku, ak sa do nej pridá trochu ružového medu. Rovnakú účinnosť má aj jeho kvet a listy uvarené vo víne alebo v medovej vode, aj šťava vytlačená z byle. Kto vypije dva loty [1 lót = 17.5 g] odvaru, hojí a vyčistí zimnicu usadenú v prsiach. Pi tri loty, zastaví ti každodennú zimnicu aj tretiačku.",
        },
        recept:{
            nazov:"Zápar z čiernohlávka",
            ingrediencie:["2 g (za lyžičku) sušenej väate čiernohlávka", "150 ml vody"],
            priprava:"Vňať zalejem vriacou vodou a 10 minút lúhujeme, potom scedíme. Popíjame vždy čerstvo pripravený zápar, a to tri razy denne pred jedlom. Na podporu pečene, napríklad po infekcii alebo ak je stukovatená, sa odporúča kombinácia čiernohlávka a pestreca mariánskeho."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Ďatelina lúčna",
            latinsky:"Trifolium pratense",
            strana:""
        },
        opis:{
            popis:"Ďatelina lúčna je trváca bylina s ružicou prízemných listov a so stonkou vysokou 20 až 50 cm. Stonka býva vzpraimená alebo poliehavá, rozkonárená, porastená stopkatými trojpočetnýmilistami, ktoré majú bledšiu alebo červenohnedú krsbu. Súkvetia sú guľovité hlávky s podpornými listami, kvety majú červenú alebo bielu farbu. Kvitne od mája do októbra. Plod je struk s malými ploskými semenami.",
            vyskyt:"Ďatelina je rozšírená v severozápadnej Afrike, v Európe a Ázii, rastie aj v Japonsku. V Severnej a Južnej Amerike, Austrálii a na Novom Zélande je nepôvodná. U nása je všade hojná, nájdeme ju na lúkach pastvinách, na okrajoch lesov. Na poliach sa pestujú rozličné šľachtené odrody."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Používa sa kvet. Zbierame nerozpadnuté hlávky, priveľmi rozkvitnuté su bezcenné. pri zbere treba odstrániť podporné listy. Kvety necháme jeden deň zavädnúť na slnku, potom ich dosúšame v tieni na dobre vetranom mieste, umelé sušenie by nemalo presiahnuť teplotu 35 °C.Pri sušení s drogou manipulujeme opatrne a čo najmenej, aby sa súkvetia nerozpadli. Skladujeme na suchom a tmavom mieste."
        },
        liecba:{
            liecitelstvo:"Sušené kvety ďateliny sa dnes pridávajú do čajových zmesí najmä pre príjemnú chuť a vôňu, obsahujú však aj celý rad účinných látok - glykozidy, éterické oleje, triesloviny, organické kyseliny. Čoraz viac sa cení, že obsahujú fytoestrogénu, ktoré sú štruktúrou príbuzné ženským hormónom a čiastočne môžu nahradiť pokles ich hladiny u starnúcich žien, vďaka čomu zmierňujú klimaktrerické ťažkosti a spomaľujú rednutie kostí. Z ďateliny sa robí aj zápar na úpravu stolice, najmä pri hnačkách. Zvonka vďaka dezinfekčným účinkom slúži na umývanie zapálených ekzémov a hnisavych rán. V ľudovom liečiteľstve sa používa na obklady pri mumpse, pravdepodobne aj preto, lebo ju obľubujú zajace a králiky.",
            fandly:"",
        },
        recept:{
            nazov:"Zápar z kvetov ďateliny",
            ingrediencie:["2 lyžice sušených ďatelinových kvetov", "1/2 l vody"],
            priprava:"Sušené kvety zalejeme vriacou vodou a necháme 5 minút spariť. Precedíme a popíjame teplý. Zápar je vhodný na pravidelné dlhodobé užívanie na zmiernenie ťažkostí spojených s klimaktériom."
        },
        upozornenie:{
            x:1,
            text:"Pití odvaru květu i semene v medové vodě nebo ve víně, anebo klystýr z něho do života, obměkčuje tuhý a tvrdý šlem ve střevech a léčí zranění a koliky ve střevech. Jetel [ďatelina] je užitečná píce pro telata a mladá jehňata. Včeličky vyhledávají v květu jetelovém med stejně jako v mateřídoušce. Někteří praví, že pojídání nebo pití jetele s červeným květem zastavuje ženský výtok, kdežto druhý s bílým květem prý jej vyvolává."
        }
    },
    
    {
        zaklad:{
            nazov:"Deväťsil lekársky",
            latinsky:"Petasites hybridus",
            strana:""
        },
        opis:{
            popis:"Deväťsil je trváca bylina s hrubým podzemkom. Na jar vyháňa jednoduché šupinaté stvoly ukončené bohatým strapcom úborov. Kvety sú ružovofialové, bledoružové až belavé. Počas kvitnutia je stonka vysoká 10 až 40 cm, v čase vytvárania plodov 70 až 100 cm. Kvitne od marca do mája. Veľké listy vyrastajú v prízemnej ružici a majú srdcovito okrúhly tvar, na rube sú sivo plstnaté, neskôr holé. Vyrastajú až po odkvitnutí a dosahujú priemer výše pol metra. Plod je nažka s chocholcom.",
            vyskyt:"Deväťsil je európska bylina pôvodom zo strednej a z južnej Európy, rozšíril sa aj do severnej Európy a nájdeme ho aj v západnej a severnej Ázii. Medzi jeho obľúbené stanovištia patria vlhké alebo lužné lesy, tienisté prameniská, brehy potokov či podmáčané lúky, a to najmä v podhorských a horských oblastiach. U nás sa vyskytuje roztrúsene, vo vyšších polohách hojne."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Podzemok sa zbiera skoro na jar v marci alebo  apríli ešte pred rozvinutím kvetov. Narýchlo ho umyjeme a sušíme v tieni, pri umelom sušení teplota nesmie presiahnuť 40 °C. Čerstvé listy na obklady zbierame podľa potreby celú jar a celé leto."
        },
        liecba:{
            liecitelstvo:"Ako napovedá jeho meno, deväťsil býval veľmi cenenou liečivou rastlinou. Účinné látky na vnútorné použitie sa získavajú z podzemku. Deväťsil pôsobí najmä pri kŕčoch dýchacích ciest, žalúdka či orgánov vylučovacej sústavy, upokojuje podráždený žlčník a reguluje látkové premenu. Výrazne zmierňuje kašeľ a astmatické záchvaty, lieči dnu a reumu. Je močopudný a pomáha proti zápche, z čriev odstraňuje parazitické hlísty. Keďže nemá nežiaduce vedľajšie účinku, možno ho aplikovať aj u detí. Zvonka sa na odreniny v výrony pri vyvrtnutí používajú obklady z čerstvých, jemne naklepaných listov. V ľudovom liečiteľstve sa odporúčali obklady na voľavé, opotrebované kĺby a na najrozličnejšie zápaly.",
            fandly:"Na mnohých bylo vyzkoušeno, že kořen koňského kopyta [deväťsilu] je užitečný proti morovému neduhu a morovým zimnicím, když by někdo vypil prášku z něho ve váze půl lotu [1 lot = 16 g] v dobrém bílém víně, na to se položil do lůžka, se přikryl a potil, neboť mocně vyhání jedovatost potem. Vychvaluje se také velice proti kolice a záduše od matky  [maternice], když se užívá způsobem dříve uvedeným.",
        },
        recept:{
            nazov:"Obklad z deväťsilu",
            ingrediencie:["listy z deväťsilu"],
            priprava:"Vyberieme čisté čerstvé listy, aby sme ich nemuseli umývať a namáčať. Odrežeme tvrdé stopky a listy prikladáme hornou zelenou, pôvodne k slnku otočenou stranou priamo na postihnuté miesto, najlepšie na noc. Obklad poriadne obviažeme, aby pôsobil v teple. Používa sa na opuchy, pri reumatizme, dne, ischiase, chronickej artróze, pri zápale žíl, uzlín, pri tuberkulóze či čiernom kašli."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Divozel sápovitý",
            latinsky:"Verbascum phlomoides",
            strana:""
        },
        opis:{
            popis:"Divozel je statná dvojročná bylina. V prvom roku života vytvára prízemnú ružicu vlanto chlpatých listov, druhý rok vyháňa kvitnúcu stonku s výškou až 2 m. Kvety sú usporiadané v pastrapci, v priemere majú 4 až 5 cm a sú svetložlté. Kvitne od júna do septembra. Plod je tobolka s veľkým počtom drobných hnedých semien. Je veľmi podobný vízko príbuznému divozelu veľkokvetnému (Vervascum densiflorum), od ktorého sa líši iba nezbiahavými hormnými vyľovými listami.",
            vyskyt:"Rastie predovšetkým v strednej a južnej európe a zasahuje až do Prednej Ázie (Gruzínsko, Azerbajdžan). Uprednostňuje slnečné, suchšie stanovištia, takže ho nájdeme na južných kamenitých stráňach, suchých čistinách a pastvinách, v opustených lomoch a pod. U nás sa vyskytuje roztrúsene, zaraďuje sa medzi vzácnejšie druhy. Na plánovaný zber sa pestuje najmä divozel veľkokvetý."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Na zber kvetov sú vhodné neskoré doobedia počas suchých slnečných dní. Z postupne rozkvitajúcich kvetov zbierame iba koruny s tyčinkami vez kalicha. Jednotlivé kvety kvitnú iba jeden deň, ráno sa rozvinú a už poobede opadávajú. Opadané a opadávajúce koruny nezbierame, pri sušení hnednú a drogu znehodnocujú. Kvety sú veľmi náchylné na utlačenie, preto ich sušíme hneď v prvý deň v tenkej vrstve na slnku alebo umelo pri teplote do 60 °C. Sušené kvety musia ostať zlatožlté musia mať výraznú medovú vôňu a musia byť slizovité. Čerstvé listy na priamu spotrebu trháme od júna do septembra. Kedysi sa na jeseň zbieral aj koreň."
        },
        liecba:{
            liecitelstvo:"V ľudovom liečiteľstve sa byužívajú oba druhy divozela - veľkokvetý aj sápovitý. Divozel vraj vie  „robiť divy“, pretože cenné látky sa v rastline vzájomne dopĺňajú. Kvet je veľmi účinný pri zápalových chorobách priedušiek spojených s kašľom a pri prieduškovej astme (uľahčuje odkašliavanie). Čaj z kvetov lieči poruchy činnosti sleziny a pečene a reguluje menštruačný cyklus, uvoľňuje kŕče a pôsobí močopudne, prospieva i pri zápaloch žalúdka a čriev. Močopudne pôsobí aj koreň, ktorý si cenili najmä v minulosti. Naklepané listy divozela slúýia ako obklady prjiopuchoch a vredozch. Obklady z kvetov sa aplikujú pri liečbe holenných vredov.",
            fandly:"Hojí prsia, kašeľ, pľúca, vykašlávanie krvi, žranie a všetky vnútorné bolesti a pálčivé vredy, keď sa užíva ako prášok alebo ako čaj. Veľmi pomáha, ak sa uvarí vo vode, do ktorej sa potom namočí šatka a tá sa priloží na podagru [dnu] alebo na pálčivý vred. Odvar z jeho koreňa hojí katar aj šľak [porážku]. Ak sa časť tejto byliny vloží do zlata, podivuhodne pôsobí proti všetkým vlhkostiam tela.",
        },
        recept:{
            nazov:"Divozelový olej",
            ingrediencie:["za pohár čerstvých kvetov", "kvalitný olej podľa potreby"],
            priprava:"Čerstvé kvety vložíme do fľaše, zalejeme olejom a necháme 1 deň stáť na slnečnom okennom parapete. Používame na natieranie pri neuralgiách a reumatizme, pri vredoch, opuchoch a na zmiernenie bolesti z kŕčových žíl."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Dráč obyčajný",
            latinsky:"Berberis vulgaris",
            strana:""
        },
        opis:{
            popis:"Dráč je do 3 m bysoký tŕnitý ker s hladkou kôrou. Má opadavé striedavé vajcorité listy, vyrastajúce na brachyblastoch tesne na tŕňmi. Kvety sú žlté a usporiadané do prevísajúcich jednoduchých strapcov. Kvitne od apríla do júna. Plod je podlhovastá bobuľa bledočervenej farby.",
            vyskyt:"Rastie v strednej a južnej Európe, cez Ukrajinu, južné Rusko a Kaukaz zasahuje až do Malej Ázie. Je svetlomilný, uprednostňuje vápence a dolomity. Nájdeme ho na slnečných svahoch, vo svetlých lesoch a kroviskách. Často sa pestuje v parkoch ako okrasný ker. U nás patrí medzi zriedkavejšie, pretože v minulosti bol takmer vyhubený ako jeden z hostiteľov hrdze trávovej, poškodzujúcej pšenicu. Neskôr sa zistilo, že hrdza trávová dráč na úplny vývoj vôbec nepotrebuje."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Ako liečivo slúži kôra, listy a plody. Na jar získavame kôru z koreňov, niekedy aj z konárov. Mladé listy zbierame v apríli až máji ešte pred rozkvitnutím. Plody sa zbierajú na prelome septembra a októbra v čase zrelosti a sušia sa v tenkých vrstvách na sitách na slnku. Pri dosúšaní by umelé teplo nemalo presiahnuť teplotu 50°C. Kôra je bez pachu, veľmi horká, plodu sú kyslasté."
        },
        liecba:{
            liecitelstvo:"Tinktúra z listov dráča alebo odvar z listov či z kôry sa užíva pri žlčníkových zápaloch a poruchách pečene, pretože zvyšuje vylučovanie žlče. Dráč je aj močopudný a tlmí krvácanie maternice. Prospieva cievam, znižuje krvný tlak, zvyšuje imunitu, má silné protizápalové účinky a ničí celý rad mikroorganizmov, napríklad stafylokoky, streptokoky a bičíkovce. Lieči hnačkové ochorenie, ako je salmonela, dyzentéria či cholera, je účinný pri infekcii močových siest alebo vaginálnej mykóze. Obklady z odvaru z dráčovej kôry pomáhajú pri zápaloch očí a zabraňujú rozvoju lupienky. Odvarom z listov možno kloktať pri zápaloch ústnej dutiny.",
            fandly:"Šťava alebo víno z dráča spevňuje kývajúce sa zuby a posilňuje ich mäso [ďasná], gargarizovaním a kloktaním odstraňuje opuchy hrdla a zastavuje tečúce vlhkosti. Hojí čerstvé rany a zaceľuje staré vredy. Sú účinné aj proti vredom a horúčke. Víno z dráča s koreňom fialky a vodou z nátržníka sa dáva piť proti vnútorným pálčivým a morovým zimniciam. Ono nielenže uháša smäd, ale udúša aj horúce morové pary vystupujúce k srdcu, s veľkým úžitkom sa podáva proti úplavici a vtedy, keď človek nevládze udržať pokrmy v žalúdku. Naozaj posilňuje žalúdok, pečeň a srdce, najmä keď sa dostáva do srdca penohorkosť, z čoho pochádza ťažoba, vracanie,mdloby a trasenie srdca.",
        },
        recept:{
            nazov:"Odvar z dráčovej kôry",
            ingrediencie:["1 lyžička (2g) nakrájanej dráčovej kôry", "1/2 l vody"],
            priprava:"Kôru vložíme do studenej vody a uvedieme ju do varu. Varíme 15 až 30 minút, potom scedíme. Popíjame každý druhý deň v priebehu celého dňa. Užíva sa najmä ako diuretikum pri chorobách obličiek, obličkových kameňoch, zápaloch močových ciest, ale aj na iné zdravotné ťažkosti. Súvislá liečba by nemala trvať dlhšie ako mesiac."
        },
        upozornenie:{
            x:1,
            text:"Iba celkom zrelé plody neobsahujú alkaloidy, ktoré môžu byť vo väčšom množstve ebezpečné - dráždia nervový systém a spôsobujú ochrnutie dýchacích centier. Môžu omámiť, vyvolať vracanie alebo hnačku. Predávkovanie dráčovou drogou môže poškodiť obličky. Nie je vhodný pre deti, dojčiace a tehotné ženy."
        }
    },
    
    {
        zaklad:{
            nazov:"Drieň obyčajný",
            latinsky:"Cornus mas",
            strana:""
        },
        opis:{
            popis:"Drieň je ker alebo malý strom s výškou 2 až 6 m. Má rovné, vystúpavé konáre a tenkú rozbrázdenú tmavosivú až hnedú borku, ktorá sa odlupuje v tenkých plochých šupinách. Listy sú elipsovité až vajcovité, na lícnej strane sviežozelené a lesklé, na rube svetlejšie. Kvety sú bledožlté, rozkvitajú skoro na jar v marci a v apríli ešte pred olistením. Sú drobné a po 18 až 30 usporiadané v guľatých okolíkoch. Plod je červená kôstkovica dlhá 1 až 3 cm (drienka).",
            vyskyt:"Pravdepodobne pochádza z Balkánu a Malej Ázie. Vyskytuje sa v južnej Európe, jeho severnejšie stanovištia zasahujú do strednej Európy (Nemecko, Čechy, Morava, Slovensko) a pokračujú na východ na Krym a Kaukaz. Uprednostňuje krasové vápencové lokality, krovinaté stráne, okraje svetlých lesov a skalnaté svahy. U nás ho najčastejšie nájdeme v pásme pahorkatín, vysádza sa do záhrad a parkov. Patrí medzi vzácnejšie a ohrozené druhy našej flóry."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Zbierame celkom zrelé plody, čiže najskôr koncom augusta a v septembri, ke%d majú sýtočervenú farby a samy opadávajú z konárov. Na zber je najlepšie rozprestrieť pod ker plachtu a drienky nechať opadať alebo ich môžeme striasť. Z plodov odtrhneme stopky, odkôstkujeme ich a usušíme v tenkej vrstve, umelo dosúšame pri teplote do 50°C. Pri skladovaní ich chránime pred zvlhnutím a plesňami. Kôru získavame na jar z mladých konárov, čerstvé listy môžeme trhať od mája do septembra."
        },
        liecba:{
            liecitelstvo:"Plody drieňa sú bohaté na kyselinu vínnu a jablčnú, pektíny, tiesloviny, draslík, vápnik, horčík, provitamín A a vitamín C. Sušené plody sa používajú pri žalúdočných a črevných chorobách, pri hnačkách, posilňujú imunitný systém a sú vhodné pri rekonvalescencii. Na tento účel sa vyrábajú aj komp´ty a sirupy, pretože surové dtienky bývajú sladkokyslé, nezrelé sú trpké. Najčastejšia forma liečiva je prášok zo sušených plodov, ktorý sa užíva po lyžičkách albo sa z neho pripravuje odvar. Odvar z čerstvej kôry, ktorá obsahuje triesloviny, jablčnan vápenatý, pektín a ďalšie látky, pomáha pri žalúdočných ochoreniach a črevných kataroch. Potlčené lístie vo forme obkladu zmierňuje zápaly rán, a to aj zle sa hojacich a hnisavých.",
            fandly:"Rozdrv listy drieňa a prilož ich na ranu, zmierňujú horúčku; uvar s octom a podrž teplé v ústach, hoja veľkú bolesť zubov. Zomeľ drienky, zmiešaj ich s myrhovým olejom a s vodou vytlačenou z nezrelého hrozna, urob náplasť a prilož ju na žalúdok tým, čo vracajú, i bude im to veľmi na osoh. Podobný účinok bude mať aj na tých, čo majú pokazený žalúdok, bežanie brucha a riedku stolicu. Osoží aj ženám, z ktorých sa krv len tak leje alebo ktoré majú veľký krvotok. Ony si musia priložiť náplasť zozadu na kríže spredu na lono.",
        },
        recept:{
            nazov:"Odvar zo sušených drienok",
            ingrediencie:["8 g podrvených sušených drienok", "200 - 250 ml vody"],
            priprava:"Sušené drienky zalejeme studenou vodou a uvedieme do varu. PO 3 minútach odstavíme, necháme ochladnúť a popíjame tri razy denne pred každým jedlom. Odporúča sa pri chorobnom potení, močovej inkontinencii alebo priveľmi hojnom močení, zabraňuje predčasnému výronu semena a tlmí niektoré typy závratov, hučanie v ušiach a alergie."
        },
        upozornenie:{
            x:1,
            text:"Drienky by sa nemali podávať pri vysokých teplotách, silných hnačkách a pri bolestivom, namáhavom močení."
        }
    },
    
    {
        zaklad:{
            nazov:"Dub letný",
            latinsky:"Quercus robur",
            strana:""
        },
        opis:{
            popis:"Dub je mohutný listnatý dlhoveký strom, ktorý sa výnimočne môže dožiť aj vyše 1 000 rokov. Dosahuje výšku 50 m a vytvára rozložitú nepravidelnú korunu s pokrivenými konármi. Mladá borka je lesklá, stribristosivá až hnedastá, neskôr je nahrubo rozpukaná, hnedo- až čiernosivá. Listy sú krátko stopkaté, tuhé a kožovité. Kvety sp jednodomé, samičie vyrastajú na dlhých stopkách po 2 až 5 z pazúch listov, samčie kvety vytvárajú prevísajúce jahňady. Kvitne od mája do júna. Plody sú veľkú jednosemenné nažky - žalude.",
            vyskyt:"Dub je rozšírený v celej európe. U nás sa mu darí od nížin (lužné lesy) po úpätia hôr, rastie v pôvodných dúbravách aj v zmiešaných lesoch,ako významná lesohospodárska drevina sa obyčajne vysádza."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"Najvýznamnejší liečivý účinok má mladá kôra nazbieraná v marci až apríli, keď je lesklá a hladká. Kôra sa odlupuje z nakrájaných konárov a ľahko sa suší na slnku v hrubších vrstvách alebo v otiepkach. Umelo ju dosúšame pri teplote 40 až 50°C. Na zber sú najvhodnejšie zoťaté mladé stromy vyradené pri prebierke. V marci až apríli z prebierky lesných porastov získavame i púčiky. Kedysi si ich veľmi cenili okrem nich trhali a používali aj čerstvé listy. Ich aplikácia je podobná ako pri kôre, obsahujú však menej účinných látok. V septembri zbierame žalude. Dosúšame ich, pražíme a melieme na žaluďovú múku."
        },
        liecba:{
            liecitelstvo:"Mladá dubová kôra pôsobí zvieravo a protizápalovo, užíva sa najmä pri hnačkách a pri zápaloch tráviacej sústavy, bráni prieniku nákazy z tráviacej sústavy do močových ciest a pohlavných orgánov. Zvonka možno dubovú kôru použiť pri hemoroidoch vo forme kúpeľov, veľmi účinný býva aj klystír. Kúpele zároveň zmierňujú opuchy, kožné zápaly, zmierňujú a liečia prejavy atopického ekzému, slabšie popáleniny a omrzliny, ďalej potláčajú potenie a zapáchanie nôh, likvidujú plesne. kloktanie odvaru z dubovej kôry sa odporúča pri zápaloch ústnej dutiny, paradentóze alebo pri infekciách v hrdle. Žalude obsahujú okrem trieslovín aj množstvo škrobu, cukry, bielkoviny a olej. Pražením sa obsah trieslovín znižuje a dajú sa jesť. Už v staroveku sa ich zvieravý účinok využíval pri žalúdočných ťažkostiach, dyzentérii, chrlení krvi a ako protijed pri otravách.",
            fandly:"Dubové listy alebo strednú časť dubovej kôry uvar vo víne alebo vo vode a nepochybne zastavíš každé bežanie brucha [hnačku], ženský krvotok, vykašlávanie krvi, červienku  [dyzentériu] a semenotok. Pri červienke malých detí veľmi dobre poslúži voda pálená z mladých dubov… Vhodná je aj pre tých, čo majú záduch a kašlú krv.",
        },
        recept:{
            nazov:"Kloktadlo zo žaluďov",
            ingrediencie:["za hrsť zrelých žaluďov", "1/2 l vody"],
            priprava:"Zrelé žalude varíme vo vode 20 minút, potom ich necháme postáť. Odvar precedíme a zriedime vodou v pomere 1 : 1. Kloktáme pri bolestiach v hrdle, zápaloch ústnej sliznice a hrtana."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Dula podlhovastá",
            latinsky:"Cydonia oblonga",
            strana:""
        },
        opis:{
            popis:"Niekedy je dula malý, 4 až 6 m vysoký strom, inokedy si zachováva formu kra. Jednoduché listy sú stopkaté, široko oválne, na líci holé, na rube plstnaté, na zimu opadávajú. Kvaty vyrastajú na vrchole mladých konárov, sú nápadné, biele alebo bledoružové, veľké 5 - 8 cm. Kvitne od mája do júna. Plod je žltá guľovitá až hruškovitá, na povrchu plstnatá malvica.",
            vyskyt:"Domovom duly je oblasť zakaukazských štátov, Iránu a Turkménska. Zdomácnela na celom svete okrem Austrálie. Do Európy sa rozšírila v stredoveku, keď ju s obľubou vysádzali v kláštorných a zámockých záhradách. Odtieľ na niektorých miestach splanela a dnes voľne rastie napríklad v okolí Limbachu, Čachtíc, Prievidze, v Slovenskom krase a pod."
        },
        zber:{
            mesiace:["", ""],
            casti:["", ""],
            text:"V liečiteľstve sa využívajú semená, získavajú sa ako vedľajší produkt pri kuchynskom spracovaní plodov. Nechávajú sa vyschnúť v tieni, dosúšať sa môžu umelo pri teplote do 50°C. sp náchylné na plesnivenie, preto musia byť celkom suché. Plody sa využívajú v kuchyni, zavárajú sa na viacero spôsobov alebo sa sušia."
        },
        liecba:{
            liecitelstvo:"Semená obsahujú veľké množstvo slizu, ktorý sa získava macerovaním v studenej vode a vnútorne pôsobí preháňavo, zvonka má blahoarné účinky na pokožku. Zmäkčuje a chladí, preto sa používa na liečenie zápalov, oparov, zaparenín, popálenín, popraskaných prsných bradaviek alebo na odstraňovanie opuchov. Výťažok zo semien je vhodný aj na ošetrenie citlivej pokožky okolo očí, na omrzliny, jazvy či na vysušenú a zapálenú kožu. Voňavé plody duly sa niekedy nazývajú aj „Venušine jablká”. Sú zdrojom celého radu využiteľných látok, napríklad cukrov, pektínov, éterických olejov, trieslovín, organických kyselín, minerálnych látok a vitamínov. Odporúčajú sa pri žalúdočných a tráviacich ťažkostiach, pomáhajú pri bolestiach v hrdle. Usušené plátky plodov sa dajú žuvať na odstránenie zápachu z úst. Varené duly upokojujú a hoja zapálené rany a vredy, na ktoré sa prikladajú vo forme kašovitého obkladu.",
            fandly:"Jadrá z plodov dule máčaj vo vode z černohlávka, až kým nenapučia, a potom ich podrž v ústach. Keď nimi natrieš jazyk, pôsobia ptoti pálčivej chorobe a zmierňujú infekciu. Vodou sa môže vyplakovať, gargarizovať aj hrdlo. Dule, upečené a posypané cukrom, osožia žalúdku, zastavujú stupňovanie matky [maternice], odstraňujú nechuť do jedenia ochladzujú telo a zastavujú všelijaké tečenie a bežanie brucha [hnačku]. Pomáhajú aj tým, čo vykašlávajú krv. Náplasť zo surových dpl priložená na žalúdok mierni častú a veľkú stolicu a uháša horúčosť žalúdka.",
        },
        recept:{
            nazov:"Dulová pleťová maska",
            ingrediencie:["plody duly", "50 % lieh"],
            priprava:"Plody nakrájame na tenké plátky, vložíme do fľaše a zalejeme liehom tak, aby boli ponorné. Zakryté necháme týždeň lúhovať a potom precedíme cez sitko. Do výťažku namočíme vatu, na 15 minút ju priložíme na tvár a potom pleť umyjeme vlažnou vodou. Maska je výborná na rozšírené póry."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Durman obyčajný",
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
    },

    {
        zaklad:{
            nazov:"Dúška materina",
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
    },
    
    {
        zaklad:{
            nazov:"Fazuľa šarlátová",
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
    },
    
    {
        zaklad:{
            nazov:"Fenikel obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Fialka trojfarebná",
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
    },
    
    {
        zaklad:{
            nazov:"Hadovník väčší",
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
    },
    
    {
        zaklad:{
            nazov:"Hloh obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Hluchavka biela",
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
    },
    
    {
        zaklad:{
            nazov:"Horec žltý",
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
    },
    
    {
        zaklad:{
            nazov:"Hrach siaty",
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
    },
    
    {
        zaklad:{
            nazov:"Chmeľ obyčajný",
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
    },

    {
        zaklad:{
            nazov:"Chren dedinský",
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
    },
    
    {
        zaklad:{
            nazov:"Ihlica tŕnitá",
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
    },

    {
        zaklad:{
            nazov:"Imelo biele",
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
    },
    
    {
        zaklad:{
            nazov:"Jablčník obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Jahoda obyčajná",
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
    },
    
    {
        zaklad:{
            nazov:"Jarabina vtáčia",
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
    },

    {
        zaklad:{
            nazov:"Jastrabina lekárska",
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
    },
    
    {
        zaklad:{
            nazov:"Javor mliečny",
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
    },
    
    {
        zaklad:{
            nazov:"Jedľa biela",
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
    },
    
    {
        zaklad:{
            nazov:"Jelša lepkavá",
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
    },
    
    {
        zaklad:{
            nazov:"Kapsička pastierska",
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
    },
    
    {
        zaklad:{
            nazov:"Karbinec európsky",
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
    },
    
    {
        zaklad:{
            nazov:"Komonica lekárska",
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
    },
    
    {
        zaklad:{
            nazov:"Konopa siata",
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
    },
    
    {
        zaklad:{
            nazov:"Konvalinka voňavá",
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
    },
    
    {
        zaklad:{
            nazov:"Kôpor voňavý",
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
    },
    
    {
        zaklad:{
            nazov:"Koriander siaty",
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
    },
    
    {
        zaklad:{
            nazov:"Kosatec nemecký",
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
    },
    
    
    {
        zaklad:{
            nazov:"Kostihoj lekársky",
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
    },

    
    {
        zaklad:{
            nazov:"Kotvičník zemný",
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
    },

    
    {
        zaklad:{
            nazov:"Krasovlas bezbyľový",
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
    },

    
    {
        zaklad:{
            nazov:"Krušina jelšová",
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
    },

    
    {
        zaklad:{
            nazov:"Krvavec lekársky",
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
    },

    
    {
        zaklad:{
            nazov:"Kukurica siata",
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
    },

    
    {
        zaklad:{
            nazov:"Kýchavica biela",
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
    },

    
    {
        zaklad:{
            nazov:"Ľan siaty",
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
    },

    
    {
        zaklad:{
            nazov:"Lastovičník väčší",
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
    },

    
    {
        zaklad:{
            nazov:"Lekno biele",
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
    },

    
    {
        zaklad:{
            nazov:"Levanduľa úzkolistá",
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
    },

    
    {
        zaklad:{
            nazov:"Lieska obyčajná",
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
    },

    
    {
        zaklad:{
            nazov:"Ligurček lekársky",
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
    },

    
    {
        zaklad:{
            nazov:"Lipa malolistá",
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
    },

    
    {
        zaklad:{
            nazov:"Lipkavec marinkový",
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
    },

    
    {
        zaklad:{
            nazov:"Lopúch väčší",
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
    },

    
    {
        zaklad:{
            nazov:"Ľubovník bodkovaný",
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
    },

    
    {
        zaklad:{
            nazov:"Ľuľkovec zlomocný",
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
    },

    
    {
        zaklad:{
            nazov:"Ľuľok sladkohorký",
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
    },

    
    {
        zaklad:{
            nazov:"Lykovec jedovatý",
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
    },

    
    {
        zaklad:{
            nazov:"Machovka čerešňová",
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
    },

    
    {
        zaklad:{
            nazov:"Mak siaty",
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
    },

    
    {
        zaklad:{
            nazov:"Mak vlčí",
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
    },

    
    {
        zaklad:{
            nazov:"Marena farbiarska",
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
    },

    
    {
        zaklad:{
            nazov:"Mäta",
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
    },

    
    {
        zaklad:{
            nazov:"Medovka lekárska",
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
    },

    
    {
        zaklad:{
            nazov:"Moruša čierna",
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
    },

    
    {
        zaklad:{
            nazov:"Mrkva obyčajná",
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
    },

    
    {
        zaklad:{
            nazov:"Náprstník červený",
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
    },

    
    {
        zaklad:{
            nazov:"Nátržník husí",
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
    },

    
    {
        zaklad:{
            nazov:"Nátržník vzpriamený",
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
    },

    
    {
        zaklad:{
            nazov:"Nechtík lekársky",
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
    },
    
    {
        zaklad:{
            nazov:"Nevädza poľná",
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
    },
    
    {
        zaklad:{
            nazov:"Oman pravý",
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
    },
    
    {
        zaklad:{
            nazov:"Orech kráľovský",
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
    },
    
    {
        zaklad:{
            nazov:"Ostružina černicová",
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
    },
    
    {
        zaklad:{
            nazov:"Ostružina malinová",
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
    },
    
    {
        zaklad:{
            nazov:"Ovos siaty",
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
    },
    
    {
        zaklad:{
            nazov:"Pagaštan konský",
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
    },
    
    {
        zaklad:{
            nazov:"Palina abrotská",
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
    },
    
    {
        zaklad:{
            nazov:"Palina pravá",
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
    },
    
    {
        zaklad:{
            nazov:"Pamajorán obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Paštrnák siaty",
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
    },
    
    {
        zaklad:{
            nazov:"Pečeňovník trojlaločný",
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
    },
    
    {
        zaklad:{
            nazov:"Pestrec mariánsky",
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
    },
    
    {
        zaklad:{
            nazov:"Petržlen záhradný",
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
    },
    
    {
        zaklad:{
            nazov:"Plavúň obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Pľúcnik lekársky",
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
    },
    
    {
        zaklad:{
            nazov:"Podbeľ liečivý",
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
    },
    
    {
        zaklad:{
            nazov:"Pohánka jedlá",
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
    },
    
    {
        zaklad:{
            nazov:"Posed biely",
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
    },
    
    {
        zaklad:{
            nazov:"Potočnica lekárska",
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
    },
    
    {
        zaklad:{
            nazov:"Praslička roľná",
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
    },
    
    {
        zaklad:{
            nazov:"Pŕhľava dvojdomá",
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
    },
    
    {
        zaklad:{
            nazov:"Prvosienka jarná",
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
    },
    
    {
        zaklad:{
            nazov:"Púpava",
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
    },
    
    {
        zaklad:{
            nazov:"Pupenec roľný",
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
    },
    
    {
        zaklad:{
            nazov:"Puškvorec obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Pyštek obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Rasca lúčna",
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
    },
    
    {
        zaklad:{
            nazov:"Rebríček obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Rozmarín lekársky",
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
    },
    
    {
        zaklad:{
            nazov:"Rozpuk lekársky",
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
    },
    
    {
        zaklad:{
            nazov:"Rozpuk jedovatý",
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
    },
    
    {
        zaklad:{
            nazov:"Rumanček kamilkový",
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
    },
    
    {
        zaklad:{
            nazov:"Ruta voňavá",
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
    },
    
    {
        zaklad:{
            nazov:"Ruža",
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
    },
    
    {
        zaklad:{
            nazov:"Ruža šípová",
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
    },
    
    {
        zaklad:{
            nazov:"Sedmokráska obyčajná",
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
    },
    
    {
        zaklad:{
            nazov:"Senovka grécka",
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
    },
    
    {
        zaklad:{
            nazov:"Skorocel kopijovitý",
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
    },
    
    {
        zaklad:{
            nazov:"Skorocel väčší",
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
    },
    
    {
        zaklad:{
            nazov:"Sladič obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Sladovka hladkoplodá",
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
    },
    
    {
        zaklad:{
            nazov:"Slez lesný",
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
    },
    
    {
        zaklad:{
            nazov:"Slivka trnková",
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
    },
    
    {
        zaklad:{
            nazov:"Smrek obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Srdcovník obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Stavikrv vtáčí",
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
    },
    
    {
        zaklad:{
            nazov:"Šafran siaty",
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
    },
    
    {
        zaklad:{
            nazov:"Šalvia lekárska",
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
    },
    
    {
        zaklad:{
            nazov:"Štetka lesná",
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
    },
    
    {
        zaklad:{
            nazov:"Topoľ čierny",
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
    },
    
    {
        zaklad:{
            nazov:"Topoľ osikový",
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
    },
    
    {
        zaklad:{
            nazov:"Túžobník brestový",
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
    },
    
    {
        zaklad:{
            nazov:"Uhorka siata",
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
    },
    
    {
        zaklad:{
            nazov:"Vachta trojlistá",
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
    },
    
    {
        zaklad:{
            nazov:"Valeriána lekárska",
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
    },
    
    {
        zaklad:{
            nazov:"Vavrín vznešený",
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
    },
    
    {
        zaklad:{
            nazov:"Veronika lekárska",
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
    },
    
    {
        zaklad:{
            nazov:"Vinič hroznorodý",
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
    },
    
    {
        zaklad:{
            nazov:"Vratič obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Vŕba biela",
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
    },
    
    {
        zaklad:{
            nazov:"Vres obyčajný",
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
    },
    
    {
        zaklad:{
            nazov:"Yzop lekársky",
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
    },
    
    {
        zaklad:{
            nazov:"Zádušník brečtanovitý",
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
    },
    
    {
        zaklad:{
            nazov:"Zeler voňavý",
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
    },
    
    {
        zaklad:{
            nazov:"Zemedym lekársky",
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
    },
    
    {
        zaklad:{
            nazov:"Zemežlč menšia",
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
    },
    
    {
        zaklad:{
            nazov:"Zimozeleň menšia",
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
    },
    
    {
        zaklad:{
            nazov:"Zlatobyľ obyčajná",
            latinsky:"Solidago virgaurea",
            strana:"328"
        },
        opis:{
            popis:"Zlatobyľ je trváca , 0,5 až 1m vysoká bylina so vzpriamenou nerozkonárenou ryhovanou stonkou, ktorá je pri zemi fialovkastá. Vyrastajú na ne striedavé listy, ktoré sa smerom nahor zužujú a zmenšujú. Súkvetie je bohatá metlina so žltými kvetnými úbormi. Kvitne od júla do septembra. Plod je chlpatá nažka s jednoduchým chocholcom.",
            vyskyt:"Zlatobyľ rastie v Európe, severozápadnej Afrike, Malej Ázii, na západnej Sibíri a v zakaukazskej oblasti. U nás rastie roztrúsená vo výške 300 až 800 m. n. m. Obľubuje polotieň a stredné vlhké stanovištia, preto sa jej darí na krovinatých stráňach, skalách, vo svetlých suchších lesoch, na čistinách a na okraji lesa."
        },
        zber:{
            mesiace:["máj, ", "jún, ", "júl, ", "august, ", "september"],
            casti:["vňať", "kvitnúca vňať"],
            text:"Zbierame vňať - najčastejšie v júli až septembri zrezávame vrchnú časť kvitnúcej vňate dlhú asi 30cm, zriedkavejšie zbierame vňať v máji a v júni ešte pred rozkvitnutím. Na zber je najvhodnejší čas za slnečného počasia, vtedy má rastlina najvyšší obsah glykozidov. Sušíme ju zavesenú v tieni vo zväzkoch na šnúre pri teplote do 40°C alebo rozloženú v tenkej vrstve. Musí sa sušit rýchlo(najlepšie v prievane), aby si zachovala farbu. Pred uskladnením drogu zbavíme hrubých stoniek a odkvitnutých úborov."
        },
        liecba:{
            liecitelstvo:"Zlatobyľ sa aplikuje predovšetkým ako močopudný a protizápalový prostriedok, priaznivo ovplyvňuje látkovú premenu a má sťahujúci účinok. Odporúča sa staršim mužom pri ťažkostiach s močením spôsobených zväčšenou prostatou, jej močopudné vlastnosti sa využívajú pri zadržiavaní vody v organizme a reumatizme. Možno ju využiť pri chorobách horných dýchacích ciest, kašli a astme. Kúpele s pridaním zlatobyle zlepšujú činnosť ochabnutých svalov a stav kože, zmierňujú viditeľnosť strií. Po kúpeľoch, ktoré opakujeme každý tretí deň v priebehu jedného mesiaca, koža obyčajne zružovie a stiahne sa. Kúpele sa odporúčajú aj na zlepšenie pohyblivosti po úrazoch alebo po obrne, pomáhajú aj pri liečbe podliatin, zle sa hojacich a hnisavých rán, hemoroidov a kožných ekzémov.",
            fandly:"Usuš zlatobyľ obyčajnú, rozdrv na prach a syp do nových alebo aj starých rán a do iných otvorených miest na tele, vyčistí ich a pripravý ich vyhojenie. Ak prach zmiešaš s octom a ocot necháš odpariť, zvýši sa jeho účinok na staré rany a zanedbané vredy.",
        },
        recept:{
            nazov:"Kozmetický zápar",
            ingrediencie:["50g sušenej vňate zlatobyle", "150ml vody"],
            priprava:"Vňať sparíme vriacou vodou, pod pokrievkou lúhujeme do vychladnutia a potom precedíme. Zápar jr vhodný na umývanie mastnej pletis rozšírenými pórmi. Odporúča sa kombinovať ho so silným čajovým výťaZkom v pomere 1:1."
        },
        upozornenie:{
            x:0,
            text:""
        }
    },
    
    {
        zaklad:{
            nazov:"Žindava európska",
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
];
