type AnyFunction = (...args: any[]) => any;

const after100: AnyFunction = (cb: Function) => {
  console.log("开始了");

  setTimeout(() => {
    cb();
    console.log("结束了");
  }, 100);
};

export default after100
