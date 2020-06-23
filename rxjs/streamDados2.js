const array = [1, 2, 3, 4, 5, 6]

function fromArray(array) {
    return {
        iniciar(fn) {
            array.forEach((e, i) => {
                const TIMEOUT = 1000 * (1 + i)
                setTimeout(() => {
                    fn(e)
                }, TIMEOUT)
            })
        }
    }
}

const temp1 = fromArray(array)
temp1.iniciar(num => console.log(2**num))