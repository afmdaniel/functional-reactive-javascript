const readLine = require('readline')

function obterResposta(pergunta) {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve, reject) => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

function namorada() {
    console.log('N: Apagar as luzes')
    console.log('N: Pedir silêncio')
    console.log('N: Surpresa!')
}

function sindico(evento) {
    console.log('S: Monitorando o barulho')
    console.log(`S: evento -> ${evento.resp}`)
    console.log(`S: evento -> ${evento.data}`)
}

async function porteiro(interessados = []) {
    // No subject deve ter algum tipo de laço para que ele fique
    // monitorando o evento
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)')
        if (resp.toLowerCase() === 's') {
            // Os observer são notificados
            interessados.forEach(obs => obs({ resp, data: new Date()}))
            break
        } else if (resp.toLowerCase() === 'q') {
            break
        } else {
            continue
        }
        
    }
}

// Registrados os dois observadores
// observers -> namorada, sindico
// subject -> porteiro
porteiro([namorada, sindico])