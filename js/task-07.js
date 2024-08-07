'use scrict'
/*
Scrieți un script care răspunde la modificarea valorii din 
input#font-size-control (evenimentul input) și modifică stilurile
inline al span#text prin actualizarea proprietății font-size. 
Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea 
textului se va schimba.
*/

const fontSizeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeEl.addEventListener("input", () => {
    const fontSize = fontSizeEl.value + 'px';
    textEl.style.fontSize = fontSize;
});