// DOM Elements
const topNote = document.getElementById('top-note');
const middleNote = document.getElementById('middle-note');
const baseNote = document.getElementById('base-note');

const topSlider = document.getElementById('top-slider');
const middleSlider = document.getElementById('middle-slider');
const baseSlider = document.getElementById('base-slider');

const topValue = document.getElementById('top-value');
const middleValue = document.getElementById('middle-value');
const baseValue = document.getElementById('base-value');

const previewTop = document.getElementById('preview-top');
const previewMiddle = document.getElementById('preview-middle');
const previewBase = document.getElementById('preview-base');

// Event Listeners for Sliders
topSlider.addEventListener('input', () => {
  topValue.textContent = `${topSlider.value}%`;
  updatePreview();
});

middleSlider.addEventListener('input', () => {
  middleValue.textContent = `${middleSlider.value}%`;
  updatePreview();
});

baseSlider.addEventListener('input', () => {
  baseValue.textContent = `${baseSlider.value}%`;
  updatePreview();
});

// Update Preview Function
function updatePreview() {
  previewTop.textContent = topNote.value || 'None';
  previewMiddle.textContent = middleNote.value || 'None';
  previewBase.textContent = baseNote.value || 'None';
}

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Save Button (Placeholder)
document.getElementById('save-btn').addEventListener('click', () => {
  alert('Formulation saved!');
});

// Export Button (Placeholder)
document.getElementById('export-btn').addEventListener('click', () => {
  const data = `Top: ${previewTop.textContent}, Middle: ${previewMiddle.textContent}, Base: ${previewBase.textContent}`;
  const blob = new Blob([data], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'perfume_formulation.txt';
  a.click();
});
