/*
 * Strict mode (chế độ nghiêm ngặt) là một tính năng của JavaScript được giới thiệu từ phiên bản ECMAScript 5 (ES5), 
 * cho phép bạn áp dụng các quy tắc nghiêm ngặt hơn trong việc viết mã JavaScript. Khi bật strict mode, JavaScript 
 * sẽ báo lỗi cho một số hành vi không an toàn hoặc không được khuyến khích mà trong chế độ bình thường (non-strict 
 * mode) có thể được bỏ qua hoặc cảnh báo nhẹ nhàng hơn.
 *
 * Cách bật Strict mode: Dùng 'use strict'.
*/

'use strict' // Nếu không có dòng này thì sẽ ra kết quả là 18 và 123.

function math(a, a) {
    return a + a
}

console.log(math(6, 9)) // Error

const private = 123

console.log(private) // Error