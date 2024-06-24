// Hoisting là một cơ chế trong JavaScript mà quá trình khai báo các biến, hàm và lớp được "nâng lên" đầu phạm vi của chúng trước khi mã được thực thi.
// Bạn có thể sử dụng các biến và hàm trước khi chúng được khai báo trong mã nguồn.

// Hoisting chỉ là 1 khái niệm trong Javascript và ít có ứng dụng thực tế, học cho biết.

// 1. Hoisting ở var:
// Khai báo biến được hoisted nhưng chỉ phần khai báo được nâng lên, còn gán giá trị thì không. 
// Biến sẽ có giá trị undefined cho đến khi được gán giá trị.
console.log(a); // undefined
var a = 10;

// 2. Hoisting ở let và const:
// Khai báo biến cũng được hoisted nhưng không khởi tạo. 
// Sử dụng biến trước khi khai báo sẽ dẫn đến lỗi ReferenceError do biến nằm trong "Temporal Dead Zone" (TDZ).
console.log(b); // ReferenceError: b is not defined
let b = 20;

console.log(c); // ReferenceError: c is not defined
const c = 20;

// 3. Hoisting ở Function declarations:
// Cả phần khai báo và định nghĩa đều được hoisted, cho phép bạn gọi hàm trước khi khai báo.
foo(); // "Hello"
function foo() {
    console.log("Hello");
}

// 4. Hoisting ở Function expressions:
// Chỉ phần khai báo được hoisted, không phải phần định nghĩa. Do đó, bạn không thể gọi hàm trước khi nó được gán giá trị.
console.log(bar); // undefined
var bar = function() {
    console.log("Hi");
};
bar(); // "Hi"

