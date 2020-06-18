// function soma(a, b, c) {
//     return a + b + c
// }
// console.log(soma(1, 2, 3))

// COM CURRYNG
// function soma(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }

// console.log(soma(1)(2)(3))

function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                // Lazy Evaluation
                const tamanho = (texto || '').trim().length
           
                if (tamanho < min || tamanho > max) {
                   throw erro
                }
            }
        }
    }
}

function aplicarValidacao(fn) {
    return function (valor) {
        try {
            fn(valor)
        } catch (e) {
            return { error: e }
        }
    }
}

// Lazy Evaluation
// Nesse pontos não é processamento da regra
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }

// O processamento é feito apenas aqui, depois que o último
// argumento foi passado
console.log(validarNomeProduto(p1.nome))

