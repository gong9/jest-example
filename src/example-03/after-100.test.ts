import after100 from "./after-100";

describe("after100", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("可以在 1000ms 后自动执行函数", () => {
    jest.spyOn(global, "setTimeout");
    const callback = jest.fn();

    expect(callback).not.toHaveBeenCalled();

    after100(callback);

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 100);
  });
});
