function maxretry(max) {

    let attempt = 0;

    function retryAgain(TestName) {
        attempt++;
        if (attempt > max) {
            return (`testname ${TestName}, exceed max retry (${max})`);

        }
        return `attempt ${attempt}/${max} for test ${TestName}`;
    }
    return retryAgain;
}

let retry = maxretry(3);
console.log(retry("Login")); //1st attempt
console.log(retry("Login")); //2nd attempt
console.log(retry("Login")); //3rd attempt
console.log(retry("Login")); //4th attempt