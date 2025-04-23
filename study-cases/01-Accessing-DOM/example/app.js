// ************* DOM SELECTORS *************
// 1. getElementsByTagName
console.log(document.getElementsByTagName('h1'));

// 2. getElementById
console.log(document.getElementById('id-1'));

// 3. getElementsByClassName
console.log(document.getElementsByClassName('cls'));

// 4. querySelector (um elemento por vez)
console.log(document.querySelector('.cls'));
console.log(document.querySelector('#id-1'));

// 5. querySelectorAll
console.log(document.querySelectorAll('.cls'));
console.log(document.querySelectorAll('li'));

// ************* STORE DATA VARIABLES *************
const h1 = document.querySelector('h1');
console.log(h1);
