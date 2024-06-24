// Primitive Types (Kiểu nguyên thủy): Được dùng để lưu trữ các giá trị đơn giản.
// Khi bạn thao tác với các biến thuộc kiểu nguyên thủy, bạn đang thao tác trực tiếp trên giá trị.
// Có nhiều loại dữ liệu nguyên thủy: String, Boolean, Number, Char, Symbol, Null, Undefined,...

let a = 10;
let b = a; // b sao chép giá trị của a

console.log(a); // 10
console.log(b); // 10

b = 20;
console.log(a); // 10 (giá trị của a không thay đổi)
console.log(b); // 20


// Reference Types (Kiểu tham chiếu): Được dùng cho các kiểu dữ liệu phức tạp.
// Khi bạn thao tác với các biến thuộc kiểu tham chiếu, bạn đang thao tác trên một tham chiếu tới giá trị.
// Có 3 loại dữ liệu tham chiếu: Object, Array, Function.

let obj1 = { 
    name: "John"
};
let obj2 = obj1; // obj2 tham chiếu tới cùng một đối tượng như obj1

console.log(obj1.name); // John
console.log(obj2.name); // John

obj2.name = "Doe";

console.log(obj1.name); // Doe (giá trị của obj1 cũng thay đổi)
console.log(obj2.name); // Doe
