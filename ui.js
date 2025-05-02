/**
 * Moduł ui.js
 * 
 * Zawiera funkcje do obsługi interfejsu użytkownika.
 * Zarządza listą wybranych sefir, formularzem oraz generowaniem i wyświetlaniem promptu.
 */

export class UserInterface {
  constructor(generator, visualization) {
    this.generator = generator;
    this.visualization = visualization;
    
    // Elementy DOM
    this.topicInput = document.getElementById("topic-input");
    this.selectedSefirotList = document.getElementById("selected-sefirot-list");
    this.promptOutput = document.getElementById("prompt-output");
    this.generateBtn = document.getElementById("generate-btn");
    this.copyBtn = document.getElementById("copy-btn");
    this.downloadBtn = document.getElementById("download-btn");
    this.analysisMode = document.getElementById("analysis-mode");
    this.questionCount = document.getElementById("question-count");
    this.questionCountDisplay = document.getElementById("question-count-display");
    this.metacognitiveLayer = document.getElementById("metacognitive-layer");
    this.mutualIllumination = document.getElementById("mutual-illumination");
    this.includeParadoxes = document.getElementById("include-paradoxes");
    
    // Inicjalizacja interfejsu
    this.initializeUI();
  }
  
  /**
   * Inicjalizuje interfejs użytkownika
   */
  initializeUI() {
    // Nasłuchuj zdarzeń
    this.setupEventListeners();
    
    // Inicjalizacja tooltipów i innych elementów UI
    this.setupUIElements();
  }
  
  /**
   * Ustawia nasłuchiwanie zdarzeń
   */
  setupEventListeners() {
    // Nasłuchuj zmiany wybranych sefir
    document.addEventListener("sefirotSelectionChanged", (e) => {
      this.updateSelectedSefirotList(e.detail.selectedSefirot);
    });
    
    // Przyciski
    this.generateBtn.addEventListener("click", () => this.generatePrompt());
    this.copyBtn.addEventListener("click", () => this.copyPromptToClipboard());
    this.downloadBtn.addEventListener("click", () => this.downloadPrompt());
    
    // Pole tematu - generowanie po Enter
    this.topicInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.generatePrompt();
      }
    });
    
    // Opcje zaawansowane
    this.questionCount.addEventListener("input", () => {
      this.questionCountDisplay.textContent = this.questionCount.value;
    });
    
    // Inicjalizacja okna pomocy
    this.setupHelpModal();
  }
  
  /**
   * Inicjalizuje elementy UI
   */
  setupUIElements() {
    // Dodatkowa inicjalizacja elementów UI, jeśli potrzebna
  }
  
  /**
   * Ustawia obsługę okna pomocy
   */
  setupHelpModal() {
    const helpBtn = document.getElementById("help-btn");
    const helpModal = document.getElementById("help-modal");
    const closeModal = document.querySelector(".close-modal");
    
    helpBtn.addEventListener("click", () => {
      helpModal.style.display = "block";
    });
    
    closeModal.addEventListener("click", () => {
      helpModal.style.display = "none";
    });
    
    window.addEventListener("click", (event) => {
      if (event.target === helpModal) {
        helpModal.style.display = "none";
      }
    });
  }
  
  /**
   * Aktualizuje listę wybranych sefir
   * @param {Array} selectedSefirot Tablica kluczy wybranych sefir
   */
  updateSelectedSefirotList(selectedSefirot) {
    this.selectedSefirotList.innerHTML = "";
    
    selectedSefirot.forEach((sefirahKey) => {
      const sefira = this.generator.sefirot[sefirahKey];
      const listItem = document.createElement("li");
      listItem.className = "sefirah-tag";
      listItem.style.backgroundColor = sefira.color;
      
      // Ustaw kolor tekstu na podstawie koloru tła
      const contrastColor = this.getContrastColor(sefira.color);
      listItem.style.color = contrastColor;
      
      listItem.innerHTML = `${sefira.name} <span class="remove">×</span>`;
      
      // Obsługa usunięcia sefiry z listy
      listItem
        .querySelector(".remove")
        .addEventListener("click", () => this.visualization.toggleSefira(sefirahKey));
      
      this.selectedSefirotList.appendChild(listItem);
    });
  }
  
  /**
   * Generuje prompt na podstawie wybranych sefir i tematu
   */
  generatePrompt() {
    const topic = this.topicInput.value.trim();
    
    if (!topic) {
      alert("Proszę wprowadzić temat do analizy.");
      this.topicInput.focus();
      return;
    }
    
    const selectedSefirot = this.visualization.getSelectedSefirot();
    
    if (selectedSefirot.length === 0) {
      alert("Proszę wybrać co najmniej jedną sefirę.");
      return;
    }
    
    // Pobierz opcje zaawansowane
    const options = {
      mode: this.analysisMode.value,
      questionCount: parseInt(this.questionCount.value, 10),
      includeMetacognitive: this.metacognitiveLayer.checked,
      includeMutualIllumination: this.mutualIllumination.checked,
      includeParadoxes: this.includeParadoxes.checked
    };
    
    // Wygeneruj prompt
    const prompt = this.generator.generatePrompt(selectedSefirot, topic, options);
    
    // Wyświetl wygenerowany prompt
    this.promptOutput.textContent = prompt;
  }
  
  /**
   * Kopiuje wygenerowany prompt do schowka
   */
  copyPromptToClipboard() {
    if (!this.promptOutput.textContent) {
      alert("Najpierw wygeneruj prompt!");
      return;
    }
    
    navigator.clipboard
      .writeText(this.promptOutput.textContent)
      .then(() => {
        const originalText = this.copyBtn.textContent;
        this.copyBtn.textContent = "✅ Skopiowano";
        setTimeout(() => {
          this.copyBtn.textContent = originalText;
        }, 2000);
      })
      .catch((err) => {
        alert("Nie udało się skopiować tekstu: " + err);
      });
  }
  
  /**
   * Pobiera wygenerowany prompt jako plik tekstowy
   */
  downloadPrompt() {
    if (!this.promptOutput.textContent) {
      alert("Najpierw wygeneruj prompt!");
      return;
    }
    
    const topic = this.topicInput.value.trim();
    const filename = `prompt_${topic
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()}.md`;
    
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
      encodeURIComponent(this.promptOutput.textContent)
    );
    element.setAttribute("download", filename);
    
    element.style.display = "none";
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
  }
  
  /**
   * Określa kolor tekstu na podstawie koloru tła
   * @param {String} backgroundColor Kolor tła
   * @returns {String} Kolor tekstu (biały lub czarny)
   */
  getContrastColor(backgroundColor) {
    // Jeśli kolor podany jako zmienna CSS, użyj wartości domyślnej
    if (backgroundColor.startsWith("var(")) {
      return "#000";
    }
    
    // Konwertuj kolor na RGB
    let r, g, b;
    
    if (backgroundColor.startsWith("#")) {
      const hex = backgroundColor.substring(1);
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
    } else if (backgroundColor.startsWith("rgb")) {
      const rgb = backgroundColor.match(/\d+/g);
      r = parseInt(rgb[0]);
      g = parseInt(rgb[1]);
      b = parseInt(rgb[2]);
    } else {
      return "#000";
    }
    
    // Oblicz jasność (wzór YIQ)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Zwróć biały dla ciemnych kolorów, czarny dla jasnych
    return yiq >= 128 ? "#000" : "#fff";
  }
}

// Eksportuj funkcję fabryczną do tworzenia instancji UI
export function createUserInterface(generator, visualization) {
  return new UserInterface(generator, visualization);
}
