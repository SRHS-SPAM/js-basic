let sayHello = function () {
    console.log("Hello");
    // 일반 함수와 완전 같지만 얜 호이스팅 안됨
};
sayHello();

let add = function (num1, num2) {
    return num1 + num2;
};

let arrow_add = (num1, num2) => {
    return num1 + num2;
};

let arrow_add2 = (num1, num2) => num1 + num2; // return은 생략 가능 인수가 하나면 괄호도 생략 가능
// 셋은 완전 같은 코드임
