let i = 0;

do {
  console.log(i);
  if (i === 5) {
    continue;
    // 스킵
  } else if (i === 8) {
    break;
    // 종료
  }
  i++;
} while (i <= 10);
// 만족할때까지 실행하는데 처음값이 만족하지 않아도 한번은 실행
