'use strict'
/*
Scrieți un script care schimbă culorile de fundal al elementului <body>, 
prin stiluri inline, atunci când se face click pe button.change-color și 
afișați valoarea culorii în span.color.
*/

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
  
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
