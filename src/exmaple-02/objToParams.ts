interface Obj {
  [propName: string]: string | number;
}

const objToParams = (obj: Obj) => {
  return Object.entries(obj).reduce((pre, cur, index) => {
    return (pre = pre + (index === 0 ? "" : "&") + `${cur[0]}=${cur[1]}`);
  }, "");
};

export default objToParams;
