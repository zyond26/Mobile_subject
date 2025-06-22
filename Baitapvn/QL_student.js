// Viết một chương trình nhỏ mô phỏng quản lý thông tin học sinh.
// Yêu cầu:
// Khai báo thông tin học sinh: tên, tuổi, điểm trung bình.
// Dùng const cho tên (không thay đổi).
// Dùng let cho điểm (có thể cập nhật).
// Dùng const cho cấu hình tối đa điểm (hằng số).
// In thông tin và thử cập nhật điểm.

//  BL 

// 1. Khai báo thông tin học sinh

const studentName = "Nguyen Van A"; // Tên
let studentAge = 18; // Tuổi 
let studentScore = 8.5; // Điểm trung bình 
const MAX_SCORE = 10; // Cấu hình tối đa điểm

// 2. In thông tin học sinh

console.log("Thông tin học sinh:");
console.log("Tên: " + studentName);
console.log("Tuổi: " + studentAge);
console.log("Điểm trung bình: " + studentScore);

// 3. Cập nhật điểm

studentScore = 9.0; // Cập nhật điểm trung bình

// 4. In thông tin sau khi cập nhật

console.log("Thông tin học sinh sau khi cập nhật:");
console.log("Tên: " + studentName);
console.log("Tuổi: " + studentAge);
console.log("Điểm trung bình: " + studentScore);

// 5. In cấu hình tối đa điểm

console.log("Cấu hình tối đa điểm: " + MAX_SCORE);

// 6. Thử cập nhật cấu hình tối đa điểm (sẽ báo lỗi)

// MAX_SCORE = 12; // Lỗi: Không thể gán giá trị mới cho hằng số
// console.log("Cấu hình tối đa điểm sau khi cập nhật: " + MAX_SCORE); // Không thực thi

// question
// Tại sao const vẫn cho phép thay đổi thuộc tính của object, nhưng không cho gán lại object mới?
// Trong trường hợp nào bạn sẽ dùng let thay vì const?
// Nếu bạn thấy code cũ dùng var, bạn sẽ thay bằng let hay const? Tại sao?
// Điều gì xảy ra nếu bạn truy cập biến let trước khi khai báo?

//  bai lam:

// -> const cho phép thay đổi thuộc tính của object vì const chỉ đảm bảo rằng biến không thể được gán lại một giá trị mới.
// Tuy nhiên, nếu biến đó là một object, bạn vẫn có thể thay đổi các thuộc tính của object đó. Điều này là do const chỉ bảo vệ tham chiếu đến object, không phải nội dung bên trong của nó.
// -> Bạn sẽ dùng let thay vì const trong trường hợp bạn cần thay đổi giá trị của biến sau khi khai báo.
//  Nếu bạn biết rằng giá trị của biến sẽ không thay đổi, hãy sử dụng const để bảo vệ nó khỏi việc bị gán lại một giá trị mới.
// -> Nếu bạn thấy code cũ dùng var, bạn sẽ thay bằng let hay const tùy thuộc vào ngữ cảnh.
//  Nếu biến đó không cần phải thay đổi giá trị, hãy sử dụng const. Nếu biến đó cần phải thay đổi giá trị, hãy sử dụng let. Việc sử dụng let và const giúp tránh được các vấn đề liên quan đến phạm vi biến và làm cho mã dễ đọc hơn.
// -> Nếu bạn truy cập biến let trước khi khai báo, bạn sẽ gặp lỗi ReferenceError.
// Điều này xảy ra vì biến let có phạm vi khối (block scope) và không được hoisting như var. Khi bạn cố gắng truy cập biến let trước khi nó được khai báo, JavaScript không biết biến đó là gì và sẽ báo lỗi.
