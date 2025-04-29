// innerText
// textContent
// innerHTML

const p = document.querySelector('p');
console.log(p.innerText);
console.log(p.textContent);
console.log(p.innerHTML);

const h1 = document.querySelector('h1');
h1.innerText = 'John World';
h1.innerHTML = `<em>Hello WOrld!!!</em>`
