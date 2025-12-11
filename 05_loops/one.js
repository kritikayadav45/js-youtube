for(let i = 0; i<=15; i++){
    console.log(i);
}

// break -> out from loops
// continue -> skip taht one 

let i = 0;
while(i<=4){
    console.log("Hello")
    i++;
}

const arr = [1,2,3, 4,5]

for(const num of arr){
    console.log(num);
}

//if we use "of" it will give direct values 
//if we use "in" it will give key or indexes

//.......................MAPS...............................
const map = new Map()
map.set('IN','INDIA')
map.set('FA', 'FRANCE')

console.log(map)

for(const  [i,j] of map){
    console.log(i);
    console.log(j);
}


//.......................FOR EACH for array of objects.......................





const myCode = [
    {
        langN : "javascript",
        langF : "js",

    },

    {
        langN : "java",
        langF : "java",
    },

    {
        langN : "python",
        langF : "py",
    },
]

myCode.forEach( (item) => {
    console.log(item.langN);
})


//......................Filter methods.....................................................

const arr1 = [1, 2, 3, 4]

const newa = arr1.filter( (num) => num>2)
console.log(newa);
