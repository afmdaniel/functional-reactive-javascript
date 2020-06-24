const { of, Observable } = require('rxjs')

function terminadoCom(sobrenome) {
    return observable => new Observable(observer => {
        observable.subscribe({
            next(value) {
                if (value.endsWith(sobrenome)){
                    observer.next(value)
                }
            },
            error(err) {
                observer.error(err)
            },
            complete() {
                observer.complete()
            }
        })
    }) 
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
.pipe(terminadoCom('Silva'))
.subscribe(console.log)