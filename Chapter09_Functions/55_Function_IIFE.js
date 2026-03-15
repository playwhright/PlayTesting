//IIFE - Immediately Invoked Function Expression

//Normal function
function Greet() {
    console.log("Hi");

}
Greet();  // calling required


//-------------------------------IIFE - Immediately Invoked Function Expression

(function () {                 // name is not required
    console.log("Hi");
})();                          //Add brackets and () both --- no calling required



//same with arrow (arrow remove finction keyword also)

(() => {
    console.log("Hi");
})();