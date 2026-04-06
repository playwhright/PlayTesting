function Status(code) {
    if (code >= 200 && code < 300) return "Sucess";
    if (code >= 400 && code < 500) return "Client side Error";
    if (code >= 500) return "Server side Error";
}

console.log(Status(200)); //Sucess
console.log(Status(505)); //Server side Error