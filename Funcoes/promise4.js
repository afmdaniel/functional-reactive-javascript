function gerarNumerosEntre(min, max, tempo = 1000) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)
        setTimeout( () => resolve(aleatorio), tempo)
    })
}

// So vai passar pro then quando resolver todas a promisses
// isso é bom para se trabalhar com paralelismo
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100)
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))