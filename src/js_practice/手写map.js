Array.prototype.myMap = function(callback, thisArg) {
    console.log(thisArg)
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const result = [];
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
        if (i in arr) {
            result[i] = callback.call(thisArg, arr[i], i, arr);
        }
    }

    return result;
};


const arr = [1, 2, 3, 4, 5];
console.log(arr.myMap(item => item * 2));
