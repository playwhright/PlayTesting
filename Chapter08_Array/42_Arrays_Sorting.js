let fruites = ["Apple", "Lemon", "Banana"]
console.log(fruites.sort()); // use function ()

// Very IMP - Whenever you get [Function: sort] in output --- add () function in input


let num = [1, 3, 12, 13, 20];
console.log(num.sort()); // It sorted by comparing 1st number only (compare no as string)

console.log(num.sort((a, b) => a - b)); // It will sort numbers correctly in assending
console.log(num.sort((a, b) => b - a)); // It will sort numbers correctly in desending
