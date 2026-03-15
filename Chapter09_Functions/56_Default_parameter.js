function retry(testname, maxretry = 3, delay = 1000) {
    console.log(`testname is ${testname} maxtry ${maxretry} for delay ${delay}`);
}

retry(); // testname is undefined maxtry 3 for delay 1000
retry("login"); // testname is login maxtry 3 for delay 1000
retry("login", 5); //testname is login maxtry 5 for delay 1000
retry("login", 6, 2000); //testname is login maxtry 6 for delay 2000