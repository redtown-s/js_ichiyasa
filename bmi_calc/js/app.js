// 体重の数値を得る
let weight = prompt('BMI測定：まずは体重(kg)を入力してください');
// 身長の数値を得る
let height = prompt('次に身長(m)を入力してください');
//BMI計算し警告ダイアログに表示
let bmi = (weight / (height * height))*100;
bmi = (Math.round(bmi, 3))/100;
let messeage = 'あなたのBMIは「'+ bmi +'」です。';
alert(messeage);