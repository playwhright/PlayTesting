if ("abc") console.log("String is truthy"); // string is truthy
if (2) console.log("number is truthy");
if ({}) console.log("Empty object is truthy");
if ([]) console.log("Empty array is truthy");



//false

if (0) console.log(" 0 is false"); // will not give you answer
if (NaN) console.log(" NaN is false"); // will not give you answer
if ("") console.log(" won't prinnt - false"); // will not give you answer
if (undefined) console.log(" Undefined is false"); // will not give you answer
if (null) console.log(" null is false"); // will not give you answer

