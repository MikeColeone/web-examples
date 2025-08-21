function mySetInterval(fn, delay) {
  setTimeout(() => {
    fn();
    mySetInterval(fn, delay);
  }, delay);
}
