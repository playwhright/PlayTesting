let a = 10; //I

do {
    console.log(a);
    a++; //U
} while (a < 10); //C
//do_while will execute code atleast one time because condition is at last line
//it's IUC here



//--------------- below only while will not execute

let b = 10; //I
while (b > 11) { //C
    console.log(b);
    b++; //U
}
console.log(0 || 'hello');

