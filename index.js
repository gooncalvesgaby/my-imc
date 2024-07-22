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
    console.log(imc)
});

function getIndiceImc(imc) {
    const indice = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
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
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}