var finalPositionOfSnake = function (n, commands) {
  let ans = 0;
  for (const c of commands) {
    if (c === "UP") {
      ans -= n;
    } else if (c === "DOWN") {
      ans += n;
    } else if (c === "LEFT") {
      ans--;
    } else {
      ans++;
    }
  }
  return ans;
};
