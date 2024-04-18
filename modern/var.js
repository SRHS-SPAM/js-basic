let name = "Mike";
//재선언 불가

const PI = 3.14;
//바뀌지 않는 값을 선언, 상수는 대문자로 선언

const name1 = "mike";
const name2 = "Mike";
const name3 = `Mike`;
const hi = `${name} Hi~`;
//백틱을 사용하면 중간에 변수를 넣을 수 있음

console.log(hi);

const age = 30;
console.log(1 + 2);

const y = name / 2;
console.log(y);
//문자열과 숫자를 사칙연산(plus 제외) 하면 NaN Not a Number가 나온다.

const a = true;
const b = false;

console.log(typeof name);
//type을 찾을려면 typeof를 사용하면 됨.
//null != 객체
