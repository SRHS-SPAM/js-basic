async function getName() {
    return "Mike"
}

getName().then((name) => {
    console.log(name);
})
// async는 항상 promise로 반환함

async function showName() {
    const result = await getName("Mike");
    console.log(result);
}

console.log(result);