let arr = [1, 2, 3];

arr.push(7, 8, 10); // added 7, 8, 10 as new value in last
console.log(arr);

arr.pop(); // removed last one
console.log(arr);


//Add to begining
arr.unshift("start add");
console.log(arr);

arr.shift(); // remove first element
console.log(arr);



//[ 1, 2, 3, 7, 8 ]

arr.splice(2, 1); // Remove 1 element at index 2
console.log(arr);

arr.splice(2, 0, 99); // 0 means don't remove but add 99 at index 2
console.log(arr);

arr.splice(1, 2, "add", "me"); // replace index 1, add 2 elements ... replace
console.log(arr);