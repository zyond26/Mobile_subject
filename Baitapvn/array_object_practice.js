// Tạo file: array_object_practice.js

// 1. Create array scores = [7, 8, 9, 6, 10].
let scores = [7, 8, 9, 6, 10];
console.log(" 1: Mảng scores ban đầu:", scores);

// 2. Use push to add 8.5 points.
scores.push(8.5);
console.log(" 2: Sau khi dùng push (thêm 8.5):", scores);

// 3. Use filter to get points >= 8.
const highScores = scores.filter(score => score >= 8);
console.log(" 3: Sau khi dùng filter (điểm >= 8):", highScores);

// 4. Use map to increase each point by 1.
const increasedScores = scores.map(score => score + 1);
console.log(" 4: Sau khi dùng map (tăng mỗi điểm thêm 1):", increasedScores);
// Lưu ý: Phương thức map tạo ra một mảng mới, không thay đổi mảng gốc scores.
// Nếu bạn muốn thay đổi mảng scores gốc, bạn sẽ gán lại: scores = scores.map(score => score + 1);

// 5. Use reduce to calculate the total score.
const totalScore = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(" 5: Sau khi dùng reduce (tổng điểm):", totalScore);
