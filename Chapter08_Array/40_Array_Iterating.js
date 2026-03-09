//Iterate - to go from one to another

let test = [1, 2, 3]

for (i = 0; i < test.length; i++) { //ICU
    console.log(test[i]);
}


console.log("--------------")

for (let tes of test) { //same as java but "of" used instead ":""
    console.log(tes);
}

console.log("--------------")

for (let test1 in test) { //in for indeces

    console.log(test1, ":", test[test1]); //"of" gives you value "in" gives indeces
}

console.log("--------------")

//for each
test.forEach((test, index) => {  //It will print value and index
    console.log(`${test}: ${index}`) // or console.log(`${index}: ${test}`) ... `` template literal
})

console.log("--------------")

// new
for (let [i, value] of test.entries()) { //When you write let [i, value] you are telling JavaScript to
    // create a new local variable named value for each iteration.

    console.log(i, value);
}

