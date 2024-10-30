// 일정시간이 지나면 실행

function fn() {
    console.log(3)
}

setTimeout(fn, 2000);
// 2초 뒤 실행함

function showName(name) {
    console.log(name);
}

setTimeout(showName, 3000, 'Mike')
// 함수에 인자가 필요하면 뒤에 적어줌

