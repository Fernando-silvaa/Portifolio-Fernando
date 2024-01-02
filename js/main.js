const textoTecnologias = document.querySelector('.tecnologias__descricao-texto');
const html = document.getElementById('html');
const css = document.getElementById('css');
const sass = document.getElementById('sass');
const bootstrap = document.getElementById('bootstrap');
const javaScript = document.getElementById('javaScript');
const typeScript = document.getElementById('typeScript');
const git = document.getElementById('git');
const gitHub = document.getElementById('gitHub');


const tecnologias = {
    1: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
    2: 'CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML',
    3: 'SASS é uma linguagem de folha de estilo que é compilada para CSS. Ele permite que você use variáveis, regras aninhadas, mixins, funções e muito mais, tudo com uma sintaxe totalmente compatível com CSS',
    4: 'O Bootstrap é um framework CSS baseado na estilização de componentes através de classes diminuindo o tempo de execução de desenvolvimento web.',
    5: 'JavaScript é uma linguagem de programação para manipulação de elementos e muito utilizada para páginas web dinâmicas.',
    6: 'TypeScript é uma linguagem de programação de forte tipagem para manipulação de elementos.',
    7: 'Git é um sistema de controle de versões muito usado com o GitHub, usado principalmente no desenvolvimento de software.',
    8: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.',
}

html.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[1]
}

css.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[2]
}

sass.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[3]
}

bootstrap.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[4]
};

javaScript.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[5]
};

typeScript.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[6]
};

git.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[7]
};

gitHub.onclick = () => {
    textoTecnologias.innerHTML = tecnologias[8]
};