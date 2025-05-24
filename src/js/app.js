// Criando o construtor do objeto Projeto
function Projeto(img, titulo, descricao, tecnologias) {
  this.img = img;
  this.titulo = titulo;
  this.descricao = descricao;
  this.tecnologias = tecnologias;
}

// Criando um array que armazena os objetos Projeto
const projetos = [
  new Projeto(
    "../img/img.png",
    "Social Links Profile",
    "Aqui vem uma mini explicação do que foi feito no projeto em geral...",
    ["HTML", "CSS", "Javascript"]
  ),
  new Projeto(
    "../img/img.png",
    "Social Links Profile",
    "Aqui vem uma mini explicação do que foi feito no projeto em geral...",
    ["HTML", "CSS", "Javascript"]
  ),
  new Projeto(
    "../img/img.png",
    "Social Links Profile",
    "Aqui vem uma mini explicação do que foi feito no projeto em geral...",
    ["HTML", "CSS", "Javascript"]
  ),
];

// (Ignorar: trecho de clonagem de skills, sem relação com projetos)
let copy = document.querySelector(".skills-slide").cloneNode(true);
document.querySelector(".nav-skills").appendChild(copy);

// Selecionando o container principal onde os projetos serão inseridos
const container = document.querySelector(".container-projetos");

// Percorrendo o array de projetos e gerando os cards dinamicamente
projetos.forEach((projeto) => {
  // Criando a div do card do projeto
  const div = document.createElement("div");
  div.className = "projeto-container";

  // Inserindo o conteúdo HTML dentro da div do projeto
  div.innerHTML = `
    <div class="img-projeto" style=background-image: url('${projeto.img}');></div>
    <div class="info-projeto">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <div class="ferramentas">
        ${projeto.tecnologias.map(tec => `<div class="ferramenta">${tec}</div>`).join("")}
      </div>
    </div>
  `;

  // Adicionando o card ao container principal
  container.appendChild(div);
});
