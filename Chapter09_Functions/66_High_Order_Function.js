//Function as a parameter i.e. testfn   below
function runwithLogin(testfn, testname) {
    console.log(`Starting: ${testname}`);
    let result = testfn();                       // function stored
    console.log(`Finished: ${testname} -> ${result}`);
    return result;
}
function LoginTest() {
    return "Pass";
}

function LoginTestFailed() {
    return "Fail";
}

runwithLogin(LoginTest, "login test");      // calling = here testname = Login test
runwithLogin(LoginTestFailed, "Failed test"); //calling = here testname = Failed test