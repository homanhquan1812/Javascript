class Course3 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

// Dòng quan trọng, để ý tên class Course3 dưới và trên, ta sẽ sử dụng nó trong file khác.
export default Course3;