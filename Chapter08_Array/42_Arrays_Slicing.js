let arr = ["Hi", "I", "am", "here"];

console.log(arr.slice(1, 3));  // It will print value for index 1 and index (3-1)...1 ,2 and not 3

console.log(arr.slice(-2)); //It will give you till -2 index value -1 and -2

console.log(arr.slice(1)); // from index 1 to end it will take if we not mention end





let arr1 = [2, 3, 4, 2, 1, 1];

console.log(arr1.slice(0, 2)); //directly give

//but we want smallest so use sort
// Create a copy to avoid mutating the original array
const sortedarr1 = [...arr1].sort();
const firstTwo = sortedarr1.slice(0, 2);

console.log(firstTwo); // This will give you 2 values but not unique



const sortuniquarr1 = [...new Set(arr1)].sort(); // Unique values...Set is used for unique
const firstTwoUnique = sortuniquarr1.slice(0, 2);

console.log(firstTwoUnique);
