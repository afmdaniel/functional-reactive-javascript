let promessa = new Promise(function (resolve, reject) {
    // Uma promisse retorna um único valor
    resolve(["Ana", "Bia", "Carlos", "Daniel"])
})

promessa
    .then(valor => valor[0]) // pega o primeiro elemento
    .then(valor => valor[0]) // pega a primeira letra do primeiro elemento
    .then(valor => valor.toLowerCase()) // coloca a letra para caixa baixa
    .then(console.log) // printa a letra
