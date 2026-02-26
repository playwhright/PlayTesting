let IsloggedIn = true;
let user = "viewer";

if (IsloggedIn) {
    if (user === "admin") {
        console.log(" You have all access ")
    }
    if (user === "viewer") {
        console.log("You have read only access")
    }
    if (user === "editor") {
        console.log("You have read and Write access ")
    }
}
else {

    console.log("user not logged in");
}


// Above is fine and also below one is good
//just used else if and else inside

let IsloggedInnn = true;
let user1 = "unknow";

if (IsloggedInnn) {
    if (user1 === "admin") {
        console.log(" You have all access ")
    }
    else if (user1 === "viewer") {
        console.log("You have read only access")
    }
    else if (user1 === "editor") {
        console.log("You have read and Write access ")
    }
    else {
        console.log("Not Idea about your role")
    }
}
else {

    console.log("user not logged in");
}