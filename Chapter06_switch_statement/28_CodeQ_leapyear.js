let year = 2100;

switch (true) {

    case ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)):
        console.log("Year is leap year")
        break;

    default:
        console.log("Year is not leap year");

    /* or
    case (year % 4 !== 0):
        console.log("Year is not leap year")
        break;*/
}

// ok but use else if