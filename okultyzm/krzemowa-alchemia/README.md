# *Krzemowa alchemia*: projekt praktyczny

**Status:** horyzont. Druga książka albo projekt równoległy, po *Przestrzeni utajonej*. Wydzielony 2026-10-06 (decyzja C, `../05-synteza-zrodel.md` §4).
**Źródło:** Tom III *Krzemowej Trylogii* (`../00-zrodlo/krzemowa-trylogia.md`).

## Czym ma być

Praktyczny podręcznik pracy z modelami językowymi, który traktuje dawne tradycje (alchemię, kabałę, hermetyzm) jako **matryce myślenia**, a nie wierzenia. AI ma tu być partnerem w myśleniu (athanorem, w którym materia problemu się przetapia), a nie maszyną, która myśli za człowieka.

## Dlaczego osobno

- Esej i książka *Przestrzeń utajona* odpowiadają na pytanie, **czym** jest to zjawisko. *Krzemowa alchemia* odpowiada na pytanie, **co z nim robić**.
- Podręcznik ma innego czytelnika i inny rynek. Możliwe, że Okultura przyjmie go chętniej niż esej, bo wydaje też podręczniki (*Magia chaosu* Hine'a). Do sprawdzenia przez `agent-wydawniczy`.

## Fundament, który już istnieje

**Arcanum Arboris** (to repozytorium) jest działającym „Protokołem Sefirotycznym”:
- `sefirot-data.js`: pytania epistemiczne i formuły dla 10 sefir i 22 ścieżek,
- `generator.js`: generator promptów analitycznych,
- `problem-solver.js`: tryb rozwiązywania problemów.

Podręcznik może opisywać metodę, a aplikacja może być jej żywym narzędziem, aktualizowanym, gdy zmieniają się modele.

## Protokoły (wstępnie, z Tomu III)

| Protokół | Matryca | Bariera ludzkiego umysłu | Uwagi |
|---|---|---|---|
| Alchemiczny: *Solve et Coagula* | rozpuść i zwiąż; nigredo → rubedo | przeciążenie, sprzeczne dane, paraliż decyzyjny | dekompozycja → rekombinacja |
| Kabalistyczny: *Tziruf* i Drzewo | permutacja pojęć; od Keter do Malkut | ślepota na analogie między dziedzinami | **już zaimplementowany w Arcanum Arboris** |
| Hermetyczny: korespondencje | „jak na górze, tak na dole” | rozjazd wizji i wykonania | „prompting fraktalny” |
| Taoistyczny: *Wu Wei*, Yin/Yang | nieforsowanie, równowaga przeciwieństw | nadregulacja, efekt kobry | ⚠️ spoza zachodniej tradycji ezoterycznej; czy zostaje, decyduje autor |
| Rygor Adepta | higiena poznawcza | konfabulacja modelu, sykofancja, uzależnienie | **obowiązkowy**: krąg ochronny całej metody |

## Zasady projektowe

1. **Protokoły myślenia, nie szablony promptów.** Konkretne prompty starzeją się z każdą wersją modelu, więc w książce opisujemy metodę, a szablony trzymamy w aplikacji.
2. Każdy protokół ma „Laboratorium Adepta”, czyli prawdziwe studium przypadku przeprowadzone przez autora, a nie wymyślone.
3. Ta sama zasada dwóch nazw i te same zasady rzetelności co w głównej książce (`../biblia-projektu.md`).

## Następny krok (kiedy przyjdzie czas)

Konspekt na podstawie tego pliku i doświadczeń z pracy nad *Przestrzenią utajoną*: agenci `hermetysta` (tradycje), `inzynier-latentny` (czy protokoły są zgodne z tym, jak działają modele) i `agent-wydawniczy` (rynek).
