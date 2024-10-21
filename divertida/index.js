const alvo = document.querySelector("#alvo")
const btraiva = document.querySelector("#raiva")
const btalegria = document.querySelector("#alegria")
const btnojo = document.querySelector("#nojo")
const bttristeza = document.querySelector("#tristeza")

// eventos

btraiva.addEventListener('click', raiva)
btalegria.addEventListener('click', alegria)
btnojo.addEventListener('click', nojo)
bttristeza.addEventListener('click', tristeza)

// metodo

function raiva(){
    alvo.src = 'divertida/img/01.png'
}

function alegria(){
    alvo.src = 'divertida/img/02.png'
}

function nojo(){
    alvo.src = 'divertida/img/03.png'
}

function tristeza(){
    alvo.src = 'divertida/img/04.png'
}
