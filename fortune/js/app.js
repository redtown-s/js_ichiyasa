// おみくじオブジェクトの定義
let omikuji = {
  results: ["大吉", "吉", "中吉", "小吉", "凶"],  //omikujiのオブジェクト1(プロパティ):[データ]
  getResult: function () {  //omikujiオブジェクトのオブジェクト2(getresultメソッド)」: [データは無名関数]
    let results = this.results; //無形関数内では、omikuji(this)のプロパティ(オブジェクト1)である[results配列]を呼び出し変数に格納

    return results[Math.floor(Math.random() * results.length)];  //results[配列]のインデックスに[0-4]を入れて処理を返す。
    // 0-1未満 * 5(配列の長さ)。その計算の数値以下の最大の整数にする(結果は0-4)
  }
} //{results配列プロパティ, results[0-4]}のオブジェクトを保有

// 要素オブジェクトの取得
let getResult = document.getElementById('getResult');
let result = document.getElementById('result');

// イベントの登録
getResult.addEventListener('click', function () {
result.innerHTML = '結果：' + omikuji.getResult() + 'でした！';  //omikuji.getResult() 行頭にomikuji(オブジェクト)がないとメソッドを呼び出せない
});

