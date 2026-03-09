let score = 100;
let grade;

if (typeof score !== "number") {
    console.log("Please put numbers only"); // Edge cases and should be cover
    return; // very imp for edge cases, It will return 0 and stop further execution
}
if (score < 0 || score > 100) {
    console.log("Please put valid score only"); // Edge cases and should be cover
    return;
}

if (score >= 90) {
    grade = "A"
}
else if (score >= 80) {
    grade = "B"
}
else if (score >= 70) {
    grade = "C"
}
else if (score >= 60) {
    grade = "D"
}
else {
    grade = "F"
}
console.log("The score is = ", score + " so the grade is ", grade);