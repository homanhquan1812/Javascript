import Course3 from "./Test Module";

// EMCAScript 6 (ES6): Là một tập hợp các kỹ thuật nâng cao của Javascript.
// Các điểm nổi bật ở ES6:

// 1. Block scope
/*
 * Trước tiên, ta cần hiểu về Scope (Phạm vi).
 * Scope là phạm vi của một biến được khai báo mà ta có thể truy cập được. Scope có 3 loại:
 * a. Global scope: Biến được khai báo trong phạm vi này có thể truy cập từ bất kỳ đâu trong chương trình.
 * b. Function scope: Biến được khai báo trong một hàm (hoặc block) chỉ có thể truy cập được từ bên trong hàm (hoặc block) đó.
 * c. Block scope (Ra đời ở ES6): Sử dụng các từ khóa "let" và "const" để khai báo biến trong phạm vi của một block, 
 * thường là nằm trong cặp {} của một câu lệnh điều kiện (if), vòng lặp (for), hoặc một block khác.
*/

// Ví dụ về Global scope
var globalVar = 'global';

function globalScope() {
    console.log(globalVar);
}

globalScope();

console.log(globalVar);

// Ví dụ về Function scope
function functionScope() {
    var functionVar = 'function'; // Function scope

    console.log(functionVar);
}

functionScope()

// Ví dụ về Block scope
function functionBlock() {
    if (true) {
        var varVar = 'var'
        let blockVar = 'block';
        const constVar = 'constant';
        console.log(blockVar);
        console.log(constVar);
    }
    console.log(varVar);
    console.log(blockVar); // Error
    console.log(constVar); // Error
}

functionBlock();


// 2. Let, Const
/*
 * Ta cần phân biệt sự khác nhau giữa var, let và const:
 * a. Var: Có phạm vi hàm - Function scope, biến có thể được truy cập ở bất cứ đâu trong hàm.
 * b. Let: Có phạm vi khối - Block scope, biến sẽ không tồn tại ngoài khối {}.
 * c. Const: Cũng như "let", nhưng "const" thường được dùng để gán các giá trị không đổi.
 * 
*/

// Ví dụ về Var:
function varExample() {
    var a = 10
    console.log(a)

    if (true) {
        console.log(a)
    }
}

varExample()

// Ví dụ về Let:
function letExample() {
    if (true) {
        let a = 20
        console.log(a)
    }

    console.log(a) // Undefined
}

letExample()

// Ví dụ về Const:
function constExample() {
    if (true) {
        const a = 30
        console.log(a)

        a = 40
        console.log(a) // Error
    }

    console.log(a) // Undefined
}

constExample()

// Lời khuyên: Trước ES6, vì "var" có những phiền phức khi sử dụng, nên ta thường dùng "let" hoặc "code nhiều hơn" trong Javascript,
// trừ khi ta phải làm việc với các phiên bản Javascript rất cũ.

// 3. Arrow Function (Đã học ở bài 4_Functions.js)
const sum = (a, b) =>  a + b

console.log(sum(1, 2))


// 4. Constructor trong Class
// Cách truyền thống:
function Course1(name, price) {
    this.name = name
    this.price = price

    this.getName = () => {
        return this.name
    }

    this.getPrice = () => {
        return this.price
    }
}

const course1 = new Course1("PHP", 50000)

console.log(course1)
console.log(course1.getName())
console.log(course1.getPrice())

// Cách dùng Class có Constructor (Thường gặp trong NodeJS)
class Course2 {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }
}

const course2 = new Course2("Java", 60000)

console.log(course2)
console.log(course2.getName())
console.log(course2.getPrice())


// 5. Object
var name1 = 'Javascript'
var name2 = 'C#'

var fullCourse1 = { // Cách truyền thống
    name1: name1,
    name2: name2,
}

console.log(fullCourse1)

var fullCourse2 = { // Cách mới
    name1,
    name2
}

console.log(fullCourse2)


// 6. Rest
var randomCourse = ['Javascript', 'C++', 'C', 'C#', 'Java', 'Python']

var [a, b, ...rest] = randomCourse

console.log(a) // Javascript
console.log(b) // C++
console.log(rest) // Từ C trở đi

// 7. Spread
var randomCarList = ['Toyota', 'BMW', 'VinFast']
var randomBikeList = ['Honda', 'SYM', 'Dream']
var allList = [...randomBikeList, ...randomCarList]

console.log(allList) // [ 'Honda', 'SYM', 'Dream', 'Toyota', 'BMW', 'VinFast' ]

// 8. Module --> Khái niệm quan trọng
// Check import ở trên và script ở HTML file, Module thường được dùng để sử dụng code ở file khác.

// Vẫn còn nhiều thay đổi và nâng cấp khác ở ES6+, tự đọc thêm.