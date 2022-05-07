type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [p in T[number]]: p;
};
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// keyof -> array -> readonly ["0", "1", "2", "3"]
type r = TupleToObject<typeof tuple>;
// js
function tupleToObject(array) {
  const obj = {};
  array.forEach((element) => {
    obj[element] = element;
  });
  return obj;
}
