function tamanho(nome){
    if(nome.length > 20){
        console.log("O limite de caracteres foi excedido.");
    }
    else if(nome.length == 20){
        console.log("Voc~e atingiu o limite de caracteres.");
    }
    else{
        console.log("O limite de carateres ainda não foi excedido...");
    }
}

let nome1 = "luiza";
console.log("Menos de 20 caracteres.");
console.log(tamanho(nome1));

let nome2 = "luizaluizaluizaluiza";
console.log("20 caracteres.");
console.log(tamanho(nome2));

let nome3 = "luizaluizaluizaluizaluiza";
console.log("Mais de 20 caracteres.");
console.log(tamanho(nome3));