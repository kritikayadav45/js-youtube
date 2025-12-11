const month = 2;

switch(month){
 case 1:
    console.log("January");
    break;

case 2:
    console.log("February");
    // break;

case 3:
    console.log("March");
    break;

  default:
    break;
}

// if we dont apply break then after that all will be implemented except default

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// how to manage null and undefiend values

let val1;
// val1 = 5 ?? 10          // give 5
// val1 = null ?? 10       // give 10
// val2 = undefined ?? 15  // give 15

// terniary operator
// condition ? true : false

