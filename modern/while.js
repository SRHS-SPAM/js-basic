let i = 0;

while (i <= 10) {
  console.log(i);
  if (i === 5) {
    continue;
    // 스킵
  } else if (i === 8) {
    break;
    // 종료
  }
  i++;
}
// 만족할때까지 실행
