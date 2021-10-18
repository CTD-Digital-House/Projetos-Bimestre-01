var opcao = prompt("Digite a opção desejada:\n1 - Pipoca\n2 - Macarrão\n3 - Carne\n4 - Feijão\n5 - Brigadeiro");

if(opcao==1){
    function tempo(){
        let pergunta=prompt("O tempo padrão para pipoca é de 10 segundos.\nGostaria de alterar?\nDigite 1 para sim e 2 para não");
        if(pergunta==1){
            let tempoPrato=prompt("Digite quantos segundos você quer:");
            if(tempoPrato<10){
                alert('Tempo insuficiente, digite outro valor maior que 10 segundos');
                return tempo();
            }
            else if(tempoPrato>(10*2)&&tempoPrato<=(10*3)){
                alert('A comida queimou!');
            }
            else if(tempoPrato>(10*3)){
                alert('KABUUUM');
            }
            else{
                alert("Prato pronto, bom apetite!!!");
            }
        }
        else if(pergunta==2){
            alert("Prato pronto, bom apetite!!!");
        }
        else{
            alert("Opção inválida");
            return tempo();
        }        
    }
    tempo();
}

else if (opcao==2){
    function tempo(){
        let pergunta=prompt("O tempo padrão para macarrão é de 8 segundos.\nGostaria de alterar?\nDigite 1 para sim e 2 para não");
        if(pergunta==1){
            let tempoPrato=prompt("Digite quantos segundos você quer:");
            if(tempoPrato<8){
                alert('Tempo insuficiente, digite outro valor maior que 8 segundos');
                return tempo();
            }
            else if(tempoPrato>(8*2)&&tempoPrato<=(8*3)){
                alert('A comida queimou!');
            }
            else if(tempoPrato>(8*3)){
                alert('KABUUUM');
            }
            else{
                alert("Prato pronto, bom apetite!!!");
            }
        }
        else if(pergunta==2){
            alert("Prato pronto, bom apetite!!!");
        }
        else{
            alert("Opção inválida");
            return tempo();
        }        
    }
    tempo();
}

else if (opcao==3){
    function tempo(){
        let pergunta=prompt("O tempo padrão para carne é de 15 segundos.\nGostaria de alterar?\nDigite 1 para sim e 2 para não");
        if(pergunta==1){
            let tempoPrato=prompt("Digite quantos segundos você quer:");
            if(tempoPrato<15){
                alert('Tempo insuficiente, digite outro valor maior que 15 segundos');
                return tempo();
            }
            else if(tempoPrato>(15*2)&&tempoPrato<=(15*3)){
                alert('A comida queimou!');
            }
            else if(tempoPrato>(15*3)){
                alert('KABUUUM');
            }
            else{
                alert("Prato pronto, bom apetite!!!");
            }
        }
        else if(pergunta==2){
            alert("Prato pronto, bom apetite!!!");
        }
        else{
            alert("Opção inválida");
            return tempo();
        }        
    }
    tempo();
}

else if (opcao==4){
    function tempo(){
        let pergunta=prompt("O tempo padrão para feijão é de 12 segundos.\nGostaria de alterar?\nDigite 1 para sim e 2 para não");
        if(pergunta==1){
            let tempoPrato=prompt("Digite quantos segundos você quer:");
            if(tempoPrato<12){
                alert('Tempo insuficiente, digite outro valor maior que 12 segundos');
                return tempo();
            }
            else if(tempoPrato>(12*2)&&tempoPrato<=(12*3)){
                alert('A comida queimou!');
            }
            else if(tempoPrato>(12*3)){
                alert('KABUUUM');
            }
            else{
                alert("Prato pronto, bom apetite!!!");
            }
        }
        else if(pergunta==2){
            alert("Prato pronto, bom apetite!!!");
        }
        else{
            alert("Opção inválida");
            return tempo();
        }        
    }
    tempo();
}

else if (opcao==5){
    function tempo(){
        let pergunta=prompt("O tempo padrão para brigadeiro é de 8 segundos.\nGostaria de alterar?\nDigite 1 para sim e 2 para não");
        if(pergunta==1){
            let tempoPrato=prompt("Digite quantos segundos você quer:");
            if(tempoPrato<8){
                alert('Tempo insuficiente, digite outro valor maior que 8 segundos');
                return tempo();
            }
            else if(tempoPrato>(8*2)&&tempoPrato<=(8*3)){
                alert('A comida queimou!');
            }
            else if(tempoPrato>(8*3)){
                alert('KABUUUM');
            }
            else{
                alert("Prato pronto, bom apetite!!!");
            }
        }
        else if(pergunta==2){
            alert("Prato pronto, bom apetite!!!");
        }
        else{
            alert("Opção inválida");
            return tempo();
        }        
    }
    tempo();
}

else{
    alert("Prato inexistente");
}