let saldo = 0
let valorDoClick = 1
let moedaPorSegundo = 0
let valorCavalo = 10
let valorGalinha = 150
let valorPato = 300
let valorPorco = 500
let valorOvelha = 900
let valorVaca = 1200

setInterval(tempo, 1000)

function clickFazenda() {
    saldo += valorDoClick
    document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
}

function Comprar(acao) {
    if (acao == 'cavalo') {
        if (saldo >= valorCavalo) {
            saldo -= valorCavalo
            valorDoClick += 1
            valorCavalo *= 2
            document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
            document.getElementById('valor_click').innerHTML = `<p>VALOR DO CLICK: ${valorDoClick}</p>`
            document.getElementById('valor_cavalo').innerHTML = `<p>Valor: ${valorCavalo}</p>`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'galinha') {
        if (saldo >= valorGalinha) {
            saldo -= valorGalinha
            valorGalinha *= 2
            moedaPorSegundo += 1
            document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
            document.getElementById('valor_galinha').innerHTML = `<p>Valor: ${valorGalinha}</p>`
            document.getElementById('valor_segundo').innerHTML = `<p>VALOR POR SEGUNDO: ${moedaPorSegundo}</p>`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'pato') {
        if (saldo >= valorPato) {
            saldo -= valorPato
            valorPato *= 2
            valorDoClick += 1
            moedaPorSegundo += 1
            document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
            document.getElementById('valor_pato').innerHTML = `<p>Valor: ${valorPato}</p>`
            document.getElementById('valor_segundo').innerHTML = `<p>VALOR POR SEGUNDO: ${moedaPorSegundo}</p>`
            document.getElementById('valor_click').innerHTML = `<p>VALOR DO CLICK: ${valorDoClick}</p>`
        }
        else {
            alert('Dinheiro Insuficiente')
        }
    } else if (acao == 'porco') {
        if (saldo >= valorPorco) {
            saldo -= valorPorco
            valorPorco *= 2
            valorDoClick += 1
            moedaPorSegundo += 3
            document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
            document.getElementById('valor_porco').innerHTML = `<p>Valor: ${valorPorco}</p>`
            document.getElementById('valor_segundo').innerHTML = `<p>VALOR POR SEGUNDO: ${moedaPorSegundo}</p>`
            document.getElementById('valor_click').innerHTML = `<p>VALOR DO CLICK: ${valorDoClick}</p>`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'ovelha') {
        if (saldo >= valorOvelha) {
            saldo -= valorOvelha
            valorOvelha *= 2
            valorDoClick += 1
            moedaPorSegundo += 5
            document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
            document.getElementById('valor_ovelha').innerHTML = `<p>Valor: ${valorOvelha}</p>`
            document.getElementById('valor_segundo').innerHTML = `<p>VALOR POR SEGUNDO: ${moedaPorSegundo}</p>`
            document.getElementById('valor_click').innerHTML = `<p>VALOR DO CLICK: ${valorDoClick}</p>`
        } else {
            alert('Dinheiro insuficiente')
        }
    } else if (acao == 'vaca') {
        if (saldo >= valorVaca) {
            saldo -= valorVaca
            valorVaca *= 2
            valorDoClick += 3
            moedaPorSegundo += 10
            document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
            document.getElementById('valor_vaca').innerHTML = `<p>Valor: ${valorVaca}</p>`
            document.getElementById('valor_segundo').innerHTML = `<p>VALOR POR SEGUNDO: ${moedaPorSegundo}</p>`
            document.getElementById('valor_click').innerHTML = `<p>VALOR DO CLICK: ${valorDoClick}</p>`
        } else {
            alert('Dinheiro insuficiente')
        }
    }
}

function tempo() {
    saldo += moedaPorSegundo
    document.getElementById('saldo').innerHTML = `<p>SALDO: ${saldo}</p>`
}
