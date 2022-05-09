type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

// js
// function Concat(arr1, arr2) {
// spread
//   return [...arr1, ...arr2];
// }

// foo是any类型，任何操作都是没有类型检查的，因此对其进行任意类型的赋值都是合法的
// bar是unknown类型，因此不能确定是否有msg属性，不能通过语法检查，同时unknown类型的值也不能赋值给any和unknown以外的类型变量
