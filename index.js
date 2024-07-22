const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('ola');
    setResultado('olaaa');
});

function setResultado(mensagem) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'qualquer coisa';
    resultado.appendChild(p);
}