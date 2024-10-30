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

function update(birth, occupation) {
    this.birth = birth;
    this.occupation = occupation;
}

update.apply(mike, [1999, "singer"]);
console.log(mike);
// call이랑 기능은 비슷한데 배열로 데이터를 넘겨줌

const nums = [3, 10, 1, 2, 4];
const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, minNum);
const maxNum = Math.max.apply(null, maxNum);
// 같은 방식


