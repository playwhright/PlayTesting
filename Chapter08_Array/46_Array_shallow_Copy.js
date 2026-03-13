//shallow copy - Original doesn't change if we change copy one

let original = [1, 3, 5];

let copy1 = [...original]; // IMP - use this way of coping than other below methods
console.log(copy1); // only a copy

copy1.push(99);
console.log(copy1); // It will add 99 in copy1 but
console.log(original); // not in original

console.log("____________________________")

//----------- other ways to copy array
let copy2 = original.concat();
console.log(copy2); // concat without number so they print all from 0 index (copy full)

let copy3 = original.slice();
console.log(copy3);

let copy4 = Array.from(original);
console.log(copy4);


// Deep copy :  let copy = original (not shallow copy but direct copy and both change if you change any)