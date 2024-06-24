// Bind(): Trả về một hàm mới, khi được gọi, nó có giá trị this được đặt thành một giá trị cụ thể.
const Person1 = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

// Tạo một hàm riêng biệt từ phương thức greet của đối tượng person
const greet = Person1.greet;
greet(); // Hello, my name is

const greetWithBind = Person1.greet.bind(Person1)
greetWithBind() // Hello, my name is Alice

// Bind trong class (Thường gặp trong NodeJS)
class Person2 {
    constructor(name) {
        this.name = name
        this.greet = this.greet.bind(this)
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const person1 = new Person2('John Doe')
person1.greet()

console.log('')

// Call(): Thường được sử dụng khi bạn biết chính xác các đối số mà bạn muốn truyền vào hàm, và bạn muốn truyền chúng một cách riêng lẻ.
const Person3 = {
    name: 'Alice',
    greet: function(message, age) {
        console.log(`${message}, my name is ${this.name}, and I am ${age} years old`);
    }
};

function introduce() {
    console.log(`Hello, I am ${this.name}`);
}

Person3.greet.call(Person3, 'Hi', 30);
introduce.call(Person3);

console.log('')


// Apply(): Thường được sử dụng khi bạn có một mảng các đối số và bạn muốn truyền chúng vào hàm một cách đồng thời.
// Sử dụng apply để gọi greet từ đối tượng person
Person3.greet.apply(Person3, ['Hi', 25]);

// Sử dụng apply để gọi introduce với một đối tượng khác
const otherPerson = { 
    name: 'Bob' 
};
introduce.apply(otherPerson);


// Redux (Lý thuyết redux thiên về Frontend nhiều nên tự tìm hiểu)