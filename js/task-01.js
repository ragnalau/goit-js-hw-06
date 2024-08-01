"use strict";

const categoriesEl = document.getElementById("categories");
const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);


// VARIANTA 1
// itemEl.forEach(item => {
//     const categoryTitle = item.querySelector('h2').innerText;
//     const elements = item.querySelectorAll('ul > li').length;

//     console.log(`Category: ${categoryTitle} \nElements: ${elements} \n\n\n`);
// })


// VARIANTA 2
for (const item of itemEl) {
  const categoryTitle = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle} \nElements: ${elements} \n\n\n`);
}

/*
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/
