var testVariable = 'GPA'

var myObject = {
    name: 'Hồ Mạnh Quân',
    age: 24,
    gender: 'Male',
    // Chú ý cách viết function trong Object:
    myFunction: function() {
        'This is a function in an object (1).',
        'This is a function in an object (2).'
    },
    myFunction2: function() {
        return this.age
    },
    [testVariable]: '4.0' // GPA
}

console.log('myObject', myObject) // Ta ghi 'myObject' để phân biệt Object.
console.log('myObject name', myObject.name) // name
console.log('myObject myFunction', myObject.myFunction) // myFunction
console.log('myObject myFunction', myObject.myFunction2()) // myFunction2

// Thêm 1 biến vào object:
myObject.email = 'homanhquan1812@gmail.com'

// Nếu muốn dùng ký tự đặc biệt cho biến thì làm như sau:
myObject['my-home'] = 'My Home'

console.log('myObject_new', myObject)

// Xóa biến
delete myObject['my-home']

console.log('myObject_myhomeDeleted', myObject)

// Object Constructor (Khởi tạo đối tượng)
// Được hiểu là 1 bản thiết kế trong Javascript, dựa vào đó thì ta có thể tạo ra các đối tượng có chung thuộc tính.
function myInfo(last, middle, first) {
    this.lastName = last
    this.middleName = middle
    this.firstName = first

    this.getFirstName = function() {
        return this.firstName
    }
}

// Nếu ta không thích ghi Function trong Function khác, ta có thể dùng Object Prototype.
myInfo.prototype.getFullName = function() {
    return `User 2's full name is ${this.lastName} ${this.middleName} ${this.firstName}`
}

var user1 = new myInfo('Hồ', 'Mạnh', 'Quân')
console.log(user1)

var user2 = new myInfo('Ho', 'Manh', 'Quan')
console.log(user2)

console.log('First name of user 1 is: ' + user1.getFirstName())
console.log(user2.getFullName())

// Date Objects
var date = new Date()

console.log(date)

console.log(date.getFullYear()) // Tự tìm hiểu các hàm tương tự về Date.

// Math Objects
console.log(Math.abs(-4)) // Tự tìm hiểu thêm các hàm tương tự về Math.