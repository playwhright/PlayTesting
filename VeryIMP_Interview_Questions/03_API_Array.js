/*Exercise 1 : API Response Validation

You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes

let responses = [200, 201, 404, 500, 404, 200, 503]; */

let responses = [200, 201, 404, 500, 404, 200, 503];


// Correct way to check if r is between 200 and 299
console.log(responses.every(r => r >= 200 && r < 300));

console.log("first failed response :", responses.find(s => 200 > s || s > 299)); // only first

let uniqueErrors = [...new Set(responses.filter(r => r < 200 || r >= 300))]; //set for unique
console.log("Unique Errors:", uniqueErrors); // [404, 500, 503]