/**
 * Podłącza logikę generowania i kopiowania promptu.
 */
export function initPrompt(generateBtnId, copyBtnId, topicId, styleId, quotesId, previewId) {
  const genBtn = document.getElementById(generateBtnId);
  const copyBtn = document.getElementById(copyBtnId);

  genBtn.addEventListener('click', () => {
    const topic = document.getElementById(topicId).value;
    const style = document.getElementById(styleId).value;
    const quotes = document.getElementById(quotesId).checked;
    const sefirot = Array.from(document.querySelectorAll('#checkboxes input:checked')).map(i => i.value);
    const prompt = generatePrompt({ topic, style, quotes, sefirot });
    document.getElementById(previewId).value = prompt;
  });

  copyBtn.addEventListener('click', () => {
    const text = document.getElementById(previewId).value;
    navigator.clipboard.writeText(text)
      .then(() => alert('Skopiowano do schowka!'))
      .catch(() => alert('Błąd kopiowania'));
  });
}
