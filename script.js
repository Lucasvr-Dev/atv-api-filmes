let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

async function buscar() {
  const query = document.getElementById("busca").value.trim();
  if (!query) return;

  const response = await fetch("https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(query));
  const dados = await response.json();

  const div = document.getElementById("resultados");
  div.innerHTML = "";

  dados.forEach(item => {
    const card = document.createElement("div");
    card.className = "serie-card";

    // Imagem da série (use imagem medium ou placeholder)
    const img = document.createElement("img");
    img.src = item.show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
    img.alt = item.show.name;

    // Overlay com nome e botão
    const overlay = document.createElement("div");
    overlay.className = "serie-overlay";

    const name = document.createElement("div");
    name.className = "serie-name";
    name.textContent = item.show.name;

    const btn = document.createElement("button");
    btn.textContent = "Favoritar";
    btn.onclick = () => {
      // Evita duplicatas
      if (!favoritos.some(fav => fav.name === item.show.name)) {
        favoritos.push({
          name: item.show.name,
          image: item.show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"
        });
        salvar();
        mostrarFavoritos();
      }
    };

    overlay.appendChild(name);
    overlay.appendChild(btn);

    card.appendChild(img);
    card.appendChild(overlay);
    div.appendChild(card);
  });
}

function salvar() {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function mostrarFavoritos() {
  const ul = document.getElementById("favoritos");
  ul.innerHTML = "";

  favoritos.forEach(item => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const span = document.createElement("span");
    span.textContent = item.name;

    const btn = document.createElement("button");
    btn.textContent = "×";
    btn.title = "Remover dos favoritos";
    btn.onclick = () => {
      favoritos = favoritos.filter(fav => fav.name !== item.name);
      salvar();
      mostrarFavoritos();
    };

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(btn);

    ul.appendChild(li);
  });
}

// Inicializa a lista na abertura da página
mostrarFavoritos();