function podeDirigir(idade, carteira){
    if(idade>=18 && carteira == true){
        console.log("Você está apto(a) a dirigir.");
    }
    else{
        console.log("Você não está apto(a) a dirigir.");
    }
}

let idade1 = 20;
let carteira1 = true;
console.log("20 anos e possui carteira: ");
console.log(podeDirigir(idade1, carteira1));

let idade2 = 20;
let carteira2 = false;
console.log("20 anos e não possui carteira: ");
console.log(podeDirigir(idade2, carteira2));

let idade3 = 15;
let carteira3 = true;
console.log("15 anos e possui carteira: ");
console.log(podeDirigir(idade3, carteira3));

let idade4 = 15;
let carteira4 = false;
console.log("15 anos e não possui carteira: ");
console.log(podeDirigir(idade4, carteira4));