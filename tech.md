## 技术笔记

1. 异步编程：promise 和 setTimeout 函数，后者是代码中执行延迟的 Web API, Promise 表示一个执行成功或失败的对象，本质上是一个返回的对象，可以附加回调函数，而不是将回调传给函数

   ```js
   let promise = new Promise((resolve, reject) => {
     let condition = true; // 这可以是某个操作的结果

     // 1秒后检查条件并解决或拒绝 Promise
     setTimeout(() => {
       if (condition) {
         resolve("Promise 已完成！");
       } else {
         reject("Promise 被拒绝！");
       }
     }, 1000);
   });

   // 将 then() 和 catch() 处理程序附加到 Promise
   promise
     .then((value) => {
       // 如果 Promise 已解决，则执行此操作
       console.log(value); // 输出: Promise 已完成！
     })
     .catch((error) => {
       // 如果 Promise 被拒绝，则执行此操作
       console.log(error);
     });
   ```

   创建了 Promise,成功的时候执行 then 的回调函数，时报的时候捕获到失败的对象，执行失败的回调函数

2. setTimeout 和事件循环

   调用了 setTimeout,js 运行时设置了计时器，但随后继续执行任何后续代码，他不会等待计时器完成，而是等待计时器完成,比如以下代码就是同时打印 100 次,setTimeout 不会立即执行，但是也不会阻塞主线程，被安排到事件循环的异步队列中，延迟 1 秒后同时执行，几乎同步执行，但是还是按照队列的先进先出的性质，同时任务被按顺序堆入主线程调用栈中，先进异步队列的先执行了

   ```js
   for (let i = 0; i < 100; i++) {
     setTimeout(() => {
       console.log(1);
     }, 1000);
   }
   ```

   clearTimeout 是 js 取消先前调用 settimeout 建立的定时器

3. js 的事件循环机制，js 使用堆栈调用函数管理函数执行，完成时从堆栈中执行，执行结束直接从堆栈中移除，由于 js 的单线程机制，一次只能执行一个函数
4. 并发与事件循环

   1. javaScript 运行一段代码（此代码在主线程上运行）。
   2. 当遇到异步操作（如 setTimeout、fetch 等）时，JavaScript 将其启动，然后继续运行其余代码。它不会等待异步操作完成。这些异步操作可能在后台运行，但不会运行在主 JavaScript 线程上。
   3. 当异步操作完成时，其回调函数将被放入任务队列中。
   4. 一旦调用堆栈为空（即，当前事件循环的所有代码都已执行完毕），事件循环将从任务队列中获取第一个任务并将其推送到调用堆栈中，以立即执行它。

### 具有时间限制的缓存

1. 键值存储缓存的时候一定时间后会过期，这是为了控制缓存大小不会过大，其次避免缓存时间过长，看到过时无效的数据
2. 缓存实例

   ```js
   const cache = new TimeLimtedCache();
   async function getFileWithCache(filename) {
     let content = cache.get(filename);
     if (content !== -1) return content;
     content = await loadFileContents(filename);
     const ONE_HOUR = 60 * 60 * 1000;
     cache.set(filename, content, ONE_HOUR);
     return content;
   }
   ```

getFileWithCache 尝试从缓存中加载数据，缓存命中会立即返回结果，否则会下载数据并返回下载的数据并填充缓存

## 前端缓存
