const user = {
    name : "Kritika",
    age : 20,

    welcomeMsg :function(){
        console.log(`${this.name}, Welcome`)
    }

}
user.welcomeMsg()

//.................ARROW FUNCTIONS....................

// instead of writing this :

function add(a, b) {
  return a + b;
}

// write this :
const add = (a, b) => a + b;

// another examples
const greet = (name) => {
  return "Hello " + name;
};
