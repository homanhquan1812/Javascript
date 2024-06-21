// Trong Javascript, dấu chấm phẩy ';' ở cuối câu là không bắt buộc.
// Ta có thể dùng dấu ngoặc kép "" hoặc dấu ngoặc đơn '', dấu ngoặc đơn được khuyên dùng trong Javascript.

// Built-in functions là những hàm đã được xây dựng sẵn trong Javascript: alert, console, confirm, prompt,...
// Các hàm này đều theo thứ tự mà chạy.

// Alert dùng để hiển thị thông báo trên trình duyệt.
alert('Your name is ' + fullName)
alert('And your age is ' + age)

// Console.log dùng để hiển thị thông báo trên bảng Console trong trình duyệt (Phổ biến).
console.log('Your name is ' + fullName + ' and your age is ' + age)

// Confirm dùng để xác nhận.
confirm('Bấm \'OK\' để xác nhận, hoặc bấm \'Cancel\' để hủy.')

// Prompt dùng để nhập dữ liệu.
prompt('Nhập độ tuổi của bạn:')

// Set Timeout dùng để hiển thị thông báo sau bao nhiêu giây tùy người dùng đặt.
setTimeout(function() {
    alert('Đây là bảng thông báo sau 10 giây.')
}, 10000) // 10 giây

// Set Interval dùng để hiển thị thông báo liên tục sau bao nhiêu giây tùy người dùng đặt.
setInterval(function() {
    console.log('Đây là bảng thông báo sau 1 giây hiển thị 1 lần.')
}, 1000) // 5 giây