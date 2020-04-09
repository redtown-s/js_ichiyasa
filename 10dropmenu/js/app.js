'use strict'


$(function () {　// HTML要素を読み込み完了後に{}内の処理を実行

  // dt要素を選択。clickメソッドの引数として無名関数を書く
  $('#menu dt').click(function () {
    // クリックイベント発生時にこの処理を行う
    $('#menu dd').slideToggle(); //slideToggleメソッド...HTML要素の表示/非表示をスライドするように切り替える
  });
});

// slideToggleメソッド...jQが提供するメソッド。指定したHTML要素の高さを操作して、slideDown/slideDownの動作を交互に行う。引数は1/1000秒単位で、変化にかかる時間を指定できる