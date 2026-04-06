function outer() {
    let a = 10;
    console.log("Outer Function")

    function inner() {
        let b = 20;
        console.log(a);
    }

    return inner;
}
//outer();  is fine to user for outer
//inner();  is not allowed

let fn_inner = outer();   // We should use outer()  and not inner () even inner is returned (stored full function)
fn_inner();

//IMP - You will get 2 results 1. for outer() in line 15 and 2nd 10 for line 16