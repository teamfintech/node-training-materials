


function * counter() {
    let i = 0;
    while (true) {
        i++;
        yield i;
    }
}


const counterGen = counter();

console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);