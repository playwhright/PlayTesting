let a = 10;
console.log(a++ + a); // 10 + 11

let b = 10;
console.log(b++ + ++b); // 10 + 12   (10, 11+1)
console.log(b); //12

let c = 10;
console.log(++c + ++c); //11 + 12 pre increament

// ------- Decrement

let d = 10;
let e = --d;
console.log(d) // 9
console.log(e); // 9

let f = 10;
let g = f--;
console.log(f); //9
console.log(g); //10