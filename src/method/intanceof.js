// 实现一个函数 myInstanceOf(obj, constructor) 判断 obj 是否为 constructor 的实例。

function myInstanceOf(obj, constructor) {
  if (typeof obj !== "object" || obj === null) return false;
  let temp = obj.__proto__;
  while (temp !== null) {
    if (temp === constructor.prototype) {
      return true;
    }
    temp = temp.__proto__;
  }
  return false;
}

//更安全的版本
// function myInstanceOf(obj, constructor) {
//   if (typeof obj !== 'object' || obj === null) return false;

//   let proto = Object.getPrototypeOf(obj);
//   const targetProto = constructor.prototype;

//   while (proto !== null) {
//     if (proto === targetProto) return true;
//     proto = Object.getPrototypeOf(proto);
//   }

//   return false;
// }

const arr = new Array(1, 2, 3);
const obj = {
  apple: "1212",
};

function test() {}
console.dir(test);
console.dir(arr.__proto__);
console.log(myInstanceOf(arr, Object));
console.log(myInstanceOf(obj, Object));
console.dir(obj.prototype);
