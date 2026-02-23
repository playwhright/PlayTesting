console.log(a);
var a = 10; // undefined

// 2nd example -

// Definition of function
function Statues_code() {
    console.log(aactive); // undefined but not shown to us (after run get it)
    var aactive = 20;
    console.log(aactive);// 20
}

// calling of function
Statues_code();


// 3rd example -

var a = 10;

if (true) {
    console.log("In a Block ", a); // It is not in block scope so it will print 10 (global variable)
    var a = 20;  // If it is with let then it will print error (TDZ)
    console.log("In a Block and changed value", a); // 20
}