// Funções que operam em outras funções,
// tomando-as como argumento ou retornando-as

function executar(fn, ...params) {
    return function(textoInicial) {
        return `${textoInicial}: ${fn(...params)}`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

const r1 = executar(somar, 4, 5, 6)('Soma')
const r2 = executar(multi, 4, 5)('Multiplicação')

console.log(r1)
console.log(r2)