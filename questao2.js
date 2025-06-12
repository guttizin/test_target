function ehFibonacci(n) {
    if (n < 0) return console.log(`O número ${n} NÃO pertence à sequência de Fibonacci.`);
    let a = 0, b = 1;
    while (b < n) {
        var temp = b;
        b = a + b;
        a = temp;
    }

    if(n === b || n === 0){
        return console.log(`O número ${n} pertence à sequência de Fibonacci.`);
    }else{
        return console.log(`O número ${n} NÃO pertence à sequência de Fibonacci.`);
    }
}

ehFibonacci(34);
