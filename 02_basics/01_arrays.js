const myArr = [0,1,0,5,9,6]
const myHeros = ["shaktiman","batman", "spiderman"]
console.log(myArr[0]);
console.log(myArr[4]);

// IN javascript arrays make shallow copy ->
// share same refernece points -> also changed in original copy
// read mdn docs

// Array methods
myArr.push(6);   // add values to the last
myArr.pop();     // remove last elements
myArr.unshift(9) // add values at the start, not used generally
myArr.shift();   //remove 1st element

const newArr = myArr.join(); // convert into string -> 0 1 0 5 9 6

// slice and splice

const myn1 = myArr.slice(1,3)  // start from index 1 to index n-1 = [1,2]
const myn1 = myArr.splice(1,3) // start from index 1 to n but main difference is 
// splice remove those elements from original array
// for example :
// given array = [0,1 , 2, 3, 4]
// slice(1,3) -> [1,2]
// splice(1,3) -> [1,2,3] but original arrya become [0,4]
