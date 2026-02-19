const poemas = [
  {
    titulo: "Lata de Feijões",
    arquivo: "../poemas/lata-de-feijoes.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Antes que o Sangue Seque",
    arquivo: "../poemas/ass.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Sínodo do Cadáver",
    arquivo: "../poemas/sinodo-do-cadaver.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Homem Frívolo",
    arquivo: "../poemas/homem-frivolo.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Remorso",
    arquivo: "../poemas/remorso.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Pecados Eméritos",
    arquivo: "../poemas/pecados-emeritos.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Taninos de Ferro",
    arquivo: "../poemas/taninos-de-ferro.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Entre Espadas e Cânticos",
    arquivo: "../poemas/eec.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Temporada de Caça",
    arquivo: "../poemas/temporada-de-caca.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Fardo",
    arquivo: "../poemas/fardo.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Nu",
    arquivo: "../poemas/nu.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Decrepto",
    arquivo: "../poemas/decrepto.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Desespero",
    arquivo: "../poemas/desespero.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Autópsia",
    arquivo: "../poemas/autopsia.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Angústia",
    arquivo: "../poemas/angustia.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Onde Mereço Estar",
    arquivo: "../poemas/onde-mereco-estar.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Exílio II",
    arquivo: "../poemas/exilio2.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Não me Perdoei por Aquela Tarde",
    arquivo: "../poemas/npaq.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Experiência",
    arquivo: "../poemas/experiencia.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Despedida de Mim",
    arquivo: "../poemas/despedida-de-mim.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Inaudível",
    arquivo: "../poemas/inaudivel.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Incredulidade II",
    arquivo: "../poemas/incredulidade2.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Cítrico",
    arquivo: "../poemas/citrico.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Fumo Pós Sexo",
    arquivo: "../poemas/fps.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Mártires",
    arquivo: "../poemas/martires.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Ecos",
    arquivo: "../poemas/ecos.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Traição em Essência: O Beijo no Rosto",
    arquivo: "../poemas/tebr.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Abstinência",
    arquivo: "../poemas/abstinencia.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Validade: 30 Dias",
    arquivo: "../poemas/validade-30dias.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "LXV",
    arquivo: "../poemas/lxv.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Fluvial",
    arquivo: "../poemas/fluvial.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Sentinela",
    arquivo: "../poemas/sentinela.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Boa Noite, Katherine",
    arquivo: "../poemas/boa-noite-katherine.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Oração do Defunto ao Carrasco",
    arquivo: "../poemas/odc.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Maçãs Podres",
    arquivo: "../poemas/macas-podres.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Mata-me",
    arquivo: "../poemas/matame.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Ixora",
    arquivo: "../poemas/ixora.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Cantiga de Escárnio",
    arquivo: "../poemas/cantiga-de-escarnio.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Vinte e Quatro Doze Avos",
    arquivo: "../poemas/vqda.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "De Mãos (Dadas) Atadas",
    arquivo: "../poemas/dmda.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Pecados Pretéritos",
    arquivo: "../poemas/pecados-preteritos.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Nebulosa",
    arquivo: "../poemas/nebulosa.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "A Flor Vermelha",
    arquivo: "../poemas/aflor-vermelha.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "REM",
    arquivo: "../poemas/rem.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Rosa do Árido",
    arquivo: "../poemas/rosa-do-arido.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Badaladas à Meia-Noite",
    arquivo: "../poemas/bmn.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Eu Jurei",
    arquivo: "../poemas/eu-jurei.html",
    capa: "../assets/capas/elcid.png"
  },
  {
    titulo: "Quem Somos Nós?",
    arquivo: "../poemas/quem-somos-nos.html",
    capa: "../assets/capas/elcid.png"
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