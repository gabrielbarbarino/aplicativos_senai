// Dom

const n1 = document.querySelector("#uni1")
const n2 = document.querySelector("#uni2")
const n3 = document.querySelector("#uni3")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

// evento

botao.addEventListener('click', calcular)

// função

function calcular() {
    uni1= Number(n1.value)
    uni2= Number(n2.value)
    uni3= Number(n3.value)

    const media = (uni1+uni2+uni3) / 3

    if(media >= 5){
        mensagem = 'Aprovado!'
    }else {
        mensagem = 'Recuperação!'
    }

    resultado.textContent = `A sua média foi ${media.toFixed(1)}, você foi ${mensagem}`

}