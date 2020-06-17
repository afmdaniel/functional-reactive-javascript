Array.prototype.meuFilter = function (callback) {
    const novoVetor = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoVetor.push(this[i])
        }
    }
    return novoVetor
}

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const qtdeMaiorQueZero = item => item.qtde > 0

const novoVetor = carrinho.meuFilter(qtdeMaiorQueZero)

console.log(novoVetor)