function maior(a, b){
    if(a>b){
        console.log("O número "+a+" é maior que o "+b+".");
    }
    else if(b>a){
        console.log("O número "+b+" é maior que o "+a+".");
    }
    else{
        console.log("Os dois números são iguais.");
    }
}

let a1 = 3;
let b1 = 7;
console.log(maior(a1, b1));

let a2 = 9;
let b2 = 4;
console.log(maior(a2, b2));

let a3 = 5;
let b3 = 5;
console.log(maior(a3, b3));