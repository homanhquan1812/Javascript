// IIFE (Immediately Invoked Function Expression): Là hàm tự thực thi ngay lập tức.

// Hàm thường:
function ordinaryFunction() {
    console.log('This is just an ordinary function.')
}

ordinaryFunction()

// IIFE
// Lưu ý dấu chấm phẩy ";" ở đầu hàm. Có thể đặt ở cuối hàng, nhưng nếu dùng trường hợp này thì phải thêm dấu chấm phẩy ở ordinaryFunction().
// Nếu không thêm vào, web sẽ bị lỗi 'Uncaught TypeError: (intermediate value)(...) is not a function'.
;(function () {
    console.log('This is IIFE 1.')
})()

;((greeting) => {
    console.log(greeting, 'this is IIFE 2.')
})('Hello,')

;(function Test() {
    let message = 'Test Function' // Nên dùng 'let' hoặc 'const' trong IIFE thay vì 'var'
    console.log(message)
})()

Test() // Chưa được định nghĩa

/*
 * Closure: Xảy ra khi hàm được tạo ra dưới dạng biến bên trong một hàm khác. Đồng thời, 
 * hàm con đó vẫn có thể truy cập được các biến của hàm bên ngoài trong khi hàm bên ngoài đã thực thi xong.
 * 
 * Ứng dụng của closure:
 * - Viết code ngắn gọn hơn.
 * - Ứng dụng tính private trong OOP.
*/

function outerFunction() {
    let outerVariable = "I'm from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closure = outerFunction();
closure();  // Output: "I'm from outer function"

// Ví dụ khác về closure:
function createCounter() {
    let counter = 0

    return {
        increment: function() {
            counter++
            return counter
        },
        decrement: function() {
            counter--
            return counter
        }
    }
}

const closure2 = createCounter()

console.log(closure2.increment()) // 1
console.log(closure2.increment()) // 2
console.log(closure2.increment()) // 3
console.log(closure2.decrement()) // 2

const closure3 = createCounter()
console.log(closure3.increment()) // 1
console.log(closure3.increment()) // 2
console.log(closure3.increment()) // 3
console.log(closure3.decrement()) // 2
console.log(closure3.decrement()) // 1
