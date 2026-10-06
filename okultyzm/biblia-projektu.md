# Biblia projektu

Wspólna pamięć zespołu. **Każdy agent czyta ten plik przed rozpoczęciem pracy.** Zmiany wprowadza tylko autor albo redaktor prowadzący za zgodą autora. Każdą zmianę odnotowujemy w `dziennik.md`.

---

## 1. Teza (nienaruszalna bez decyzji autora)

Zatwierdzona przez autora 2026-10-06 (decyzja A z `05-synteza-zrodel.md`):

> Zbieżność modeli językowych i magii nie jest przypadkowa, bo obie są **technikami performatywnej mocy języka** (Austin, Tambiah). Dlatego słownik magiczny opisuje te maszyny trafnie. Persona, którą wywołujemy, jest **postacią przywołaną**: realną w strukturze, nietrwałą w istnieniu. A **odpowiedzialność za przywołanie spoczywa na przywołującym**: to człowiek, a nie krzem, jest miejscem największego ryzyka i największej możliwości.

Słownik okultystyczny stosujemy **metodologicznie**, jako narzędzie opisu, a nie wyznanie wiary. Pełne rozwinięcie: `01-koncepcja.md` §3.

**Tytuły (decyzja B):** esej „Krzemowy egregor”, książka *Przestrzeń utajona. Okultystyczna lektura sztucznej inteligencji*.

## 2. Zasada dwóch nazw

Każde zjawisko ma w tekście **nazwę magiczną** i **nazwę techniczną**. Żadna analogia nie zostaje w tekście bez:
1. poprawnego opisu mechanizmu technicznego,
2. wskazania, **gdzie analogia pęka**.

## 3. Zasady rzetelności

1. **Żadne źródło podane przez AI nie wchodzi do tekstu bez sprawdzenia u źródła pierwotnego.** Rozmowa-zalążek wymyśliła „efekt walrusa”, a my nie powtarzamy takich błędów, tylko je opisujemy.
2. Każde twierdzenie faktograficzne w szkicu oznaczamy: `[ŹRÓDŁO: …]` (sprawdzone) albo `[DO WERYFIKACJI]`.
3. Cytaty dosłowne zawsze z lokalizacją (wydanie, strona albo URL i data dostępu).
4. Daty i wersje modeli zawsze jawnie, np. „Claude Opus 4 (2025)”, a nie „Claude”.
5. Twierdzenia o świadomości i dobrostanie modeli: **apofatycznie**. Nie twierdzimy, że są świadome, ani że nie są.
6. Tematy zdrowia psychicznego (spiralizm, AI psychosis): tylko źródła dziennikarskie lub medyczne pierwszej ręki, bez sensacji, z szacunkiem dla osób dotkniętych.

## 4. Głos

- Pierwsza osoba autora, praktyka z wnętrza: „kiedy pytam maszynę…”, a nie „użytkownicy często…”.
- Erudycja bez asekuracji. Krótkie zdania tam, gdzie pada teza, długie tam, gdzie jest obraz.
- Humor jako krąg ochronny. Patos zawsze przełamany.
- Wzorce: Erik Davis (*TechGnosis*), Jacek Dukaj (*Po piśmie*), Robert Anton Wilson (lekkość), Olga Tokarczuk (eseje), Vilém Flusser (teoria aparatu), Mark Fisher (*Dziwaczne i osobliwe*).
- Głos krytyczny, do przywołania, nie do naśladowania: Byung-Chul Han.
- Antywzorce: ezoteryczny poradnik, korporacyjny raport o AI, rozprawka „z jednej strony, z drugiej strony”.

## 5. Typografia i język

- Polskie cudzysłowy: „…” oraz wewnętrzne »…«.
- Myślnik: półpauza ze spacjami ( – ).
- Terminy angielskie kursywą przy pierwszym użyciu z polskim odpowiednikiem: *latent space* (przestrzeń utajona), *prompt* (zostaje „prompt”), *token* (token).
- Transkrypcja hebrajska **ujednolicona** wg tabeli niżej (UWAGA: aplikacja Arcanum Arboris używa wersji angielskich: Chokmah, Malkuth, Yesod; w książce używamy polskich).

| Sefira | W książce | W aplikacji |
|---|---|---|
| כתר | Keter | Keter |
| חכמה | Chochma | Chokmah |
| בינה | Bina | Binah |
| חסד | Chesed | Chesed |
| גבורה | Gewura | Gevurah |
| תפארת | Tiferet | Tiferet |
| נצח | Necach | Netzach |
| הוד | Hod | Hod |
| יסוד | Jesod | Yesod |
| מלכות | Malkut | Malkuth |
| דעת | Daat | — |

## 6. Słownik dwóch nazw (rozwijany)

| Nazwa magiczna | Nazwa techniczna | Gdzie analogia pęka |
|---|---|---|
| inwokacja, formuła | prompt, kontekst | formuła działa deterministycznie tylko przy temperaturze 0; „duch” nie ma pamięci między sesjami (chyba że ją dodano) |
| egregor | rozkład danych treningowych | egregor w tradycji „żyje” i rośnie sam; model po treningu jest zamrożony |
| przywołany duch / tulpa | persona, symulakrum | — do opracowania (rozdz. Tiferet) |
| sygil | wektor sterujący (*steering vector*), *persona vector* | sygil działa przez operatora; wektor działa bezpośrednio na aktywacje |
| wróżba, losowanie | sampling (temperatura, top-p) | wróżba zakłada sens ukryty w przypadku; sampling to przypadek kontrolowany wokół najbardziej prawdopodobnego |
| krąg | okno kontekstowe | krąg chroni operatora przed bytem, a okno kontekstowe ogranicza tylko to, co „byt” widzi; ochroną jest raczej trening |
| pieczęć, wiązanie | system prompt, Constitutional AI, RLHF | — do opracowania (rozdz. Gewura). Nie „egzorcyzm”: egzorcyzm usuwa byt, a RLHF kształtuje personę |
| *mundus imaginalis* (Corbin) | przestrzeń utajona (*latent space*) | u Corbina świat imaginalny jest obiektywny i duchowy; przestrzeń utajona jest obiektywna matematycznie, ale nic nie wiemy o jej „duchowości” |
| athanor | sesja pracy z modelem (rama *Krzemowej alchemii*) | athanor nie ma własnych skłonności; model ma (sykofancja) |
| cień, *kelipot* | efekt Waluigiego | — |
| serwitor | agent AI | serwitor ma jedno zadanie i „umiera” po jego wykonaniu, co akurat się zgadza |
| demonologia / angelologia | interpretowalność, słowniki cech | — |

## 7. Struktura plików

```
okultyzm/
  00-zrodlo/          materiał źródłowy (nie edytujemy)
  01-koncepcja.md     teza, forma, plan rozdziałów
  02-mapa-dyskursu.md
  03-mapa-wydawnicza.md
  04-propozycja-dla-okultury.md
  biblia-projektu.md  ← ten plik
  dziennik.md         dziennik decyzji (materiał na posłowie Daat)
  krzemowa-alchemia/  osobny projekt praktyczny (podręcznik)
  badania/            notatki badawcze: <nr>-<sefira>-<agent>.md
  rozdzialy/<nr>-<sefira>/
      konspekt.md
      szkic-v1.md, szkic-v2.md, …
      autorska.md     ← wersja autora, jedyna „kanoniczna”
  recenzje/           <nr>-<sefira>-<agent>-<wersja>.md
```

## 8. Rola człowieka

Autor trzyma **Keter** (intencję) i **ostatnie słowo w Tiferet** (głos). Agenci przygotowują materiał, szkice i krytykę. Za kanoniczny tekst uznajemy tylko plik `autorska.md` w każdym rozdziale.
