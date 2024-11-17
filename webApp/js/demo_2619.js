Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

// 在js越界会返回undefined 不会报错
// 但是无法处理 数组只存储一个空元素的情况
// Array.prototype.last = function () {
//   return this[this.length - 1] ?? -1;
// };
