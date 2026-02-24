0 == "" // true
0 == "0" //true
0 == false // true
null == undefined // true
"\t\n" == null // true


//Rule breakers (all are false)
null == 0 // false
null == false
null == ""
undefined == 0
undefined == false
undefined == ""  // false
NaN == NaN // false

"" == 0 // false


"" == false // true
"" === false // false (date type matching)
