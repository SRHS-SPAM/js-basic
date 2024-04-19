function errCode() {
  console.log("404");
}
errCode();

function sayHello(name) {
  // 괄호안에 들어가있는 친구는 매개변수라고 한다.
  console.log(name, "님 Hello, World!");
}
sayHello("현서");

function addNumber(a, b) {
  return a + b;
  //리턴은 값을 반환해준다.
}
console.log(addNumber(1, 2));

let a = 20; // 전역 변수 (global varable)
function varDsa() {
  let a = 10; // 지역 변수 (local varable)
}
console.log(a); // 얜 함수 밖에 있으니까 20이 찍힘
