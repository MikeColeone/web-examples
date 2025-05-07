// 手写Promiss

//定义三种状态
const PENDING = "pending"; // 等待中
const FULFILLED = "fulfilled"; // 成功
const REJECTED = "rejected"; // 失败


//封装Promiss类
class CustomPromise{
    constructor(executor) {
        this.status = PENDING; // 初始状态为等待中
        this.value = undefined; // 成功的值
        this.reason = undefined; // 失败的原因
        this.onFulfilledCallbacks = []; // 成功的回调函数数组
        this.onRejectedCallbacks = []; // 失败的回调函数数组

        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback(value));
            }
        };

        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(callback => callback(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            } else if (this.status === REJECTED) {
                try {
                    const result = onRejected(this.reason);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            } else if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    try {
                        const result = onFulfilled(this.value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
                this.onRejectedCallbacks.push(() => {
                    try {
                        const result = onRejected(this.reason);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            }
        });
    }

    static all(promises) { // 静态方法，接收一个数组，返回一个新的promise对象
        return new CustomPromise((resolve, reject) => { // 返回一个新的promise对象
            let count = 0; // 计数器，记录成功的promise数量
            const results = []; // 存储成功的结果

            promises.forEach((promise, index) => { // 遍历传入

}