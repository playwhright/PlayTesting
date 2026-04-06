function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
console.log(add(...num)); // return so use console

//----------------------------

function hasErr(...codes) {
    return codes.some(c => c >= 400);
}

let Err = [200, 300, 400, 401]
console.log(hasErr(...Err));   // true