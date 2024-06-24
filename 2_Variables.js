// Đọc thêm về sự khác biệt giữa var, let và const.
// Var
var fullName = 'Ho Manh Quan'
var age = 23

var a = 10, b = 10
var c = a * b;

// Let
let d = c

// Const
const PI = 3.14

console.log('c = ' + c)

console.log('d = ' + d)

c = c + 2 // Hoặc c += 2

console.log('New c = ' + c)

console.log('Pi is ' + PI)

// Boolean
var isTrue = true

console.log(isTrue)

// Null
var isNull = null

console.log(isNull)

// NaN
var isNaN = NaN

console.log(isNaN)

// String (New way)
var firstName = 'Quan'
var middleName = 'Manh'
var lastName = 'Ho'

var age = 24;
var Pi = 3.1415932;

// toString đổi biến sang string
console.log(typeof(age.toString()))

// toFixed làm tròn số
console.log(Pi.toFixed(2))

console.log(`My name is ${lastName} ${middleName} ${firstName}.`)