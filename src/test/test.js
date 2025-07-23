function throttle(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

let n = -1;
const test = throttle(() => console.log(n + 1), 2000);

for (let i = 0; i < 2; i++) {
  test();
}
