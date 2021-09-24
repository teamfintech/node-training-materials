

interface IStack<T> {
    arr: T[];
    push(item: T): void;
    pop(): T;
    peek(): T;
    search(item: T): boolean;
}

class Stack<T> implements IStack<T> {
    arr: T[] = [];

    push(item: T) {
        this.arr.push(item);
    }

    pop(): T {
        return this.arr.pop();
    }

    peek(): T {
        return this.arr[this.arr.length - 1];
    }

    search(item: T): boolean {
        return this.arr.indexOf(item) === -1 ? false : true
    }

    length(): number {
        return this.arr.length;
    }
}


// test
const stack: Stack<string> = new Stack();

stack.push("10"); stack.push("20"); stack.push("30");

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.search("100"))
console.log(stack.length())