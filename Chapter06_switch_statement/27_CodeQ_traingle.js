let a = 10;
let b = 10;
let c = 10;

switch (true) { //We don't use it ideally but we can use if_else for this

    case (a === b && b === c):
        console.log("Equillateral Traingle");
        break;

    case (a === b || b === c || c === a):
        console.log("Isoscale Traingle");
        break;

    default:
        console.log("scalence Traingle");
}

//------------------------------- By using if else

let x = 10, y = 10, z = 17;

// Step 1: Validation (Senior Tester Approach)
if (x <= 0 || y <= 0 || z <= 0 || (x + y <= z) || (x + z <= y) || (y + z <= x)) {
    console.log("Invalid Triangle: Sides do not meet the geometric requirements.");
}
// Step 2: Logical Classification
else if (x === y && y === z) {
    console.log("Equilateral Triangle");
}
else if (x === y || y === z || x === z) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}