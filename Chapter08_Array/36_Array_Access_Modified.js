let statuses = ["Pass", "failed", "skip"];

console.log(statuses.at(-1));//last element
console.log(statuses.at(-2));// second last element

statuses[1] = "Changed"; // modify
console.log(statuses);

