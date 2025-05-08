# 🧱 Creating and Appending Elements

> Com métodos como createElement() e append(), podemos gerar novos nós e adicioná-los onde quisermos na árvore DOM.

---

## 🛠️ Criando Elementos

- `🆕 document.createElement('tag')`
  Cria um novo elemento HTML com a tag especificada
  ```js
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Este é um parágrafo novo!';
  ```

## ➕ Inserindo no DOM

- `📌 appendChild(element)`
  Adiciona o elemento **como último filho**
  ```js
    const container = document.getElementById('conteudo');
    container.appendChild(novoParagrafo);
  ```

- `📥 append(element, ...)`
  Adiciona um ou mais nós ou strings no final (mais flexível que `appendChild`)
  ```js
    container.append('Texto extra', novoParagrafo);
  ```

- `📤 prepend(element)`
  Insere o elemento **como primeiro filho**
  ```js
    container.prepend(novoParagrafo);
  ```
