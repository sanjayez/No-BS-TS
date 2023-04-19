const myCallBack = <T>(val: T) => {
  console.log(val);
};

const myForEach = <T>(items: T[], callback: (v: T) => void): void => {
  items.reduce((acc, val) => {
    callback(val);
    return undefined;
  }, undefined);
};

myForEach([1, 2, 3], myCallBack);
