let a = [1, 2];
let b = [3, 4];

let c = a.concat(b, [4, 7]);
//let c = a.concat(b);
console.log(c);


// Spread new way of concat --------------

let d = [...a, ...b]; // new way of concatanation
console.log(d);


// join
let status1 = ["pass", "fail", "skip"].join(", "); // basically joins with character mentioned in join
console.log(status1);


