# 📺 App Séries

Aplicação web para buscar e favoritar séries de TV, utilizando a API pública do [TVmaze](https://www.tvmaze.com/api).

---

## ✨ Funcionalidades

- **Busca de séries** por nome em tempo real via API do TVmaze
- **Cards visuais** com pôster, nome e botão de favoritar
- **Lista de favoritos** persistida no `localStorage` do navegador
- **Remoção de favoritos** com um clique
- Interface responsiva com tema escuro

---

## 🗂️ Estrutura do projeto

```
├── index.html   # Estrutura da página
├── style.css    # Estilo visual (tema escuro, grid responsivo)
└── script.js    # Lógica de busca, favoritos e persistência
```

---

## 🚀 Como usar

Não requer instalação nem build. Basta abrir o `index.html` no navegador.

> **Dica:** para evitar problemas de CORS ao carregar imagens localmente, use uma extensão de servidor local como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador
3. Digite o nome de uma série no campo de busca e clique em **Buscar**
4. Clique em **Favoritar** para salvar uma série na sua lista
5. Clique no botão **×** para remover um favorito

---

## 🔌 API utilizada

[TVmaze Search API](https://www.tvmaze.com/api)

```
GET https://api.tvmaze.com/search/shows?q={query}
```

Não requer autenticação. Os dados retornados incluem nome, imagem e informações das séries.

---

## 💾 Persistência de dados

Os favoritos são salvos automaticamente no `localStorage` do navegador. Isso significa que a lista é mantida mesmo após fechar a aba ou o navegador, sem necessidade de servidor ou banco de dados.

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilo, variáveis, grid e animações |
| JavaScript (vanilla) | Lógica da aplicação |
| TVmaze API | Dados das séries |
| localStorage | Persistência dos favoritos |
