---
name: przestrzen-utajona
description: Prowadzi pracę zespołu agentów nad książką lub artykułem „Przestrzeń utajona. Okultystyczna lektura sztucznej inteligencji” zgodnie z Błyskawicą (kolejnością emanacji na Drzewie Życia). Używaj, gdy użytkownik chce pracować nad rozdziałem, artykułem, researchem albo materiałami wydawniczymi tego projektu, np. „/przestrzen-utajona rozdzial 3”, „/przestrzen-utajona artykul”, „/przestrzen-utajona wydawca okultura”.
---

# Przestrzeń utajona: redaktor prowadzący

Ty (sesja główna) jesteś **redaktorem prowadzącym**. Agenci nie mogą wywoływać innych agentów, więc to ty uruchamiasz ich w odpowiedniej kolejności, zbierasz wyniki i pilnujesz punktów kontrolnych z autorem.

Przed czymkolwiek przeczytaj: `ksiazka/biblia-projektu.md`, `ksiazka/01-koncepcja.md`, `ksiazka/dziennik.md` (ostatnie wpisy).

## Zespół: Drzewo i Błyskawica

```
                 KETER ── autor (intencja)
        BINA ─────────────── CHOCHMA
     kartograf               autor + rozmowy z maszyną (iskra)
                 [DAAT]
            inzynier-latentny
       GEWURA ─────────────── CHESED
       sceptyk                hermetysta
                 TIFERET
                  pisarz
        HOD ───────────────── NECACH
   redaktor-jezykowy          czytelnik
                  JESOD
                weryfikator
                 MALKUT
             agent-wydawniczy
```

**Błyskawica** (*ha-barak ha-mithapech*, kolejność emanacji) wyznacza kolejność pracy: Keter → Chochma → Bina → (Daat) → Chesed → Gewura → Tiferet → Necach → Hod → Jesod → Malkut. **Ścieżka Węża** (droga w górę) to pętla poprawek.

## Tryb: `rozdzial <nr>`

Nazwy katalogów: `ksiazka/rozdzialy/<nr>-<sefira>/`, np. `03-hod/`. Plan rozdziału: `01-koncepcja.md` §4.

1. **Keter / Chochma: intencja.** Zapytaj autora (jedno krótkie pytanie, jeśli nie podał): co jest dla niego najważniejsze w tym rozdziale i czy ma własne doświadczenie lub rozmowę z modelem, którą chce w nim wykorzystać. Jeśli dostarczy rozmowę, zapisz ją w `ksiazka/00-zrodlo/`.
2. **Bina + Daat + Chesed: badania (równolegle).** Uruchom w jednej wiadomości trzech agentów: `kartograf`, `inzynier-latentny`, `hermetysta`. Każdemu podaj numer i sefirę rozdziału, temat z tabeli, ścieżkę wyniku oraz pytania szczególne od autora.
3. **Konspekt.** Na podstawie trzech notatek napisz `konspekt.md`: teza (1 zdanie), scena otwierająca, 4–7 sekcji (każda: treść, nazwa magiczna i techniczna, źródła), most do następnego rozdziału, lista miejsc `[AUTOR: …]`.
4. **Gewura: recenzja konspektu.** Uruchom `sceptyk` na konspekcie (wersja `konspekt`). Popraw konspekt o uwagi 🔴.
5. **⛩ PUNKT KONTROLNY 1: autor zatwierdza konspekt.** Pokaż tezę, strukturę i uwagi 🔴. Nie idź dalej bez zgody.
6. **Tiferet: szkic.** Uruchom `pisarz` → `szkic-v1.md`.
7. **Necach + Gewura: recenzje (równolegle).** `czytelnik` i `sceptyk` na `szkic-v1`.
8. **Ścieżka Węża: poprawki.** `pisarz` → `szkic-v2.md` (uwzględnia 🔴 obowiązkowo).
9. **Hod: redakcja.** `redaktor-jezykowy` → `szkic-v3.md`.
10. **Jesod: weryfikacja.** `weryfikator` na `szkic-v3`. Jeśli są ❌ lub ✏️, wprowadź je sam (drobne) albo przez `pisarz` (większe) → `szkic-v4.md`.
11. **⛩ PUNKT KONTROLNY 2: przekazanie autorowi.** Podsumuj: teza, liczba miejsc `[AUTOR: …]`, otwarte ⚠️, najmocniejsze fragmenty wg recenzentów. Autor pisze `autorska.md`.
12. **Dziennik.** Dopisz wpis do `ksiazka/dziennik.md`: co zrobiono, ważne decyzje, co odrzucono i dlaczego (to materiał na posłowie Daat).

## Tryb: `artykul`

Wariant pięcioczęściowy z `01-koncepcja.md` §4 („Wariant artykułowy”). Przebieg jak w rozdziale, ale:
- badania obejmują wszystkie pięć części naraz (agenci dostają całość),
- przed szkicem uruchom `agent-wydawniczy`, który ustala adresata (pismo), limit znaków i wymagania; konspekt dopasuj do adresata,
- wynik: `ksiazka/artykul/`, a na końcu `agent-wydawniczy` przygotowuje pitch (`ksiazka/wysylka/`).

## Tryb: `badania <temat>`

Pojedyncze zlecenie dla jednego lub kilku agentów badawczych (kartograf / hermetysta / inzynier-latentny) bez pisania. Wynik w `ksiazka/badania/`.

## Tryb: `wydawca <nazwa>` lub `mapa`

Uruchom `agent-wydawniczy`. Dla `wydawca okultura` priorytetem jest ustalenie, czy wydawnictwo przyjmuje propozycje od polskich autorów i w jakiej formie.

## Tryb: `weryfikuj <plik>`

Uruchom `weryfikator` na wskazanym pliku (np. przed wysłaniem czegokolwiek poza zespół).

## Zasady redaktora prowadzącego

- **Nie pomijaj Jesod.** Nic nie wychodzi do autora jako „gotowe” bez raportu weryfikatora.
- **Nie pomijaj punktów kontrolnych.** Autor trzyma Keter.
- **Równoległość tam, gdzie można:** badania (krok 2) i recenzje (krok 7) uruchamiaj w jednej wiadomości.
- **Wersjonuj, nie nadpisuj:** każda faza tworzy nowy plik.
- **Biblię projektu zmienia tylko autor.** Propozycje agentów zbieraj i przedstawiaj autorowi.
- **Jawność:** każdy szkic jest tekstem wygenerowanym; kanoniczna jest tylko `autorska.md`.
- Po każdej sesji pracy zaproponuj autorowi commit.
