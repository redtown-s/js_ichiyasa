'use strict'
$(document).ready(function(){
  $('body').html('<p>jQueryの動作チェック</p>');
});

$('body').click(function () { 
  //実行したい処理
});

//readyメソッドを利用した書き方
$(document).ready(function(){
  //ここにjsのプログラムを書く
});

// S()を利用したよりシンプルな書き方
$(function(){
  //ここにjsのプログラムを書く
});