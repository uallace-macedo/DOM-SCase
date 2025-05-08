# 🎨 Styles

> No DOM, é possível acessar e modificar estilos CSS diretamente via JavaScript. Isso permite alterar dinamicamente a aparência dos elementos usando a propriedade `.style`, a classe `.classList`, ou manipulando o atributo `style`.

---

## 🧾 Estilização Inline

- `🎯 element.style`
  Acessa ou define **estilos inline** diretamente no elemento
  ```html
    <p id="texto">Olá, mundo!</p>
  ```
  ```js
    const texto = document.getElementById('texto');
    texto.style.color = 'blue';
    texto.style.fontSize = '20px';
  ```

  ⚠️ OBS: isso **não altera** estilos definidos por classes no CSS externo!

---

## 💅 Atributo style

`📤 getAttribute('style')` e `setAttribute('style', ...)`
  Usado para ler ou definir o atributo `style` como uma string inteira
  ```js
    console.log(texto.getAttribute('style'));
    texto.setAttribute('style', 'color: red; background-color: yellow;');
  ```
---
