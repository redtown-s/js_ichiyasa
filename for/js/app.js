'use strict'

let year = 2000;
while (year <= 2100) {
  if (year % 4) {
    console.log(year + ':冬季オリンピック');
  } else {
    console.log(year + ':夏季オリンピック');
  }
  year = year + 2;
}

//for
// for (let i = 1; i <= 100; i++) {
//   console.log(i + '回目のこんにちは');
// }