const { checkServerIdentity } = require("tls");

//1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log("Năm sản xuất của xe " + car.year);

//2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
let person = {
  myName: "John",
  address: {
    street: "Nguyen Thi Thap",
    city: "Ho Chi Minh",
    country: "Viet Nam",
  },
};
console.log(person.address.street);

//3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
let student = {
  myName: "May",
  grades: {
    math: 100,
    english: 90,
  },
};
console.log(student["grades"]["math"]);

// 4.Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
let product = {
  productName1: "Apple",
  value1: "100.000 vnd",
  productName2: "Rambutan",
  value2: "1.000.000 vnd",
  productName3: "Cherries",
  value3: "100.000 vnd",
};
for (const report in product) {
  console.log(product[report]);
}

// 5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
let settings = {
  volume: "high",
  brightness: "medium",
};
settings.volume = "low";
console.log(settings);

// 6.Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {
  year: "2024",
  version: "2.2.24",
  type: "sport",
};
bike["color"] = "red";
console.log(bike);

// 7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
let employee = {
  name: "Ken",
  age: 22,
};
delete employee.age;
console.log(employee);

/* 8. Một trường học có các lớp học và học sinh như sau:
classA: An, Bình, Châu
classB: Đào, Hương, Giang
	Hãy viết code để đáp ứng yêu cầu sau:
Khai báo tên biến: school
Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh*/
let school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
