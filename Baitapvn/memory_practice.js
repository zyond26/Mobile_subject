// Baif 1
var num1 = 42;
var num2 = 3.14; 
const str ="hello";

console .log(num1); 
console .log(num2); 
console .log(str); 
num1 = 100; // Cập nhật giá trị num1
console .log(num1); // 100

console.log(num2); // 2.71
// console.log(str); // "hello" (vẫn giữ nguyên giá trị ban đầu)

// Biến nguyên thủy (number, string, v.v.) được lưu trong Stack.
// Giá trị của num1, num2, str nằm trực tiếp trong Stack. Khi gán lại, giá trị mới thay thế giá trị cũ trong Stack (trừ str vì là const).