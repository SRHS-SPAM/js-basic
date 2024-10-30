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

const upadateMike = update.bind(mike);

upadateMike(1980, "police")
console.log(mike);