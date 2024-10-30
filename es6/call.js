const mike = {
    name: 'Mike',
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}
showThisName.call(mike);
// call은 맨 처음이 this값, 그 다음이 매개변수 값

function update(birth, occupation) {
    this.birth = birth;
    this.occupation = occupation;
}

update.call(mike, 1990, 'Engineer');
console.log(mike);
