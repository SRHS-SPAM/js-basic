const superman = {
    name: "clark",
    age: 33,
    fly: function () {
        console.log("날아갑니다.");
    },
};

superman.fly();
// 객체 안에 들어있는 함수를 메소드라고 함

const superman2 = {
    name: "clark",
    age: 33,
    fly() {
        console.log("날아��니다.");
    },
};
// 이렇게 줄여 쓸 수 있음

const user = {
    name: "Mike",
    sayHello: function () {
        console.log(`Hello, I'm ${this.name}`); // user.name도 같은 뜻임
    },
};

user.sayHello();

function sayHello() {
    console.log(`Hello, I'm ${this.name}`);
}

let boy = {
    name: "Mike",
    sayHello,
};

let girl = {
    name: "Jane",
    sayHello,
};

boy.sayHello();
girl.sayHello();
