'use strict'

/* プログラムで使用する変数の設定 ********************/
// フォームの要素を取得
let button = document.getElementById('button');
let form = document.getElementById('form');
let textarea = document.getElementById('textarea'); //textarea要素を取得

// 文字数制限
let maxTextNum = textarea.getAttribute('maxlength'); //属性値を調べる
// 残り時間（秒）
let reminingTimeNum = 10; //変数を定義

/* 要素の追加 *********************************/
// 残り文字数を表示する要素の追加
let textMessage = document.createElement('div');
let parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

// 残り時間を表示する要素の追加
let timeMessage = document.createElement('div');
parent.insertBefore(timeMessage, null); //要素を作成して追加

// テキストエリアでキーをタイプしたとき
textarea.addEventListener('keyup', function () {
  let currentTextNum = textarea.value.length; //文字数を調べる
  textMessage.innerHTML = '<p>あと' + (maxTextNum - currentTextNum) + '文字入力できます</p>';  //残り文字数を表示
});



/* イベント処理 *****************************/
// お問い合わせボタンを押したとき
button.addEventListener('click', function () {
  // フォームを表示
  form.style.display = 'block';
});

// タイマー処理で残り時間を表示。setIntervalメソッドを追加
let timerId = setInterval(function () {  //残り時間を表示
  timeMessage.innerHTML = '<p>制限時間：' + reminingTimeNum + '秒</p>';
  if (reminingTimeNum <= 0) {
    alert('制限時間終了');
    clearInterval(timerId); //タイマーを削除
  }
  reminingTimeNum--;  //変数から秒を減らす
}, 1000); //タイマーの間隔を指定




//名前のある関数だと冗長的になる
// button.addEventListener('click', showForm);

// function showForm() {
//   form.style.display = 'block';
// }

//  押されたキーを取得する
// document.addEventListener('keydown', function (event) {  //eventオブジェクトが引数に渡される
//   console.log(event.key); //コンソールにキーを表示
// });

