function composicao(...fn) {
    return function(valor) {
        return fn.reduce(async (acc, fn) => {
            // Verifica se acc é uma promisse
            if(Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!`
}

function tornarLento(texto) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(texto.split('').join(' '))
        }, 3000)
    })
}

const exagerado = composicao(gritar, enfatizar, tornarLento)
const resultado = exagerado('para').then(console.log)