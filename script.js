function sortear() {
    let inicio = parseInt(document.getElementById('primeiroNumero').value)
    let fim = parseInt(document.getElementById('segundoNumero').value)
    let quantidadeNumeros = parseInt(document.getElementById('quantidadeNumero').value)

    if(isNaN(inicio) || isNaN(fim)) {
        window.alert('Valor não identificado!')
        return
    }

    if(inicio > fim){
    window.alert('Valor não permitido!')
    return
    }
        
    let resultado = []
    let tamanho = fim - inicio + 1
    for(let i = 0; i < quantidadeNumeros ;i++){
        resultado[i] = Math.floor(Math.random() * tamanho) 
    }
    for(let i = 0; i < quantidadeNumeros ;i++){
       window.alert(fim - resultado[i]) 
    }
}

function plural() {
    let quantidadeNumero = document.getElementById('quantidadeNumero').value;
    let pluralElement = document.getElementById('plural');

    if (quantidadeNumero > 1) {
        pluralElement.innerHTML = ' números';
    } else {
        pluralElement.innerHTML = ' número';
    }
}

function abrirContatos(){
    if (redesSociais.style.display == 'block'){
        redesSociais.style.display = 'none'
    }
    else {
        redesSociais.style.display = 'block'
    }
}

function temaEscuro(){
    let cabeca = document.getElementById('temaEscuroCabeca')
    let corpo = document.getElementById('temaEscuroCorpo')
    let rodaPe = document.getElementById('temaEscuroRodaPe')
    let secao = document.getElementById('temaEscuroSecao')
    let letras = document.getElementsByName('textoInfo')

    if(cabeca.style.backgroundColor == 'white'){
        cabeca.style.backgroundColor = '#2c2c2c'
        cabeca.style.color = 'white'
        corpo.style.background = 'black URL(imagens/fundoTemaEscuro.avif) center center no-repeat'
        corpo.style.backgroundSize = 'cover'
        corpo.style.backgroundAttachment = 'fixed'
        corpo.style.color = 'white'
        rodaPe.style.backgroundColor = '#2c2c2c'
        rodaPe.style.color = 'white'
        secao.style.backgroundColor =  '#2c2c2c'
        secao.style.color =  'white'
        letras.style.color = 'white'
    }
    else {
        cabeca.style.backgroundColor = 'white'
        cabeca.style.color = 'black'
        corpo.style.background = 'black url(imagens/fundoMian.jpg) center center no-repeat'
        corpo.style.backgroundSize = 'cover'
        corpo.style.backgroundAttachment = 'fixed'
        corpo.style.color = 'black'
        rodaPe.style.backgroundColor = 'white'
        rodaPe.style.color = 'black'
        secao.style.backgroundColor =  '#e4e4e4'
        secao.style.color =  'black'
    }
        
}