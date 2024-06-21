// Callback là một function sẽ được thực thi sau khi một function khác đã được thực thi xong.
// (Khái niệm này khá phức tạp nên cần hiểu kĩ)

// Định nghĩa hàm callback
function createGreeting(name) {
    return `Hello, ${name}!`;
}

// Hàm greet nhận vào tên và một hàm callback
function greet(name, callback) {
    // Gọi hàm callback và trả về kết quả
    var greetingMessage = callback(name);
    console.log(greetingMessage);
}

// Sử dụng hàm greet với hàm createGreeting làm callback
greet('Alice', createGreeting); // Output: Hello, Alice!

// Có 1 khái niệm liên quan tới Callback, đó là Callback Hell:
// Là tình trạng khi sử dụng quá nhiều callback lồng nhau, dẫn đến mã nguồn trở nên khó hiểu, khó bảo trì và dễ gây lỗi.
// Trong bài 14_JSON, Promise, Fetch.js sẽ nói rõ cách khắc phục.
// Ví dụ đơn giản về Cellback Hell:
function callbackHell(value, callback) {
    // Simulating asynchronous behavior with setTimeout
    setTimeout(() => {
        callback(value);
    }, 1000);
}

callbackHell(1, function (valueFromA) {
    callbackHell(valueFromA + 1, function (valueFromB) {
        callbackHell(valueFromB + 1, function (valueFromC) {
            callbackHell(valueFromC + 1, function (valueFromD) {
                callbackHell(valueFromD + 1, function (valueFromE) {
                    callbackHell(valueFromE + 1, function (valueFromF) {
                        callbackHell(valueFromF + 1, function (valueFromG) {
                            callbackHell(valueFromG + 1, function (valueFromH) {
                                callbackHell(valueFromH + 1, function (valueFromI) {
                                    callbackHell(valueFromI + 1, function (valueFromJ) {
                                        callbackHell(valueFromJ + 1, function (valueFromK) {
                                            callbackHell(valueFromK + 1, function (valueFromL) {
                                                callbackHell(valueFromL + 1, function (valueFromM) {
                                                    callbackHell(valueFromM + 1, function (valueFromN) {
                                                        callbackHell(valueFromN + 1, function (valueFromO) {
                                                            callbackHell(valueFromO + 1, function (valueFromP) {
                                                                callbackHell(valueFromP + 1, function (valueFromQ) {
                                                                    callbackHell(valueFromQ + 1, function (valueFromR) {
                                                                        callbackHell(valueFromR + 1, function (valueFromS) {
                                                                            callbackHell(valueFromS + 1, function (valueFromT) {
                                                                                callbackHell(valueFromT + 1, function (valueFromU) {
                                                                                    callbackHell(valueFromU + 1, function (valueFromV) {
                                                                                        callbackHell(valueFromV + 1, function (valueFromW) {
                                                                                            callbackHell(valueFromW + 1, function (valueFromX) {
                                                                                                callbackHell(valueFromX + 1, function (valueFromY) {
                                                                                                    callbackHell(valueFromY + 1, function (valueFromZ) {
                                                                                                        console.log(valueFromZ + 1);
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});