// Minha solução

const a = [1,2,4]
const c = [2,4,6]


//Some todos os nuemros de um array

b = c.reduce((acumulador, item) => acumulador + item)

console.log(b)

//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista.

const precos = [125.00, 237.50, 53.28, 42.50]
const saldo = 1000.00

function atualizaSaldo(saldo, precos){
    saldo = saldo - precos.reduce((acumulador, item) => acumulador+ item, 0)
    return saldo
}

novoSaldo = atualizaSaldo(saldo, precos)

console.log(novoSaldo)


//Solução da Stephany