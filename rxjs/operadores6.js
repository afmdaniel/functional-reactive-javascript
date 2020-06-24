const { from, Observable } = require('rxjs')

function createPipebleOpertor(nextFn) {
    return function(sourceObservable) {
        return Observable.create(subscriber => {
            sourceObservable.subscribe({
                next(v) {
                    nextFn(subscriber, v)
                }
            })
        })
    }
}

function primeiro() {
    return createPipebleOpertor((subscriber, valor) => {
        subscriber.next(valor)
        subscriber.complete()
    })
}


from([1, 2, 3, 4, 5])
.pipe(primeiro())
// .pipe(ultimo())
.subscribe(console.log)