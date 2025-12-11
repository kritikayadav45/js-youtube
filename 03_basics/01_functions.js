function add(num1, num2){
console.log(num1+num2)
}

add(4,"4"); // 44
add(3 +"a");// 3a

//...................... we can also return value......................

function login(username){

    if(!username){
        console.log("Please enter user name");
        return;
    }

return `${username} just logged in`
}

const msg = login("Kritika");
console.log(msg);
console.log(login());

//..........................Function with objects..........................


function calPrice(...num1){
    return num1
}
console.log(calPrice(200,300,400)) // it will return arrya of this numbers

//.........................Objects................................


const user = {
    name : "Kritika",
    age :20,
}

function handleObject(anyObject){
    return `Username is ${anyObject.name} and age is ${anyObject.age}`
}

console.log(handleObject(user));
