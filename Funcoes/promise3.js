function gerarNumerosEntre(min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 3).then(value => console.log(`O valor gerado foi ${value}`))