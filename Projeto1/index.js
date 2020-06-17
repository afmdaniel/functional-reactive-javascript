const fs = require('fs');
const path = require('path')

const directory = path.join(__dirname, 'legendas')

function getFilesWithPath(directory) {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(directory, 'utf-8')
            const filesWithPath = files.map(setFileFullPath(directory))
            resolve(filesWithPath)
        } catch (err) {
            reject(err)
        }
    })
}

const getFilesByExtension = extension => files => {
        const filesByExtension = files.filter(file => file.endsWith(extension))
        return filesByExtension
    }

function setFileFullPath(directory) {
    return function (file) {
        const filePath = path.join(directory, file)
        return filePath
    }
}

function getDataFromFile(filePath) {
    return new Promise((resolve, reject) => {
        try {
            const data = fs.readFileSync(filePath, { encoding: "utf-8" })
            resolve(data)
        } catch (err) {
            reject(err)
        }
    })
}

function getDataFromFiles(files) {
    return Promise.all(files.map(getDataFromFile))
}

const mergeContent = datas => datas.join(' ')

const splitContentByLine = content => content.split('\n')

const splitContentByWord = content => content.split(' ')

function removeVoidLines(lines) {
    return lines.filter(line => line.trim())
}

const removeLinesWithPattern = pattern => lines => lines.filter(line => !line.includes(pattern))

function removeNumberedLines(lines) {
    return lines.filter(line => {
        const number = parseInt(line.trim())
        return number !== number
    })
}

const symbols = [
    ',', '.', '?', '-', '"',
    '♪', '_', '<i>', '</i>',
    '\r','[', ']', '(', ')',
    '!'
]

function removeCaracters(symbols) {
    return function(lines) {
        return lines.map(line => {
            return symbols.reduce((acc, symbol) => {
                return acc.split(symbol).join('')
            }, line)
        })
    }
}

function countByWord(words) {
    return Object.values(words.reduce((acc, word) => {
        const w = word.toLowerCase()
        const qtd = acc[w] ? acc[w].qtd + 1 : 1
        acc[w] = { word: w, qtd }
        return acc
    }, {}))
}

function orderByNumericAttribute(attr) {
    return function (array) {
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(desc)
    }
}

getFilesWithPath(directory)
    .then(getFilesByExtension('.srt'))
    .then(getDataFromFiles)
    .then(mergeContent)
    .then(splitContentByLine)
    .then(removeVoidLines)
    .then(removeLinesWithPattern('-->'))
    .then(removeNumberedLines)
    .then(removeCaracters(symbols))
    .then(mergeContent)
    .then(splitContentByWord)
    .then(removeVoidLines)
    .then(removeNumberedLines)
    .then(countByWord)
    .then(orderByNumericAttribute('qtd'))
    .then(console.log)