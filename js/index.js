// Iteration 1: Names and Input

const hackerOne = 'Irene'
let print = `The driver's name is ${hackerOne}`
console.log(print);

const hackerTwo = 'Meritxell'
let printTwo = `The navigator's name is ${hackerTwo}`
console.log(printTwo);

// Iteration 2: Conditionals

const hackerOneLength = hackerOne.length
const hackerTwoLength = hackerTwo.length

let result = ''

if (hackerOneLength > hackerTwoLength){
    result = `The driver has the longest name, it has ${hackerOneLength} characters.`
    }
    else if (hackerOneLength < hackerTwoLength){
    result = `It seems that the navigator has the longest name, it has ${hackerTwoLength} characters`
    }
    else {
    result = `Wow, you both have equally long names, ${hackerOneLength} characters!`
    }

    console.log(result);


// Iteration 3: Loops

let result = hackerOne.split('').join(' ');
console.log(result);

let nameArray = hackerOne.split('');
let nameInReverse = nameArray.reverse().join('');
console.log(nameInReverse);

let hackersInArray = ['Meritxell', 'Irene'];
hackersInArray.sort(function (a,b){
    if (a > b){
        console.log("The driver's name goes first")
    }
    if (a < b){
        console.log("Yo, the navigator's name goes first definitely.")
    }
    else{
        console.log("What? You both have the same name?")
    }
});
