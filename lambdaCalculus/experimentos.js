const I = a => a
console.log(I(3))
console.log(I(I))

const SELF = f => f(f)
console.log(SELF(I))

const PRIMEIRO = a => b => a
console.log(PRIMEIRO(7)(11))

const ULTIMO = a => b => b
console.log(ULTIMO(7)(11))

const TROCA = f => a => b => f(b)(a)
console.log(TROCA(ULTIMO)(7)(11))

const ULTIMO2 = a => b => TROCA(PRIMEIRO)(a)(b)
console.log(ULTIMO2(7)(11))

const TRUE = PRIMEIRO
const FALSE= ULTIMO

TRUE.value = 'VERDADEIRO'
FALSE.value = 'FALSO'

const NOT = a => a(FALSE)(TRUE)
console.log(NOT(TRUE))
console.log(NOT(FALSE))

const AND = a => b => a(b)(FALSE)
console.log(AND(TRUE)(TRUE))
console.log(AND(TRUE)(FALSE))
console.log(AND(FALSE)(FALSE))
console.log(AND(FALSE)(TRUE))

const OR = a => b => a(TRUE)(b)
console.log(OR(TRUE)(TRUE))
console.log(OR(TRUE)(FALSE))
console.log(OR(FALSE)(FALSE))
console.log(OR(FALSE)(TRUE))

// IGUALDADE BOOLEANA
const EQUAL = a => b => a(b)(NOT(b)) 
console.log(EQUAL(TRUE)(TRUE))
console.log(EQUAL(TRUE)(FALSE))
console.log(EQUAL(FALSE)(FALSE))
console.log(EQUAL(FALSE)(TRUE))

const XOR = a => b => NOT(EQUAL(a)(b))
console.log(XOR(TRUE)(TRUE))
console.log(XOR(TRUE)(FALSE))
console.log(XOR(FALSE)(FALSE))
console.log(XOR(FALSE)(TRUE))
