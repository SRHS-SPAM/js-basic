function* fn() {
    console.log(1);
    yield 'Hello';
    console.log(2);
    yield 'World';
}
// generator는 함수 옆에 *을 써서 함수를 멈추는 기능을 가지고 있음

const a = fn();
