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

function plural(){
    let plural = document.getElementById('sorteio')
    if(quantidadeNumeros > 1){
        plural.innerHTML = 'Sortear números'
    }
}