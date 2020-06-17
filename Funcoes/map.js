const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
]

console.log(carrinho.map(produto => produto.nome))
console.log(carrinho.map(produto => produto.qtde * produto.preco))

Array.prototype.mapa = function (callback) {
    const novoVetor = []
    for(let i = 0; i < this.length; i++) {
        novoVetor.push(callback(this[i], i, this))
    }
    
    return novoVetor
}

console.log(carrinho.mapa(produto => produto.nome))
console.log(carrinho.mapa(produto => produto.qtde * produto.preco))