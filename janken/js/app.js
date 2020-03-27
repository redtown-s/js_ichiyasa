"use strict";

// じゃんけんの手を定義
const GU = 1;
const CHOKI = 2;
const PA = 3;

// 入力ダイアログボックスを表示
let hum = prompt(
  "半角数字で1-3の数字を入力してください。\n\n" +
    GU +
    ":グー\n" +
    CHOKI +
    ":チョキ\n" +
    PA +
    ":パー"
);
hum = parseInt(hum, 10);

// 入力値をチェック
if (hum !== GU && hum !== CHOKI && hum !== PA) {
  alert(
    "じゃんけんの手は1-3の数値で入力してください。F5で再読み込みして再挑戦してください"
  );
} else {
  // PC側の手を決める
  let com = Math.floor(Math.random() * 3) + 1;

  // PCの手の名前
  let comHandName = "";
  switch (com) {
    case GU:
      comHandName = "グー";
      break;
    case CHOKI:
      comHandName = "チョキ";
      break;
    case PA:
      comHandName = "パー";
      break;
  }

  // 勝ち負け結果の判定
  let msgResult = "";
  if (hum === com) {
    msgResult = "あいこでした";
  } else if (
    (com === GU && hum === PA) ||
    (com === CHOKI && hum === GU) ||
    (com === PA && hum === CHOKI)
  ) {
    msgResult = "あなたの勝ちです";
  } else {
    msgResult = "あなたの負けです";
  }

  // 結果を画面に表示
  msgResult = msgResult + "PCの出した手は「" + comHandName + "」でした。";
  alert(msgResult);
}
