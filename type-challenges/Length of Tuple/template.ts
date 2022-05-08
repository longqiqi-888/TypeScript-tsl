type Length<T extends readonly any[]> = T["length"];

// js
function getLength(arr) {
  if (!Array.isArray(arr)) return;
  return arr.length;
}

// 什么是tuple类型
// tuple(定死定长的数组类型) 和普通的数组有什么区别 就像一个类数组，可以规定每一个元素的类型
// [string ,number]

// tuple类型 取值一定有值，是固定长度的
type stringNumber = [string, number];

const str: stringNumber = ["123", 123];
type t1 = stringNumber["length"];

type stringArray = string[];
type t5 = stringArray["length"];
