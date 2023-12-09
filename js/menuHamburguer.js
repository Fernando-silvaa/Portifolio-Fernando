const menuHamburguer = document.getElementById('hamburguer');
const listaMenu = document.querySelector('.cabecalho__lista');
const menuAtivo = document.querySelector('.ativo');
const menuEscondido = document.querySelector('.hidden');

menuHamburguer.addEventListener('click', () => {
    listaMenu.classList.toggle('ativo');
});