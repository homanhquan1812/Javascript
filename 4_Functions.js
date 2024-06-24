// Có 3 cách viết function:
// 1. Expression Function:
var firstFunction = function() {
    console.log('This is the first function.')
}

firstFunction()

// 2. Declaration Function:
function secondFunction() { // Phổ biến
    console.log('This is the second function.')
}

secondFunction()

function Math(a, b) {
    return a + b;
}

var result = Math(1, 2)

console.log('1 + 2 =', result)

// 3. Arrow Function:
let thirdFunction = () => console.log('This is the third function.')

thirdFunction()

let Math2 = (a, b) => a * b

console.log('2 x 4 =', Math2(2, 4))