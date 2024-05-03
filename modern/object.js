const superman = {
    name: "Superman",
    age: 30,
    isAdult: true,
};

console.log(superman.age);

const name = "clark";
const age = 30;

const shy = {
    name: name,
    age: age,
    gender: "male",
};
// 이 오브젝트의 프로퍼티를 변수로 만들면

const shy2 = {
    name,
    age,
    gender: "male",
};
// 이렇게 쓸 수 있음

superman.birthDay;
// undefined

"birthDay" in superman;
// false

"age" in superman;
// true

function makeObject(name, age) {
    return {
        name,
        age,
        hobby: "football",
    };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log("age" in Mike);
console.log("birthDay" in Mike);

for (x in Mike) {
    console.log(x);
}
