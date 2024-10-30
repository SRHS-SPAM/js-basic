function showName(name) {
    console.log(name);
}

showName('Mike'); // 'Mike'
showName('Mike', 'Tom'); // ?

showName();

function showName(name) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Mike'); // 'Mike'
showName('Mike', 'Tom'); // ?

showName();
// 매개변수를 직접 사용하는게 아닌 arguments를 사용해서 매개변수를 사용할 수 있음 객체형임


function showName(...names) {
    console.log(names);
}

showName('Mike'); // ['Mike']
showName('Mike', 'Tom'); // ['Mike', 'Tom']
showName(); // []
// arguments가 아무것도 없어도 빈배열로 전달할 수 있음 배열형임

function add(...numbers) {
    let result = 0;
    numbers.forEach(num => (result += num));
    console.log(result);
}

add(1, 2, 3, 4, 5); // 15
add(1, 2, 3) //6
// 이런식으로 매개변수가 계속 바뀌게 되면 사용함


function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'React', 'Go');
const user2 = new User('Tom', 20, 'React', 'Go', 'exelcd');

console.log(user1);
console.log(user2);
// 나머지 매개변수를 사용해서 다른 것들은 그냥 매개변수로 받고, 여러개 사람마다 다른것은 나머지 매개변수로 받을 수 있음
// 나머지 매개변수는 꼭 마지막에 들어가야함