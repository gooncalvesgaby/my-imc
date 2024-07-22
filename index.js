// aqui na minha linha 41 eu estou pegando o meu FORM
// pelo ID que eu dei pra ele, através do método querySelector.

// aqui na minha linha 43 eu adicionei um eventListener
//para capturar o evento de submit

//aqui na minha linha 45 e 46 eu estou capturando os
//dados do meu input 

// aqui na minha linha 48 e 49 eu tentei
// converter o valor dos meus inputs para NUMBER

//iniciando as minhas validações aqui na linha 51 
//se caso o peso e a altura não receberem um número
//como parâmetro eu vou retornar para o usuário 
// que a informação passada por ele deu como 
//altura ou peso inválido

//aqui na minha linha 61 e 62 eu estou calculando o IMC
//na linha x eu criei uma função específica para calcular o IMC
//na linha x eu criei tambem uma função especifica para o texto do imc

//na minha linha 64 eu criei a função que vai renderizar uma mensagem
//para o usuário indicando qual o imc dele e qual o grau que se encontra

//na minha linha 70 eu criei um array que informa qual o grau de obesidade
//de acordo com o valor que vai ser digitado pelo usuário

//aqui na minha linha 82 eu criei a função para calcular o IMC

//aqui na minha linha 87 eu só criei a função que cria um paragráfo (p)

//aqui na minha linha 92 eu criei uma função que seta o resultado, essa
//função ela recebe uma mensagem como parâmetro e se o resultado é valido

//aqui na minha linha 98 eu criei uma função que caso o resultado seja válido
//aparecerá uma mensagem na tela com o fundo verde e caso o valor fornecido
//pelo usuário seja um valor inválido eu vou retornar uma mensagem com 
//o fundo em vermelho junto de uma mensagem também.

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('peso inválido', false);
        return;
    }

    if(!altura) {
        setResultado('altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const indiceImc = getIndiceImc(imc);

    const msg = `Seu IMC é ${imc} (${indiceImc}).`;

    setResultado(msg, true);
});

function getIndiceImc(imc) {
    const indice = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc >= 39.9) return indice[5];
        if(imc >= 34.9) return indice[4];
        if(imc >= 29.9) return indice[3];
        if(imc >= 24.9) return indice[2];
        if(imc >= 18.5) return indice[1];        
        if(imc < 18.5)  return indice[0];
};

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

};

function createP() {
    const p = document.createElement('p');
    return p;
};

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = createP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}