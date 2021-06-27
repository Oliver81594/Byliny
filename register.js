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
                ["Hadovník väčší", "b"], ["Hloh obyčajný",""], ["Hluchavka biela", "b"], ["Horec žltý", "b"], ["Hrach siaty", ""], ["Chmeľ obyčajný", "b"], ["Chren dedinský", "b"],
                ["Ihlica tŕnitá", "pk"], ["Imelo biele", "k"], 
                ["Jablčník obyčajný", "b"], ["Jahoda obyčajná", "b"], ["Jarabina vtáčia", "s"], ["Jastrabina lekárska", ""], ["Javor mliečny", "s"], ["Jedľa biela", "s"], ["Jelša lepkavá", "ks"], 
                ["Kapsička pastierska", "b"], ["Karbinec európsky", "b"], ["Komonica lekárska", "b"], ["Konopa siata", "b"], ["Konvalinka voňavá", "b"], ["Kôpor voňavý", "b"], ["Koriander siaty", "b"], ["Kosatec nemecký", "b"], ["Kostihoj lekársky", "b"], ["Kotvičník zemný", "b"], ["Krasovlas bezbyľový", "b"], ["Krušina jelšová", "k"], ["Krvavec lekársky", "b"], ["Kukurica siata", ""], ["Kýchavica biela", "b"],
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
            strana:"Bedrovník väčší je trváca bylina s hrubým vretenovitým koreňom, dorastajúci do výšky 40 až 120cm. Stonka je dutá, hranatá a ryhovaná. Súkvetie je okolík zložený z 9 aź 15 okolíčkov, ktoré majú po 14 až 26 bielych kvetov. Plod je vajcovitá rebrovitá dvojnažka. Kvitne od júna do septembra. Bedrovník väčší sa veĺmi podobá na drobnejší bedrovník lomikameňový(Pimpinella saxifraga). Oba druhy obsahujú tie isté účinné látky a majú rovnaké využitie."
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
            nazov:"Blen čierny",
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
            nazov:"Bolehlav škvrnitý",
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
            nazov:"Brusnica čučoriedková",
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
            nazov:"Brusnica obyčajná",
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
            nazov:"Buk lesný",
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
            nazov:"Cesnak cibulový",
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
            nazov:"Cesnak medvedí",
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
            nazov:"Cyklamén purpurový",
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
            nazov:"Čakanka obyčajná",
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
            nazov:"Čemerica čierna",
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
            nazov:"Čerešňa višňová",
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
            nazov:"Čiernohlávok obyčajný",
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
            nazov:"Ďatelina lúčna",
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
            nazov:"Deväťsil lekársky",
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
            nazov:"Divozel sápovitý",
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
            nazov:"Dráč obyčajný",
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
            nazov:"Drieň obyčajný",
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
            nazov:"Dub letný",
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
            nazov:"Dula podlhovastá",
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