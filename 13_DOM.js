// DOM là tên gọi viết tắt của (Document Object Model – tạm dịch Mô hình Các Đối tượng Tài liệu).
// Là một chuẩn được định nghĩa bởi W3C (Tổ Chức Web Toàn Cầu – World Wide Web Consortium).

// DOM được dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML hay XML 
// bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…

/* 
 * HTML DOM là một công cụ giúp thao tác và thay đổi dữ liệu tài liệu HTML thông qua mô hình đối tượng. 
 * Nó biến các phần tử trong tài liệu thành các đối tượng với phương thức và thuộc tính riêng, hỗ trợ 
 * truy xuất và thao tác như xóa, sửa, thêm và cập nhật nội dung dễ dàng trong khi vẫn duy trì cấu trúc của tài liệu.
 * (Xem thêm sơ đồ HTML DOM để hiểu rõ hơn).
*/

// HTML DOM có nhiều thuộc tính(document, element, attribute,...). Sau đây là những thuộc tính thường dùng:
// 1. Document:
// a. Viết lên HTML
document.write('Hello from document.write!')

// b. Lấy id
var getId = document.getElementById('idDocument')

console.log(getId)

// c. Lấy class
var getClass = document.getElementsByClassName('classDocument')

console.log(getClass)

// d. Cách khác để lấy id và class bằng 1 hàm chung
var getClass2 = document.querySelector('.classDocument') // Chỉ trả về kết quả đầu tiên tìm được

console.log(getClass2)

var getClass3 = document.querySelectorAll('.classDocument') // Trả về toàn bộ kết quả tìm được

console.log(getClass3)

// e. Lấy form
var getForm = document.forms['form1']

console.log(getForm)

// f. Lấy tag
var getTag = document.getElementsByTagName('ul')

console.log(getTag)

// 2. Attribute:
// a. setAttribute: Đặt attribute class, id, href, title,... (cũng có thể đặt tên attribute tùy bạn thích).
var setAttribute1 = document.querySelector('.classDocument').setAttribute('class', 'classAttribute') // Class

document.querySelector('.classDocument').title = 'Title Test' // Title

var setAttribute2 = document.querySelector('.classDocument2').setAttribute('my-data', 'favoriteName') // Tên attribute tùy ý

// b. getAttribute: Lấy attribute
var getAttribute1 = document.querySelector('.classDocument2').getAttribute('my-data')

console.log(getAttribute1)

// 3. innerText (textContent tương tự)
document.querySelector('h2.classDocument2').innerText = "This sentence's changed."

// 4. innerHTML (dùng để trang trí style, innerText không thể làm vậy), xem thêm outerHTML dùng để làm gì
document.querySelector('h2.classDocument2').innerHTML = "<h1>This sentence's changed.</h1>"


// CSS DOM tương tự:
document.querySelector('h2.classDocument2').style.color = 'yellow'


// DOM Events: Được sử dụng để gán những sự kiện như onload, onclick,... vào các thẻ HTML (Tự tìm hiểu thêm).
document.querySelector('#eventButton').onclick = function(e) {
    console.log("This button's just been clicked.")
    console.log(e.target) // Show dòng HTML code được chọn theo id
}

document.querySelector('#eventInputBar').onchange = function(e) {
    console.log(e.target.value) // Show giá trị được nhập
}

document.querySelector('input[type="checkbox"]').onchange = function(e) { // Nên dùng id như trên cho dễ
    console.log(e.target.checked) // Check dấu tick
}

document.querySelector('#eventHref').onclick = function(e) {
    e.preventDefault() // Chặn link
}

// Event Listeners (Trình lắng nghe sự kiện): là các hàm dùng để lắng nghe và xử lý các sự kiện xảy ra trên trang web.
// Khi sự kiện xảy ra, hàm được gắn với event listener sẽ được gọi để thực hiện một hành động cụ thể.

var eventListener = document.querySelector('#eventHref')

eventListener.addEventListener('click', function(e) {
    console.log('Test 1')
})

function Test2() {
    console.log('Test 2')
}

eventListener.addEventListener('click', Test2)