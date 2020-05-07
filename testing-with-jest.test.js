// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.


describe ("addThemUp", () => {
    test ("returns the sum of two input numbers",() => {
        expect (addThemUp(1,2)).toEqual(3)
        expect (addThemUp(4,9)).toEqual(13)
    })
})


// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
    return num1+num2
}

addThemUp(1,2)
addThemUp(4,9)



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.


describe ("triangleArea", () => {
    test ("returns the area of the triangle, with base*height/2",() => {
        expect (triangleArea(3,4)).toEqual(6)
        expect (triangleArea(5,8)).toEqual(20)
    })
})


// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (base, height) => {
    let multiply = base*height
    return multiply/2
}
triangleArea(3,4)
triangleArea(5,8)
