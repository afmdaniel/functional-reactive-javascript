const { from, Observable } = require('rxjs')

function createPipebleOpertor(nextGenerator) {
    return function(sourceObservable) {
        return Observable.create(subscriber => {
            sourceObservable.subscribe({
                next: nextGenerator(subscriber)
            })
        })
    }
}

function primeiro() {
    return createPipebleOpertor(subscriber => value => {
        subscriber.next(value)
        subscriber.complete()
    })
}


from([1, 2, 3, 4, 5])
.pipe(primeiro())
// .pipe(ultimo())
.subscribe(console.log)