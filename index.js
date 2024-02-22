console.log('hello world!!!')
// var let const
let name = 'abdulrahman'
name ='tosin';
console.log(name);
//let yoy cannot redecleared but can reassigned variable
//var you can redecleared and reassigned variable
//const you cannot redecleared and cannot reasigned variable
var car = 'toyota'
var car = 'benz'
console.log(car);
const surname =  'davido'
console.log(surname);
var favourite_food = 'Amala';
console.log(favourite_food);
//create 3 variable and print a meaningful statement with the three variables
// var school = 'college'
// var principal = 'adeniyi'
// var friend = 'deji'
// console.log('my ' + school + principal);
//string interpolation

console.log(`my favorite food is ${surname} and my favourite food is ${favourite_food}`)

// String
// number it doesnt exit yet
//bigint
//boolean
//undefined
//null
//symbol
//object

var school = true;
console.log(school);

console.log(typeof(school));

//function way 1

function yo(){
    console.log('yo what uo');
}

//calling the function
yo()

//way 2 arrow function
const fan = () =>{
    console.log('fan is rolling');
}

//////
fan()

//write a function that square a Number
const square = (num) =>{
    return num**2
}


// mongodb password xHNPPsWiG363Ogcz
//mongodb+srv://atandaismailabidemi:xHNPPsWiG363Ogcz@cluster0.zthipzv.mongodb.net/?retryWrites=true&w=majority

console.log(square(5));

const addition = (a,b,c) =>{
    return (
'the anwser is :' + (a+b+c)
    )
}


console.log(addition(2,2,2));

//write a function to convert lower case to uppercase

const upper = (word) =>{
 return word.toUpperCase()
}

console.log(upper('daniel'));

var drink = 'coke';
