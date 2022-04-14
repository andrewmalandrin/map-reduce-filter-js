//Minha solução


// Filtre e retorne os números pares de um array

a = [1,2,4,33,25,42,58,1234]

b = a.filter(item => item % 2 === 0)

console.log("Minha Resposta: " + b)


//Solução da instrutora

function filtraPares(a){
    return a.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

console.log("Resposta Instrutora: " + filtraPares(a));