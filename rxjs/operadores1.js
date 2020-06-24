const { of, from } = require('rxjs')
const { last, first, map } = require('rxjs/operators')


// from([1, 2, 'ana', false, 'ultimo'])
// Com o from, utilizaríamos um array

of(1, 2, 'ana', false, 'ultimo')
    .pipe(
        last(),
        map(v => v[0])
    )
    .subscribe(console.log)


