"use strict"
/*
Scrieți un script pentru crearea și ștergerea unei colecții de elemente. 
Utilizatorul introduce numărul de elemente în input și dă click pe 
butonul Create, după care colecția este afișată în pagină. Când se dă 
click pe butonul Destroy, colecția de elemente va fi ștearsă.

Creați o funcție createBoxes(amount), care ia ca parametru un număr. 
Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le 
va adăuga la div#boxes.

Dimensiunile primului <div> vor fi 30px pe 30px.
Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat 
și mai înalt decât cel anterior.
Toate elementele trebuie să aibă o culoare de fundal aleatoare în format 
HEX. Folosiți funcția getRandomHexColor deja existentă pentru a obține o 
culoare.

Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes, 
ștergând astfel toate elementele create.
*/

const inputElement = document.querySelector('#controls input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const deleteBtn = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');
let boxSize = 30;

createBtn.addEventListener('click', () => {
  const elements = inputElement.value;
  if(elements === '' || elements < 1 || elements > 100){
    alert('Introduceti un numar positiv in intervalul 1-100!');
    return;
  }
  createBoxes(elements);
});

deleteBtn.addEventListener('click', () => {
  boxes.innerHTML = "";
});

function createBoxes(amount) {
  for(let i = 1; i <= amount; i++){

  const divEl = document.createElement("div");
  boxes.append(divEl);
  divEl.style.width = `${boxSize}px`;
  divEl.style.height = `${boxSize}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  boxSize += 10;

  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
