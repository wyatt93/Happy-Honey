/**
 * Sonnenschein KiTa – main.js
 *
 * Inhalt:
 *   1. Hamburger-Menü (Mobile Navigation)
 *   2. Formular-Validierung & Absenden
 *   3. Scroll-Animationen (IntersectionObserver)
 */

/* ── 1. HAMBURGER-MENÜ ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Menü schließen, wenn ein Link angeklickt wird
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ── 2. FORMULAR ── */
/**
 * Validiert die Pflichtfelder und zeigt bei Erfolg
 * eine Bestätigungsmeldung an.
 */
function submitForm() {
  const requiredFields = ['elternName', 'kindName', 'geburtsdatum', 'betreuung', 'email'];

  for (const fieldId of requiredFields) {
    const field = document.getElementById(fieldId);

    if (!field.value.trim()) {
      field.focus();
      field.style.borderColor = 'var(--coral)';

      // Fehlerfarbe nach 2 Sekunden zurücksetzen
      setTimeout(() => {
        field.style.borderColor = '';
      }, 2000);

      return; // Abbruch beim ersten leeren Pflichtfeld
    }
  }

  // Erfolgreich: Button ausblenden, Erfolgsmeldung zeigen
  const submitBtn  = document.querySelector('.form-submit');
  const successMsg = document.getElementById('successMsg');

  submitBtn.style.display  = 'none';
  successMsg.style.display = 'block';
}

// submitForm global verfügbar machen (inline onclick im HTML)
window.submitForm = submitForm;

/* ── 3. SCROLL-ANIMATIONEN ── */
/**
 * Elemente werden beim Einblenden in den Viewport
 * sanft von unten eingeblendet (opacity + translateY).
 */
const animatedSelectors = [
  '.offer-card',
  '.price-card',
  '.job-card',
  '.kontakt-info-card',
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(animatedSelectors.join(', ')).forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
