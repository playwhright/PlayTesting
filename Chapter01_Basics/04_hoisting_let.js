let a = 10;

if (true) {
    console.log(a);             //Local variable TDZ (Temporal Dead Zone)
    let a = 20;  // If we comment it out then it will print 10 (global variable)
}