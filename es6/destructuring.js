let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);
// 이렇게 넣을 수 있음

let [i1, i2] = [1, 2];
//대입해줌

let [q1, q2, q3] = [1, 2];
// q3는 undefined

let [w1= 1, w2=3, w3=3] = [1, 2];
// 기본값 할당 가능

let [u1, , u2] = ['Mike', 'Tome', "Jane"];

console.log(u1); // Mkie
console.log(u2); // Jane
// 건너뛰기 가능

let a = 1;
let b = 2;
let c = a;
a = b;
b = c;
// 이렇게 임시변수를 만들어야 했지만

[a, b] = [b, a];
// 이렇게 쉽게 바꾸기 가능

let user = {name: 'Mike', age: 30}

let name = user.name;
let age = user.age;
// 원래 따로 넣을려면 이렇게 해야했지만

let {name, age} = user;
// 이렇게 사용 가능

