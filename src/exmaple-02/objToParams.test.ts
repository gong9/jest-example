import objToParams from "./objToParams";

describe('objToParams',()=>{
    // 一个参数
    it('normal one param',()=>{
        expect(objToParams({a:1})).toEqual('a=1')
    })

    // 多个参数
    it('normal',()=>{
        expect(objToParams({a:1,b:2})).toEqual('a=1&b=2')
    })


})