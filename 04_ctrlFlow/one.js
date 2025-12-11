// if(condition){
//    execution
// }
// else{
// execution
// }

const userLogged = true
const debitCard = false

if(userLogged && debitCard){
    console.log("Allow user to buy course");
}
else if(userLogged && !debitCard){
    console.log("Only allow to loggedin");
}
else{
    console.log("Not allowed")
}