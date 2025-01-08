
// Basics of Console Logging to Browser Console
console.log("Meowdy Partner")
console.log(10+5)

console.error("Oh no a problem has occured")

// Math with a variable
x = 10 // Assigning value of 10 to x

console.log(x - 5) //5
console.log(x + 4) //14
console.log((x+1) % 2) //1 //Modulo - looks at closest possible divisible number as a whole number and finds the remainder 
console.log((x+4) % 5) //4

// FizzBizz Coding Challenge -- pretty common coding interview question for beginners

// Operators
console.log(x++) // console.log(x) -- prints x, after the execution of line 19 +1 to value of x 10
console.log(++x) // x = 11, +1 to the value of x, print with console.log(x) 12
console.log(x--) // x = 12, console.log(x) -- prints x, after the execution of line 20 -1 to value of x
console.log(--x) // x = 11, +1 to the value of x, print with console.log(x)
console.log(x*2)

// Chaos of JavaScript
console.log(x + "10") //1010, the + symbol can also be used with string concatenation
console.log(x - "10") //0, due to TYPE COERCION this is ARITHMETIC because of the subtraction

// Conditionals with Type Coercion
// conditionals return boolean values -- either true or false
console.log(x == 10) // true
console.log(x == "10") // true -- due to the fact that '==' is converting the 10 from a string to number
// === triple equals evaluates the VALUE & data type
console.log(x === "10")

zWeb = "20"
zLocal = 30

string = ""

console.log(typeof(zWeb))
console.log(string) // reference error without line 47, but with line 47 still same, because JS is interpreted LINE-BY-LINE it is read

if(typeof(zWeb) === "string"){
    console.log("It's a string")
    zWeb = zWeb * 1
}

console.log(typeof(zWeb))

// Datatypes - Primitives
fname = "Charles" // string
isTrainer = true // boolean (true/false)
hasABigBRain = null // null is unique in the fact it's SPECIFICALLY assigned, meaning only occurs when you give the value it's never a default
mind = undefined // undefined is the default given to any variable
x2 = 40.4 // number, can be both a whole integer or decimal value

// Basics of Data Structures
// an array can have any datatype or data strucutre contained withiin
array = [fname, isTrainer, hasABigBRain, mind, x2, [[1,2],[3,4]]]

console.log(array)

// We can access the elements of an array via the index
console.log(array[1]) // isTrainer

// Objects contain key-value pairs
trainer = {
    fname: fname, // shadowing
    isTrainer: isTrainer,
    hasABigBRain: hasABigBRain,
    mind: mind,
    x2: 13.3,
    arrayOfArray: [[1,2],[3,4]],
    // true: "Hi"
}

dog = {
    dname: "Freya",
    breed: "bernese mountain dog",
    age: 1.1
}

// objects values can be accessed using dot notation or bracket notation
console.log(trainer.fname, dog.dname, trainer["isTrainer"]) // why is it "isTrainer" not isTrainer in the brackets? string refers to the property/key of the object, whereas isTrainer

// cat has been hoisted and is undefined -- general rule of thumb is ALWAYS defined all VARIABLES are the top of your documebnt or within the scrope
console.log(cat)

var cat;

if(true){
    var bird;
    bird="parrot"
    console.log(bird)
}

console.log(bird)
// let or const -- ECMAScript6 

const bird2 = "tucan"; // const is a final value that MUST be initialized
// console.log(bird3) // cannot be hoisted due to let so will print out an ReferenceError
let bird3;
console.log(bird3)
bird3 = "kiwi"
console.log(bird3)

console.log(add(2,2))

// functions can be hoisted, ECMAScript6 added a new way to define functions with let
function add(x,y){
    let multi = 2 // Purely restricted var to functional scopes
    return x+y
}

// console.log(add2(1,2,3))

//helps prevent hoisting of functions using let
let add2 = function(x,y,z) {
    return x + y + z
}

console.log(add2(1,2,3))

// using Arrow Notation to define functions
let add3 = (a,b,c) => {
    return a + b +c
}

console.log(add3(1,2,3))

// console.log(multi)

//

