// 定义 Promise 的三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class CustomPromise {
  constructor(executor) {
    // 初始状态为 pending
    this.status = PENDING;
    // 存储成功的值
    this.value = undefined;
    // 存储失败的原因
    this.reason = undefined;
    // 存储成功的回调函数
    this.onFulfilledCallbacks = [];
    // 存储失败的回调函数
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 执行所有成功的回调函数
        this.onFulfilledCallbacks.forEach((callback) => callback());
      }
    };

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 执行所有失败的回调函数
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };

    try {
      // 执行 executor 函数，并传入 resolve 和 reject 方法
      executor(resolve, reject);
    } catch (error) {
      // 如果 executor 函数抛出异常，调用 reject 方法
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // 处理 onFulfilled 和 onRejected 为可选参数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 创建一个新的 CustomPromise 实例
    const newPromise = new CustomPromise((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          const result = onFulfilled(this.value);
          // 如果 result 是一个 CustomPromise 实例，等待其状态确定
          if (result instanceof CustomPromise) {
            result.then(resolve, reject);
          } else {
            // 否则直接将结果传递给新的 Promise 的 resolve 方法
            resolve(result);
          }
        } catch (error) {
          // 如果执行 onFulfilled 时抛出异常，调用新的 Promise 的 reject 方法
          reject(error);
        }
      };

      const handleRejected = () => {
        try {
          const result = onRejected(this.reason);
          // 如果 result 是一个 CustomPromise 实例，等待其状态确定
          if (result instanceof CustomPromise) {
            result.then(resolve, reject);
          } else {
            // 否则直接将结果传递给新的 Promise 的 resolve 方法
            resolve(result);
          }
        } catch (error) {
          // 如果执行 onRejected 时抛出异常，调用新的 Promise 的 reject 方法
          reject(error);
        }
      };

      if (this.status === FULFILLED) {
        // 如果当前 Promise 已经成功，异步执行 handleFulfilled 方法
        setTimeout(handleFulfilled, 0);
      } else if (this.status === REJECTED) {
        // 如果当前 Promise 已经失败，异步执行 handleRejected 方法
        setTimeout(handleRejected, 0);
      } else {
        // 如果当前 Promise 还处于 pending 状态，将回调函数存储起来
        this.onFulfilledCallbacks.push(() => setTimeout(handleFulfilled, 0));
        this.onRejectedCallbacks.push(() => setTimeout(handleRejected, 0));
      }
    });

    return newPromise;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(callback) {
    return this.then(
      (value) => {
        callback();
        return value;
      },
      (reason) => {
        callback();
        throw reason;
      }
    );
  }

  static all(promises) {
    const result = [];
    let count = 0;

    return new CustomPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        CustomPromise.resolve(promise).then((value) => {
          result[index] = value;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        }, reject);
      });
    });
  }

  static race(promises) {
    return new CustomPromise((resolve, reject) => {
      promises.forEach((promise) => {
        CustomPromise.resolve(promise).then(resolve, reject);
      });
    });
  }

  static resolve(value) {
    if (value instanceof CustomPromise) {
      return value;
    }
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((_, reject) => reject(reason));
  }
}

// 使用示例
const promise1 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 1000);
});

const promise2 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 1500);
});

CustomPromise.all([promise1, promise2])
  .then((values) => console.log(values))
  .catch((error) => console.log(error))
  .finally(() => console.log("All done"));

CustomPromise.race([promise1, promise2])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
