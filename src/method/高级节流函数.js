function throttle(
  fn,
  delay = 200,
  options = { leading: true, trailing: true }
) {
  let timer = null;
  let lastExecTime = 0;
  let lastArgs, lastContext;

  // 调用函数
  const invoke = () => {
    lastExecTime = options.leading === false ? 0 : Date.now();
    timer = null;
    fn.apply(lastContext, lastArgs);
    lastArgs = lastContext = null;
  };

  const throttled = function (...args) {
    const now = Date.now();

    if (!lastExecTime && options.leading === false) {
      lastExecTime = now;
    }

    const remaining = delay - (now - lastExecTime);
    lastArgs = args;
    lastContext = this;

    if (remaining <= 0 || remaining > delay) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      invoke();
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(invoke, remaining);
    }
  };

  // 取消节流，清理定时器，避免后续执行
  throttled.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    lastExecTime = 0;
    lastArgs = lastContext = null;
  };

  // 立即执行节流函数（如果有待执行的任务）
  throttled.flush = () => {
    if (timer) {
      clearTimeout(timer);
      invoke();
    }
  };

  return throttled;
}
