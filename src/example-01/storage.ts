const storageKey = "my-app-";

const set = (key:string,value:string):void => {
    localStorage.setItem(storageKey+key,value)
};

const get = (key:string):string|null => {
    return localStorage.getItem(storageKey+key)
};

export default {
  set,
  get,
};
