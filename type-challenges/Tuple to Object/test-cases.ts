import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// const 字面量类型 常量 只能是一个值
let str = "123";
type s = typeof str;

const n = "234";
type m = typeof n;
// 只能接受三种类型 number string symbol
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
// 希望下面这种情况报错，要不然注释就会报错
type error = TupleToObject<[[1, 2], {}]>;

/**
 * expect(()=>{
 * type error = TupleToObject<[[1, 2], {}]>;
 * }).toThrow()
 * **/

// const let js世界
// -》typeof 把js世界中的东西转换成类型世界中的东西
// type interface type 类型世界

//3. @ts-expect-error 注释 类型断言，
