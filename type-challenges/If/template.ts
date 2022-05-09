type If<C extends boolean, T, F> = C extends true ? T : F;

// js
// function IF(C, T, F) {
//   if (C != "true" || C != "false") {
//     new Error("error");
//   }
//   return C ? T : F;
// }
type t0 = null extends false ? "true" : "false";
// 知识点
// 类型兼容 分配规则
// null 严格模式和非严格模式下的区别
//->如果在非严格模式下null与布尔值对比是匹配的，走true
// type-compatibility
