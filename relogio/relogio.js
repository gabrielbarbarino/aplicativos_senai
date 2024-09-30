const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dia = document.querySelector('.dia')
const mes = document.querySelector('.mes')
const ano = document.querySelector('.ano')
const sa = document.querySelector('.sau')
setInterval(relogio, 1000)

// funções
function relogio(){
    let hoje = new Date()
    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()

    let d = hoje.getDate()
    let me = hoje.getMonth() + 1
    let ann = hoje.getFullYear()

    
    if(h<10){
        h="0"+h
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s


    if(d<10){
        d="0"+d
    }
    if(me<10){
        me="0"+me
    }

    if(h >= 5 && h < 12){
        sa.textContent = "Bom dia!"
    }else if(h >= 12 && h < 19){
        sa.textContent = "Boa Tarde!"
    } else {
        sa.textContent = "Boa Noite!"
    }
    
    dia.textContent = d
    mes.textContent = me
    ano.textContent = ann
    
}

