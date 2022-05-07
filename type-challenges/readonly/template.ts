type MyReadonly<T> = {
  readonly // T是接口，不能直接写in T，要用到lookup（keyof 所有的key返回）
  [p in keyof T]: T[p];
};

interface user {
  a: string;
  b: string;
}

type r = keyof user; //[a,b]
// 验证
const v: r = "a";

// interface User {
//   readonly name: string;
// }

// const xiaotao: User = {
//   name: "taotao",
// };

// xiaotao.name = "qiqi";

function readonly(obj) {
  const result = {};
  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }
  return result;
}

//  返回一个对象 {}
// 遍历 (js对象 ts接口) in-》mapped keyof ->lookup
// 加上readonly
// 取接口里面的值 indexed
