let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [0, ...arr1, ...arr2, 7, 8, 9];
// 원래 중간에 넣을려면 push같은 것들을 써야하는데 전개를 할 수 있음
console.log(result);

arr2.reverse().forEach((num) => {
    arr1.unshift(num);
})

arr1 = [...arr2, ...arr2];
// 이렇게 간단하게 사용할 수 있음 전개구문을 사용하면

let user = { name: "Mike"};
let info = { age: 30};
let fe = ["js", "React"];
let lang = ["Korean", "English"];

user = Object.assign({},
    user,
    info,
    {
        skills: []
    });

fe.forEach((skill) => {
    user.skills.push(skill);
});

lang.forEach((language) => {
    user.skills.push(language);
});

console.log(user);
// 원랜 이렇게 해야됨
user.skills = [...fe, ...lang];
console.log(user);
// 전개 구문을 사용하면 이렇게 간단하게 가능함
