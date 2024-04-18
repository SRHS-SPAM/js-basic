// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) / 2;

// console.log(result);
//prompt는 string을 기본으로 입력받음
//자동 형변환됨 그래서 이렇게 하면 4040이 나옴

console.log(String(3), String(true), String(null));
// String으로 감싸면 문자열이됨

console.log(Number("123"), Number(true), Number(false), Number("ㅇㅁㄴㅇ"));
// Number으로 감싸면 숫자가 됨 심지어 true는 1, false는 2, 그냥 문자열을 넣으면 NaN뜸

console.log(Boolean(NaN), Boolean(1), Boolean(1));
// Boolean은 괜찮은거 같으면 true, 아니면 false 이건 알잘딱ㄱㄱ
