// instanceof 是 JavaScript 中用于判断一个对象是否是某个构造函数创建的实例的运算符，常用于类型判断、继承关系判断等。
function instanceOf(obj, fn) {
  let proto = obj.__proto__;
  if (proto) {
    if (proto === fn.prototype) {
      return true;
    } else {
      return instanceOf(proto, fn);
    }
  } else {
    return false;
  }
}

// 测试
function Dog() {}
let dog = new Dog();
console.log(instanceOf(dog, Dog), instanceOf(dog, Object)); // true true
