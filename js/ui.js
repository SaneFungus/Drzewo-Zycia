/**
 * Inicjalizuje przełączanie zakładek.
 */
export function initTabs() {
  document.querySelectorAll('.tab').forEach(tab =>
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab, .panel').forEach(el => el.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
    })
  );
}

/**
 * Inicjalizuje rozwijanie panelu zaawansowanego.
 */
export function initAdvancedToggle() {
  const btn = document.getElementById('toggle-adv');
  const panel = document.getElementById('adv-options');
  btn.addEventListener('click', () => panel.classList.toggle('open'));
}
