/* Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:
Lặp từ 1 tới 100
*/
for (let i=1; i<=100;i++){
    console.log(i);
}

/* Trong mỗi vòng lặp, in ra:
Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”
}
*/
for (let i=1; i<=100;i++){
    if (i%2 === 0){console.log("Số", i, "là số chẵn")}
    if (i%2 === 1){console.log("Số", i, "là số lẻ")}
}
