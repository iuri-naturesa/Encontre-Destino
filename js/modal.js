export default function initModal() {}

const botaoAbrir = document.querySelectorAll("[data-modal='abrir']");
const botaoFechar = document.querySelectorAll("[data-modal='fechar']");
const containerModal = document.querySelectorAll("[data-modal='container']");
const destinosInfo = document.querySelectorAll(".destinos a");
let index = 0;

function abrirModal(index) {
  containerModal[index].classList.add("ativo");
  destinosInfo[index].classList.add("ativo");
}
function fecharModal(index) {
  containerModal[index].classList.remove("ativo");
}

botaoAbrir.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    abrirModal(index);
  });
});

botaoFechar.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    fecharModal(index);
  });
});
