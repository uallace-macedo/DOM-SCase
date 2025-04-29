# 🏷️ Attributes

> Os atributos em HTML fornecem informações sobre os elementos. Com JavaScript, é possível acessar, modificar e também criar novos atributos usando métodos como `getAttribute()` e `setAttribute()`.

---

## 📌 Atributos comuns

- 🔗 `href`
  - Usado em elementos `<a>` para definir o link de destino
    ```html
    <a id="link" href="https://example.com">Visite o site</a>
    ```
    ```js
    const link = document.getElementById('link');
    console.log(link.href); // https://example.com
    ```

- 📝 `value`
  - Usado em `<input>`, `<textarea>` etc., para definir ou obter o valor inserido
    ```html
    <input id="nome" type="text" value="John">
    ```
    ```js
    const input = document.getElementById('nome');
    console.log(input.value); // John
    ```

- 🔤 `type`
  - Define o tipo de um `<input>`, como `"text"`, `"password"`, `"checkbox"` etc
    ```html
    <input id="senha" type="password">
    ```
    ```js
    const senha = document.getElementById('senha');
    console.log(senha.type); // password
    senha.type = 'text'; // torna visível
    ```

---

## 🎛 Métodos de manipulação

- 📥 `getAttribute('atributo')`
  - Retorna o valor de um atributo específico do elemento
    ```js
    const link = document.querySelector('a');
    console.log(link.getAttribute('href')); // ex: "https://example.com"
    ```

- 📤 `setAttribute('atributo', 'valor')`
  - Define ou atualiza o valor de um atributo
    ```js
    link.setAttribute('href', 'https://google.com');
    ```

- ❌ `removeAttribute('atributo')`
  - Remove o atributo especificado do elemento
    ```js
    link.removeAttribute('target');
    ```
