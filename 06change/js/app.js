'use strict'

let practice = document.getElementById('practice');
practice.innerHTML = '<h1>れんしゅう</h1>';
practice.style.backgroundColor = '#999999';
practice.style.fontSize = '30px'; //濃いグレー
practice.style.color = '#FFFFFF'; //白

// 要素を追加
let first = document.createElement('div'); //新しいdiv要素を作成
//属性と内容を設定
first.setAttribute('id', 'first');
first.innerHTML = '<p>要素を追加</p>';
practice.insertBefore(first, null); //要素をHTMLに追加

// さらに要素を追加
let second = document.createElement('div'); //要素を作成
second.setAttribute('id', 'second');
second.innerHTML = '<p>さらに要素を追加</p>';
practice.insertBefore(second, first); //要素を追加

// 要素を削除
let parent = first.parentElement; //親要素を取得
parent.removeChild(first); //要素を削除

// let element = document.createElement('h1');
// element.setAttribute('id','first');
// element.insertBefore(newelement, targetelement)

// //querySelecterメソッド
// document.querySelecter('.about');

// // 複数の要素を取得・操作する
// // CSSセレクタが="a.button"の要素をすべて取得
// let nodeList = document.querySelectorAll('a.button');

// // 最初にマッチした要素を取得
// let firstElement = nodeList[0];

// // 取得したすべての要素をコンソールに表示
// for (let i = 0; i < nodeList.length; i++) {
//   console.log('nodeList');
// }


// getElementById()
// querySelecter()
// querySelecterAll()
// getElementsByClassName()
// getElementsByName()
// getElementsByTagName()

// // styleプロパティ
// element.style.color = ' #FF0000';

// // id="sample"のHTML要素の文字色を「#FF0000」に変更
// let element = document.getElementById('sample');
// element.style.color = '#FF0000';

// // let practice = document.getElementById('practice');
// // practice.innerHTML = '<h1>れんしゅう</h1>';
