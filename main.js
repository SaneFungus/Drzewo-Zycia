/**
 * Moduł main.js
 * 
 * Plik główny aplikacji, łączy wszystkie moduły i inicjalizuje aplikację.
 */

import { createPromptGenerator, TreeOfLifePromptGenerator } from './generator.js';
import { createTreeVisualization } from './visualization.js';
import { createUserInterface } from './ui.js';

/**
 * Funkcja inicjalizująca aplikację
 */
function initializeApplication() {
  // Tworzenie instancji generatora promptów
  const generator = createPromptGenerator();
  
  // Tworzenie wizualizacji drzewa
  const treeContainer = document.querySelector(".tree-of-life");
  const visualization = createTreeVisualization(generator, treeContainer);
  
  // Tworzenie interfejsu użytkownika
  const ui = createUserInterface(generator, visualization);
  
  // Inicjalizacja wizualizacji
  visualization.initialize();
}

// Uruchomienie inicjalizacji po załadowaniu DOM
document.addEventListener("DOMContentLoaded", initializeApplication);
