//We are never using this in Automation

let [a, b, c] = [10, 20, 30];
console.log(c);

//but 
let [d, e, ...f] = [10, 20, 30, 40, 50];
console.log(f); // 30, 40, 50 (all remaining)