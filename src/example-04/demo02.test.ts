function infiniteTimerGame(callback:Function) {
    console.log('Ready....go!');
  
    setTimeout(() => {
      console.log("Time's up! 10 seconds before the next game starts...");
      callback && callback();
  
      // Schedule the next game in 10 seconds
      setTimeout(() => {
        infiniteTimerGame(callback);
      }, 10000);
    }, 1000);
  }

  jest.useFakeTimers()
  jest.spyOn(global,'setTimeout')

  test('',()=>{
    const fn = jest.fn()
    infiniteTimerGame(fn)

    expect(setTimeout).toBeCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),1000)

    jest.runOnlyPendingTimers()

    expect(fn).toBeCalledTimes(1)
    expect(setTimeout).toBeCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),10000)
  })
