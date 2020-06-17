function esperarPor(tempo = 2000) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, tempo)
    })
}

esperarPor()
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))

async function executar() {
    await esperarPor() // posso usar o await sempre que eu chamo uma função que retorna uma promise;
    console.log('Async/Await 1...')
    await esperarPor()
    console.log('Async/Await 2...')
    await esperarPor()
    console.log('Async/Await 3...')

    return 'FIM'
}

console.log('Antes Async/Await')
executar().then(console.log) // Aqui, foram de uma função marcada com Async, não se pode usar await, deve-se usar o then
console.log('Depois Async/Await')