// JSON (Javascript Object Notation): Là 1 định dạng dữ liệu (dạng chuỗi).
// JSON thể hiện các kiểu dữ liệu: Number, Boolean, Array, Object,...

// Có 2 thao tác chính khi làm việc với JSON: 
// 1. Stringify: Chuyển đổi dữ liệu JavaScript thành chuỗi JSON.
var info = {
    name: 'Ho Manh Quan',
    age: 24
}

console.log(JSON.stringify(info))

// 2. Parse: Chuyển đổi chuỗi JSON thành đối tượng JavaScript.
var info2 = '{"name": "Ho Manh Quan", "age": 24}'

console.log(JSON.parse(info2))

// Promise --> Khái niệm quan trọng
/*
 * Trước tiên, ta cần hiểu rằng:
 * Javascript là một ngôn ngữ lập trình sử dụng mô hình đơn luồng (Single-threaded) và thực thi mã theo cách đồng bộ (Synchronous) lần lượt từ đầu 
 * tới cuối, nghĩa là khi một tác vụ đồng bộ đang thực thi, không có tác vụ nào khác có thể chạy. Thiết kế này được gọi là Blocking (Chặn luồng).
 * 
 * Tuy nhiên, khi các ứng dụng web trở nên phức tạp hơn, Sync thường ít được sử dụng để tránh trải nghiệm tồi tệ của người dùng trên ứng dụng web,
 * chẳng hạn như làm cho giao diện ứng dụng bị đơ khi đang chờ hoàn thành các tác vụ dài hạn như truy vấn (Network requests) hay xử lý dữ liệu lớn.
 * 
 * Chính vì thế, Javascript đã phát triển cơ chế bất đồng bộ (Asynchronous) gồm Callbacks, Promises, Async/Await; Các cơ chế này dùng để xử lý nhiều 
 * thao tác cùng lúc mà không làm gián đoạn đến các tác vụ khác. Thiết kế này được gọi là Non-Blocking (Không chặn luồng).
 * 
 * Các cơ chế giúp Javascript quản lý và thực thi các tác vụ không đồng bộ mà không chặn luồng chính thường là: Event loops, Worker Threads, Web APIs,... (Đọc thêm).
*/

/*
 * Promise là 1 đối tượng được dùng để xử lý các tác vụ bất đồng bộ một cách dễ dàng và có cấu trúc hơn.
 * Ta thường dùng Promises để giải quyết vấn đề Callback Hell.
 * Promise có 3 trạng thái:
 * - Pending (Đang chờ): Ban đầu, một Promise được khởi tạo ở trạng thái pending.
 * - Fulfilled (Xử lý thành công): Nếu thực thi thành công, Promise chuyển sang trạng thái fulfilled và trả về kết quả.
 * - Rejected (Bị từ chối): Nếu xảy ra lỗi, Promise chuyển sang trạng thái rejected và trả về lỗi.
 * 
 * Promise có các handlers (xử lý) để xử lý kết quả hoặc lỗi khi chuyển qua fulfilled hoặc rejected.
 * - Ta dùng ".then()" nếu fulfilled.
 * - Ta dùng ".catch()" nếu rejected.
 * 
 * Promise chaining được dùng để thực hiện tuần tự các tác vụ bất đồng bộ và xử lý kết quả của từng bước 
 * tiếp theo dựa trên kết quả của bước trước đó, sử dụng các phương thức then() và catch() của Promise.
*/

// Ví dụ về Promise:
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hoàn thành sau ' + ms + ' miligiây');
        }, ms);
    });
}

// Nếu bạn muốn thêm reject thì làm như sau (Phương thức này không cần thiết):
// function wait(ms) {
//     return new Promise((resolve, reject) => {
//         if (ms <= 0) {
//             reject('Thời gian đợi phải lớn hơn 0');
//         } else {
//             setTimeout(() => {
//                 resolve('Hoàn thành sau ' + ms + ' miligiây');
//             }, ms);
//         }
//    });
// }
  
console.log('Bắt đầu');

wait(2000) // Chờ 2 giây
    .then((message) => {
        console.log(message); // In ra: Hoàn thành sau 2000 miligiây
        return wait(3000); // Chờ thêm 3 giây
    })
    .then((message) => {
        console.log(message); // In ra: Hoàn thành sau 3000 miligiây
        return wait(1000); // Chờ thêm 1 giây
    })
    .then((message) => {
        console.log(message); // In ra: Hoàn thành sau 1000 miligiây
        console.log('Kết thúc');
    })
    .catch((error) => {
        console.error('Đã xảy ra lỗi:', error);
    });

// Trong bài 12_Callbacks.js, có ví dụ về Callback Hell, ta sẽ dùng Promise để giải quyết như thế này:
function promiseHell(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 1000);
    });
}

promiseHell(1)
    .then((valueFromA) => {
        return promiseHell(valueFromA);
    })
    .then((valueFromB) => {
        return promiseHell(valueFromB);
    })
    .then((valueFromC) => {
        return promiseHell(valueFromC);
    })
    .then((valueFromD) => {
        return promiseHell(valueFromD);
    })
    .then((valueFromE) => {
        return promiseHell(valueFromE);
    })
    .then((valueFromF) => {
        return promiseHell(valueFromF);
    })
    .then((valueFromG) => {
        return promiseHell(valueFromG);
    })
    .then((valueFromH) => {
        return promiseHell(valueFromH);
    })
    .then((valueFromI) => {
        return promiseHell(valueFromI);
    })
    .then((valueFromJ) => {
        return promiseHell(valueFromJ);
    })
    .then((valueFromK) => {
        return promiseHell(valueFromK);
    })
    .then((valueFromL) => {
        return promiseHell(valueFromL);
    })
    .then((valueFromM) => {
        return promiseHell(valueFromM);
    })
    .then((valueFromN) => {
        return promiseHell(valueFromN);
    })
    .then((valueFromO) => {
        return promiseHell(valueFromO);
    })
    .then((valueFromP) => {
        return promiseHell(valueFromP);
    })
    .then((valueFromQ) => {
        return promiseHell(valueFromQ);
    })
    .then((valueFromR) => {
        return promiseHell(valueFromR);
    })
    .then((valueFromS) => {
        return promiseHell(valueFromS);
    })
    .then((valueFromT) => {
        return promiseHell(valueFromT);
    })
    .then((valueFromU) => {
        return promiseHell(valueFromU);
    })
    .then((valueFromV) => {
        return promiseHell(valueFromV);
    })
    .then((valueFromW) => {
        return promiseHell(valueFromW);
    })
    .then((valueFromX) => {
        return promiseHell(valueFromX);
    })
    .then((valueFromY) => {
        return promiseHell(valueFromY);
    })
    .then((valueFromZ) => {
        console.log(valueFromZ + 1);
    })
    .catch((error) => {
        console.error('Đã xảy ra lỗi:', error);
    });

// Ví dụ khác về Resolve
var promise = Promise.resolve('Success!')

promise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

// Ví dụ khác về Reject
var promise2 = Promise.reject('Failure!')

promise2
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

// 1 ví dụ về All (Thường gặp)
var test1 = new Promise((array1) => {
    setTimeout(() => {
        array1([1])
    }, 5000)
})

var test2 = new Promise((array2) => {
    setTimeout(() => {
        array2([2, 3])
    }, 7000)
})

var promise3 = Promise.all([test1, test2])

promise3
    .then((result) => {
        var result1 = result[0]
        var result2 = result[1]

        console.log(result1.concat(result2))
    })
    .catch((error) => {
        console.log(error)
    })

// Fetch --> Khái niệm quan trọng
/*
 * Trước tiên, ta cần hiểu về API (Application Programming Interface - Giao diện lập trình ứng dụng): Là một tập hợp 
 * các quy tắc và giao thức cho phép các ứng dụng phần mềm khác nhau giao tiếp và tương tác với nhau.
 * 
 * Loại API phổ biến thường là Web API, có các loại khác (Tự tìm hiểu). Loại này thường sử dụng giao thức HTTP/HTTPS 
 * để trao đổi dữ liệu giữa máy khách (client) và máy chủ (server). Ví dụ: REST API, SOAP API, GraphQL.
 * 
 * Ví dự đơn giản về Web API: Frontend <-- Web API --> Backend.
 * 
 * REST API (REpresentational State Transfer API): Là kiến trúc dựa trên tiêu chuẩn web và sử dụng Giao thức HTTP. 
 * Máy chủ REST chỉ đơn giản là cung cấp quyền truy cập vào tài nguyên và máy khách REST truy cập và sửa đổi tài nguyên bằng giao thức HTTP.
 * Phương thức HTTP:
 * • GET - Lấy thông tin về một tài nguyên.
 * • PUT - Cập nhật toàn bộ một tài nguyên.
 * • DELETE - Loại bỏ một tài nguyên.
 * • POST - Tạo ra một nguồn tài nguyên mới.
 * • PATCH - Cập nhật một phần tài nguyên (Ít gặp).
 * 
 * REST API và CRUD có quan hệ chặt chẽ với nhau. CRUD (Create - Read - Update - Delete) đơn giản là các thao tác cơ bản trên dữ liệu.
*/ 

// Fetch được dùng để xử lý lấy API Backend trả về và chính Fetch cũng là 1 Promise.
// Mở Terminal ở thư mục JSON Server, chạy "npm start".
fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

/*
 * Cách sử dụng Postman để thao tác API, đặc biệt là REST API:
 *
 * 1. GET: Copy địa chỉ Web API vào thanh bar. Click "Send". Ta ra đuợc các JSON từ trang web.
 * 2. POST: Click "Body", chọn "raw". Rồi nhập JSON tùy thích, ví dụ:
    {
        "id": 3,
        "courseName": "C++",
        "price": 90000
    }
 * rồi nhấn Send. Có thể tham khảo cách làm ở "x-www-form-urlencoded" (Chưa rõ vì sao chưa dùng được ở Web API này).
 * 3. PUT: Copy địa chỉ gồm cả số id ở mục ta muốn cập nhật, như là: http://localhost:3000/courses/3.
 * Cập nhật theo nhu cầu, ví dụ:
    {
        "courseName": "Java",
        "price": 90000
    }
 * rồi nhấn Send.
 * 4. DELETE: Copy địa chỉ gồm cả số id ở mục ta muốn xóa, như là: http://localhost:3000/courses/3, rồi nhấn Send.
*/ 