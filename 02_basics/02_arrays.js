const arr1 = [1,2,3,4];
const arr2 = ["a","b","c","d"]

arr1.push(arr2); // it will take arr2 inside arr1 instead of joining
arr1.concat(arr2); // same thing

const newarr = arr1.concat(arr2);  // it will merge both the arrays and return new array
const newarr1 = [...arr1, ...arr2, ...arr3]; // merge both the arrays

console.log(Array.from("Kritika")) // return arrays of words of "Kritika"
// also can use "of"