function sortear() {
    let inicio = document.getElementById('primeiroNumero').value
    let fim = document.getElementById('segundoNumero').value

    if(inicio > fim){
        window.alert('Valor não permitido!')
        return
    }
    else if(inicio === "" || inicio === null || fim === "" || fim === null) {
        window.alert('Valor não identificado!')
        return
    }
    
    let tamanho = fim - inicio + 1
    let resultado = Math.floor(Math.random() * tamanho) 
    window.alert(fim - resultado)
}