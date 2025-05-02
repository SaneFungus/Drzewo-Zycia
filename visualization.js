/**
 * Moduł visualization.js
 * 
 * Zawiera funkcje odpowiedzialne za wizualizację Drzewa Życia.
 * Renderuje sefiry i ścieżki oraz zarządza ich stanem wizualnym.
 */

import { TreeOfLifePromptGenerator } from './generator.js';

export class TreeVisualization {
  constructor(generator, container) {
    this.generator = generator;
    this.container = container;
    this.selectedSefirot = [];
  }

  /**
   * Inicjalizuje wizualizację Drzewa Życia
   */
  initialize() {
    this.renderSefirot();
    this.renderPaths();
  }

  /**
   * Renderuje sefiry na podstawie danych z generatora
   */
  renderSefirot() {
    // Dodaj sefiry do drzewa
    Object.keys(this.generator.sefirot).forEach((sefirahKey) => {
      const sefira = this.generator.sefirot[sefirahKey];
      const sefirahElement = document.createElement("div");
      sefirahElement.className = "sefira";
      sefirahElement.id = `sefira-${sefirahKey}`;
      sefirahElement.setAttribute("data-key", sefirahKey);
      sefirahElement.style.backgroundColor = sefira.color;
      sefirahElement.style.top = sefira.position.top;
      sefirahElement.style.left = sefira.position.left;
      sefirahElement.innerHTML = `<span>${sefira.name}</span>`;

      // Tooltip z informacjami o sefirze
      sefirahElement.setAttribute(
        "title",
        `${sefira.name} (${sefira.hebrewName}) - ${sefira.meaning}\n${sefira.aspect}`
      );

      // Obsługa kliknięcia sefiry
      sefirahElement.addEventListener("click", () => this.toggleSefira(sefirahKey));

      this.container.appendChild(sefirahElement);
    });
  }

  /**
   * Renderuje ścieżki między sefirami
   */
  renderPaths() {
    Object.keys(this.generator.paths).forEach((pathKey) => {
      const path = this.generator.paths[pathKey];
      const startSefira = document.getElementById(`sefira-${path.start}`);
      const endSefira = document.getElementById(`sefira-${path.end}`);

      if (startSefira && endSefira) {
        // Pobierz pozycje sefir
        const startRect = startSefira.getBoundingClientRect();
        const endRect = endSefira.getBoundingClientRect();
        const treeRect = this.container.getBoundingClientRect();

        // Oblicz względne pozycje
        const startX = startRect.left + startRect.width / 2 - treeRect.left;
        const startY = startRect.top + startRect.height / 2 - treeRect.top;
        const endX = endRect.left + endRect.width / 2 - treeRect.left;
        const endY = endRect.top + endRect.height / 2 - treeRect.top;

        // Oblicz długość i kąt ścieżki
        const length = Math.sqrt(
          Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
        );
        const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;

        // Utwórz element ścieżki
        const pathElement = document.createElement("div");
        pathElement.className = "path";
        pathElement.id = `path-${pathKey}`;
        pathElement.style.width = `${length}px`;
        pathElement.style.height = "3px";
        pathElement.style.left = `${startX}px`;
        pathElement.style.top = `${startY}px`;
        pathElement.style.transform = `rotate(${angle}deg)`;

        // Tooltip z informacjami o ścieżce
        pathElement.setAttribute(
          "title",
          `Ścieżka ${path.letterName} (${path.letter}): ${path.essence}`
        );

        this.container.appendChild(pathElement);
      }
    });
  }

  /**
   * Przełącza wybór sefiry
   * @param {String} sefirahKey Klucz sefiry
   */
  toggleSefira(sefirahKey) {
    const index = this.selectedSefirot.indexOf(sefirahKey);
    const sefirahElement = document.getElementById(`sefira-${sefirahKey}`);

    if (index === -1) {
      // Dodaj sefirę do wybranych
      this.selectedSefirot.push(sefirahKey);
      sefirahElement.classList.add("selected");
    } else {
      // Usuń sefirę z wybranych
      this.selectedSefirot.splice(index, 1);
      sefirahElement.classList.remove("selected");
    }

    // Aktualizuj ścieżki
    this.updatePaths();
    
    // Wywołaj event zmiany wyboru
    this.dispatchSelectionChangedEvent();
  }

  /**
   * Aktualizuje wygląd ścieżek na podstawie wybranych sefir
   */
  updatePaths() {
    // Znajdź ścieżki łączące wybrane sefiry
    const connectingPaths = this.generator.findConnectingPaths(this.selectedSefirot);

    // Zresetuj wszystkie ścieżki
    document.querySelectorAll(".path").forEach((path) => {
      path.classList.remove("active");
    });

    // Aktywuj ścieżki łączące wybrane sefiry
    connectingPaths.forEach((pathKey) => {
      const pathElement = document.getElementById(`path-${pathKey}`);
      if (pathElement) {
        pathElement.classList.add("active");
      }
    });
  }
  
  /**
   * Wysyła zdarzenie informujące o zmianie wyboru sefir
   */
  dispatchSelectionChangedEvent() {
    const event = new CustomEvent("sefirotSelectionChanged", {
      detail: {
        selectedSefirot: this.selectedSefirot
      }
    });
    document.dispatchEvent(event);
  }
  
  /**
   * Zwraca tablicę aktualnie wybranych sefir
   * @returns {Array} Tablica kluczy wybranych sefir
   */
  getSelectedSefirot() {
    return [...this.selectedSefirot];
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

// Eksportuj funkcję fabryczną do tworzenia instancji wizualizacji
export function createTreeVisualization(generator, container) {
  return new TreeVisualization(generator, container);
}
