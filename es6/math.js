let num = 12140;

num = num.toString(3); //toString(진수) toString을 사용하고, 그 안에 진수값을 넣으면 그 진수로 변환해줌

let num1 = 5.1;
let num2 = 5.7;

num1 = Math.ceil(num1);
num2 = Math.ceil(num2);
// ceil은 소수점을 올림해줌

num1 = Math.floor(num1);
num2 = Math.floor(num2);
// floor는 소수점을 내림해줌

num1 = Math.round(num1);
num2 = Math.round(num2);
// round는 소수점을 반올림해줌

let userRate = 30.1234;
let userRate1 = 30.1234;

userRate = userRate.toFixed(2);
console.log(typeof userRate);
// toFixed는 소수점 자릿수를 지정해줌
// toFiexd는 스트링으로 반환해줌 그러니까 Number을 사용해야함
console.log(typeof Number(userRate1.toFixed(2)));

isNan(3); // 숫자인지 아닌지 체크해줌

parseInt(); // Number처럼 숫자로 변환해줌
// 만약 10px이 parseInt()로 들어온다고 쳤을때 숫자까지만 int로 변환하고 나머진 버림
// 만약 f3이 parseInt()로 들어온다면 NaN을 배출함

parseInt("11", 2); //3
// 앞에 스트링을 넣고, 뒤에 2를 넣으면 2진수에서 10진수로 변환해준다.

parseFloat();
// 부동소수점으로 반환한다.

Math.random(); // 0~1사이의 임이의 숫자를 만든다.

Math.floor(Math.random() * 100) + 1;
// 이렇게 하면 1~100 사이의 값을 구할 수 있다.

Math.max(1, 2, 4, 5, -1, 324);
// 인수를 넣어 최대값을 반환해준다.

Math.min(1, 2, 4, 5, -1, 3);
// 인수를 넣어 최소값을 반환해준다.

Math.abs(-1);
// 절대값을 반환해준다.

console.log(num);
console.log(num1);
console.log(num2);
console.log(userRate);
