/*What is the output and why? How would you fix it?

javascript

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);*/



//IMP -
/*In JavaScript, there are two types of values:

Primitives (Numbers, Strings, Booleans): These are stored directly in the array. (shallow copy effect - OK)

Objects/Arrays: These are NOT stored in the array. Only a memory address (reference) is stored in the array.(no shallow copy effect*/

