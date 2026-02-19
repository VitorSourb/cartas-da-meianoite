const poemas = [
  {
   titulo: "Tragicomicamente Grego",
   arquivo: "../place-holder.html",
   capa: "../assets/capas/outrascoisas.png"
  },
  {
   titulo: "Bezerro de Ouro",
   arquivo: "../place-holder.html",
   capa: "../assets/capas/outrascoisas.png"
  },
  {
   titulo: "Rashomon II",
   arquivo: "../place-holder.html",
   capa: "../assets/capas/outrascoisas.png"
  },
  {
   titulo: "Exílio III",
   arquivo: "../place-holder.html",
   capa: "../assets/capas/outrascoisas.png"
  },
  {
   titulo: "Desabafo II",
   arquivo: "../place-holder.html",
   capa: "../assets/capas/outrascoisas.png"
  },
  {
    titulo: "Balada Anglosaxônica",
    arquivo: "../place-holder.html",
    capa: "../assets/capas/outrascoisas.png"
  },
  {
    titulo: "Fantasia",
    arquivo: "../place-holder.html",
    capa: "../assets/capas/outrascoisas.png"
  },
];

const container = document.getElementById("grade-poemas");

poemas.forEach(poema => {
  const a = document.createElement("a");
  a.className = "card";
  a.href = poema.arquivo;
  
  a.innerHTML = `
    <div class="thumb">
      <img src="${poema.capa}" alt="Capa de ${poema.titulo}">
    </div>
    <div class="titulo-card">${poema.titulo}</div>
  `;

  container.appendChild(a);
});