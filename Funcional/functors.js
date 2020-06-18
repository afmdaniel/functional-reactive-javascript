
// ARRAY é um exemplo de FUNCTOR
const nums = [1, 2, 3, 4, 5, 6]
const mappedNums = nums.map(el => el + 10).map(el => el * 2)
console.log(nums, mappedNums)

function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if(this.invalido()) {
                return TipoSeguro(null)
            } else {
                novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        },
        flatMap(fn) {
            if(this.invalido()) {
                return null
            } else {
                return this.map(fn).valor
            }
        }
    }
}

const original = 'Esse é um texto'
const alterado = TipoSeguro(original)
    .map(t => t.toUpperCase())
    // .map(t => null)
    .map(t => `${t}!!!!`)
    .flatMap(t => t.split('').join(' '))

console.log(alterado)
console.log(original)