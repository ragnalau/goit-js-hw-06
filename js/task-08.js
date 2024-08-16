"use strict";
/*
1.Gestionarea trimiterii formularului form.login-form trebuie
să fie în cadrul evenimentului submit.

2.La trimiterea formularului, pagina nu trebuie să se 
reîncarce.

3.Dacă formularul are câmpuri goale, afișați un alert care 
avertizează că toate câmpurile trebuie completate.

4.Dacă utilizatorul a completat toate câmpurile și a trimis 
formularul, colectați valorile câmpului într-un obiect în care
numele câmpului va fi numele proprietății, iar valoarea 
câmpului va fi valoarea proprietății. Pentru a accesa 
elementele formularului, folosiți proprietatea elements.

5.Afișați obiectul cu datele introduse în consolă și ștergeți 
valorile câmpurilor din formular, folosind metoda reset.
*/

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { elements } = e.target;
  const email = elements["email"].value;
  const password = elements["password"].value;
  if (email === "" || password === "") {
    handleError("Trebuie completate ambele campuri.");
    return;
  }
  const loginData = {
    email: email,
    password: password
  };

  console.log(loginData);

  loginForm.reset();
});


function handleError(message){
  alert( `Eroare! ${message}`);
}
