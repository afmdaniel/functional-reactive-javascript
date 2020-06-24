const { from, Observable } = require('rxjs')

function createPipebleOpertor(operator) {
    return function(sourceObservable) {
        return Observable.create(subscriber => {
            sourceObservable.subscribe(operator(subscriber))
        })
    }
}

function primeiro() {
    return createPipebleOpertor(subscriber => ({
        next(value) {
            subscriber.next(value)
            subscriber.complete()
        }
    }))
}

function nenhum() {
    return createPipebleOpertor(subscriber => ({
        next(value) {
            subscriber.complete()
        }
    }))
}

function ultimo() {
    return createPipebleOpertor(subscriber => ({
        next(v) {
            ultimo = v
        },
        complete() {
            subscriber.next(ultimo)
            subscriber.complete()
        }
    }))
}

from([1, 2, 3, 4, 5])
// .pipe(primeiro())
.pipe(ultimo())
// .pipe(nenhum())
.subscribe(console.log)