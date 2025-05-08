# 🤝 Siblings

> Em DOM, siblings (irmãos) são elementos que compartilham o mesmo elemento pai. Com JavaScript, você pode navegar entre esses irmãos para acessar, modificar ou até criar novos elementos no mesmo nível da árvore DOM.

---

## 📌 Irmãos Diretos

- `⬅️ previousElementSibling`
  Retorna o **irmão anterior** do elemento
  ```html
    <ul>
      <li>Item 1</li>
      <li id="item-2">Item 2</li>
      <li>Item 3</li>
    </ul>
  ```
  ```js
    const item2 = document.getElementById('item-2');
    console.log(item2.previousElementSibling.textContent); // Item 1
  ```

- `➡️ nextElementSibling`
  Retorna o **irmão seguinte** do elemento
  ```js
    const item2 = document.getElementById('item-2');
    console.log(item2.nextElementSibling.textContent); // Item 3
  ```

---

## 🧬 Relação com o Pai

- `🧱 parentElement`
  Acessa o **elemento pai** de um nó
  ```js
    console.log(item2.parentElement.tagName); // UL
  ```

- `📚 children`
  Retorna uma coleção **HTMLCollection** de todos os filhos elementos
  ```js
    const lista = item2.parentElement;
    console.log(lista.children); // [li, li#item-2, li]
  ```

---

## 🛠️ Navegando Entre Irmãos

- 🔄 Exemplo: navegando entre os irmãos de um item
  ```js
    const primeiro = lista.children[0];
    const segundo = primeiro.nextElementSibling;
    const terceiro = segundo.nextElementSibling;

    console.log(segundo.textContent); // Item 2
    console.log(terceiro.previousElementSibling.textContent); // Item 2
  ```

---
