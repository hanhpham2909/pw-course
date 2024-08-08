/* 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
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

/* 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
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

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
let number = [2, 6, 8, 11, 20, 39, 45, 87, 69];
function totalNumber(number) {
  let sum = 0;
  for (i = 0; i <= number.length; i++) {
    sum += number[i];
  }
  return sum;
}
console.log(totalNumber(number));

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
let sv1 = [
  { name: "Alex", score: 85 },
  { name: "Kate", score: 100 },
  { name: "Choco", score: 89 },
];

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }
let product = [
  { name: "product 1", price: 100 },
  { name: "product 2", price: 100 },
  { name: "product 3", price: 100 },
  { name: "product 4", price: 1 },
];
product.forEach(function (item) {
  if (item.price > 2) {
    console.log(item.name);
  }
});

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
function workTime(hour) {
  if (9 <= hour && hour <= 22) {
    return "Cửa hàng còn mở cừa";
  } else {
    return "Cửa hàng đóng cửa";
  }
}
console.log(workTime(8));

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k
function checkOld(old) {
  if (old < 5) {
    return "Trẻ em dưới 5 tuổi miễn phí";
  } else if (5 < old < 18) {
    return "người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k";
  } else {
    return "người lớn từ 18 tuổi trở lên là 100k";
  }
}
console.log(checkOld(20));

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
function month(monthInput) {
  switch (monthInput) {
    case 1:
      monthName = "Jan";
      break;
    case 2:
      monthName = "Feb";
      break;
    case 3:
      monthName = "Mar";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "Jun";
      break;
    case 7:
      monthName = "Jul";
      break;
    case 8:
      monthName = "Aug";
      break;
    case 9:
      monthName = "Sep";
      break;
    case 10:
      monthName = "Oct";
      break;
    case 11:
      monthName = "Nov";
      break;
    case 12:
      monthName = "Dec";
      break;
    default:
      monthName = "Invalid month";
  }
  return monthName;
}
var monthInput = 9;
console.log("Month name is " + month(monthInput));

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
function xepHang(diem) {
  if (diem >= 8) {
    return "Gioi";
  } else if (diem >= 6.5 && diem < 8) {
    return "Khá";
  } else if (diem >= 5 && diem < 6.5) {
    return "Trung Bình";
  } else {
   return "yếu";
  }
}
console.log(xepHang(10));

//12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function thoiTiet(nhietDo) {
  if (nhietDo >= 30) {
   return "Nóng";
  } else if (nhietDo <30 && nhietDo >= 20) {
    return"Mát";
  } else if (nhietDo < 20) {
    return "Lạnh";
  } 
}
console.log(thoiTiet(10));