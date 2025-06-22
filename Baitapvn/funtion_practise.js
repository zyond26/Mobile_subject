// sayHello();
// function sayHello() {
//     console.log("Hello, World!");
// }
// // saygoodbye(); 
// // console.log(saygoodbye)  //saygoodbye is not defined
// const saygoodbye = function() {
//     console.log("Goodbye, World!");
// }
// saygoodbye();

// const multiply = (a, b) => {
//     return a * b;
// }

// console.log(multiply(2, 3)); // 6

// const square = x => x * x;
// console.log(square(4)); // 16

/*Bài 1: Hàm cơ bản 
Viết hàm calculateSquare (function declaration) nhận một số và trả về bình phương.
Viết hàm sayGreeting (function expression) nhận tên và trả về lời chào (VD: "Hi, Tuan").
Viết hàm isEven (arrow function) nhận số và trả về true nếu số chẵn, false nếu lẻ.
Gọi và in kết quả.
*/
function calculateSquare(num) {
    return num * num;
}
function sayGreeting(name) {
    return `Hi, ${name}`;
}
const isEven = num => num % 2 === 0;
console.log(calculateSquare(5)); // 25
console.log(sayGreeting("Tuan")); // "Hi, Tuan"
console.log(isEven(4)); // true
console.log(isEven(5)); // false

/*Bài 2: Tham số và bộ nhớ 
Viết hàm updateUser nhận một object user và thay đổi thuộc tính age.
Tạo object user = { name: "Tuan", age: 20 }.
Gọi hàm và kiểm tra user trước/sau khi thay đổi.
Giải thích: Tại sao age thay đổi? Tham chiếu được lưu ở đâu?
 */

function updateUser(user) {
    user.age = 26;
}
const user = { name: "Tuan", age: 20 };
console.log("Before update:", user); // { name: "Tuan", age: 20 }
updateUser(user);
console.log("After update:", user); // { name: "Tuan", age: 26 }
// Giải thích:
//  Trong javascript , khi bạn truyền một object vào hàm , bạn đang truyền tham chiếu đến object đó,không phải bản sao 
//  của nó. Do đó, khi bạn thay đổi thuộc tính age trong hàm updateUser, bạn đang thay đổi trực tiếp object gốc.
//  Tham chiếu đến object được lưu trong Stack, nhưng nội dung của object (các thuộc tính) được lưu trong Heap.

function sum(...arr) { // Hàm nhận một số lượng tham số không xác định
    // Sử dụng rest parameter để nhận tất cả các tham số vào một mảng
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3));

// bieu thuc goi ngay

(function () {
    console.log("This is an immediately function.");
})();