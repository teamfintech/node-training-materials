

function primeFactorize(num) {
    const factors = [];
    // check how many times divides by 2
    while (num % 2 == 0) {
        factors.push(2);
        num /= 2;
    }

    // check from 3 number divides or not
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while(num % i == 0) {
            factors.push(i);
            num /= i;
        }
    }

    // if num is still greater than 2 its a primes
    if(num > 2) factors.push(num);

    return factors;
}

module.exports = primeFactorize;