const colecoes = [
  {
    titulo: "Contos",
    arquivo: "../place-holder.html",
    capa: "assets/capas/rat.png"
  },
  {
    titulo: "Ensaios",
    arquivo: "../place-holder.html",
    capa: "assets/capas/caput.png"
  },
  {
    titulo: "& Outras Coisas",
    arquivo: "../colecoes/outrascoisas.html",
    capa: "assets/capas/outrascoisas.png"
  },
  {
    titulo: "Baralho de Valetes Brancos",
    arquivo: "../place-holder.html",
    capa: "assets/capas/ace.png"
  },
  {
    titulo: "El Cid",
    arquivo: "colecoes/elcid.html",
    capa: "assets/capas/elcid.png"
  },
  {
    titulo: "Cartas da Meia-Noite",
    arquivo: "colecoes/mnl.html",
    capa: "assets/capas/letters.png"
  }
];

const container = document.getElementById("grade-colecoes");

colecoes.forEach(colecao => {
  const a = document.createElement("a");
  a.className = "card";
  a.href = colecao.arquivo;
  
  a.innerHTML = `
    <div class="thumb">
      <img src="${colecao.capa}" alt="Capa de ${colecao.titulo}">
    </div>
    <div class="titulo-card">${colecao.titulo}</div>
  `;

  container.appendChild(a);
});