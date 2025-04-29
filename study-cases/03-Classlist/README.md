# 🎯 Classlist

> A propriedade classList permite acessar e manipular as classes CSS de um elemento HTML

---

## 🛠 Métodos e atributos comuns

### 📌 element.classList

Retorna um DOMTokenList com as classes do elemento (array)
```js
const btn = document.querySelector('button');
console.log(btn.classList); // ex: ['btn', 'active']
```

---

### ➕ classList.add('classe')

Adiciona uma ou mais classes ao elemento

```js
btn.classList.add('highlight');
```

---

### ➖ classList.remove('classe')

Remove uma ou mais classes do elemento

```js
btn.classList.remove('active');
```

---

### 🔁 classList.toggle('classe')

Adiciona a classe se ela não existir, ou remove se já estiver presente

```js
btn.classList.toggle('ativo');
```

---

### ❓ classList.contains('classe')

Verifica se o elemento possui uma determinada classe

```js
if (btn.classList.contains('highlight')) {
  console.log('O botão está destacado!');
}
```
