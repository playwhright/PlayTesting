function makecounter(start = 0) {

    let count = start;

    /*function increment() {
        count++;
    }
    function decrement() {
        count--;
    }
    function getcount() {
        return count;
    }*/

    // simple and recomnded way to right in one line
    return {
        increment() { count++; },
        decrement() { count--; },
        getcount() { return count; }
    }
}

let counter = makecounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getcount());
counter.decrement();
console.log(counter.getcount());