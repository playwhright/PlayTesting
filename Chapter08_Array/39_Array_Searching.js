let result = ["pass", "fail", "pass", "skip"];

console.log(result.indexOf("pass")); // 1st Pass index - 0
console.log(result.indexOf("skip")); // 3
console.log(result.lastIndexOf("pass")); //2 last passname index 
console.log(result.lastIndexOf("Error")); //-1 as Error is not in list
console.log(result.includes("pass")); //True
console.log(result.includes("Error")); //False


//----------------

//It will retirn 1st matching number
let numb = [20, 23, 20, 27, 30];
console.log(numb.find(x => x > 20)); // 1st number which maching x>20
console.log(numb.findLast(x => x < 25)); // Last number which maching and x<25 ... 20 (20, 23, 23)
console.log(numb.findIndex(x => x > 20)); // 1st number index which maching x>20 ... 1


