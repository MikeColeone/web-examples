/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let t = 0;
  let ans = 0;
  if (arr.length < k) return 0;
  for (let i in arr) {
    if (i < k) {
      t += arr[i];
      continue;
    }
    if (t / k >= threshold) ans++;
    t += arr[i] - arr[i - k];
    console.log(t / k);
  }
  if (t / k >= threshold) ans++;
  return ans;
};
