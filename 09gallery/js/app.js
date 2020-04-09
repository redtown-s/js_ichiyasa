// オブジェクトを配列でまとめる
// 呼び出す際にプロパティ名が必要なもの...オブジェクト
// 必要無いもの...配列
// でまとめると扱いやすいデータになる

let msg = document.getElementById('hello');


// アルバムデータの作成(写真画像とキャプションまとめたアルバム)
// src(プロパティ) , msg(キャプション)
let album = [
  { src: 'img/1.jpg', msg: '山道の緑が気持ちいい' },
  { src: 'img/2.jpg', msg: '階段がきつかった' },
  { src: 'img/3.jpg', msg: '高尾山' },
  { src: 'img/4.jpg', msg: '帰りはロープウェイでスイスイ' },
  { src: 'img/5.jpg', msg: '締めのソバ' }
];

// 最初のデータを表示しておく
// メインの写真画像を準備する
let mainImage = document.createElement('img'); //img要素を作成
mainImage.setAttribute('src', album[0].src); //album[0]から、src属性をセット(src属性に写真画像の場所を指定)
mainImage.setAttribute('alt', album[0].msg); //album[0]から、alt属性をセット(キャプションの値をセット)

// メインのキャプションを準備する
let mainMsg = document.createElement('p'); //p要素を新規作成
mainMsg.innerText = mainImage.alt; //キャプションをセット

// HTMLに反映する
let mainFlame = document.querySelector('#gallery .main'); //HTML文書の先頭から順に探し始めて、引数に指定したCSSセレクタに最初にマッチした要素を取得
mainFlame.insertBefore(mainImage, null); //要素を追加
mainFlame.insertBefore(mainMsg, null);


// サム(thumb)ネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb'); //CSSセレクタ要素を取得
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img'); //img要素を作成
  thumbImage.setAttribute('src', album[i].src); //(#gallery .thumbタグ内に作成したimgタグに)src属性をセット
  thumbImage.setAttribute('alt', album[i].msg); //msg属性をセット
  thumbFlame.insertBefore(thumbImage, null); //(thumbImageの最後の要素として)img要素をHTML文書に追加
}

// サムネイルの親要素であるthumbFlameにクリックイベントを登録する
// イベントが発生したときにクリックされたのがimg要素かどうか判定する
thumbFlame.addEventListener('click', function (event) { //イベントリスナーで指定した関数の第1引数eventにイベントオブジェクト

  // src属性がプロパティ値を持っているか（空ではないか）確認
  if (event.target.src) { //  クリックされたthumbFlame(#gallery>.thumb>imgタグ内>の<src="xxx"> 要素)を参照
    // 写真画像とキャプションを変更する

    // console.log(event.target.src); //値の確認
    // console.log(event.target.alt);

    mainImage.src = event.target.src; //mainImageのsrc属性に、クリックされたimg要素(thumbFlame(#gallery>.thumb>imgタグ要素内)のsrc属性値（パス）を代入
    mainMsg.innerText = event.target.alt; //mainMsgのテキストを、クリックされたimg要素のalt属性値を指定して書き換える

  }
});