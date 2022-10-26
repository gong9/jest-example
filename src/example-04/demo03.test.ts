const demo2 =(fn:Function)=>{
    setTimeout(()=>{
        fn()
    },1000)
}

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('',()=>{
    const fn = jest.fn()
    demo2(fn)

    expect(setTimeout).toBeCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),1000)
    jest.advanceTimersByTime(1000)

    expect(fn).toBeCalled()
})