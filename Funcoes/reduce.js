Array.prototype.meuReduce = function(callback, initialValue) {
    let resultado = initialValue || initialValue === 0? callback(initialValue, this[0]) : this[0]
    
    for (let i = 1; i < this.length; i++) {
        resultado = callback(resultado, this[i], i, this)
    }

    return resultado
}

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
]


const vetor = [1, 2, 4]
const somar = (a, b) => a + b
const multiplicar = (a, b) => a * b

const soma = vetor.meuReduce(somar)
console.log(soma)
const multiplicacao = vetor.meuReduce(multiplicar)
console.log(multiplicacao)


const valorTotal = carrinho.map(e => e.qtde * e.preco).meuReduce(somar, 0)
console.log(valorTotal)