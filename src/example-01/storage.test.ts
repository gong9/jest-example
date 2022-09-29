import storage from './storage'

describe('storage',()=>{
    it('set',()=>{
        storage.set('demo','111')
        expect(localStorage.getItem("my-app-demo")).toEqual("111");
    })
    it('get',()=>{
        localStorage.setItem("my-app-newKey", "hello");
        expect(storage.get("newKey")).toEqual("hello");
    })
})