function numberOneTimes(arr: number[]): number {
  let myMap = new Map();
  arr.forEach((i) => {
    myMap.set(i, (myMap.get(i) || 0) + 1);
  });

  // 找到第一个出现次数为1的元素
  for (let [key, value] of myMap) {
    if (value === 1) {
      return key;
    }
  }
  return -1;
}

function numberOneTimes2(arr: number[]) {
  let ans = 0;

  arr.forEach((i) => {
    ans ^= i;
  });
  return ans;
}

console.log(numberOneTimes2([1, 1, 2]));
