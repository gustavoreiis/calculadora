const container = document.querySelector('.switch');
const select = document.querySelector('.select');
container.addEventListener('click', () => {
    if (select.value == 'tema1') {
        document.documentElement.style.setProperty('--texto', '#35352c');
        document.documentElement.style.setProperty('--fundo-calculadora', '#e6e6e6');
        document.documentElement.style.setProperty('--fundo-visor', '#ededed');
        document.documentElement.style.setProperty('--fundo-teclado', '#d1cccc');
        document.documentElement.style.setProperty('--fundo-numeros-operadores', '#e5e4e1');
        document.documentElement.style.setProperty('--shadow-numeros-operadores', 'hsl(35, 11%, 61%)');
        document.documentElement.style.setProperty('--texto-numeros-operadores', '#35352c');
        document.documentElement.style.setProperty('--fundo-del-res', '#377f86');
        document.documentElement.style.setProperty('--shadow-del-res', '#1b5f65');
        document.documentElement.style.setProperty('--fundo-igual', '#ca5502');
        document.documentElement.style.setProperty('--shadow-igual', '#893901');
        document.documentElement.style.setProperty('--fundo-switch', '#d1cccc');
        document.documentElement.style.setProperty('--hover-igual', '#ff8b38');
        document.documentElement.style.setProperty('--hover-del-res', '#62b5bd');
        document.documentElement.style.setProperty('--hover-numeros-operadores', '#ffffff')
        document.documentElement.style.setProperty('--texto-igual', '#ffffff')
        select.value = 'tema2';
    } else if (select.value == 'tema2') {
        document.documentElement.style.setProperty('--texto', '#ffe53d');
        document.documentElement.style.setProperty('--fundo-calculadora', '#160628');
        document.documentElement.style.setProperty('--fundo-visor', '#1d0934');
        document.documentElement.style.setProperty('--fundo-teclado', '#1d0934');
        document.documentElement.style.setProperty('--fundo-numeros-operadores', '#341c4f');
        document.documentElement.style.setProperty('--shadow-numeros-operadores', '#871c9c');
        document.documentElement.style.setProperty('--texto-numeros-operadores', '#ffe53d');
        document.documentElement.style.setProperty('--fundo-del-res', '#58077d');
        document.documentElement.style.setProperty('--shadow-del-res', '#bc15f4');
        document.documentElement.style.setProperty('--fundo-igual', '#00e0d1');
        document.documentElement.style.setProperty('--shadow-igual', '#6cf9f2');
        document.documentElement.style.setProperty('--fundo-switch', '#1d0934');
        document.documentElement.style.setProperty('--hover-igual', '#94fff9');
        document.documentElement.style.setProperty('--hover-del-res', '#8631b0');
        document.documentElement.style.setProperty('--hover-numeros-operadores', '#6b34ac')
        document.documentElement.style.setProperty('--texto-igual', '#1b2428')
        select.value = 'tema3';
    } else if (select.value == 'tema3') {
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.documentElement.style.setProperty('--fundo-calculadora', '#3b4664');
        document.documentElement.style.setProperty('--fundo-visor', '#191f32');
        document.documentElement.style.setProperty('--fundo-teclado', '#232c43');
        document.documentElement.style.setProperty('--fundo-numeros-operadores', '#eae3dc');
        document.documentElement.style.setProperty('--shadow-numeros-operadores', '#b4a597');
        document.documentElement.style.setProperty('--texto-numeros-operadores', '#44474f');
        document.documentElement.style.setProperty('--fundo-del-res', '#637097');
        document.documentElement.style.setProperty('--shadow-del-res', '#404e72');
        document.documentElement.style.setProperty('--fundo-igual', '#d03f2f');
        document.documentElement.style.setProperty('--shadow-igual', '#93261a');
        document.documentElement.style.setProperty('--fundo-switch', '#232c43');
        document.documentElement.style.setProperty('--hover-igual', '#f96b5d');
        document.documentElement.style.setProperty('--hover-del-res', '#a2b3e1');
        document.documentElement.style.setProperty('--hover-numeros-operadores', '#ffffff');
        document.documentElement.style.setProperty('--texto-igual', '#ffffff')
        select.value = 'tema1'
    }
    container.classList.remove('tema1', 'tema2', 'tema3');
    container.classList.add(select.value);
})

const visor = document.querySelector('.conteudo');

function inserir(num) {
    let conteudo = visor.innerHTML;
    
    if ('123456789'.includes(num)) {
        if (conteudo === '0') {
            visor.innerHTML = num;
        } else {
            visor.innerHTML = conteudo + num;
        }
    }

    if (num === '.') {
        if (conteudo === '') {
            visor.innerHTML = '0.';
        } else if (conteudo.endsWith("+") || conteudo.endsWith("-") || conteudo.endsWith("x") || conteudo.endsWith("/")) {
            visor.innerHTML = conteudo + '0.';
        } else if (conteudo.slice(-1) === '.') {
            // Não inserir
        } else {
            visor.innerHTML = conteudo + num;
        }
    }

    if ('+-x/'.includes(num)) {
        if (/[+x/]/.test(num)) {
            if (conteudo === '') {
                // Não inserir
            } else if (conteudo.endsWith('-')) {
                // Nãi inserir
            } else if (/[+x/]/.test(conteudo)) {
                // Não inserir
            } else {
                visor.innerHTML = conteudo + num;
            }
        } else if (num === '-') {
            if (conteudo === '') {
                visor.innerHTML = num;
            } else if (conteudo.endsWith('+') || conteudo.endsWith('x') || conteudo.endsWith('/')) {
                visor.innerHTML = conteudo + num;
            } else if (conteudo.endsWith('-')) {
                // Não inserir
            } else if (conteudo.slice(-1).match(/[0-9]/)) {
                visor.innerHTML = conteudo + num;
            }
        }
    }

    if (num === '0') {
        if (conteudo === '0') {
            // Não inserir
        } else {
            visor.innerHTML = conteudo + num;
        }
    }
}

function reset() {
    visor.innerHTML = "";
}

function del() {
    let conteudo = visor.innerHTML;
    visor.innerHTML = conteudo.slice(0, conteudo.length - 1);
}

function igual() {
    let conteudo = visor.innerHTML;
    if (conteudo.includes('x')) {
        conteudo = conteudo.replace('x', '*')
    }

    let resultado = eval(conteudo);
    if (resultado % 1 === 0) {
        visor.innerHTML = resultado;
    } else {
        visor.innerHTML = resultado.toFixed(3);
    }
}
