const texto = document.querySelector('#texto')
const botao = document.querySelector('.gerar')
const area = document.querySelector('#qrcode')

// eventos

botao.addEventListener('click', gerar)

function gerar() {
    area.innerHTML = ''
    new QRCode(area, {
        text:texto.value, 
        with: 350,
        height: 350,
        colorLight: 'transparent',
        colorDark: 'black',
    })
}