const formatButtons = document.querySelectorAll('.header-link-button');
const clickMeButton = document.querySelector('.main-button');

let selectedFormat = 'rgb';

function clearActiveClass() {
  formatButtons.forEach((button) => button.classList.remove('is-active'));
}

function setActiveButton(button) {
  clearActiveClass();
  button.classList.add('is-active');
}

function getRandomColor(format) {
  if (format === 'rgb') {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  } else if (format === 'hex') {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
  } else if (format === 'hsl') {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
}

formatButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveButton(button);
    selectedFormat = button.id.split('-')[0];
  });
});

clickMeButton.addEventListener('click', () => {
  const mainSection = document.querySelector('.app-main');
  const colorDisplay = document.getElementById('color-display');

  const newBgColor = getRandomColor(selectedFormat);

  mainSection.style.backgroundColor = newBgColor;
  colorDisplay.textContent = newBgColor;
  colorDisplay.style.color = newBgColor;
});
