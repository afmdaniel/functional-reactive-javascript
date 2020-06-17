const fs = require('fs')
const path = require('path')

function lerArquivo(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf-8', flag: 'r' }, (err, data) => resolve(data))
    })
}

const filePath = path.join(__dirname, 'dados.txt')
lerArquivo(filePath).then(console.log)
