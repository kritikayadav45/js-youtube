const score = 400
const balance = new Number(100);
console.log(balance);
console.log(balance.toString()); // convert into string

console.log(balance.toFixed(3)) // 100.000

const num1 = 23.8966
console.log(num1.toPrecision(5)); // rounf odd upto 5 places -> 23.897

//___________________________MATHS__________________________________

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(5.1));

console.log(Math.random());   // always between 0 and 1
console.log((Math.random()*10) +1);   // between 1 to 11

// to get number between 10 to 20 randomly 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *(max-min+1)) +min)
