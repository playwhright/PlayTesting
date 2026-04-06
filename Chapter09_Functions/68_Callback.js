//Callback is a function passed as argument in another function to be called later


function runtest(runname, callback) {
    let result = "pass";

    callback(runname, result);
}
function OnComplete(name, result) {
    console.log(`${name} finished with ${result}`)
}

runtest("logintest", OnComplete);