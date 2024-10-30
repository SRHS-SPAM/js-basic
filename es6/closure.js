// 어휘적 환경에 올라감
// 변수는 초기화가 안되는데
// 함수는 초기화됨

let one;
// 변수가 초기화 됨 one : undefined
one = 1;
// 초기화된 변수에 데이터가 들어감 one: 1

function addOne(num) {
    console.log(one + num);
}

addOne(5);

function makeCounter() {
    let num = 0; // 은닉화

    return function() {
        return num++;
    }
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
// 함수가 실행됐을때의 외부함수 값을 기억함

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
// makeAdder 함수는 숫자 x를 매개변수로 받아,
// x를 고정한 상태에서 다른 숫자 y를 더할 수 있는 함수를 반환합니다.