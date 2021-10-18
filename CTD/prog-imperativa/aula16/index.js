
// Aula 16 - Arrow function, Callback e Javadoc

/**
 * 
 * @param {number[]} idade Idade informada
 * @returns 
 */
function temIdadeParaBeber (idade){
    var idadeMinima = 18
    return idade >= idadeMinima;
}

var temIdadeParaBeber =  function (idade){
    var idadeMinima = 18
    return idade >= idadeMinima;
}

// Arrow function são anonimas

var temIdadeParaBeber = idade => idade >= 18;
    temIdadeParaBeber (18); //true


