function percent(pass, total) {
    return ((pass / total) * 100).toFixed(2);  // tofixed for decimals
}

console.log(percent(2, 3));    //not depend on external variable (nothing new, just a name pure)
console.log(percent(9.9, 10));