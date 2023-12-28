const textoTecnologias = document.querySelector('.tecnologias__descricao-texto');
const html = document.getElementById('html');
const css = document.getElementById('css');
const sass = document.getElementById('sass');
const bootstrap = document.getElementById('bootstrap');
const javaScript = document.getElementById('javaScript');
const typeScript = document.getElementById('typeScript');
const git = document.getElementById('git');
const gitHub = document.getElementById('gitHub');


html.onclick = () => {
    textoTecnologias.innerHTML = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.'
};

css.onclick = () => {
    textoTecnologias.innerHTML = 'CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML'
};

sass.onclick = () => {
    textoTecnologias.innerHTML = 'SASS é uma linguagem de folha de estilo que é compilada para CSS. Ele permite que você use variáveis, regras aninhadas, mixins, funções e muito mais, tudo com uma sintaxe totalmente compatível com CSS'
}

bootstrap.onclick = () => {
    textoTecnologias.innerHTML = 'O Bootstrap é um framework CSS baseado na estilização de componentes através de classes diminuindo o tempo de execução de desenvolvimento web.'
};

javaScript.onclick = () => {
    textoTecnologias.innerHTML = 'JavaScript é uma linguagem de programação para manipulação de elementos e muito utilizada para páginas web dinâmicas.'
};

typeScript.onclick = () => {
    textoTecnologias.innerHTML = 'TypeScript é uma linguagem de programação de forte tipagem para manipulação de elementos.'
};

git.onclick = () => {
    textoTecnologias.innerHTML = 'Git é um sistema de controle de versões muito usado com o GitHub, usado principalmente no desenvolvimento de software.'
};

gitHub.onclick = () => {
    textoTecnologias.innerHTML = 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.'
};