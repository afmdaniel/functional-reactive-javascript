// esperar 3000 ms
// gerar numéros de 500

// depois de 10 s unsubscribe

const { timer, Subscription } = require('rxjs')

const obs1 = timer(3000, 500)
const obs2 = timer(3000, 500)
const subscription1 = obs1.subscribe(v => console.log(`1: ${v}`))
const subscription2 = obs2.subscribe(v => console.log(`2: ${v}`))

const sub = new Subscription()
sub.add(subscription1)
sub.add(subscription2)

setTimeout(() => sub.unsubscribe(), 10000)