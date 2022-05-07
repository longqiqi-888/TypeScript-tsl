// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// 看看能不能解构出一个first，要是能就return,不能就never
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type Tail<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest
  : never;
type t4 = Tail<[1, 2, 3, 4]>;
// T[number]
type ages = [];
// union，ages要是没有会返回never
type t2 = ages[number];
// 看看某个值在不在union里面 T[0]没有会返回undefined，
type t3 = 1 extends ages[number] ? "true" : "false";

// js
function first(arr) {
  // if (arr.length === 0) {
  //   return "never";
  // }
  // return arr[0];
  const [first, ...rest] = arr;
  return first ? first : "never";

  // =============
  // return arr.shift();
  // let array = arr.slice(0);
  // array.splice(1);
  // return array;
}

// 知识点
/**
 * 1.extends 类型条件判断
 * 2.获取 tuple 的length 属性 indexed
 * 3.extends union 判断的规则
 * 4.inter 的使用 ->推断
 * */
