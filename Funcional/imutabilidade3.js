const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz!'
    }
}

// Passagem por referência
function alterarPessoa(novaPessoa) {
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
}

// Para criar um novo objeto
function alterarPessoa(pessoa) {
    const novaPessoa = {...pessoa} // Cria uma cópia do objeto
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC' // mudará nos dois
    // pois a cópia foi no apenas no primeiro nível

    return novaPessoa
}

const novaPessoa = alterarPessoa(pessoa)
console.log(novaPessoa)
console.log(pessoa)