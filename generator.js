/**
 * Moduł generator.js
 * 
 * Zawiera logikę generowania promptów na podstawie wybranych sefir i ścieżek.
 * Implementuje zaawansowane metody tworzenia różnych typów analiz.
 */

import { initializeSefirot, initializePaths } from './sefirot-data.js';

export class TreeOfLifePromptGenerator {
  constructor() {
    // Inicjalizacja bazy wiedzy o sefirach i ścieżkach
    this.sefirot = initializeSefirot();
    this.paths = initializePaths();

    // Dynamiczne powiązania ścieżek z sefirami
    this.connectPathsToSefirot();
  }

  /**
   * Łączy ścieżki z sefirami, tworząc dwukierunkowe powiązania
   */
  connectPathsToSefirot() {
    // Dla każdej sefiry inicjalizujemy pustą tablicę połączonych ścieżek
    Object.keys(this.sefirot).forEach((sefirahKey) => {
      this.sefirot[sefirahKey].paths = [];
    });

    // Dla każdej ścieżki, dodajemy referencję do odpowiednich sefir
    Object.keys(this.paths).forEach((pathKey) => {
      const path = this.paths[pathKey];
      this.sefirot[path.start].paths.push(pathKey);
      this.sefirot[path.end].paths.push(pathKey);
    });
  }

  /**
   * Znajduje ścieżki łączące wybrane sefiry
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
   * Generuje pytania epistemiczne uwzględniające dynamikę transformacji
   * @param {String} sefirahKey Klucz sefiry
   * @param {String} topic Temat analizy
   * @param {String} mode Tryb analizy: 'static', 'dynamic', 'liminal'
   * @returns {Array} Tablica pytań epistemicznych
   */
  generateDynamicQuestions(sefirahKey, topic, mode = 'static') {
    const sefira = this.sefirot[sefirahKey];
    const baseQuestions = [...sefira.epistemicQuestions];
    
    if (mode === 'static') return baseQuestions;
    
    // Pytania dotyczące dynamiki/transformacji
    const dynamicQuestions = [
      `Jak rozumienie ${topic} mogłoby ewoluować, gdyby przesuwało się od perspektywy ${sefira.name} w kierunku innych sefir?`,
      `W jaki sposób ${topic} manifestuje się odmiennie na różnych etapach swojego rozwoju, widzianych przez pryzmat ${sefira.name}?`,
      `Jakie transformacje przechodzi ${topic}, gdy jest doświadczane z perspektywy ${sefira.name}, a jakie gdy perspektywa się zmienia?`
    ];
    
    // Pytania dotyczące liminalności
    const liminalQuestions = [
      `Co pozostaje niepoznawalne w ${topic}, nawet z perspektywy ${sefira.name}?`,
      `Jakie granice poznania ujawniają się, gdy analizujemy ${topic} z perspektywy ${sefira.name}?`,
      `W jaki sposób perspektywa ${sefira.name} jednocześnie odsłania i zasłania aspekty ${topic}?`
    ];
    
    return mode === 'dynamic' 
      ? [...baseQuestions, ...dynamicQuestions] 
      : [...baseQuestions, ...dynamicQuestions, ...liminalQuestions];
  }

  /**
   * Dodaje meta-poznawczy wymiar do wygenerowanego promptu
   * @param {String} prompt Wygenerowany prompt podstawowy
   * @param {String} topic Temat analizy
   * @returns {String} Wzbogacony prompt z warstwą meta-poznawczą
   */
  addMetacognitiveLayer(prompt, topic) {
    const metacognitiveReflection = `
## Meta-Refleksja Epistemiczna

Podczas analizy zagadnienia "${topic}", rozważ również:

1. **Świadomość ram interpretacyjnych**: W jaki sposób sama struktura Drzewa Życia kształtuje Twoje rozumienie analizowanego zagadnienia? Jakie aspekty mogą pozostawać niewidoczne z powodu przyjętej perspektywy?

2. **Granice poznania**: Które elementy ${topic} wydają się fundamentalnie nieprzejrzyste, wymykające się kategoryzacji, nawet przy użyciu tak złożonego modelu jak Drzewo Życia?

3. **Dialektyka interpretacji**: Jakie napięcia i paradoksy wyłaniają się podczas analizy ${topic} przez pryzmat różnych sefir? Czy te napięcia mogą prowadzić do głębszego zrozumienia?

Pamiętaj, że kabalistyczny model służy nie tyle dostarczeniu ostatecznych odpowiedzi, co pogłębieniu pytań i poszerzeniu spektrum możliwych interpretacji.
`;

    return prompt + metacognitiveReflection;
  }

  /**
   * Generuje sekcję hermeneutyki wzajemnego oświetlania
   * @param {String} topic Temat analizy
   * @returns {String} Sekcja prompta o wzajemnym oświetlaniu
   */
  generateMutualIlluminationSection(topic) {
    return `
## Hermeneutyka Wzajemnego Oświetlania

Analizując ${topic} przez pryzmat Drzewa Życia, rozważ również:

1. W jaki sposób samo zagadnienie ${topic} może prowadzić do reinterpretacji kabalistycznych kategorii?
2. Jakie aspekty ${topic} wymykają się tradycyjnym ramom sefirotycznym i mogą sugerować potrzebę ich rozszerzenia?
3. Gdyby ${topic} miało stać się jedenastą sefirą na Drzewie Życia, jakie unikalne właściwości i połączenia by wniosło?

Ta wzajemna hermeneutyka nie zakłada redukcji jednej domeny do drugiej, lecz produktywne napięcie interpretacyjne między nimi.
`;
  }

  /**
   * Generuje sekcję paradoksów i niejednoznaczności
   * @param {Array} selectedSefirot Tablica wybranych sefir
   * @param {String} topic Temat analizy
   * @returns {String} Sekcja prompta o paradoksach
   */
  generateParadoxesSection(selectedSefirot, topic) {
    // Znajdź pary sefir, które mogą tworzyć interesujące napięcia
    const paradoxPairs = [
      ['chokmah', 'binah'], // intuicja vs analiza
      ['chesed', 'gevurah'], // miłosierdzie vs surowość
      ['netzach', 'hod'], // emocje vs intelekt
      ['keter', 'malkuth'] // transcendencja vs immanencja
    ];
    
    // Filtruj tylko pary, w których oba elementy są w wybranych sefirach
    const relevantPairs = paradoxPairs.filter(pair => 
      selectedSefirot.includes(pair[0]) && selectedSefirot.includes(pair[1])
    );
    
    if (relevantPairs.length === 0) return '';
    
    let section = `
## Paradoksy i Napięcia Dialektyczne

W analizie ${topic} zwróć szczególną uwagę na następujące paradoksy i napięcia dialektyczne:
`;

    relevantPairs.forEach(pair => {
      const sefira1 = this.sefirot[pair[0]];
      const sefira2 = this.sefirot[pair[1]];
      
      section += `
### Napięcie ${sefira1.name} — ${sefira2.name}
- W jaki sposób ${topic} manifestuje się jednocześnie poprzez ${sefira1.meaning.toLowerCase()} i ${sefira2.meaning.toLowerCase()}?
- Jak pozorna sprzeczność między perspektywami ${sefira1.name} i ${sefira2.name} może prowadzić do głębszego zrozumienia ${topic}?
- Co wyłania się w przestrzeni między ${sefira1.meaning.toLowerCase()} a ${sefira2.meaning.toLowerCase()} w kontekście ${topic}?
`;
    });
    
    return section;
  }

  /**
   * Generuje prompt na podstawie wybranych sefir, ścieżek i zagadnienia
   * @param {Array} selectedSefirot Tablica kluczy wybranych sefir
   * @param {String} topic Zagadnienie do analizy
   * @param {Object} options Opcje generowania
   * @returns {String} Wygenerowany prompt
   */
  generatePrompt(selectedSefirot, topic, options = {}) {
    const defaultOptions = {
      mode: 'static', // 'static', 'dynamic', 'liminal'
      includeMetacognitive: true,
      includeMutualIllumination: true,
      includeParadoxes: true,
      questionCount: 3 // liczba pytań do wylosowania
    };
    
    const settings = { ...defaultOptions, ...options };
    
    if (!selectedSefirot || selectedSefirot.length === 0 || !topic) {
      return "Proszę wybrać co najmniej jedną sefirę i podać zagadnienie do analizy.";
    }
    
    // Znajdź ścieżki łączące wybrane sefiry
    const connectingPaths = this.findConnectingPaths(selectedSefirot);
    
    // Stwórz prompt
    let prompt = `# Kabalistyczna Analiza Epistemiczna: ${topic}\n\n`;
    
    // Wprowadzenie dostosowane do wybranego trybu
    const introductions = {
      'static': `Przeprowadź wielowymiarową analizę zagadnienia "${topic}" z perspektywy następujących wymiarów kabalistycznego Drzewa Życia:\n\n`,
      'dynamic': `Badaj dynamiczną naturę i transformacje zagadnienia "${topic}" poprzez następujące wymiary kabalistycznego Drzewa Życia, zwracając uwagę na procesy ewolucji i przemiany:\n\n`,
      'liminal': `Eksploruj granice poznania i obszary liminalności zagadnienia "${topic}" poprzez następujące wymiary kabalistycznego Drzewa Życia, poszukując zarówno tego, co można poznać, jak i tego, co pozostaje fundamentalnie nieprzejrzyste:\n\n`
    };
    
    prompt += introductions[settings.mode];
    
    // Dodaj sekcję dla każdej wybranej sefiry
    prompt += "## Perspektywy Sefirotyczne\n\n";
    
    selectedSefirot.forEach(sefirahKey => {
      const sefira = this.sefirot[sefirahKey];
      prompt += `### ${sefira.name} (${sefira.hebrewName}) - ${sefira.meaning}\n`;
      prompt += `*${sefira.aspect}*\n\n`;
      
      // Generuj pytania w zależności od trybu
      const questions = this.generateDynamicQuestions(sefirahKey, topic, settings.mode);
      const selectedQuestions = this.getRandomElements(questions, Math.min(settings.questionCount, questions.length));
      
      selectedQuestions.forEach(question => {
        prompt += `- ${question.replace(/\{zagadnieniu\}/g, topic).replace(/\{zagadnienie\}/g, topic)}\n`;
      });
      
      // Dodaj formułę promptu
      const formula = this.getRandomElements(sefira.promptFormulas, 1)[0];
      prompt += `\n*${formula.replace(/\{zagadnieniu\}/g, topic).replace(/\{zagadnienie\}/g, topic)}*\n\n`;
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
          prompt += `- ${question.replace(/\{zagadnieniu\}/g, topic).replace(/\{zagadnienie\}/g, topic)}\n`;
        });
        
        prompt += `\n*Transformacja: ${path.transformation}*\n\n`;
      });
    }
    
    // Dodaj sekcję paradoksów, jeśli opcja włączona
    if (settings.includeParadoxes) {
      const paradoxesSection = this.generateParadoxesSection(selectedSefirot, topic);
      if (paradoxesSection) prompt += paradoxesSection;
    }
    
    // Dodaj sekcję integracyjną
    prompt += "## Integracja i Synteza\n\n";
    prompt += `Zintegruj wglądy z powyższych perspektyw, aby uzyskać transformacyjne, wielowymiarowe zrozumienie zagadnienia "${topic}". Rozważ:\n\n`;
    prompt += "1. Jakie nieoczekiwane wzorce i relacje wyłaniają się z dialogu między różnymi perspektywami sefirotycznymi?\n";
    prompt += "2. W jaki sposób ścieżki transformacyjne ujawniają ukryte wymiary i dynamikę tego zagadnienia?\n";
    prompt += "3. Jakie radykalnie nowe, przełomowe zrozumienie może wyłonić się z tej wielowymiarowej analizy?\n";
    prompt += "4. Jak ta kabalistyczna analiza epistemiczna mogłaby przekształcić nie tylko nasze rozumienie, ale i praktyczne podejście do tego zagadnienia?\n\n";
    
    // Dodaj wskazówki końcowe
    prompt += "## Wskazówki do Analizy\n\n";
    prompt += "- Poszukuj nieoczywistych wzorców i połączeń, które mogą prowadzić do rewolucyjnych wglądów\n";
    prompt += "- Pozwól na produktywne napięcie między przeciwstawnymi perspektywami\n";
    prompt += "- Balansuj między konkretnymi przykładami a głębokimi, abstrakcyjnymi wglądami\n";
    prompt += "- Dąż do transformacyjnej syntezy, która nie tylko integruje różne perspektywy, ale wykracza poza nie\n";
    prompt += "- Eksploruj zarówno wewnętrzne, osobiste wymiary jak i szersze, systemowe implikacje zagadnienia\n";
    
    // Dodaj warstwę meta-poznawczą, jeśli opcja włączona
    if (settings.includeMetacognitive) {
      prompt = this.addMetacognitiveLayer(prompt, topic);
    }
    
    // Dodaj sekcję hermeneutyki wzajemnego oświetlania, jeśli opcja włączona
    if (settings.includeMutualIllumination) {
      prompt += this.generateMutualIlluminationSection(topic);
    }
    
    return prompt;
  }

  /**
   * Losowo wybiera elementy z tablicy
   * @param {Array} array Tablica z elementami
   * @param {Number} count Liczba elementów do wybrania
   * @returns {Array} Wylosowane elementy
   */
  getRandomElements(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}

// Eksportuj publiczne API dla innych modułów
export function createPromptGenerator() {
  return new TreeOfLifePromptGenerator();
}
