// Function declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

// Function expression
// armazenamos uma função em uma variável
const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde()


function somar(a, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado) // 7
resultado = somar(3)
console.log(resultado) // NaN 
// Pode resolver isso passando um parâmetro padrão
resultado = somar(3, 5, 12, 4, 6)
console.log(resultado) // 8