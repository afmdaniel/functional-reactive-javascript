const { Observable, Subject } = require('rxjs')

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('#1 Observer')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)
    })
}

const obs = getObservable()
obs.subscribe(value => console.log(`1: ${value}`))
obs.subscribe(value => console.log(`2: ${value}`))

function getSubject() {
    const sub = new Subject()
    setTimeout(() => {
        console.log('#2 Subject')
        sub.next(Math.random())
        sub.complete()
    }, 1000)

    return sub
}

const sub = getSubject()
sub.subscribe(value => console.log(`1: ${value}`))
sub.subscribe(value => console.log(`2: ${value}`))