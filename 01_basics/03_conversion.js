let score = "33" // string datatype

let valueInNumber = Number(score);
console.log(typeof(valueInNumber))

let id ="6ab";

let idInNumber = Number(id);
console.log(idInNumber);          // Nan
console.log(typeof(idInNumber))   // number datatype

// in case of NULL -> it will give 0 on conversion
// in case of undefined -> it will give NaN on conversion
// while converting into boolean 1-> true; 0-> false; empty -> false; string -> true