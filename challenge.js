var myCallBack = function (val) {
  console.log(val);
};
var myForEach = function (items, callback) {
  let value = items.reduce(function (acc, val) {
    callback(val);
    return undefined;
  }, undefined);
  console.log(value);
};
myForEach([1, 2, 3], myCallBack);
