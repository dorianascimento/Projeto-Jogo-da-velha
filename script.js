const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// variveis de controle
let vez = 1;
let tentativas = 1;

// variaveis que alteram o elemento
let quadrado = cs('.img');
let marcador = c('.marcador');
let inQuadrado = cs('.quadrado');
let quadradoImg = cs('.quadrado .img');

// variaveis para checar o vencedor, com todas as possibilidades
let linha1 = cs('.quadrado.linha1');
let linha2 = cs('.quadrado.linha2');
let linha3 = cs('.quadrado.linha3');
let coluna1 = cs('.quadrado.coluna1');
let coluna2 = cs('.quadrado.coluna2');
let coluna3 = cs('.quadrado.coluna3');
let diagonal1 = cs('.quadrado.diagonal1');
let diagonal2 = cs('.quadrado.diagonal2');


// atualizar a pagina
function atualizarPagina() {
    document.location.reload(true);
}

// função para marcar o 'x' ou 'o' e verificar se alguem ganhou
function clicou(num) {
    // vai rodar o if e quando o numero da variavel de controle for irmar sera a vez do primeiro jogador, e par o segundo jogador, no final adicioar 1 a variavel
    if(vez % 2 == 0) {
        // função para verificar se ja está preenchido o campo, caso esteja, avisa o usuario, caso não, ai podera ser preenchido
        if(quadrado[num].classList.contains('x') || quadrado[num].classList.contains('o')) {
            marcador.style.backgroundColor = '#f00';
            document.querySelector('.marcador .erro').innerHTML = 'Bloquedo';
            setTimeout(()=>{
                marcador.style.backgroundColor = '#fff';
                document.querySelector('.marcador .erro').innerHTML = '';
            },500)
           } else {
            // adicionar uma classe verificado1 para realizar a verificação na função
            inQuadrado[num].classList.add('verificado1');
            // adicionar o 'X'
            quadrado[num].classList.add('x');
            document.querySelector('.marcador h2 span').innerHTML = '1';
            resultado(tentativas);
            tentativas++;
            vez++;
            verificarGanhador(1);
           }
    } else {
        if(quadrado[num].classList.contains('x') || quadrado[num].classList.contains('o')) {
            marcador.style.backgroundColor = '#f00';
            document.querySelector('.marcador .erro').innerHTML = 'bloqueado';
            setTimeout(()=>{
                marcador.style.backgroundColor = '#fff';
                document.querySelector('.marcador .erro').innerHTML = '';
            },500)
           } else {
            // adicionar uma classe verificado1 para realizar a verificação na função
            inQuadrado[num].classList.add('verificado2');
            // adicionar o 'O'
            quadrado[num].classList.add('o');
            document.querySelector('.marcador h2 span').innerHTML = '2';
            resultado(tentativas);
            tentativas++;
            vez++;
            verificarGanhador(2);
           }
        }
}

// função para avisar se der empate, caso chega no limite de jogadas
function resultado(tent) {
    if (tent == 9) {
        document.querySelector('.marcador h2').innerHTML = 'Empate';
        for(let a in quadrado) {
            quadrado[a].style.backgroundColor = '#000';
        }
    }
}

// função para verificar cada div que esteja com a classe verificado, se tiver em 3, é vencedor e irá mostrar para o usuario
function verificarGanhador(num) {
    if(linha1[0].classList.contains('verificado'+num) && linha1[1].classList.contains('verificado'+num) && linha1[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in linha1) {
            linha1[a].style.backgroundColor = '#f00';
        }
        console.log('venceu');
    } else if(linha2[0].classList.contains('verificado'+num) && linha2[1].classList.contains('verificado'+num) && linha2[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in linha2) {
            linha2[a].style.backgroundColor = '#f00';
        }
    } else if (linha3[0].classList.contains('verificado'+num) && linha3[1].classList.contains('verificado'+num) && linha3[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in linha3) {
            linha3[a].style.backgroundColor = '#f00';
        }
    } else if(coluna1[0].classList.contains('verificado'+num) && coluna1[1].classList.contains('verificado'+num) && coluna1[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in coluna1) {
            coluna1[a].style.backgroundColor = '#f00';
        }
    } else if(coluna2[0].classList.contains('verificado'+num) && coluna2[1].classList.contains('verificado'+num) && coluna2[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in coluna2) {
            coluna2[a].style.backgroundColor = '#f00';
        }
    } else if(coluna3[0].classList.contains('verificado'+num) && coluna3[1].classList.contains('verificado'+num) && coluna3[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in coluna3) {
            coluna3[a].style.backgroundColor = '#f00';
        }
    } else if(diagonal1[0].classList.contains('verificado'+num) && diagonal1[1].classList.contains('verificado'+num) && diagonal1[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in diagonal1) {
            diagonal1[a].style.backgroundColor = '#f00';
        }
    } else if(diagonal2[0].classList.contains('verificado'+num) && diagonal2[1].classList.contains('verificado'+num) && diagonal2[2].classList.contains('verificado'+num)) {
        document.querySelector('.marcador h2').innerHTML = 'Vencedor '+ num;
        for(let a in diagonal2) {
            diagonal2[a].style.backgroundColor = '#f00';
        }
    } else {
        console.log('sem vencedor');
    }
}
