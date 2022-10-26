const demo =(fn:Function)=>{
    setTimeout(()=>{
        fn()
    },1000)
}

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('',()=>{
    const fn =jest.fn()
    demo(fn)

    expect(fn).not.toBeCalled()
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1)
})