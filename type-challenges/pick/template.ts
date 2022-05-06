// "title" | "completed"  联合类型 union
// keyof 获取到todo里面所有的key 把接口转换成[title、description、completed] 会进行依次对比，类型约束
type MyPick<T, K extends keyof T> = {
  [p in K]: T[p];
};

function myPick(todo, keys) {
  let obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}
// https://www.typescriptlang.org/docs/
// 返回一个对象 {}
// 遍历foreach mapped
// todo[key]取值 indexed
// 看看key在不在todo里面  lookup
