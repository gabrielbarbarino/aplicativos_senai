const apagadaa = document.querySelector('#apagada')
const acessa = document.querySelector('#acesa')
const quebradaa = document.querySelector('#quebrada')

// eventos

acessa.addEventListener('click', acender)
quebradaa.addEventListener('click', quebrar)

// funções

function quebrar() {
    apagadaa.src = "lampada/img/quebrada.jpg"
}

function acender() {
    apagadaa.src = "lampada/img/acesa.gif"
}