const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
})

pr.then(
    function(result) {
        console.log(result + ' 가지러 가자.')
    }
).catch(
    function(err) {
        console.log('다시 주문해주세요')
    },
).finally(
    function() {
        console.log('끝~')
    }
)
// catch는 리젝뜰때만 사용됨
// finally는 마지막에 실행됨