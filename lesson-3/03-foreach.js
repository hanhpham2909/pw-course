// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra 
// 1
// 2
// 3

let arr = [1,2,3];
arr.forEach(function(item){
    console.log(item);
});

// Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
const arr1 = [20,22,35];
let sum = 0;
let min = arr1[0];
let max = arr1[0];
arr1.forEach(function(item){
    sum+=item;
    if(item < min){
        min = item;
    }
    if(item > max){
        max = item;
    }
});
console.log("Tổng bằng " + sum);
console.log("Giá trị lớn nhất "   + max);
console.log("Giá trị nhỏ nhất "+ min);

// Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]
let arr2 = [2,3,4,5];
let newArr= arr2[];
arr2.forEach(function(item){
    newArr= item*2;
});
console.log(newArr);