const car = {
    wheels: 4,
    drive() {
        console.log("driving..");
    }
}

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
};

bwm.__proto__ = car;

const x5 = {
    color: 'black',
    name: 'x5',
}
// __proto__ 기본값 같은 느낌

const Bmw = function (color) {
    this.color = color;
};
Bmw.prototype.wheels = 4
// 이런식으로도 프로토타입을 정의 가능
const m3 = new Bmw("red");