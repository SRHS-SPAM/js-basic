function showName(name) {
    console.log(name);
}

const tId = setInterval(showName, 3000, 'Mike')
// 3초에 한번씩 계속 실행함

clearInterval(tId)

let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(id)
    }
}
const id = setInterval(showTime, 1000);
// clearInterval을 사용해서 중간에 멈출 수 있음
