// CALLBACK - Funções passadas como parâmetro
// que são chamadas quando algum evento acontece

function somarNoTerminal(a, b) {
    console.log(a + b)
}

function subtrairNoTerminal(a, b) {
    console.log(a - b)
}

function exec(fn, a, b) {
    fn(a, b)
}

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

// EXEMPLO
const callback = () => console.log('Exec...')
setInterval(callback, 1000)