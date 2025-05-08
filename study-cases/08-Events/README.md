# 🧨 Events

> Eventos permitem detectar e reagir às interações do usuário, como cliques, teclas pressionadas, movimentos do mouse e etc.

---

## 🎯 Adicionando Eventos

- `➕ addEventListener('evento', callback)`
  Adiciona um "ouvinte" para um tipo específico de evento
  ```html
    <button id="btn">Clique aqui</button>
  ```
  ```js
    const botao = document.getElementById('btn');

    botao.addEventListener('click', () => {
      alert('Botão clicado!');
    });
  ```

---

## 📚 Eventos Comuns

- `🖱️ click` – Quando o usuário clica em um elemento
- `⌨️ keydown / keyup` – Quando uma tecla é pressionada ou liberada
- `🐭 mouseover / mouseout` – Quando o mouse entra ou sai de um elemento
- `📝 input / change` – Quando há mudanças em `<input>`, `<select>`, etc.
- `📦 submit` – Quando um formulário é enviado

---

## 🔄 Removendo Eventos

- `➖ removeEventListener('evento', callback)`
  Remove o evento previamente associado com a mesma referência de função
  ```js
    function handleClick() {
      console.log('Clicado!');
    }

    botao.addEventListener('click', handleClick);
    botao.removeEventListener('click', handleClick);
  ```

---

## 📌 Event Object

- 🧾 Ao disparar um evento, o navegador envia um **objeto de evento** com informações úteis acerca do evento
  ```js
    botao.addEventListener('click', (event) => {
      console.log(event.target); // o elemento que foi clicado
      console.log(event.type);   // tipo do evento: "click"
    });
  ```
