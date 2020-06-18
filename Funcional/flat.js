const letrasAninhadas = [
    ['O', ['l'], 'á'],
    [' '],
    ['D', [['a'], 'n'], 'i', 'e', 'l']
]

const letras = letrasAninhadas.flat(Infinity)

const resultado = letrasAninhadas
    .flatMap(l => [l, ',']) // nesse caso, primeiro faz o map, não resovle o problema
    .reduce((a, b) => a + b)

console.log(resultado)