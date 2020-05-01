// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create a function that takes in a temperature
const boilingPoint = (temp) =>{
    // create an if statement for the temperature being exactly 212 and return "___ is at boiling point"
    if(temp === 212){
        return `${temp} is at boiling point`
    } 
    // create an else if statement for the temperature above 212 and return "___ is above boiling point"
    else if (temp > 212){
        return `${temp} is above boiling point`
    } 
    // create an if statement for the temperature below 212 and return "___ is below boiling point"
    else if (temp < 212){
        return `${temp} is at boiling point`
    // create an else statement that returns error
    } else {return error}
}
console.log (boilingPoint(temp1))
console.log (boilingPoint(temp2))
console.log (boilingPoint(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// create a function that takes an array as an argument
const multBy5WithLoop = (array) => {
    //create a new array for the modified values to get pushed to
    let newArray = []
    // create a for loop that cycles through the array
    for (let i = 0; i < array.length; i++){
        // multiply the arrays values by 5 and push to the new array
        newArray.push(array[i] * 5)
    }
    // return the new array
    return newArray
}
console.log(multBy5WithLoop(myNumbers1))




// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// create a function that takes in an array
const multByFiveWithMap = (array) => {
    //multiply the value in the array by 10 using .map and return the value
    return array.map(value => value * 5)
}

console.log (multByFiveWithMap(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//create a function that takes in a string
const disemvowel = (string) => {
//create an array of vowels we want to remove -- called vowelArray
    var vowelArray = ["a", "e", "i", "o", "u"]
    //return the string split into an array using .split 
    return string.split("")
    //keep anything NOT in vowelArray using .filter
    // be sure to use .toLowerCase to ensure any capital letters are also caught
    .filter(value => !vowelArray.includes(value.toLowerCase()))
    //join the array back into a string using .join
    .join("")

}

console.log(disemvowel(stringWithVowels1))
console.log(disemvowel(stringWithVowels2))


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const disemvowel2 = (input) => {
    //create an array of vowels we want to remove -- called vowelArray
        var vowelArray = ["a", "e", "i", "o", "u"]
        //create an if statement that uses the typeof operator to ONLY work on strings
        if(typeof input === "string"){
            //return the string split into an array using .split 
            return input.split("")
            //keep anything NOT in vowelArray using .filter
            // be sure to use .toLowerCase to ensure any capital letters are also caught
            .filter(value => !vowelArray.includes(value.toLowerCase()))
            //join the array back into a string using .join
            .join("")
        // create the else statement to show a string was not entered
        } else {
            return "You did not enter a string. You're doing it wrong."
        }
    }
console.log(disemvowel2(stringWithVowels1))
console.log(disemvowel2(stringWithVowels2))
console.log(disemvowel2(notAString1))
console.log(disemvowel2(notAString2))

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ 
    {name: "Itchy", animal: "mouse"}, 
    {name: "Stimpy", animal: "cat"}, 
    {name: "Daffy", animal: "duck"}, 
    {name: "Scratchy", animal: "cat"}, 
    {name: "Ren", animal: "dog"}, 
    {name: "Felix", animal: "cat"}]

// create a function that takes an array 
    const onlyCats = (array) =>{
    // filter the array based on the value of animal: equalling cat  and return it
    return array.filter(value => value.animal === "cat")
}
    console.log(onlyCats(toonimals))




// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// create a function that takes an array 
const notCats = (array) =>{
    // filter the array based on the value of animal: NOR equalling cat  and return it
    return array.filter(value => value.animal !== "cat")
}
    console.log(notCats(toonimals))