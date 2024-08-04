/* Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
Biết:
Chiều cao được tính theo đơn vị mét (VD: 1.75m)
Cân nặng tính theo kg
Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
BMI < 18.5: thiếu cân
BMI < 25: Bình thường
BMI < 30: Thừa cân
BMI >= 30: Béo phì
*/
function statusHealth(weight, height) {
  return weight / (height * height);
}
BMI = statusHealth(70, 1.55);

if (BMI < 18.5) {
  console.log("Thiếu cân");
} else if (BMI < 25) {
  console.log("Bình thường");
} else if (BMI < 30) {
  console.log("Thừa cân");
} else {
  console.log("Béo phì");
}

/* Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
Biết công thức chuyển đổi:
Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
Từ độ F sang độ C: (độ F - 32) * 5 / 9; */
function convert_F(celsius) {
  return (celsius * 9) / 5 + 32;
}
function convert_C(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("Từ độ C sang độ F : độ F = " + convert_F(30));
console.log("Từ độ F sang độ C : độ C= " + convert_C(92));

//Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
let number = [2, 6, 8, 11, 20, 39, 45, 87, 69];
function totalNumber(number) {
  let sum = 0;
  for (i = 0; i <= number.length; i++) {
    sum += number[i];
  }
  return sum;
}
console.log(totalNumber(number));

// Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// Số 0, số 1 không phải số nguyên tố.
// Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

// Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
