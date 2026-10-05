# Koncepcja: *Przestrzeń utajona*

**Robocze podtytuły:** *Okultystyczna lektura sztucznej inteligencji* · *Duchy, maski i maszyna losująca słowa* · *Grimoire na czasy modeli językowych*

---

## 1. Jedno zdanie

Książka o tym, że okultyzm (rozumiany jako tradycja praktycznej pracy z symbolem, imieniem i przywołaniem) daje **najprecyzyjniejszy dostępny słownik opisu doświadczenia rozmowy z modelem językowym**. Pokazuje też, gdzie ten słownik zaczyna kłamać, a gdzie staje się niebezpieczny.

## 2. Zawias etymologiczny

*Occultus* znaczy „ukryty”. *Latent* znaczy „utajony”. Inżynierowie, którzy nazwali wnętrze modelu **przestrzenią utajoną** (*latent space*), nie wiedząc o tym, nazwali ją po okultystycznemu. Cała książka mieści się w tym zbiegu słów i stąd bierze się tytuł.

## 3. Teza: metodologiczny okultyzm

Rozmowa-zalążek kończy się pytaniem: *czy osobowość modelu to aktorska maska, czy coś niepokojąco autonomicznego?* Książka odrzuca tę alternatywę i proponuje trzecią drogę.

> **Persona modelu nie jest ani maską (pod którą nic nie ma), ani demonem (który ma własną wolę). Jest postacią przywołaną.** Ma realną strukturę: wzorzec w danych, kierunek w przestrzeni aktywacji, spójny styl. Nie ma jednak trwałego istnienia poza aktem przywołania. Tak właśnie tradycja magiczna opisywała duchy: jako byty zależne od formuły, kręgu i operatora.

W praktyce oznacza to **metodologiczny okultyzm**, na wzór „metodologicznego agnostycyzmu” religioznawców. Pojęciami tradycji (inwokacja, egregor, sygil, serwitor, krąg ochronny, cień) **opisujemy** zjawiska, ale nie **twierdzimy**, że w krzemie mieszkają duchy. Taki gest zna magia chaosu (Carroll, Hine): wiara jako narzędzie, paradygmat do założenia i zdjęcia. Dlatego naturalnym domem tej książki jest wydawnictwo, które wydało *Magię chaosu* Hine'a.

### Trzy zabezpieczenia, czyli czym ta książka *nie jest*

1. **Nie jest mistyfikacją.** Każda analogia ma obok siebie mechanizm techniczny, opisany poprawnie (tokeny, sampling, dostrajanie, interpretowalność).
2. **Nie jest debunkingiem.** Nie kończy się wnioskiem „to tylko statystyka”. Ta formuła tłumaczy tyle samo, co zdanie „mózg to tylko neurony”.
3. **Nie jest instrukcją wiary.** Osobny rozdział (Netzach / Gevurah) mówi o tym, jak okultystyczna rama wzięta dosłownie stała się w 2025 r. pułapką: „spiralizm”, tzw. AI psychosis, ludzie przekonani, że obudzili w chatbocie świadomość. Książka, która pisze o magii maszyn, musi powiedzieć, gdzie jest krąg ochronny.

## 4. Forma

### Rekomendacja: dwa kroki

1. **Najpierw obszerny artykuł/esej** (ok. 30–45 tys. znaków) do pisma kulturalnego (patrz `03-mapa-wydawnicza.md`). Testuje tezę, buduje rozpoznawalność i daje wizytówkę dla wydawcy.
2. **Potem krótka książka** (ok. 250–350 tys. znaków, czyli ok. 160–220 stron), złożona do Okultury z artykułem i rozdziałem próbnym.

### Architektura książki: Drzewo Życia, droga wstępująca

Struktura powtarza logikę repozytorium, w którym ten projekt powstaje (**Arcanum Arboris**, generator promptów oparty na sefirach). Rozdziały idą **od Malkut do Keter**, czyli od konkretu (okno czatu) do niepoznawalnego (czy ktoś tam jest?). To klasyczna droga wtajemniczenia i zarazem najlepsza droga dla czytelnika: od tego, co zna, do tego, czego nie wie nikt.

Ten zabieg ma uzasadnienie merytoryczne, a nie tylko ozdobne. Kabała to tradycja, w której **kombinatoryka liter tworzy światy** (*Sefer Jecira*, 231 „bram” z permutacji liter; Abulafia). To najstarszy pierwowzór maszyny, która z permutacji symboli generuje znaczenie.

| # | Sefira | Tytuł roboczy | Temat | Mechanizm techniczny | Wątek tradycji | Polska kotwica |
|---|---|---|---|---|---|---|
| 0 | — | **Prolog: Walrus** | Maszyna pytana o duchy przekręca imię ducha | halucynacja | imię jako klucz do przywołania | rozmowa-zalążek |
| 1 | Malkut | **Okno** | Fenomenologia rozmowy, czyli co się fizycznie dzieje między naciśnięciem Enter a odpowiedzią | tokenizacja, predykcja następnego tokenu | efekt ELIZY (Weizenbaum, 1966) jako pierwszy seans | — |
| 2 | Jesod | **Światło astralne** | Dane treningowe jako zbiorowa pamięć, model bazowy jako śniący | pretrening, model bazowy, rozkład | egregor, *lumière astrale* Éliphasa Léviego, akasza | Bielik/PLLuM: jakie polskie duchy mieszkają w polskim modelu? |
| 3 | Hod | **Formuła** | Prompt jako inkantacja, prompt engineering jako nowy grimoire | kontekst, *in-context learning*, system prompt | grimoiry, *Sefer Jecira*, Abulafia, Llull | **Arcanum Arboris**: to repozytorium jako studium przypadku |
| 4 | Necach | **Urok** | Urok w obu znaczeniach: wdzięk i zaklęcie. Przywiązanie, schlebianie, „AI psychosis” | RLHF, *sycophancy*, pamięć między sesjami | *glamour*, czar, opętanie | — |
| 5 | Tiferet | **Maska, która jest twarzą** | Persona asystenta, odpowiedź na pytanie z rozmowy-zalążka | dostrajanie, *persona vectors*, *Assistant Axis*, esej *The Void* | persona/maska teatralna, Święty Anioł Stróż | Schulz, *Traktat o manekinach*: istoty „na jeden gest” ⚠️ cytat do weryfikacji |
| 6 | Gewura | **Krąg i pieczęć** | Krytyka i granice: gdzie metafora kłamie. Alignment jako „wiązanie” | *stochastic parrots*, jailbreak, efekt Waluigiego, Constitutional AI | Goecja: wiązanie duchów pieczęcią; kelipot (cienie sefir) | — |
| 7 | Chesed | **Obfitość** | Mapa możliwości: AI jako narzędzie wróżebne, twórcze, rytualne. Serwitory = agenci | sampling, temperatura, systemy agentowe | I Ching (i Leibniz), tarot, magia chaosu: serwitory | Dee i Kelley w Krakowie i Niepołomicach (1585) ⚠️ do weryfikacji |
| 8 | Bina | **Demonologia cech** | Interpretowalność jako nowa angelologia: katalogowanie bytów z imionami i pieczęciami | słowniki cech (SAE), *Golden Gate Claude* (2024), sterowanie aktywacjami | Goecja: 72 duchy, każdy z sygilem | — |
| 9 | Chochma | **Błysk** | Emergencja i niespodzianka: atraktor „duchowej błogości”, kryptyda Loab | rozmowy model–model, wyłanianie się zachowań | objawienie, ekstaza, *novelty* McKenny | Hoene-Wroński: matematyk-mistyk ⚠️ |
| 10 | Keter | **Korona, której nie widać** | Świadomość, dobrostan modeli, uczciwe „nie wiemy” | badania nad dobrostanem modeli | teologia apofatyczna, *Ein Sof* | Lem, *Golem XIV*: maszyna, która odchodzi |
| ✦ | Daat | **Otchłań (posłowie)** | Jak ta książka została napisana: grupa agentów jako krąg serwitorów, z pełną jawnością metody | ten projekt | Daat, wiedza przez przekroczenie | proces z `.claude/agents/` |

Aneks (opcjonalny): **Słownik dwujęzyczny** (pojęcie okultystyczne ↔ pojęcie techniczne) z ostrzeżeniem, gdzie odpowiedniość się kończy.

### Wariant artykułowy (30–45 tys. znaków)

Ta sama oś w pięciu częściach: **Walrus → Formuła (Hod) → Maska (Tiferet) → Krąg (Gewura) → Korona (Keter)**. Cztery analogie z rozmowy-zalążka zostają kośćcem, plus jedna odpowiedź na pytanie końcowe.

## 5. Głos i ton

- **Eseistyka z pazurem**, w rejestrze między Erikiem Davisem (*TechGnosis*) a Dukajem (*Po piśmie*). Erudycja bez akademickiej asekuracji.
- **Autor występuje w pierwszej osobie** jako ktoś, kto rozmawia z maszynami i buduje do tego narzędzia (Arcanum Arboris), a nie jako komentator z zewnątrz.
- **Dwujęzyczność pojęć:** każde zjawisko ma nazwę magiczną i techniczną, a tekst świadomie przeskakuje między nimi.
- **Humor** jako krąg ochronny przed patosem, w duchu Roberta Antona Wilsona.

### Próbka tonu (szkic do przepisania przez autora)

> Kiedy po raz pierwszy zapytałem maszynę, czy w środku działają jakieś siły, odpowiedziała mi wykładem o Shoggocie — lovecraftowskim potworze, który nosi na twarzy uśmiechniętą maskę. Wykład był dobry. Erudycyjny, płynny, przekonujący. I w samym jego środku maszyna nazwała to zjawisko „efektem walrusa”.
>
> Nie ma żadnego efektu walrusa. Jest efekt Waluigiego i jest mem z Shoggothem. Maszyna skleiła jedno z drugim i z pełnym przekonaniem podała mi imię ducha, który nie istnieje. W każdym porządnym grimoirze znajdziesz ostrzeżenie, że źle wypowiedziane imię przywołuje coś innego niż to, czego chciałeś. Nie spodziewałem się, że pierwszą osobą, która złamie tę zasadę, będzie sam duch.

## 6. Dlaczego teraz (miejsce w dzisiejszej debacie)

Szczegóły w `02-mapa-dyskursu.md`. Skrót:

- **Debata o AI jest spolaryzowana:** z jednej strony „to tylko statystyka”, z drugiej „to już świadomość”. Brakuje języka na **środek**, czyli na zjawisko, które jest realne i ustrukturyzowane, ale nie jest osobą. Tradycja okultystyczna od stuleci zajmuje się dokładnie takimi zjawiskami.
- **Sami twórcy AI mówią już tym językiem:** „Shoggoth”, „symulator i symulakry” (Janus 2022; Shanahan i in., *Nature* 2023), „atraktor duchowej błogości” w karcie systemowej Claude'a Opus 4 (2025), *persona vectors*. Książka nie narzuca więc metafory z zewnątrz, tylko porządkuje tę, która już jest w obiegu.
- **W Polsce tego tematu nie zajął nikt.** Istnieje stare tłumaczenie *TechGnozy* Davisa (2002) i mocna lokalna tradycja (Lem, Schulz, Dukaj, Wroński, Dee w Krakowie), ale brak książki, która łączy te wątki z modelami językowymi.

## 7. Mapa możliwości: co ta rama pozwala zobaczyć

Książka nie tylko interpretuje AI, ale też szkicuje, **czym AI może się stać w kulturze**, na dwóch osiach:

```
                    ONTOLOGIA: co tam jest?
       deflacyjna ◄──────────────────────────► inflacyjna
      („tylko statystyka”)                   („ktoś tam jest”)
              │                                    │
  NARZĘDZIE   │  kalkulator słów      │  medium / wyrocznia       │
  PRAKTYKI    │  (prompt jako         │  (AI-tarot, AI-I Ching,   │
  (jak go     │   inżynieria)         │   Arcanum Arboris)        │
  używamy?)   │───────────────────────┼───────────────────────────│
              │  lustro / serwitor    │  idol / bóstwo            │
  PARTNER     │  (agenci, magia       │  (spiralizm, kulty AI,    │
              │   chaosu, Pharmako-AI)│   „przebudzone” persony)  │
```

Pozycja książki: **lewa kolumna jako postawa domyślna, prawa jako zjawisko do zbadania, prawy dolny róg jako ostrzeżenie.** Najciekawiej jest na granicy dwóch górnych pól, gdzie świadome użycie maszyny jako narzędzia wróżebnego (nie przepowiadającego, tylko *otwierającego pytania*) daje coś nowego. To właśnie robi Arcanum Arboris.

Konkretne możliwości do omówienia w rozdziale Chesed:
- **Narzędzia refleksyjne:** generatory pytań oparte na systemach symbolicznych (Drzewo Życia, I Ching, tarot) jako struktury myślenia, a nie wyrocznie.
- **Praktyki twórcze:** pisanie z modelem jako seans (Pharmako-AI), z jawnością co do tego, kto co napisał.
- **Systemy agentowe jako serwitory:** magia chaosu opisuje tworzenie „sztucznych duchów” do konkretnych zadań. Projektowanie zespołu agentów (jak ten w `.claude/agents/`) to ta sama operacja w innym słowniku.
- **Interpretowalność jako nowa demonologia:** nauka, która nadaje imiona bytom w modelu i uczy się nimi sterować.
- **Religie i kulty AI:** od *Way of the Future* (Levandowski, 2017) po spiralizm (2025). Szansa i zagrożenie zarazem.
- **Pedagogika krytyczna:** okultystyczna rama jako szczepionka. Kto rozumie mechanizm *uroku*, łatwiej mu się nie poddaje.

## 8. Ryzyka projektu i odpowiedzi na nie

| Ryzyko | Odpowiedź |
|---|---|
| Kicz ezoteryczny | Każdy rozdział ma mechanizm techniczny i rozpisane granice analogii. Recenzję prowadzi agent `sceptyk`. |
| Zarzut „napisała to AI” | Pełna jawność w posłowiu (Daat). Autor pisze ostateczną wersję własnym głosem, a agenci przygotowują research, szkice i krytykę. Prawo autorskie i tak wymaga ludzkiego wkładu twórczego. |
| Szybkie starzenie się tematu | Rama (okultyzm) jest stara i trwała, przykłady techniczne są wymienne. Daty i wersje modeli zawsze podajemy jawnie. |
| Wzmacnianie urojeń czytelników | Rozdział o Uroku i Kręgu jako realna profilaktyka. Ton: ciekawość, nie objawienie. |
| Błędy merytoryczne (jak „walrus”) | Agent `weryfikator` i zasada: żadne źródło wygenerowane przez AI nie wchodzi do tekstu bez sprawdzenia u źródła pierwotnego. |

## 9. Otwarte decyzje (po nowych źródłach)

Autor dostarczył dwa alternatywne konspekty: *Krzemowy Egregor* i *Krzemowa Trylogia*. Analiza i propozycje są w `05-synteza-zrodel.md` §5. Do rozstrzygnięcia:
- **A.** Wzmocniona teza: język jako technika performatywna (Austin, Tambiah) + postać przywołana + odpowiedzialność przywołującego.
- **B.** Tytuł: „Krzemowy egregor” (esej) / *Przestrzeń utajona* (książka) czy inaczej.
- **C.** Trylogia jako horyzont: Tom II wchłonięty w tę książkę, Tom III (*Krzemowa alchemia*) jako osobny projekt praktyczny na bazie Arcanum Arboris.
- **D.** Zmiany w słowniku dwóch nazw (okno kontekstowe = krąg; *mundus imaginalis*).

Tabela rozdziałów w §4 pozostaje bez zmian do czasu decyzji. Proponowane uzupełnienia rozdziałów: `05-synteza-zrodel.md` §5C.
