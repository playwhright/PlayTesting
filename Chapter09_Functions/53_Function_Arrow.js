const greet = function (name1) {

    return `Hello, ${name1}`;
}
console.log(greet("India"));


//same if you want to write in arrow function then
//Generally works whenever we have single condition/line 
//if you have multiple conditions then check below example
const greet2 = (name2) => `Hello, ${name2}`
console.log(greet("India1"));


const DoubleIt = d => d * 2;
console.log(DoubleIt(5));



//suppose we have multiple conditions - use curly bracket
const Status = (score) => {
    if (score > 40) return "pass";
    return "Fail";
}

console.log(Status(90));