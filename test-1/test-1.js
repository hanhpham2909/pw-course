//1. Khởi động Tàu Vũ trụ K8
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K8";
const crew = ["Tú", "Ruby", "Phong", "Nga", "Trinh", "Nam"];

function launchShip(crew) {
  let crewList = "";
  for (let i = 0; i < crew.length; i++) {
    if (i === crew.length - 1) {
      crewList += crew[i];
    } else {
      crewList += crew[i] + ", ";
    }
  }
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K8!`;
}

const launchMessage = launchShip(crew);
console.log(launchMessage);

// // 2. Du hành đến hành tinh bí ẩn
let distance;

function calculateDistance(speed, time) {
  distance = speed * time;
  console.log("Khoảng cách của tàu vũ trụ K8 là " + distance + "km");
}

calculateDistance(1000, 24);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  let hexadecimalNumber = time.toString(16);
  console.log(
    "Giá trị thời gian đã được chuyển đổi sang hệ thập lục phân " +
      hexadecimalNumber
  );
}
convertTimeToHex(120);

// 4. Khám phá kho báu
function decryptCode(code) {
  let newCode = "";

  for (let i = 0; i < code.length; i++) {
    let char = code[i];
    if (char === char.toLowerCase()) {
        newCode += char.toUpperCase();
    } else {
        newCode += char.toLowerCase();
    }
  }

  return newCode;
}

const code = "K8 Challenge";
const result = decryptCode(code);
console.log(result);

// 5. Trở về Trái Đất
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();
