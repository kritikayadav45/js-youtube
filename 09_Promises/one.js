const promiseOne = new Promise(function(resolve, reject){

    // Do an Async Task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is compelted');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


//....................................................................


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task2 is compelted');
        resolve();
    }, 1000)
}) .then(function(){
    console.log("Async2 is resolved");
})


//.......................................................................


const promise3 = new Promise(function(resolve,reject){

    setTimeout(function(){
    resolve({username : "Chai", email :"chai@example.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


//..............................................................................


const promise4 = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false;
if(!error){
    resolve({username : "Chai", email :"chai@example.com"})
}
else{
    reject('ERROR : Something went wrong')
}
    }, 2000)
})


promise4
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() =>
console.log("The promise is either resolved or rejected"));


//...................................................................................


const promise5 = new Promise(function(resolve, reject){

setTimeout(function(){
        let error = false;
if(!error){
    resolve({username : "javascript", password :"1234"})
}
else{
    reject('ERROR : Js went wrong')
}
    }, 1000)


})

async function consumePromise5(){

    try{
const response = await promise5 
    console.log(response);
    }
    catch(error){
        console.log(error);
    }

}

consumePromise5();