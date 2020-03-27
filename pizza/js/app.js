"use strict";

let budget = prompt("所持金を数字で数字で入力してください");
budget = parseFloat(budget); //文字列を数値に変換

let isHungry = confirm("おなかは空いていますか？"); //OK=true

//条件判定がtrueの時
if (isHungry) {
  if (budget >= 1500) {
    alert("ピザを注文しました");
  } else if (budget >= 500) {
    alert("ポテトを注文しました");
  } else {
    alert("節約、節約 ...");
  }
//条件判定がfalse
}else{
  alert("また今後");
}

