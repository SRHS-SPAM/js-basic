const user = function(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name)
    }
}

const mike = new User("Mike", 30);

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = User("Tom", 19);

// 생성자 함수와 클래스의 가장 큰 차이점은 클래스는 new없이 실행될 수 없음

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("stop..");
    }
}

class Bwm extends car {
    park() {
        console.log("PARK");
    }
    stop() {
        super.stop();
        console.log("OFF");
    }
}
// 원래 오버라이딩 되는데 super쓰면 오버라이딩 되지 않음

const z4 = new Bwm("blue")