let a = 10;
b = ++a //Pre Increament - First increase then assign
console.log(a); //11
console.log(b); //11

let c = 10;  // Very important
d = c++; //post increament - First assign to b (d) then increase in a (c)
console.log(c); // 11
console.log(d); // 10



let e = 10;
console.log(e++); // result = 10 but e becomes 11
console.log("value of e = " + e); // e = 11
console.log(++e); // 11 + 1 = 12 so e = 12
console.log("value of e = " + e); // e = 12
//console.log(e++ + ++e); Imp 22 -> (10 + 12)
//console.log(++e + e++);  //22