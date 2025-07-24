//模拟实现 Object.create(proto)，返回一个以 proto 为原型的空对象。

function myCreate(proto) {
  function F() {}
  F.prototype = proto;
  let ans = new F();
  return ans;
}
//实际上我们关心的是 构造函数创建的实例的__proto__指向的是它的原型
// const animal = { eat: "shi" };
// animal.__proto__ === Object.prototype;
// const dog = Object.create(animal);
// console.log(dog.__proto__);
