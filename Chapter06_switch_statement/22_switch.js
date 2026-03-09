let status1 = 404;

switch (status1) {

    case 200:  // here 200 is value (number, string, etc. but value)
        console.log("Staus OK")
        break; // break is important to break at this position if you get result here

    case 201:
        console.log("Staus OK and created")
        break;

    case 404:
        console.log("Page not found")
        break;

    default:
        console.log("Any other status code")
}