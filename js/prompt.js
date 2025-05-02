// js/prompt.js
// Inicjalizuje logikę generowania i kopiowania promptu przy użyciu createBrowserInterface()
export function initPrompt(generateBtnId, copyBtnId, topicId, styleId, quotesId, previewId) {
  // Tworzymy instancję interfejsu generatora
  const ui = createBrowserInterface();

  // Obsługa zaznaczania/odznaczania sefirot
  const cbContainer = document.getElementById('checkboxes');
  cbContainer.addEventListener('change', (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
      ui.toggleSefira(e.target.value);
    }
  });

  const genBtn = document.getElementById(generateBtnId);
  const copyBtn = document.getElementById(copyBtnId);

  genBtn.addEventListener('click', () => {
    const topic = document.getElementById(topicId).value.trim();
    if (!topic) return alert('Podaj zagadnienie!');
    // Generujemy prompt przez wywołanie metody ui
    const promptText = ui.generatePrompt(topic);
    document.getElementById(previewId).value = promptText;
  });

  copyBtn.addEventListener('click', () => {
    const text = document.getElementById(previewId).value;
    if (!text) return alert('Brak tekstu do skopiowania');
    navigator.clipboard.writeText(text)
      .then(() => alert('Skopiowano do schowka!'))
      .catch(() => alert('Błąd kopiowania'));
  });
}
