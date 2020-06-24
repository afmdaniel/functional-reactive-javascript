const { from, Observable } = require('rxjs')

function primeiro() {
    return function(sourceObservable) {
        return Observable.create(subscriber => {
            sourceObservable.subscribe({
                next(v) {
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
}

const ultimo = () => source => Observable.create(subscriber => {
    let ultimo
    source.subscribe({
        next(v) {
            ultimo = v
        },
        complete() {
            subscriber.next(ultimo)
            subscriber.complete()
        }
    })
})

from([1, 2, 3, 4, 5])
// .pipe(primeiro())
.pipe(ultimo())
.subscribe(console.log)