function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco

    let privado = 3

    this.setPrivado = function() {
        privado += 1
    }

    this.getPrivado = function () {
        return privado
    }
}

const p1 = new Produto('Caneta', 2)
const p2 = new Produto('Caderno', 10)

console.log(p1.getPrivado())
console.log(p2.getPrivado())
p1.setPrivado()
p1.setPrivado()
p2.setPrivado()
console.log(p1.getPrivado())
console.log(p2.getPrivado())