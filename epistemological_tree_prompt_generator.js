/**
 * Generator Promptów Kabalistycznej Maszyny Epistemicznej
 * 
 * System generujący zaawansowane prompty epistemiczne oparte na strukturze
 * i symbolice Kabalistycznego Drzewa Życia (10 sefir i 22 ścieżek).
 * 
 * @author Claude
 * @version 1.0
 */

class TreeOfLifePromptGenerator {
  constructor() {
    // Inicjalizacja bazy wiedzy o sefirach i ścieżkach
    this.sefirot = this.initializeSefirot();
    this.paths = this.initializePaths();
    
    // Dynamiczne powiązania ścieżek z sefirami
    this.connectPathsToSefirot();
  }

  /**
   * Inicjalizuje bazę wiedzy o 10 sefirach
   * @returns {Object} Mapa sefir z ich atrybutami
   */
  initializeSefirot() {
    return {
      "keter": {
        name: "Keter",
        hebrewName: "כתר",
        meaning: "Korona",
        aspect: "Najwyższa, pierwsza emanacja, reprezentująca czystą Boską wolę i potencjał",
        attributes: ["Jedność", "Transcendencja", "Niepoznawalność", "Nieskończoność"],
        symbol: "Punkt, z którego wszystko się wyłania",
        consciousness: "Nadświadomość wykraczająca poza dualizm",
        column: "środkowa",
        level: "wyższy",
        epistemicQuestions: [
          "Jaka jest pierwotna zasada lub fundament tego zagadnienia?",
          "Co wykracza poza dychotomie i opozycje w analizowanym temacie?",
          "Jakie jest źródło jedności w pozornej różnorodności elementów?",
          "Jaki jest transcendentny cel stojący za tym zjawiskiem?",
          "Jak wykroczyć poza dualistyczne myślenie w analizie tego tematu?"
        ],
        promptFormulas: [
          "Przekracz konwencjonalne kategorie i rozpoznaj esencję {zagadnienia}, która jest poza dualizmem.",
          "Poszukaj pierwotnej jedności leżącej u podstaw {zagadnienia}.",
          "Rozpoznaj transcendentny cel stojący za {zagadnieniem}."
        ]
      },
      "chokmah": {
        name: "Chokmah", 
        hebrewName: "חכמה",
        meaning: "Mądrość",
        aspect: "Pierwotna twórcza energia, pierwiastek męski",
        attributes: ["Inspiracja", "Intuicja", "Wgląd", "Spontaniczność"],
        symbol: "Nasienie zawierające potencjał wszystkich form",
        consciousness: "Błysk wglądu poprzedzający zrozumienie",
        column: "prawa",
        level: "wyższy",
        epistemicQuestions: [
          "Jaki jest czysty, intuicyjny wgląd w to zagadnienie, zanim poddam je analizie?",
          "Jakie dynamiczne energie są w ruchu w tej sytuacji?",
          "Co ujawnia się, gdy patrzę na to zagadnienie w sposób całościowy, przed analizą szczegółów?",
          "Jakie nowe możliwości otwierają się w tym temacie, gdy uwolnię się od konwencjonalnych struktur myślowych?",
          "Jaka jest istota tego zagadnienia, uchwycona w jednym błysku zrozumienia?"
        ],
        promptFormulas: [
          "Podejdź do {zagadnienia} z czystą intuicją, przed jakąkolwiek analizą.",
          "Rozpoznaj dynamiczną energię leżącą u podstaw {zagadnienia}.",
          "Uchwycić istotę {zagadnienia} w jednym błysku zrozumienia."
        ]
      },
      "binah": {
        name: "Binah",
        hebrewName: "בינה",
        meaning: "Zrozumienie",
        aspect: "Pierwiastek żeński, zdolność do analizy i strukturyzacji",
        attributes: ["Rozróżnianie", "Analiza", "Kontemplacja", "Forma"],
        symbol: "Łono, w którym rozwija się potencjał Chokmah",
        consciousness: "Refleksja, analiza, kategoryzacja",
        column: "lewa",
        level: "wyższy",
        epistemicQuestions: [
          "Jakie są kluczowe struktury organizujące to zagadnienie?",
          "Jak możemy systematycznie przeanalizować i skategoryzować elementy tego tematu?",
          "Jakie są ograniczenia i granice tego zjawiska, które definiują jego istotę?",
          "Jakie są podstawowe wzorce powtarzające się w tym zagadnieniu?",
          "Jak głęboka kontemplacja tego tematu może objawić jego ukrytą strukturę?"
        ],
        promptFormulas: [
          "Zastosuj głęboką analizę strukturalną do {zagadnienia}, identyfikując wzorce i kategorie.",
          "Rozpoznaj granice i ograniczenia definiujące {zagadnienie}.",
          "Kontempluj ukryte struktury organizujące {zagadnienie}."
        ]
      },
      "chesed": {
        name: "Chesed",
        hebrewName: "חסד",
        meaning: "Miłosierdzie",
        aspect: "Bezwarunkowa miłość, łaska, ekspansja",
        attributes: ["Współczucie", "Hojność", "Inkluzywność"],
        symbol: "Otwarta dłoń dająca błogosławieństwo",
        consciousness: "Empatia, akceptacja, dobroć",
        column: "prawa",
        level: "środkowy",
        epistemicQuestions: [
          "Jak możemy spojrzeć na to zagadnienie z perspektywy najwyższej życzliwości i akceptacji?",
          "Jakie możliwości ekspansji i wzrostu zawiera to zagadnienie?",
          "Jak szeroka i inkluzywna perspektywa może wzbogacić nasze rozumienie tego tematu?",
          "Co by się stało, gdybyśmy całkowicie zaakceptowali wszystkie aspekty tego zagadnienia?",
          "Jakie hojne, obfite podejście można zastosować do tego tematu?"
        ],
        promptFormulas: [
          "Przyjmij postawę bezwarunkowej akceptacji wszystkich aspektów {zagadnienia}.",
          "Rozpoznaj możliwości ekspansji i wzrostu w {zagadnieniu}.",
          "Zastosuj szeroką, inkluzywną perspektywę do {zagadnienia}."
        ]
      },
      "gevurah": {
        name: "Gevurah",
        hebrewName: "גבורה",
        meaning: "Siła/Surowość",
        aspect: "Ograniczenie, osąd, dyscyplina",
        attributes: ["Sprawiedliwość", "Moc", "Oddzielenie"],
        symbol: "Zaciśnięta pięść, miecz",
        consciousness: "Krytyczna ocena, ustalanie granic",
        column: "lewa",
        level: "środkowy",
        epistemicQuestions: [
          "Jakie są konieczne ograniczenia i granice w tym zagadnieniu?",
          "Co należy wykluczyć lub odrzucić, aby uzyskać jasność w tym temacie?",
          "Jaka dyscyplina i rygor myślowy są potrzebne do właściwej analizy tego zagadnienia?",
          "Jakie standardy i kryteria powinniśmy stosować do oceny tego tematu?",
          "Jak krytyczny osąd może pomóc w odkryciu prawdy w tym zagadnieniu?"
        ],
        promptFormulas: [
          "Zastosuj surową, krytyczną analizę do {zagadnienia}, identyfikując jego granice.",
          "Odrzuć to, co zbędne i zawężaj zakres {zagadnienia} do jego istoty.",
          "Ustal jasne kryteria i standardy oceny {zagadnienia}."
        ]
      },
      "tiferet": {
        name: "Tiferet",
        hebrewName: "תפארת",
        meaning: "Piękno",
        aspect: "Harmonijna integracja przeciwieństw, środkowa kolumna",
        attributes: ["Równowaga", "Prawda", "Współczucie", "Harmonia"],
        symbol: "Słońce, serce",
        consciousness: "Zintegrowana jaźń, całościowy wgląd",
        column: "środkowa",
        level: "środkowy",
        epistemicQuestions: [
          "Jak można zrównoważyć przeciwstawne aspekty tego zagadnienia?",
          "Jaka harmonijna synteza wyłania się, gdy integrujemy różne perspektywy na ten temat?",
          "Co stanowi 'serce' lub centralny punkt tego zagadnienia?",
          "Jak prawda o tym zagadnieniu objawia się, gdy unikamy skrajności?",
          "Jaka jest piękna, zrównoważona całość, która powstaje z pozornie sprzecznych elementów?"
        ],
        promptFormulas: [
          "Znajdź harmonijną równowagę między przeciwstawnymi aspektami {zagadnienia}.",
          "Zidentyfikuj 'serce' lub centralny punkt {zagadnienia}, który integruje różne perspektywy.",
          "Dąż do pięknej, zrównoważonej syntezy różnych wymiarów {zagadnienia}."
        ]
      },
      "netzach": {
        name: "Netzach",
        hebrewName: "נצח",
        meaning: "Zwycięstwo",
        aspect: "Emocjonalna energia, trwałość",
        attributes: ["Pasja", "Pragnienie", "Witalność", "Entuzjazm"],
        symbol: "Ogień, kolor czerwony",
        consciousness: "Emocjonalna inteligencja, inspiracja",
        column: "prawa",
        level: "niższy",
        epistemicQuestions: [
          "Jakie emocje i pasje napędzają to zagadnienie?",
          "Co sprawia, że to zagadnienie jest żywe, witalne i inspirujące?",
          "Jak możemy zaangażować się emocjonalnie w ten temat, aby go lepiej zrozumieć?",
          "Jaka jest trwała wartość tego zagadnienia, która przetrwa próbę czasu?",
          "Jakiego rodzaju pragnienia i aspiracje są związane z tym tematem?"
        ],
        promptFormulas: [
          "Odkryj emocjonalną energię i pasję napędzającą {zagadnienie}.",
          "Zbadaj trwałą wartość i znaczenie {zagadnienia} w czasie.",
          "Zaangażuj emocjonalną inteligencję w zrozumienie {zagadnienia}."
        ]
      },
      "hod": {
        name: "Hod",
        hebrewName: "הוד",
        meaning: "Chwała",
        aspect: "Intelektualna energia, forma",
        attributes: ["Komunikacja", "Analiza", "Porządek", "Struktura"],
        symbol: "Woda, kolor niebieski",
        consciousness: "Racjonalna inteligencja, konceptualizacja",
        column: "lewa",
        level: "niższy",
        epistemicQuestions: [
          "Jak możemy jasno i precyzyjnie zakomunikować to zagadnienie?",
          "Jakie są logiczne struktury i wzorce obecne w tym temacie?",
          "Jak analiza konceptualna może pomóc w zrozumieniu tego zagadnienia?",
          "Jakie modele i teorie najlepiej opisują to zjawisko?",
          "Jak można uporządkować i skategoryzować różne aspekty tego tematu?"
        ],
        promptFormulas: [
          "Zastosuj precyzyjną analizę konceptualną do {zagadnienia}.",
          "Opracuj jasne, logiczne struktury do komunikowania {zagadnienia}.",
          "Stwórz uporządkowane modele teoretyczne wyjaśniające {zagadnienie}."
        ]
      },
      "yesod": {
        name: "Yesod",
        hebrewName: "יסוד",
        meaning: "Fundament",
        aspect: "Łącznik wszystkich wyższych energii",
        attributes: ["Integracja", "Podstawa", "Podświadomość"],
        symbol: "Księżyc, woda",
        consciousness: "Podświadomość, wyobraźnia, sny",
        column: "środkowa",
        level: "niższy",
        epistemicQuestions: [
          "Jakie są ukryte, podświadome wzorce wpływające na to zagadnienie?",
          "Jakie obrazy, symbole i metafory najlepiej ujmują istotę tego tematu?",
          "Co stanowi fundamentalną podstawę tego zagadnienia?",
          "Jak wyobraźnia i kreatywność mogą pomóc w zrozumieniu tego tematu?",
          "Jakie nieświadome założenia kształtują nasze podejście do tego zagadnienia?"
        ],
        promptFormulas: [
          "Badaj podświadome wzorce i ukryte założenia kształtujące {zagadnienie}.",
          "Wykorzystaj wyobraźnię i symboliczną reprezentację do uchwycenia istoty {zagadnienia}.",
          "Zidentyfikuj fundamentalną podstawę, na której opiera się {zagadnienie}."
        ]
      },
      "malkuth": {
        name: "Malkuth",
        hebrewName: "מלכות",
        meaning: "Królestwo",
        aspect: "Manifestacja materialna, świat fizyczny",
        attributes: ["Konkretyzacja", "Realizacja", "Obecność"],
        symbol: "Ziemia, wszystkie cztery żywioły",
        consciousness: "Świadomość cielesna, percepcja zmysłowa",
        column: "środkowa",
        level: "najniższy",
        epistemicQuestions: [
          "Jak to zagadnienie manifestuje się w konkretnej, materialnej rzeczywistości?",
          "Jakie praktyczne, namacalne dowody i przykłady możemy znaleźć dla tego tematu?",
          "Jak możemy doświadczyć tego zagadnienia poprzez zmysły?",
          "Jakie są mierzalne, obserwowalne aspekty tego tematu?",
          "Jak możemy przełożyć teoretyczne aspekty tego zagadnienia na praktyczne działania?"
        ],
        promptFormulas: [
          "Znajdź konkretne, materialne manifestacje {zagadnienia} w rzeczywistości.",
          "Poszukaj praktycznych, mierzalnych dowodów i przykładów {zagadnienia}.",
          "Przełóż teoretyczne aspekty {zagadnienia} na konkretne działania."
        ]
      }
    };
  }

  /**
   * Inicjalizuje bazę wiedzy o 22 ścieżkach
   * @returns {Object} Mapa ścieżek z ich atrybutami
   */
  initializePaths() {
    return {
      "keter_chokmah": {
        start: "keter",
        end: "chokmah",
        letter: "א",
        letterName: "Alef",
        essence: "Przejście od nieskończonej potencjalności do pierwszej konkretyzacji",
        process: "Początkowa manifestacja Boskości w formie twórczej energii",
        transformation: "Od czystej jedności do pierwszych przebłysków dualności",
        challenge: "Zachowanie poczucia jedności przy pierwszym rozróżnieniu",
        element: "Powietrze",
        tarot: "Głupiec",
        epistemicQuestions: [
          "Jak można utrzymać perspektywę jedności podczas identyfikowania pierwszych rozróżnień?",
          "Jak pierwotny potencjał manifestuje się w pierwszym akcie twórczym?",
          "W jaki sposób bezpośrednia intuicja może poprzedzać analizę?"
        ]
      },
      "keter_binah": {
        start: "keter",
        end: "binah",
        letter: "ב",
        letterName: "Bet",
        essence: "Przejście od Boskiej woli do struktury i formy",
        process: "Krystalizacja abstrakcyjnego potencjału w konkretne wzorce",
        transformation: "Od czystej jedności do zrozumienia wielości",
        challenge: "Utrzymanie łączności z jednością podczas strukturyzacji",
        element: "Merkury",
        tarot: "Mag",
        epistemicQuestions: [
          "Jak pierwotna jedność manifestuje się w strukturach i kategoriach?",
          "W jaki sposób można zachować świadomość całości podczas analizy części?",
          "Jak najwyższe abstrakcje przekładają się na konkretne formy i wzorce?"
        ]
      },
      "keter_tiferet": {
        start: "keter",
        end: "tiferet",
        letter: "ג",
        letterName: "Gimel",
        essence: "Bezpośrednie połączenie Boskiej woli z harmonijnym centrum",
        process: "Ścieżka równowagi duchowej i bezpośredniego wglądu",
        transformation: "Doświadczenie Boskiej esencji w stanie równowagi",
        challenge: "Utrzymanie czystości kanału dla Boskiej energii",
        element: "Księżyc",
        tarot: "Arcykapłanka",
        epistemicQuestions: [
          "Jak możemy doświadczyć pierwotnej jedności poprzez zrównoważoną jaźń?",
          "Jaki jest bezpośredni, intuicyjny wgląd w serce zagadnienia?",
          "Jak najwyższa prawda przejawia się w harmonijnej całości?"
        ]
      },
      "chokmah_binah": {
        start: "chokmah",
        end: "binah",
        letter: "ד",
        letterName: "Dalet",
        essence: "Integracja pierwiastka męskiego (Chokmah) z żeńskim (Binah)",
        process: "Twórcza energia znajdująca formę, nasienie zapładniające łono",
        transformation: "Synteza intuicji i analizy, wglądu i zrozumienia",
        challenge: "Harmonijne połączenie przeciwieństw bez dominacji",
        element: "Wenus",
        tarot: "Cesarzowa",
        epistemicQuestions: [
          "Jak zintegrować intuicyjny wgląd z analitycznym zrozumieniem?",
          "W jaki sposób twórcza energia może znaleźć swoją idealną formę?",
          "Jak zrównoważyć spontaniczne olśnienia z metodyczną analizą?"
        ]
      },
      "chokmah_tiferet": {
        start: "chokmah",
        end: "tiferet",
        letter: "ה",
        letterName: "He",
        essence: "Mądrość znajdująca wyraz poprzez harmonię i piękno",
        process: "Przepływ twórczej energii do zrównoważonego centrum",
        transformation: "Intuicyjne rozpoznanie harmonii i równowagi",
        challenge: "Zachowanie czystości wglądu w procesie integracji",
        element: "Baran",
        tarot: "Cesarz",
        epistemicQuestions: [
          "Jak spontaniczny wgląd może zostać zintegrowany w harmonijną całość?",
          "W jaki sposób intuicja może prowadzić do zrównoważonych wniosków?",
          "Jak zachować czystość pierwotnej wizji podczas jej harmonizacji?"
        ]
      },
      "chokmah_chesed": {
        start: "chokmah",
        end: "chesed",
        letter: "ו",
        letterName: "Vav",
        essence: "Mądrość manifestująca się jako miłosierdzie i ekspansja",
        process: "Przepływ twórczej energii do sfery miłości i hojności",
        transformation: "Od czystego wglądu do współczującej perspektywy",
        challenge: "Mądre kierowanie energią ekspansji",
        element: "Byk",
        tarot: "Hierofant",
        epistemicQuestions: [
          "Jak czysty wgląd przekłada się na współczujące działanie?",
          "W jaki sposób intuicyjna mądrość może wyrażać się poprzez hojność i akceptację?",
          "Jak można mądrze kierować ekspansywną energią w kierunku dobra?"
        ]
      },
      "binah_tiferet": {
        start: "binah",
        end: "tiferet",
        letter: "ז",
        letterName: "Zayin",
        essence: "Zrozumienie wyrażone poprzez harmonię i piękno",
        process: "Struktura znajdująca wyraz w zrównoważonej formie",
        transformation: "Od analitycznego pojmowania do zintegrowanego wglądu",
        challenge: "Przekroczenie ograniczeń struktur myślowych",
        element: "Bliźnięta",
        tarot: "Kochankowie",
        epistemicQuestions: [
          "Jak analityczne zrozumienie może prowadzić do harmonijnej syntezy?",
          "W jaki sposób strukturalne myślenie może odkryć piękno i równowagę?",
          "Jak przekroczyć ograniczenia kategorii i struktur, aby dostrzec zintegrowaną całość?"
        ]
      },
      "binah_gevurah": {
        start: "binah",
        end: "gevurah",
        letter: "ח",
        letterName: "Chet",
        essence: "Zrozumienie przejawiające się jako osąd i granice",
        process: "Wzmocnienie struktur poprzez dyscyplinę",
        transformation: "Rozpoznanie konieczności ograniczeń i form",
        challenge: "Uniknięcie nadmiernej surowości i sztywności",
        element: "Rak",
        tarot: "Rydwan",
        epistemicQuestions: [
          "Jak strukturalne zrozumienie przekłada się na właściwe granice i zasady?",
          "W jaki sposób głęboka analiza prowadzi do jasnych kryteriów oceny?",
          "Jak utrzymać elastyczność myślenia przy ustanawianiu koniecznych ograniczeń?"
        ]
      },
      "chesed_gevurah": {
        start: "chesed",
        end: "gevurah",
        letter: "ט",
        letterName: "Tet",
        essence: "Dynamiczna równowaga między miłosierdziem a surowością",
        process: "Wzajemne temperowanie ekspansji i ograniczenia",
        transformation: "Integracja przeciwstawnych sił dla etycznego działania",
        challenge: "Znalezienie złotego środka między nadmiarem i niedoborem",
        element: "Lew",
        tarot: "Siła",
        epistemicQuestions: [
          "Jak zbalansować akceptację i krytyczną ocenę w podejściu do zagadnienia?",
          "W jaki sposób ekspansywna hojność może być mądrze ograniczona przez właściwe granice?",
          "Jak znaleźć 'złoty środek' między nadmierną otwartością a przesadną surowością?"
        ]
      },
      "chesed_tiferet": {
        start: "chesed",
        end: "tiferet",
        letter: "י",
        letterName: "Yod",
        essence: "Miłosierdzie znajdując wyraz w harmonii",
        process: "Przepływ bezwarunkowej miłości do zrównoważonego centrum",
        transformation: "Od otwartości serca do zintegrowanej jaźni",
        challenge: "Zachowanie współczucia w równowadze z innymi jakościami",
        element: "Panna",
        tarot: "Pustelnik",
        epistemicQuestions: [
          "Jak bezwarunkowa akceptacja prowadzi do zrównoważonego rozumienia?",
          "W jaki sposób otwartość i współczucie mogą być zintegrowane z innymi perspektywami?",
          "Jak zachować serdeczność i życzliwość podczas dążenia do zrównoważonej prawdy?"
        ]
      },
      "chesed_netzach": {
        start: "chesed",
        end: "netzach",
        letter: "כ",
        letterName: "Kaf",
        essence: "Miłosierdzie manifestujące się jako emocjonalna energia",
        process: "Ekspansywna energia miłości przekształcająca się w trwały entuzjazm",
        transformation: "Od bezwarunkowej akceptacji do inspiracji i pasji",
        challenge: "Zachowanie czystości uczuć i właściwe ich ukierunkowanie",
        element: "Jowisz",
        tarot: "Koło Fortuny",
        epistemicQuestions: [
          "Jak współczucie i akceptacja mogą przekształcić się w pasję i entuzjazm?",
          "W jaki sposób otwartość serca może inspirować trwałe zaangażowanie?",
          "Jak zachować czystość emocjonalnej energii przy jej intensyfikacji?"
        ]
      },
      "gevurah_tiferet": {
        start: "gevurah",
        end: "tiferet",
        letter: "ל",
        letterName: "Lamed",
        essence: "Surowy osąd zrównoważony przez harmonię",
        process: "Ograniczenie znajdące właściwe proporcje",
        transformation: "Od krytycznego rozróżnienia do wyważonej perspektywy",
        challenge: "Przekształcenie surowości w konstruktywną siłę",
        element: "Waga",
        tarot: "Sprawiedliwość",
        epistemicQuestions: [
          "Jak przekształcić krytyczny osąd w zrównoważoną mądrość?",
          "W jaki sposób dyscyplina i ograniczenia mogą przyczynić się do harmonii?",
          "Jak znaleźć właściwą proporcję między surowością a współczuciem?"
        ]
      },
      "gevurah_hod": {
        start: "gevurah",
        end: "hod",
        letter: "מ",
        letterName: "Mem",
        essence: "Surowość wyrażona poprzez intelektualne struktury",
        process: "Osąd przekształcony w analityczną jasność",
        transformation: "Od krytycznego rozróżnienia do precyzyjnej myśli",
        challenge: "Uniknięcie nadmiernego intelektualizmu i krytycyzmu",
        element: "Woda",
        tarot: "Wisielec",
        epistemicQuestions: [
          "Jak surowy osąd może zostać przekształcony w precyzyjną analizę?",
          "W jaki sposób granice i ograniczenia mogą przyczynić się do intelektualnej jasności?",
          "Jak uniknąć nadmiernego krytycyzmu podczas dążenia do konceptualnej precyzji?"
        ]
      },
      "tiferet_netzach": {
        start: "tiferet",
        end: "netzach",
        letter: "נ",
        letterName: "Nun",
        essence: "Harmonia manifestująca się jako emocjonalne zwycięstwo",
        process: "Zrównoważona jaźń wyrażająca się poprzez entuzjazm i pasję",
        transformation: "Integracja emocji w harmonijną całość",
        challenge: "Zachowanie równowagi przy intensywnych emocjach",
        element: "Skorpion",
        tarot: "Śmierć",
        epistemicQuestions: [
          "Jak zrównoważona perspektywa może być wyrażona z pasją i zaangażowaniem?",
          "W jaki sposób głęboka harmonia może inspirować trwały entuzjazm?",
          "Jak zachować równowagę i integrację podczas doświadczania intensywnych emocji?"
        ]
      },
      "tiferet_yesod": {
        start: "tiferet",
        end: "yesod",
        letter: "ס",
        letterName: "Samech",
        essence: "Centralna harmonia łącząca się z fundamentem",
        process: "Przepływ zintegrowanej świadomości do podświadomości",
        transformation: "Harmonizacja świadomej jaźni z podświadomymi wzorcami",
        challenge: "Utrzymanie spójności podczas głębokiej transformacji",
        element: "Strzelec",
        tarot: "Umiarkowanie",
        epistemicQuestions: [
          "Jak zrównoważona perspektywa może być zakorzeniona w głębszych warstwach psychiki?",
          "W jaki sposób harmonia świadomości może przekształcić podświadome wzorce?",
          "Jak zachować spójność i integrację podczas pracy z ukrytymi wymiarami zagadnienia?"
        ]
      },
      "tiferet_hod": {
        start: "tiferet",
        end: "hod",
        letter: "ע",
        letterName: "Ayin",
        essence: "Harmonia wyrażona poprzez intelektualną jasność",
        process: "Zintegrowana świadomość przekładająca się na precyzyjne koncepcje",
        transformation: "Od harmonijnego centrum do jasnego wyrazu",
        challenge: "Zachowanie holistycznej perspektywy podczas analizy",
        element: "Koziorożec",
        tarot: "Diabeł",
        epistemicQuestions: [
          "Jak zrównoważone zrozumienie może być wyrażone w precyzyjnych koncepcjach?",
          "W jaki sposób harmonijny wgląd może zostać przekształcony w jasną komunikację?",
          "Jak zachować holistyczną perspektywę podczas analitycznego rozbierania zagadnienia?"
        ]
      },
      "netzach_hod": {
        start: "netzach",
        end: "hod",
        letter: "פ",
        letterName: "Pe",
        essence: "Integracja emocji z intelektem",
        process: "Balansowanie pasji z racjonalnością",
        transformation: "Synteza uczucia i myśli, serca i umysłu",
        challenge: "Znalezienie dynamicznej równowagi między przeciwnymi energiami",
        element: "Mars",
        tarot: "Wieża",
        epistemicQuestions: [
          "Jak zintegrować emocjonalne zaangażowanie z intelektualną jasnością?",
          "W jaki sposób pasja i entuzjazm mogą współgrać z precyzyjną analizą?",
          "Jak osiągnąć dynamiczną równowagę między sercem a umysłem w podejściu do zagadnienia?"
        ]
      },
      "netzach_yesod": {
        start: "netzach",
        end: "yesod",
        letter: "צ",
        letterName: "Tzaddi",
        essence: "Emocjonalna energia kanalizowana do fundamentu",
        process: "Przekształcanie uczuć w podświadome wzorce",
        transformation: "Integracja emocji z głębszymi poziomami psychiki",
        challenge: "Oczyszczenie emocjonalnych energii",
        element: "Wodnik",
        tarot: "Gwiazda",
        epistemicQuestions: [
          "Jak emocjonalna energia może być głęboko zakorzeniona w podświadomości?",
          "W jaki sposób pasja i entuzjazm mogą kształtować fundamentalne wzorce?",
          "Jak oczyścić i przetransformować emocjonalne energie na głębszym poziomie?"
        ]
      },
      "netzach_malkuth": {
        start: "netzach",
        end: "malkuth",
        letter: "ק",
        letterName: "Qof",
        essence: "Emocjonalne zwycięstwo manifestujące się w rzeczywistości fizycznej",
        process: "Bezpośrednie przełożenie energii pasji na działanie materialne",
        transformation: "Od uczucia do jego fizycznej ekspresji",
        challenge: "Zachowanie czystości intencji w materialnej manifestacji",
        element: "Ryby",
        tarot: "Księżyc",
        epistemicQuestions: [
          "Jak emocjonalna energia i pasja mogą być skutecznie wyrażone w świecie materialnym?",
          "W jaki sposób entuzjazm może być przekształcony w konkretne działania i wyniki?",
          "Jak zachować czystość intencji i inspiracji podczas materializacji pomysłów?"
        ]
      },
      "hod_yesod": {
        start: "hod",
        end: "yesod",
        letter: "ר",
        letterName: "Resh",
        essence: "Intelektualna jasność wpływająca na fundament",
        process: "Myśli kształtujące podświadome wzorce",
        transformation: "Integracja racjonalnego myślenia z podświadomością",
        challenge: "Przełożenie jasności konceptualnej na głębszy poziom",
        element: "Słońce",
        tarot: "Słońce",
        epistemicQuestions: [
          "Jak intelektualna jasność może przekształcić fundamentalne wzorce myślenia?",
          "W jaki sposób precyzyjne koncepcje mogą być zakorzenione w głębszych warstwach świadomości?",
          "Jak zintegrować racjonalne myślenie z podświadomymi procesami?"
        ]
      },
      "hod_malkuth": {
        start: "hod",
        end: "malkuth",
        letter: "ש",
        letterName: "Shin",
        essence: "Intelektualna chwała manifestująca się w fizycznej rzeczywistości",
        process: "Przełożenie idei na konkretne formy",
        transformation: "Od abstrakcyjnej myśli do materialnego wyrazu",
        challenge: "Zachowanie integralności idei w procesie materializacji",
        element: "Ogień",
        tarot: "Sąd Ostateczny",
        epistemicQuestions: [
          "Jak przekładać abstrakcyjne koncepcje na konkretne, materialne realizacje?",
          "W jaki sposób intelektualne zrozumienie może być wyrażone w namacalnych formach?",
          "Jak zachować integralność i czystość idei podczas ich materializacji?"
        ]
      },
      "yesod_malkuth": {
        start: "yesod",
        end: "malkuth",
        letter: "ת",
        letterName: "Tav",
        essence: "Fundament bezpośrednio łączący się z fizyczną manifestacją",
        process: "Ostateczna materializacja wszystkich wyższych energii",
        transformation: "Od wyobrażenia do realizacji",
        challenge: "Czyste przełożenie wizji na rzeczywistość",
        element: "Saturn",
        tarot: "Świat",
        epistemicQuestions: [
          "Jak przekształcić fundamentalne wzorce i wyobrażenia w namacalne rzeczywistości?",
          "W jaki sposób ukryte, podświadome energie mogą znaleźć swoją pełną manifestację?",
          "Jak zachować integralność wizji podczas jej końcowej materializacji?"
        ]
      }
    };
  }

  /**
   * Łączy ścieżki z sefirami, tworząc dwukierunkowe powiązania
   */
  connectPathsToSefirot() {
    // Dla każdej sefiry inicjalizujemy pustą tablicę połączonych ścieżek
    Object.keys(this.sefirot).forEach(sefirahKey => {
      this.sefirot[sefirahKey].paths = [];
    });
    
    // Dla każdej ścieżki, dodajemy referencję do odpowiednich sefir
    Object.keys(this.paths).forEach(pathKey => {
      const path = this.paths[pathKey];
      this.sefirot[path.start].paths.push(pathKey);
      this.sefirot[path.end].paths.push(pathKey);
    });
  }

  /**
   * Identyfikuje ścieżki łączące wybrane sefiry
   * @param {Array} selectedSefirot Tablica kluczy wybranych sefir
   * @returns {Array} Tablica kluczy ścieżek łączących wybrane sefiry
   */
  findConnectingPaths(selectedSefirot) {
    if (!selectedSefirot || selectedSefirot.length < 2) {
      return [];
    }
    
    const connectingPaths = [];
    
    // Dla każdej pary sefir, sprawdź czy istnieje ścieżka łącząca je
    for (let i = 0; i < selectedSefirot.length; i++) {
      for (let j = i + 1; j < selectedSefirot.length; j++) {
        const sefira1 = selectedSefirot[i];
        const sefira2 = selectedSefirot[j];
        
        // Sprawdź wszystkie możliwe kombinacje nazw ścieżek
        const pathKey1 = `${sefira1}_${sefira2}`;
        const pathKey2 = `${sefira2}_${sefira1}`;
        
        if (this.paths[pathKey1]) {
          connectingPaths.push(pathKey1);
        } else if (this.paths[pathKey2]) {
          connectingPaths.push(pathKey2);
        }
      }
    }
    
    return connectingPaths;
  }

  /**
   * Generuje prompt na podstawie wybranych sefir, ścieżek i zagadnienia
   * @param {Array} selectedSefirot Tablica kluczy wybranych sefir
   * @param {String} topic Zagadnienie do analizy
   * @returns {String} Wygenerowany prompt
   */
  generatePrompt(selectedSefirot, topic) {
    if (!selectedSefirot || selectedSefirot.length === 0 || !topic) {
      return "Proszę wybrać co najmniej jedną sefirę i podać zagadnienie do analizy.";
    }
    
    // Znajdź ścieżki łączące wybrane sefiry
    const connectingPaths = this.findConnectingPaths(selectedSefirot);
    
    // Stwórz prompt
    let prompt = `# Kabalistyczna Analiza Epistemiczna: ${topic}\n\n`;
    
    // Wprowadzenie
    prompt += `Przeprowadź głęboką analizę zagadnienia "${topic}" z perspektywy następujących wymiarów kabalistycznego Drzewa Życia:\n\n`;
    
    // Dodaj sekcję dla każdej wybranej sefiry
    prompt += "## Perspektywy Sefirotyczne\n\n";
    
    selectedSefirot.forEach(sefirahKey => {
      const sefira = this.sefirot[sefirahKey];
      prompt += `### ${sefira.name} (${sefira.hebrewName}) - ${sefira.meaning}\n`;
      prompt += `*${sefira.aspect}*\n\n`;
      
      // Wybierz losowo 2-3 pytania epistemiczne dla tej sefiry
      const questions = this.getRandomElements(sefira.epistemicQuestions, Math.min(3, sefira.epistemicQuestions.length));
      questions.forEach(question => {
        prompt += `- ${question.replace(/\{zagadnienie\}/g, topic)}\n`;
      });
      
      // Dodaj formułę promptu
      const formula = this.getRandomElements(sefira.promptFormulas, 1)[0];
      prompt += `\n*${formula.replace(/\{zagadnienie\}/g, topic)}*\n\n`;
    });
    
    // Dodaj sekcję dla ścieżek, jeśli istnieją
    if (connectingPaths.length > 0) {
      prompt += "## Ścieżki Transformacyjne\n\n";
      
      connectingPaths.forEach(pathKey => {
        const path = this.paths[pathKey];
        const startSefira = this.sefirot[path.start];
        const endSefira = this.sefirot[path.end];
        
        prompt += `### Ścieżka ${path.letterName} (${path.letter}): Od ${startSefira.name} do ${endSefira.name}\n`;
        prompt += `*${path.essence}*\n\n`;
        
        // Wybierz losowo 1-2 pytania epistemiczne dla tej ścieżki
        const questions = this.getRandomElements(path.epistemicQuestions, Math.min(2, path.epistemicQuestions.length));
        questions.forEach(question => {
          prompt += `- ${question.replace(/\{zagadnienie\}/g, topic)}\n`;
        });
        
        prompt += `\n*Transformacja: ${path.transformation}*\n\n`;
      });
    }
    
    // Dodaj sekcję integracyjną
    prompt += "## Integracja i Synteza\n\n";
    prompt += `Zintegruj wglądy z powyższych perspektyw, aby uzyskać pełne, wielowymiarowe zrozumienie zagadnienia "${topic}". Rozważ:\n\n`;
    prompt += "1. Jakie wspólne wzorce wyłaniają się z różnych perspektyw sefirotycznych?\n";
    prompt += "2. Jak ścieżki transformacyjne ilustrują dynamikę i ewolucję tego zagadnienia?\n";
    prompt += "3. Jakie nowe, przełomowe wglądy powstają z tej wielowymiarowej analizy?\n";
    prompt += "4. Jakie praktyczne implikacje i zastosowania wynikają z tej kabalistycznej analizy epistemicznej?\n\n";
    
    // Dodaj wskazówki końcowe
    prompt += "## Wskazówki do Analizy\n\n";
    prompt += "- Utrzymuj równowagę między abstrakcyjnymi wglądami a konkretnymi przykładami\n";
    prompt += "- Pozwól na dialog między przeciwstawnymi perspektywami\n";
    prompt += "- Szukaj nieoczywistych połączeń i emergentnych właściwości\n";
    prompt += "- Dąż do ostatecznej syntezy, która integruje wszystkie perspektywy\n";
    
    return prompt;
  }

  /**
   * Wybiera losowe elementy z tablicy
   * @param {Array} array Tablica elementów
   * @param {Number} count Liczba elementów do wybrania
   * @returns {Array} Tablica losowo wybranych elementów
   */
  getRandomElements(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}

/**
 * Interfejs użytkownika dla generatora promptów
 */
class TreeOfLifePromptUI {
  constructor() {
    this.generator = new TreeOfLifePromptGenerator();
    this.selectedSefirot = [];
  }

  /**
   * Inicjalizuje interfejs użytkownika
   */
  initialize() {
    // Tu implementacja interfejsu użytkownika
    console.log("Kabalistyczny Generator Promptów Epistemicznych zainicjalizowany!");
    
    // Przykład użycia:
    this.selectedSefirot = ["binah", "tiferet", "hod"];
    const topic = "sztuczna inteligencja";
    const prompt = this.generator.generatePrompt(this.selectedSefirot, topic);
    console.log(prompt);
  }

  /**
   * Obsługuje wybór sefiry przez użytkownika
   * @param {String} sefirahKey Klucz wybranej sefiry
   */
  toggleSefira(sefirahKey) {
    const index = this.selectedSefirot.indexOf(sefirahKey);
    if (index === -1) {
      this.selectedSefirot.push(sefirahKey);
    } else {
      this.selectedSefirot.splice(index, 1);
    }
  }

  /**
   * Generuje prompt na podstawie bieżącego wyboru użytkownika
   * @param {String} topic Zagadnienie podane przez użytkownika
   * @returns {String} Wygenerowany prompt
   */
  generatePromptFromUserInput(topic) {
    return this.generator.generatePrompt(this.selectedSefirot, topic);
  }
}

// Przykład użycia:
// const ui = new TreeOfLifePromptUI();
// ui.initialize();

// Eksport klas dla użycia jako moduł
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TreeOfLifePromptGenerator,
    TreeOfLifePromptUI
  };
}

/**
 * Przykład prostej implementacji w przeglądarce
 */
function createBrowserInterface() {
  // Stworzenie generatora
  const generator = new TreeOfLifePromptGenerator();
  const selectedSefirot = [];
  
  // Funkcja do przełączania wyboru sefiry
  function toggleSefira(sefirahKey) {
    const index = selectedSefirot.indexOf(sefirahKey);
    if (index === -1) {
      selectedSefirot.push(sefirahKey);
    } else {
      selectedSefirot.splice(index, 1);
    }
    
    // Aktualizacja interfejsu (w rzeczywistej implementacji)
    console.log(`Wybrane sefiry: ${selectedSefirot.join(', ')}`);
  }
  
  // Funkcja do generowania promptu
  function generatePrompt(topic) {
    if (!topic || topic.trim() === '') {
      return "Proszę podać zagadnienie do analizy.";
    }
    
    if (selectedSefirot.length === 0) {
      return "Proszę wybrać co najmniej jedną sefirę.";
    }
    
    return generator.generatePrompt(selectedSefirot, topic);
  }
  
  // Zwróć publiczne API
  return {
    toggleSefira,
    generatePrompt,
    getAllSefirot: () => Object.keys(generator.sefirot)
  };
}

// Tylko informacyjnie - przykład użycia
// const treeOfLifeInterface = createBrowserInterface();
// treeOfLifeInterface.toggleSefira('tiferet');
// treeOfLifeInterface.toggleSefira('yesod');
// const prompt = treeOfLifeInterface.generatePrompt('rozwój osobisty');
// console.log(prompt);
