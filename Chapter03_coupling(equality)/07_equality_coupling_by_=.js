console.log(null == undefined); //  loose equality true
console.log(null === undefined); // strict equality false

console.log(null == "");// false
console.log(null == 0);// false
console.log(undefined == "");// false
console.log(undefined == 0);// false


console.log(5 == "5");// true
console.log(5 === "5");// false (num, string)
console.log(5 == 5.0);// true (bez both of numb)