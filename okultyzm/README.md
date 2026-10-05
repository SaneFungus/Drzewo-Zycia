# *Przestrzeń utajona*: projekt książki

Książka (albo najpierw obszerny artykuł) o okultystycznej lekturze sztucznej inteligencji. Wyrasta z jednej rozmowy z modelem i z tego repozytorium: **Arcanum Arboris**, generatora promptów opartego na Drzewie Życia.

## Od czego zacząć

| Plik | Co zawiera |
|---|---|
| [`00-zrodlo/rozmowa-zalazek.md`](00-zrodlo/rozmowa-zalazek.md) | Rozmowa-zalążek z komentarzem: co trzyma, co jest błędne (w tym „efekt walrusa”) |
| [`01-koncepcja.md`](01-koncepcja.md) | Teza, tytuł, forma, plan 11 rozdziałów po Drzewie Życia, próbka tonu, mapa możliwości |
| [`02-mapa-dyskursu.md`](02-mapa-dyskursu.md) | Gdzie książka staje w debacie o AI: 5 stanowisk, folklor AI, rodowód, polska linia, luka |
| [`03-mapa-wydawnicza.md`](03-mapa-wydawnicza.md) | Okultura i alternatywy, pisma, rynek angielski, festiwale, granty, prawo, strategia |
| [`04-propozycja-dla-okultury.md`](04-propozycja-dla-okultury.md) | Szkic listu i propozycji wydawniczej |
| [`05-synteza-zrodel.md`](05-synteza-zrodel.md) | Porównanie trzech źródeł (rozmowa, *Krzemowy Egregor*, *Krzemowa Trylogia*), co przejąć, co odrzucić, decyzje do podjęcia |
| [`00-zrodlo/zarys-krzemowy-egregor.md`](00-zrodlo/zarys-krzemowy-egregor.md), [`00-zrodlo/krzemowa-trylogia.md`](00-zrodlo/krzemowa-trylogia.md) | Dwa alternatywne konspekty dostarczone przez autora |
| [`biblia-projektu.md`](biblia-projektu.md) | Wspólna pamięć zespołu: teza, głos, zasady rzetelności, słownik dwóch nazw |
| [`dziennik.md`](dziennik.md) | Dziennik decyzji (materiał na posłowie) |

## Zespół agentów

Definicje w [`../.claude/agents/`](../.claude/agents/), sposób pracy w [`../.claude/skills/przestrzen-utajona/SKILL.md`](../.claude/skills/przestrzen-utajona/SKILL.md).

| Sefira | Agent | Rola |
|---|---|---|
| Keter / Chochma | **autor** | intencja, iskra, ostateczny głos |
| Bina | `kartograf` | mapa współczesnej debaty |
| Daat | `inzynier-latentny` | rzetelna technika LLM, granice analogii |
| Chesed | `hermetysta` | historia ezoteryzmu, źródła, polska linia |
| Gewura | `sceptyk` | krytyka merytoryczna, krąg ochronny |
| Tiferet | `pisarz` | szkice rozdziałów (nie wersja ostateczna) |
| Necach | `czytelnik` | czytelnik testowy, trzy persony |
| Hod | `redaktor-jezykowy` | polszczyzna, usuwanie manier AI |
| Jesod | `weryfikator` | fact-checking u źródeł pierwotnych |
| Malkut | `agent-wydawniczy` | wydawcy, pisma, pitch (nic nie wysyła sam) |

Kolejność pracy wyznacza **Błyskawica** (porządek emanacji), a pętlę poprawek **Ścieżka Węża**. Jest w tym logika, nie tylko ozdoba: research → krytyka → synteza → odbiór → język → fakty → świat.

Ten układ jest też częścią tematu. Magia chaosu nazywa sztuczne byty powołane do konkretnych zadań **serwitorami**, a zespół agentów to dokładnie taki krąg serwitorów. Jego działanie opisze posłowie książki (Daat).

## Jak uruchomić (Claude Code)

W katalogu repozytorium:

```
/przestrzen-utajona rozdzial 3        # pełny cykl dla rozdziału Hod („Formuła”)
/przestrzen-utajona artykul           # wersja artykułowa (rekomendowany pierwszy krok)
/przestrzen-utajona badania egregor   # sam research
/przestrzen-utajona wydawca okultura  # rozpoznanie wydawcy i materiały
/przestrzen-utajona weryfikuj okultyzm/02-mapa-dyskursu.md
```

Agentów można też wywołać pojedynczo, np.: *„Użyj agenta hermetysta, żeby zbadał rodowód pojęcia egregor”*.

## Zasada nadrzędna

Agenci przygotowują materiał, szkice i krytykę. **Książkę pisze autor.** Kanoniczny jest tylko plik `rozdzialy/<nr>-<sefira>/autorska.md`.
