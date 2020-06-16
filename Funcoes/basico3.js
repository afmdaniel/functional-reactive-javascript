// Arrow function
const felizNatal = () => console.log('Feliz Natal')
felizNatal()

const saudacao = nome => `Fala, ${nome}!!!`
console.log(saudacao('Daniel'))

const somar = (...numeros) => {
    return numeros.reduce((a, b) => a + b)
}

console.log(somar(1,2,3,4,5))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))