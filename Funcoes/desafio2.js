const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// 1. fragil: true
const frageis = carrinho.filter(e => e.fragil)
console.log(frageis)
// 2. Quantidade e Preco
const total = frageis.map(e => e.qtde * e.preco)
console.log(total)
// 3. Media dos totais
const media = total.reduce((acc, value, index, array) => {
    const soma = acc + value
    if (index === array.length - 1) {
        return soma / array.length
    }
    return soma
})
console.log(media)