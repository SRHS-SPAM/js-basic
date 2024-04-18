const name = "Mike";
let age = 30;

// 이름이 Tom이거나 성인이면 통과
if (name === "Tom" || age > 19) {
  console.log("통과");
} else {
  console.log("실패");
}

// 이름이 Tom이고, 성인이면 통과
if (name === "Tom" && age > 19) {
  console.log("통과");
} else {
  console.log("실패");
}

age = 25;
// 성인이 아니면 실패
const isAdult = age > 19;
if (!isAdult) {
  console.log("실패");
} else {
  console.log("통과");
}
