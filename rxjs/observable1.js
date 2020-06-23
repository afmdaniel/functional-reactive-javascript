const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é bem legal')
})

promise.then(console.log)

const observable = new Observable(function subscribe(subscriber) {
    subscriber.next('Observer é bem legal')
    setTimeout(() => {
        subscriber.next('Observer assíncrono')
        subscriber.complete() // não tem mais nada a feito
    }, 1000)
})

observable.subscribe(console.log)
observable.subscribe(value => console.log(value.toUpperCase()))

/* DIFERENÇAS
- Não podemos chamar o resolve 2 vezes,
já o next sim e com valores diferentes.
- A partir de um mesmo observer, 
podemos ter mais de uma subscription
*/