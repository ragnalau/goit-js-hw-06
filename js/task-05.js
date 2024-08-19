'use strict'
/*
Scrieți un script care, atunci când se introduce un text în 
input#name-input (evenimentul input), înlocuiește valoarea lui 
span#name-output cu valoarea curentă din input#name-input. 
Dacă input-ul este gol, în acel span se va afișa "Anonymous".

*/

const inputName = document.getElementById('name-input'); 
const outputName =  document.getElementById('name-output');

inputName.addEventListener('keypress', e => {
        if(inputName.value == '') {
            outputName.textContent = 'Anonymous';
            return;
        }
        outputName.textContent = inputName.value;
})

