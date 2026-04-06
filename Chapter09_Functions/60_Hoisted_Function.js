
console.log(Greet("India"));  //Declaration - Hoisted work before declaration

function Greet(name) {
    return `Hello, ${name}`;
}


console.log(Greet1("India")); // Type Error = Greet1 is not a function
const Greet1 = function (name) {
    return `Hello, ${name}`;
}