// In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10

const { log } = require("console");

let object = { name: "Alex", age: 10 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
// 30 (=10+20).
let object1 = { name: "Alex", age: 10, salary: 20 };
let sum = 0;
for (const key in object1) {
  if (typeof object1[key] === "number") {
    sum += object1[key];
  }
}
console, log("tổng bài 2 là " + sum);

// Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
// [“name”, “age”]

let object2 = { name: "Alex", age: 10};
for (const key in object2){
    console.log(key)
}


