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
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }
    else {
        itens.style.display = 'block'
    }
}