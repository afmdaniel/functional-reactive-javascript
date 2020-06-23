const { Observable, noop } = require('rxjs')

const entre = (min, max) => {
    return new Observable(subscriber => {
        Array(max - min + 1).fill().forEach((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

entre(4, 10)
    .subscribe(
        console.log,
        noop,
        () => console.log('FIM')
    )