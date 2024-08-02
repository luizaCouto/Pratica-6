function lanchonete(valor){
    let desconto = 0;

    if(valor > 200){
        desconto = valor/10;
        valor -= desconto;
        console.log("O valor total do pedido com desconto é de R$ "+valor);
        console.log("O desconto aplicado foi de R$ "+desconto);
    }
    else{
        console.log("O valor total do pedido é de R$ "+valor);
    }
}

let valor1 = 300;
lanchonete(valor1);

let valor2 = 150;
lanchonete(valor2);