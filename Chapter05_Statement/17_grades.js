let marks = 95;

if (marks >= 90) {
    console.log("A grade");
}
else if (marks < 90 && marks >= 80) { //use &&   - IMP // it is wrong - else if (80 < marks < 90) 
    console.log("B grade");
}
else if (marks < 80 && marks >= 70) {
    console.log("C grade");
}
else if (marks < 70 && marks >= 50) {
    console.log("D grade");
}
// we can run upto this also (without last condition also)

else { // don't use () for else

    console.log("Failed");
}

//-------------------------------------

let marks1 = 99;

if (marks1 >= 90) {
    console.log("A grade");
}
else if (marks1 >= 80) {
    console.log("B grade");
}
else if (marks1 >= 70) {
    console.log("C grade");
}
else if (marks1 >= 50) {
    console.log("D grade");
}
// we can run upto this also (without last condition also)

else { // don't use () for else

    console.log("Failed");
}