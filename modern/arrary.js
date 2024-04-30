let students = ["철수", "영희", "영수"];
// 배열은 문자 뿐만 아니라 숫자, 객체, 함수 등도 포함될 수 있음

console.log(students[1]);

students[1] = "john";

console.log(students[1]);

students.length;
// 배열의 길이를 알려줌

students.push("경민");
// 배열의 맨 뒤에 값을 추가해줌
// 한번에 많은 값 입력가능

students.pop();
// 배열의 맨 뒤에 값을 삭제해줌

students.unshift("삼복");
// 배열 맨 앞에 값을 추가해줌
// 한번에 많은 값 입력가능

students.shift();
// 배열 맨 앞에 값을 삭제해줌

let days = ["월", "화", "수", "목"];

for (let day of days) {
    console.log(day);
}
// 이런식으로 요소를 받아올 수도 잇음
