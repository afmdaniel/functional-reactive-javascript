function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max)  [min, max] = [max, min]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegasena(qtdeNumeros) {
    const numeros = []
    for (let _ of Array(qtdeNumeros).fill()) {
        try {
            const numero = await gerarNumerosEntre(1, 60, numeros)
            numeros.push(numero)
        } catch (err) {
            throw err
        }
    }

    return numeros
}

gerarMegasena(6).then(console.log).catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)