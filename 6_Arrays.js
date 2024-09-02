// Phân biệt Array và Object: Array dùng '[]', Object dùng '{}'
var myArray = ['Array1', 'Array2', 'Array3']

console.log(myArray)

// Có nhiều hàm cho mảng như là: join, pop, push, concat, includes,... (Đọc thêm)
console.log(myArray.join(' - '))

// Các hàm nâng cao thường gặp:
var courses = [
    {
        name: 'Javascript',
        price: 80000
    },
    {
        name: 'C#',
        price: 90000
    },
    {
        name: 'C+',
        price: 70000
    },
    {
        name: 'Java',
        price: 90000
    }
] // courses là 1 array gồm 4 objects

// 1. Map(): Liệt kê các biến có trong từng object theo nhu cầu.
function coursesHandler(course) {
    return {
        name: `Khoá học: ${course.name}`,
        price: `Giá tiền: ${course.price}`
    }
}

var method1 = courses.map(coursesHandler)

console.log(method1)

// Cách khác (Thường gặp trong ReactJS)
var method2 = courses.map((course, index) => {
    console.log(index, `${index + 1}. Khóa học: ${course.name} và giá tiền ${course.price}.`)
})

console.log(method2)

console.log('')

// 2. Find(): Tìm kiếm object bằng biến theo nhu cầu (Chỉ trả về 1 giá trị được phát hiện đầu tiên).
var findFirstPrice = courses.find((course) => {
    return course.price >= 80000 // Javascript
})

console.log(findFirstPrice)

// 3. Filter(): Tìm kiếm object bằng biến theo nhu cầu (Trả về tất cả các giá trị cần tìm).
var filterPrice = courses.filter((course) => {
    return course.price === 90000
})

console.table(filterPrice) // Table dùng để xem tốt hơn so với Log (Tùy nhu cầu sử dụng).

// 4. Reduce(): Thường được dùng để tính toán trong Objects (Đọc thêm định nghĩa để hiểu rõ).
var totalPriceOfAllCourses = courses.reduce((a, b) => a + b.price, 0)
// a: Biến tích lũy bắt đầu từ số 0 được điền ở cuối dòng code.
// b: Biến được chọn theo nhu cầu.

console.log(totalPriceOfAllCourses)

var randomArray = [1, 2, 3, 4, 5]

var totalSum = randomArray.reduce((total, number) => total + number)

console.log(totalSum)
