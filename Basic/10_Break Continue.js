// Break dùng để ngưng loop khi đạt tới 1 giá trị nào đó
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}

console.log('')

// Continue dùng để bỏ qua 1 hoặc nhiều giá trị nào đó rồi tiếp tục loop
for (var i = 0; i < 10; i++) {
    if (i == 5 || i == 8) {
        continue;
    }
    console.log(i)
}