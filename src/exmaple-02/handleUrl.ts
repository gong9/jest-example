const handleUrlToObj = () => {
  const { search } = window.location;
  const urlParams = search.slice(1);

  // a=3&b=4
  const urlParamsArr = urlParams.split("&");
  // [a=3,b=4]

 return urlParamsArr.reduce((pre, cur) => {
    const [key, value] = cur.split("=");
    return {
      ...pre,
      [key]: value,
    };
  }, {});
};


 export default handleUrlToObj
