"use strict";
/*
Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur),
verifică dacă numărul de caractere introduse este corect.

Numărul de caractere admis trebuie specificat în atributul data-length.
Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar -
 roșu.
Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat 
deja la fișierele sursă ale acestui exercițiu.
*/

const inputValidation = document.getElementById("validation-input");
const expectedLength = parseInt(
  inputValidation.getAttribute("data-length"),
  10
);

inputValidation.addEventListener("blur", () => {
  console.log(inputValidation.value.length);
  if (inputValidation.value.length === expectedLength) {
    inputValidation.classList.add("valid");
    return;
  }
  inputValidation.classList.add("invalid");
});
