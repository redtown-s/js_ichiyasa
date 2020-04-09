'use strict'

let name = prompt('名前を入力してください');

greet(name);
// greet();　引数なしで呼び出した場合はundifinedが戻る

function greet(name) {
  let message = 'こんにちは';
  alert(message + name);
  return;
}

// デフォルト引数
// function greet(name = '名無しさん') {
//   let message = 'こんにちは';
//   alert(message + name);
//   return;
// }
// greet();
// greet('たろうさん');

// アロー関数
// let greet = () => {
//   let message = 'こんにちは';
//   alert(message + name);
//   return;
// }
// greet();
