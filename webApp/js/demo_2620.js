/**
 * @param {number} n
 * @return {Function} counter
 */

// js允许返回函数 内部函数允许调用任何声明在上方的变量
var createCounter = function (n) {
  let x = n - 1;
  return function () {
    x += 1;
    return x;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
