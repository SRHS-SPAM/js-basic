let desc = `오늘은 말고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`;
// 백틱을 사용하면 여러줄로 쓸 수 있음

desc.length;
// 배열과 동일하게 문자열의 길이를 찾을 수 있음
desc[1];
// 배열과 동일하게 특정 위치에 접근할 수 있음

desc.toUpperCase();
// 대문자로 변환해줌

desc.toLowerCase();
// 소문자로 변환해줌

desc.indexOf("날씨");
// 저 문자가 어디에 위치되어있는지 알려줌.

desc.indexOf("dasf");
// 만약 찾는 글자가 없으면 -1을 반환함

if (desc.indexOf("오늘") > -1) {
    console.log("오늘이 있어요");
}
// 이런식으로 boolean처럼 사용도 가능함
// 맨 앞 글자는 인덱스가 0이여서 -1보다 큰가를 조건으로 넣어줘야함

if (desc.includes("오늘")) {
    console.log("오늘이 있어요");
}
// includes 쓰면 그냥 있나 없나 체크만 해줌

let dec = "abcdefg";

dec.slice(2); // "cdefg"
dec.slice(0, 5); // abcde
dec.slice(2, -2); // cde
// 끝나는 부분을 안적어주면 시작점부터 끝까지 나온다.

dec.substring(2, 5); // cde
dec.substring(5, 2); // cde
// n과 m 사이를 출력하는거라 순서를 다르게 해도 출력이 됨
// 하지만 음수는 0으로 인식해서 처음부터 출력되게함

dec.substr(2, 4); // cdef
dec.substr(-4, 2); //de
// n부터 m개를 가져온다.

dec.trim();
// 공백을 지워줌
