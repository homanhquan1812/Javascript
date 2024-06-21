// Recursion (Đệ quy): Trong lập trình, đệ quy xảy ra khi một hàm gọi chính nó hoặc 
// gọi một hàm khác mà sau đó lại gọi lại chính nó.

// Ví dụ về các con số Fibonacci:
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(2));  // Output: 1
console.log(fibonacci(3));  // Output: 2
console.log(fibonacci(4));  // Output: 3
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(7));  // Output: 13
