"use strict";
/*
Contorul este format dintr-un tag span și două butoane care, 
atunci când sunt apăsate, ar trebui să-și mărească sau scadă 
valoarea cu unu.


Declarați o variabilă counterValue ce va stoca valoarea curentă a 
contorului și asignați-i valoarea 0 pentru început.
Adăugați click handler pe butoane, în interiorul cărora vei mări 
sau micșora valoarea contorului.
Actualizați interfața cu noua valoare a variabilei counterValue.

*/

// VARIANTA 1
/*
const counterEl = document.getElementById("counter");
const valueCounterEl = document.getElementById("value");
let counter = valueCounterEl.textContent;
const button = document.getElementsByTagName("button");
const decrementButton = button[0];
const incrementButton = button[1];

const updateCounter = () => {
    valueCounterEl.textContent = counter;
}

console.log(decrementButton, incrementButton);

incrementButton.addEventListener("click", function () {
    counter++;
    updateCounter();
});

decrementButton.addEventListener("click", function () {
  counter--;
  updateCounter();
});
*/

// VARIANTA 2
const counterEl = document.getElementById("counter");
const valueCounterEl = document.getElementById("value");
let counter = valueCounterEl.textContent;

const updateCounter = () => {
  valueCounterEl.textContent = counter;
};

const handleButtonClick = e => {
    const action = e.target.getAttribute('data-action');
    action === 'increment'? counter++ : counter--;
    updateCounter();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick)
});


