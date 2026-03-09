let mixx = [1, "mix is possible", true]; // mixed types are possible in JS
console.log(mixx);

console.log(mixx.length); //3
console.log(mixx[0]);
console.log(mixx[4]); //undefined


let score = new Array(3); //empty array , A should be capital
let scores = new Array(1, 2, 2);
console.log(score);
console.log(scores);

let score2 = Array.of(12, 45, "of function of Array")
console.log(score2);

let chars = Array.from("Hello")// H e l l o    for strings
console.log(chars);