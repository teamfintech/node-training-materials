

function fibonacci(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciDP(n) {
    let num1 = 0;
    let num2 = 1;
    if (n == 0) return num1;
    if (n == 1) return num2;
    for (let i = 2; i <= n; i++) {
        let temp = num2;
        num2 = num2 + num1;
        num1 = temp;
    }
    return num2;
}


console.log(fibonacci(25))
console.log(fibonacciDP(25))

