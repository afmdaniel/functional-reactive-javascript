function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))

function soma(a, b) {
    return a + b
}

function subtrai(a, b) {
    return a - b
}

function multiplica(a, b) {
    return a * b
}

function divide(a, b){
    return a / b
}

function calcular (a) {
    return function (b) {
        return function (operacao) {
            return operacao(a, b)
        }
    }
}

console.log(calcular(3)(7)(soma))
console.log(calcular(3)(7)(subtrai))
console.log(calcular(3)(7)(multiplica))
console.log(calcular(3)(7)(divide))