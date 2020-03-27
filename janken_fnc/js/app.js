function janken() {
  /* 変数定義 ******************************/
  // ジャンケンの手の番号を設定
  const GU = 1;
  const CHOKI = 2;
  const PA = 3;

  /* 関数定義 ******************************/
  // 人間の手を入力する処理
  function getHumHand() {
    let hum = prompt('半角数字で1-3を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
    hum = parseInt(hum, 10);
    if (hum !== GU && hum !== CHOKI && hum !== PA) {
      return undefined;
    } else {
      return hum
    }
  }

  // コンピュータの手を決める
  function getComHand() {
    return Math.floor(Math.random() * 3) + 1;
  }

  // コンピュータの手の名前を取得
  function getHandName(num) {
    switch (num) {
      case GU:
        return 'グー'
      case CHOKI:
        return 'チョキ'
      case PA:
        return 'パー'
    }
  }

  // 結果の判定
  function getResult(com, hum) {
    if (hum === com) {
      return 'あいこでした';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
      return 'あなたの勝ちです';
    } else {
      return 'あなたの負けです';
    }
  }

  // 最終的な結果のメッセージ
  function getResultMessage(com, hum) {
    return getResult(com, hum) + '\nPCの手は「' + getHandName(com) + '」でした。\n' + 'あなたの手は「' + getHandName(hum) + '」でした。';
  }

  /* 実行する処理 ******************************/
  let hum = getHumHand(); //人間の手を入力させ、1-3の戻り値を得るメソッド
  if (!hum) {
    alert('入力値エラーです。F5で再挑戦してください。');
  } else {
    let com = getComHand(); //コンピュータの手を入力させ、1-3の戻り値を得るメソッド
    // alert(hum); 入力値のチェック
    alert(getResultMessage(com, hum)); //両者の手を引数に渡し、勝ち負け判定する処理を行い、結果をメッセージで受け取り表示する
  };
}

janken();