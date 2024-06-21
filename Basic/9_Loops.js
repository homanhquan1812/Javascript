// Trong Javascript, Loop có 5 dạng:
// 1. For (Phổ biến):
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('')

// 2. While:
var i = 0

while (i < 10) {
    console.log(i)
    i++
}

console.log('')

// 3. Do While:
var j = 0

do {
    console.log(j)
    j++
} while (j < 10)

console.log('')

// 4. For In:
var myItems = ['Wallet', 'Keys', 'Glasses']

for (var i in myItems) {
    console.log(myItems[i])
}

console.log('')

// 5. For Of:
var course = 'Javascript'

for (var i of course) {
    console.log(i)
}

var myItems2 = {
    item1: 'Wallet',
    item2: 'Keys',
    item3: 'Glasses'
}

for (var i of Object.keys(myItems2)) {
    console.log(i)
}

for (var i of Object.values(myItems2)) {
    console.log(i)
}
