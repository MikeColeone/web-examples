/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1); //初始化全是质数
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      //这里存在一次强转
      ans++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }

  return ans;
};
