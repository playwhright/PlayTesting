let x = 10;  // Global variable

function numb() {
    let y = 20;  // Local variable
    console.log(x);  // Local and global both we can use

}

numb();  //10

console.log(x);  // 10
console.log(y);  // Scope Error

//---------------------------------------

function outer() {
    let a = 30;

    function inner() {
        let b = 20; // value inside inner function (like local variable)
        console.log(a);
    }

    inner();
    console.log(b); //Scope Error

}