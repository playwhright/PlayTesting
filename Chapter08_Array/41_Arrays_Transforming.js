let score = [50, 70, 75, 80, 90];

let grades = score.map(s => s > 75 ? "pass" : "Fail") //map score to grades => is IMP

console.log(grades); // .map - this manipulate array


/*In JavaScript, the => symbol is called an Arrow Function (sometimes referred to as a "fat arrow"). It was introduced in ES6 to provide a shorter, cleaner way to write functions.

Think of it as a literal arrow: it takes the input on the left and points it toward the logic/result on the right.

Breakdown of the Syntax
In your specific code: s => s > 75 ? "pass" : "Fail"

s: This is the parameter (an individual score from your array).

=>: This tells JavaScript, "Take the input s and do the following with it."

s > 75 ? "pass" : "Fail": This is the function body. Because it’s on one line, the result is automatically returned.*/

let passing = score.filter(s => s > 75)
console.log(passing);  // It will filter values - [80, 90]


let total = score.reduce((sum, s) => sum + s, 0); // reduce values to single value
console.log(total); // 365






let nested = [[1, 2], [3, 2], [4, 5]];
console.log(nested.flat()); // never used in Automation