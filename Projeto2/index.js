const fs = require('fs');
const path = require('path');
const _ = require('lodash')
const { Observable } = require('rxjs');
const { toArray, groupBy, mergeMap, map } = require('rxjs/operators');

function readDir(dirPath) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(dirPath).forEach(file => {
                subscriber.next(path.join(dirPath, file))
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

function createPipeableOperator(operatorFn) {
    return observable => Observable.create(observer => {
        const sub = operatorFn(observer)
        observable.subscribe({
            next: sub.next,
            error: sub.error || ((e) => observer.error(e)),
            complete: sub.complete || (() => observer.complete())
        })
    }) 
}

function getFilesByExtension(extension) {
    return createPipeableOperator(subscriber => ({
        next(filePath) {
            if (filePath.endsWith(extension)) {
                subscriber.next(filePath)
            }
        }
    }))
} 

function getDataFromFile() {
    return createPipeableOperator(subscriber => ({
        next(filePath) {
            try {
                const data = fs.readFileSync(filePath, { enconding: 'utf-8'})
                subscriber.next(data.toString())
            } catch (err) {
                subscriber.error(err)
            }
        }
    }))
}

function splitContentBy(separator) {
    return createPipeableOperator(subscriber => ({
        next(data) {
            data.split(separator).forEach(line => {
                subscriber.next(line)
            })
        }
    }))
}

function removeVoidLines() {
    return createPipeableOperator(subscriber => ({
        next(line) {
            if (line.trim()) {
                subscriber.next(line)
            }
        }
    }))
}

function removeLinesStartedWithNumber() {
    return createPipeableOperator(subscriber => ({
        next(line) {
            const num = parseInt(line.trim())
            if (num !== num) { // isso acontece quando num = NaN
                subscriber.next(line)
            }
        }
    }))
}

function removeCaracters(caractersArray) {
    return createPipeableOperator(subscriber => ({
        next(line) {
            const newLine = caractersArray.reduce((acc, caracter) => {
                return acc.split(caracter).join('')
            }, line)
            subscriber.next(newLine)
        }
    }))
}

const symbols = [
    ',', '.','!', '?', '-', '"',
    '♪', '_', '<i>', '</i>',
    '\r','[', ']', '(', ')',
    '!'
]

const subtitlesPath = path.join(__dirname, '..', 'legendas')
readDir(subtitlesPath)
    .pipe(
        getFilesByExtension('.srt'),
        getDataFromFile(),
        splitContentBy('\n'),
        removeVoidLines(),
        removeLinesStartedWithNumber(),
        removeCaracters(symbols),
        splitContentBy(' '),
        removeVoidLines(),
        removeLinesStartedWithNumber(),
        groupBy(word => word.toLowerCase()),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(words => ({elemento: words[0], qtde: words.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)