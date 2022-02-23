let numbers = [9, 15, 24, 32, 70]

let result = 0

for(let number of numbers){

result = number + result
console.log ('A soma é ' + result)

}

console.log('Valor final da variável é: ' +result)

for(let number of numbers){

    result = result - number
    console.log ('A subtração por ' +number+ ' retorna '+result +'.')
       
    }