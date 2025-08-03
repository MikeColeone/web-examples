const arr = [1,2,3,4,5,6,7,8,9,10]

function fun(arr) {
    var i, len;
    for (i = 0, len = arr.length; i < len; i++) {
        (function(i){
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        })(i);
    }
}
function printArr(arr) {
    for (let i = 0; i < arr.length; i++)
        setTimeout(() => {
            console.log(arr[i])
        }, i * 1000)
}

printArr( arr)

// fun(arr)