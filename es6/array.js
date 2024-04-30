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

let users = ["Mike", "Tom", "Jane"];

users.forEach((item, index, arr) => {
    console.log(index, item);
});
// item은 원소, index는 index, arr은 배열 그 자체

var arr = [1, 2, 3, 4, 5, 1, 2, 3];
arr.indexOf(3); // 2
//dnl
