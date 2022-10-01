import handleUrlToObj from "./handleUrl";

describe("handleUrlToObj", () => {
  it("normal use", () => {
    window.location.assign("https://www.baidu.com?a=1&b=2");    
    expect(window.location.search).toEqual("?a=1&b=2");
    expect(handleUrlToObj()).toEqual({
      a: "1",
      b: "2",
    });
  });
  it("have &&",()=>{
    window.location.assign("https://www.baidu.com?");    
    expect(handleUrlToObj()).toEqual({});
  })
});
