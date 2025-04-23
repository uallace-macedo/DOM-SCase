# 🌳 Acessando o DOM

> O DOM (Document Object Model) representa a estrutura de uma página web em forma de árvore. Através dele, conseguimos acessar, modificar e interagir com os elementos HTML utilizando JavaScript.

---

## 🔍 Formas de acessar
- ` getElementsByTagName('tag')`
- `getElementById('id')`
- `getElementsByClassName('class')`
- `querySelector('#id')` || `querySelector('.class')`
- `querySelectorAll('.id')`

## 📦 HTMLCollection

É um tipo de objeto parecido com array que o navegador retorna quando se utiliza alguns métodos de seleção do DOM, como:

- `getElementsByTagName()`
- `getElementsByClassName()`

### 🧠 Características:

- ❌ Não tem todos os métodos de Array, como `.forEach()`, `.map()`, etc.
- ✅ Pode ser acessado como array usando índices: `collection[0]`, `collection[1]`
- 🔄 É **dinâmico**: se os elementos do DOM mudarem, o conteúdo do HTMLCollection também muda

### 📌 Exemplo:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
```js
const itens = document.getElementsByTagName('li');
console.log(itens); // HTMLCollection(2) [li, li]

console.log(itens.length); // 2
console.log(itens[0].textContent); // "Item 1"

// Isso dá erro: itens.forEach(...) ❌
```

### Utilizar como Array

Para usar métodos como `.map()`, `.filter()`, temos que converter com:
  ```js
  const itens = document.getElementsByTagName('li');

  const arrayDeItens = Array.from(itens);
  arrayDeItens.forEach(item => console.log(item.textContent));
  ```

  Ou com o **spread operator**:
  ```js
  [...itens].forEach(item => console.log(item.textContent));
  ```
