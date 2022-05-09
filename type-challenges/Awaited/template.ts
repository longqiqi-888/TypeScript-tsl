type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;

// infer 设置一个变量
// 1.只能在条件类型中使用
// 2.设置未知数 变量
