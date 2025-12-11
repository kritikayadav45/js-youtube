const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = " kritika"

// console.log(tinderUser);

const regUser ={

     email :"Kritika@gmail.com",
     fullname :{                       // object under obejects
        userfullname :{
            firstname : "kritika",
            lastname : "yadav",
        }
     }



}

console.log(regUser.fullname.userfullname.lastname);

//.........................................................................

const obj1 = { 
    1 : "a",
    2 : "b",
}
const obj2 = {
    2 : "a",
    4 : "b",
}

// const obj3 = { obj1, obj2}   // object under object not combine

const obj3 = Object.assign(obj1, obj2);   // combined both and obj2 will add to obj 1 so obj1 changes
const obj4 = Object.assign({}, obj1, obj2);  // combined both and obj1 and obj2 will not cahnge individually
const obj5 = {...obj1, ...obj2};     // also combined both objects


//.............................DESTRUCTING OBJECTS.............................................


const user = {
  name : "Kritika",
  age :" 20",
  course :" CS",
}

// instaed of doing this repetitive atsk :

// const name = user.name;
// const age = user.age;

// we can do :

const {name,age} =user;

// also we can rename variables

const {name : userName, age : userAge} = user;
console.log(userName);
console.log(userAge);


