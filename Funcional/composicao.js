// A resposta de uma funcao é passada com argumento para a outra
function composicao(...fn) {
    return function(valor) {
        return fn.reduce((acc, fn) => {
            return fn(acc)
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
    return texto.split('').join(' ')
}

const exagerado = composicao(gritar, enfatizar, tornarLento)
const menosExagerado = composicao(gritar, tornarLento)

const resultado = exagerado('para')
const resultado2 = menosExagerado('Cuidado com o buraco')

console.log(resultado)
console.log(resultado2)
