// API between 200 and 300 should give OK

function RequestMsg(code) {
    if (code >= 200 && code < 300)
        return "API is OK";

}
console.log(RequestMsg(200));

//------------------------------------
const RequestMsg_Exp = function (code) { //In expression type you should write function
    if (code >= 200 && code < 300)
        return "API is OK";
}
console.log(RequestMsg(200));

//-------------------------------------

const RequestMsg_Arrow = (code) => { //In Arrow type no function required
    if (code >= 200 && code < 300)
        return "API is OK";
}
console.log(RequestMsg(200));