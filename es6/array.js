var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
// n부터 m개를 지움
console.log(arr);

var arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200);
// 1부터 3개를 지우고 지운곳에 뒤에 값을 넣는다.
console.log(arr);

var arr = ["나는", "현서", "입니다"];
arr.splice(1, 0, "대한민국", "개발자");
// 1부터 0개를 지우고 지운곳에 뒤에 값을 넣는다.
// 즉 1뒤에 저 값을 넣는다라는 뜻이됨
console.log(arr);

var arr = [1, 2, 3, 4, 5];
var result = arr.splice(1, 2);
// splice는 삭제된 요소가 반환됨
console.log(result);

var arr = [1, 2, 3, 4, 5];
arr.slice(1, 4); // [2, 3, 4]
// slice는 n부터 m까지 반환함

var arr = [1, 2, 3, 4, 5];
var result = arr.slice();
// 아무것도 안넣으면 배열이 복사됨
console.log(result);

var arr = [1, 2];
var result = arr.concat([3, 4]);
// 합쳐서 배열을 반환함
// 2차원 배열 아님
console.log(result);

var users = ["Mike", "Tom", "Jane"];

users.forEach((item, index, arr) => {
    console.log(index, item);
});
// item은 원소, index는 index, arr은 배열 그 자체

var arr = [1, 2, 3, 4, 5, 1, 2, 3];
arr.indexOf(3); // 2
//위치를 반환해줌
arr.indexOf(3, 3); // 7
// n부터 m을 찾아라
arr.lastIndexOf(3); // 7
// 뒤부터 위치를 반환해줌

arr.includes(3); // true
// 있는지 확인

var arr = [1, 2, 3, 4, 5];

var result = arr.find((item) => {
    return item % 2 === 0;
});
// 함수로 값 찾기
// 만족하는거 하나만 반환해줌

console.log(result);

var result1 = arr.findIndex((item) => {
    return item % 2 === 0;
});
// 함수로 인덱스 찾기
// 만족하는거 하나만 반환해줌

console.log(result1);

var result2 = arr.filter((item) => {
    return item % 2 === 0;
});
// 함수로 만족하는 애들 배열로 만들어서 변환

console.log(result2);

var arr = [1, 2, 3, 4, 5];
arr.reverse(); //[5, 4, 3, 2, 1]
// 역순 정렬

var arr = ["안녕", "나는", "현서야"];
var result = arr.join(" ");
// 배열을 문자열로 합쳐줌
// join의 아무값도 안넣으면 ','로  이어줌
console.log(result);

var users = "Mike,Jane,Tom,Tony";

var result = users.split(",");
// ','을 기준으로 나눠서 배열에 넣어줌
console.log(result);

Array.isArray(arr); // true
// 배열인지 확인

var arr = [27, 8, 5, 13];

arr.sort((a, b) => a - b);
// 정렬할때 문자열로 정렬함
// 버블정렬 알고리즘

console.log(arr);

var arr = [1, 2, 3, 4, 5];

var result = 0;
arr.forEach((num) => {
    result += num;
});

console.log(result);

var result = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0);
// 위에 함수랑 같음

console.log(result);
