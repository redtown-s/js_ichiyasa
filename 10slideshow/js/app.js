'use strict'

$(function () { //読み込み完了後に実行

  //スライドに使用する要素を指定するため、セレクタに「.slideshow」クラスを指定
  $('.slideshow').slick({ //スライドショーの要素を選択してslickメソッドを実行

    //プラグインで提供されるslickメソッドと使って、スライドショーの各設定を記述
    autoplay: true,  //自動再生オン
    autoplaySpeed: 3000,
    dots: true  /* 枚数を示すdots。画像下の〇アイコン */
  });
});