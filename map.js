//Minha solução


//Com o parâmetro this
const a = [1,2,3]
const dArg = {
    value: 150,
}
const oArg = {
    value: 200,
}

function mapFunc(a, tArg){
    return a.map(function(item) {
        return item * this.value 
    }, tArg)
    
}

const g = mapFunc(a, dArg)
const h = mapFunc(a, oArg)

console.log("Deafult: " + g)
console.log("Optional: " + h)

//Sem o parâmetro this

const c = a.map((item) => item / 2)

console.log("Sem o this: "+ c)
