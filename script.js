async function buscar() {
  let filme = document.getElementById("busca").value; //pega o elemento que o id é busca e salva o valor dele

  let response = await fetch("https://api.tvmaze.com/search/shows?q=" + filme);

  let dados = await response.json();

  let div = document.getElementById("resultados");
  div.innerHTML = "";

  dados.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";

    let btn = document.createElement("button");
    btn.textContent = "Favoritar";
    btn.onclick = function () {
      favoritos.push(item.show.name);
      salvar();
      mostrarFavoritos();
    };

    card.innerHTML = item.show.name;
    card.appendChild(btn);
    div.appendChild(card);
  });
}

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
mostrarFavoritos();

function salvar() {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function mostrarFavoritos() {
  let ul = document.getElementById("favoritos");
  ul.innerHTML = "";

  favoritos.forEach((item, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = item;

    let btn = document.createElement("button");
    btn.textContent = "Remover";
    li.onclick = function () {
      favoritos.splice(index, 1);
      salvar();
      mostrarFavoritos();
    };

    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
  });
}
