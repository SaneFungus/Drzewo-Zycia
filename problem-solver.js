/**
 * Moduł problem-solver.js
 * 
 * Zawiera struktury pytań dla poszczególnych sefir w kontekście
 * rozwiązywania praktycznych problemów.
 */

export const problemSolvingQuestions = {
  keter: [
    "Jaki jest prawdziwy, fundamentalny cel, który chcemy osiągnąć, poza wszystkimi pozornie ważnymi celami drugorzędnymi?",
    "Co pozostałoby niezmienione w naszym problemie, gdybyśmy zmienili wszystkie zmienne okoliczności?",
    "Jak problem wygląda, jeśli odrzucimy wszystkie nasze założenia na jego temat?"
  ],
  chokmah: [
    "Jakie nieoczywiste, radykalne rozwiązanie mogłoby całkowicie zmienić zasady gry?",
    "Co by się stało, gdybyśmy odwrócili kluczowe założenie w tym problemie?",
    "Jakie inspiracje możemy czerpać z zupełnie niepowiązanych dziedzin?"
  ],
  binah: [
    "Jakie są wszystkie czynniki wpływające na ten problem i jak są ze sobą powiązane?",
    "Jakie ukryte wzorce i zależności leżą u podstaw problemu?",
    "Które elementy problemu mają największy wpływ na całość systemu?"
  ],
  chesed: [
    "W jaki sposób możemy spojrzeć na problem z perspektywy obfitości zamiast niedoboru?",
    "Co się stanie, jeśli usuniemy wszystkie pozorne ograniczenia?",
    "Jak rozwiązanie mogłoby przynieść korzyści wszystkim zainteresowanym stronom?"
  ],
  gevurah: [
    "Jakie konkretne, mierzalne kryteria musi spełniać skuteczne rozwiązanie?",
    "Co należy bezwzględnie odrzucić lub wyeliminować w tym problemie?",
    "Gdzie powinniśmy wytyczyć granice i limity, aby rozwiązanie było zrównoważone?"
  ],
  tiferet: [
    "Jak pogodzić sprzeczne wymagania i perspektywy w tym problemie?",
    "Jak stworzyć rozwiązanie, które równoważy wszystkie istotne aspekty?",
    "Co stanowi centralny, jednoczący punkt całego problemu?"
  ],
  netzach: [
    "Co sprawi, że ludzie zaangażują się emocjonalnie w realizację rozwiązania?",
    "Jak utrzymać energię i zaangażowanie przez cały proces wdrażania?",
    "Jakie nagrody i korzyści emocjonalne przyniesie rozwiązanie?"
  ],
  hod: [
    "Jak precyzyjnie opisać i zakomunikować rozwiązanie wszystkim zainteresowanym?",
    "Jakie systemy, procedury i struktury są potrzebne, aby wdrożyć rozwiązanie?",
    "Jak przekształcić abstrakcyjne idee w konkretny, zrozumiały plan działania?"
  ],
  yesod: [
    "Jak będzie wyglądać sukces i jak możemy go sobie wyobrazić?",
    "Jakie nieświadome obawy lub blokady mogą utrudniać wdrożenie rozwiązania?",
    "Jakie przygotowania są niezbędne, zanim przejdziemy do konkretnych działań?"
  ],
  malkuth: [
    "Jakie konkretne, mierzalne kroki należy podjąć w jakiej kolejności?",
    "Kto jest odpowiedzialny za każdy aspekt wdrożenia i w jakich terminach?",
    "Jakie zasoby materialne, narzędzia i wsparcie są potrzebne do realizacji?"
  ]
};

export const problemSolvingProcess = [
  "Rozpocznij od Keter i Chokmah: Zrozum istotę problemu i rozważ niekonwencjonalne podejścia",
  "Przejdź do Binah: Zanalizuj struktury i wzorce",
  "Zrównoważ poprzez Chesed i Gevurah: Rozważ możliwości ekspansji i niezbędne ograniczenia",
  "Zintegruj w Tiferet: Znajdź harmonijną syntezę przeciwieństw",
  "Nadaj energię przez Netzach: Określ co napędza zaangażowanie",
  "Ustrukturyzuj przez Hod: Sformułuj konkretny plan i system działania",
  "Wizualizuj przez Yesod: Stwórz mentalny obraz rozwiązania",
  "Zakończ w Malkuth: Opracuj konkretne kroki implementacji z terminami i odpowiedzialnościami"
];

/**
 * Generuje prompt do rozwiązywania problemów na podstawie wybranych sefir
 * @param {String} problem - Opis problemu do rozwiązania
 * @param {Array} selectedSefirot - Tablica kluczy wybranych sefir
 * @returns {String} - Wygenerowany prompt
 */
export function generateProblemSolvingPrompt(problem, selectedSefirot) {
  if (!problem || problem.trim() === '') {
    return "Proszę podać problem do analizy.";
  }
  
  if (!selectedSefirot || selectedSefirot.length === 0) {
    return "Proszę wybrać co najmniej jedną sefirę.";
  }
  
  let prompt = `# Kabalistyczna Analiza Problemu: "${problem}"\n\n`;
  prompt += `## Praktyczne podejście do rozwiązania problemu poprzez prismat wybranych sefir:\n\n`;
  
  // Dodaj sekcje dla wybranych sefir
  selectedSefirot.forEach(sefirahKey => {
    const questions = problemSolvingQuestions[sefirahKey];
    if (!questions) return;
    
    prompt += `### ${capitalizeFirstLetter(sefirahKey)}\n`;
    questions.forEach(question => {
      prompt += `- ${question}\n`;
    });
    prompt += "\n";
  });
  
  // Dodaj sugerowany proces rozwiązywania problemu
  prompt += "## Sugerowany proces działania:\n\n";
  problemSolvingProcess.forEach((step, index) => {
    prompt += `${index + 1}. ${step}\n`;
  });
  
  // Dodaj instrukcję dla modelu językowego
  prompt += "\n**Instrukcja**: Przedstaw konkretne, praktyczne kroki i rozwiązania, a nie teoretyczne rozważania.";
  
  return prompt;
}

// Funkcja pomocnicza do kapitalizacji pierwszej litery
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
