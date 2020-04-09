// おみくじの結果データを作成
results = ['大吉', '吉', '中吉', '小吉', '凶'];

// 配列をコンソールに表示
console.log(results);

// インデックスが0の要素をコンソールに表示
console.log(results[0]);

// 配列に所属するすべてのデータをfor文ですべて表示
for (let i = 0; i < results.length; i++) {
  console.log('index：' + i + 'データ：' + results[i]);
}

// // オブジェクトを作成し、データをまとめる
// let human = {
//   name: '山田一郎',
//   age: 31,
//   height: 170,
//   weight: 70
// }

// console.log(human) ;
// console.log(human.name);

