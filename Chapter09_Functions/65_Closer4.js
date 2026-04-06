function makeratelimiter(limit) {

    let call = 0;

    function check() {
        call++;
        return call <= limit;   // will return true untill it follows condition
    }
    return check;
}

let limit = makeratelimiter(3);
console.log(limit()); //True
console.log(limit()); //True
console.log(limit()); //True
console.log(limit()); //false