function gerarNumeros() {
    return {
        iniciar(fn, intervalo = 1000) {
            let num = 0
            const interval = setInterval(() => {
                fn(num++)
            }, intervalo)

            return {
                parar() {
                    clearInterval(interval)
                }
            }
        }
    }
}

const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(a => {
    console.log(`#1: ${a * 2}`)
})

const temp2 = gerarNumeros()
exec2 = temp2.iniciar(b => {
    console.log(`#2: ${b + 100}`)
}, 2000)

setTimeout(() => {
    exec1.parar()
    exec2.parar()
}, 10000)