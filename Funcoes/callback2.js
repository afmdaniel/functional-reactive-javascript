const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const callback = (err, data) => {
    console.log(data)
}

fs.readFile(caminho, { encoding: 'utf-8', flag: 'r' }, callback)
// Perceba que esse log é printado antes da callback ser chamada
console.log('Hi')