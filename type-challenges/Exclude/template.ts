type MyExclude<T, U> = T extends U ? never : T;
// T中的元素依次和U中的元素对比，结果会返回union类型 返回对比不相等的元素

type t7 = "a" | "b" | "c";
type t9 = "a";
type t8 = MyExclude<t7, t9>;
// js
function MyExclude(T, U) {
  const result = [];
  for (let i = 0; i < T.length; i++) {
    const t = T[i];
    // let foo = false;
    // for (let j = 0; j < U.length; j++) {
    //   const u = U[j];
    //   if (t === u) {
    //     foo = true;
    //   }
    // }
    // if (!foo) {
    //   result.push(t);
    // }
    if (!U.includs(t)) {
      result.push(t);
    }
  }
  return result;
}
