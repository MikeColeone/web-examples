const obj ={}
const obj1 = {
    name:'xiaoming',
    age:18
}

const object2 = {
}
Object.defineProperty(object2, 'secret', {
    value: 42,
    enumerable: false
});

function isEmpty(obj){
    // console.dir( obj)
    for (let key in obj){
        console.log(Object.getOwnPropertyNames(key))

        console.log(key)
        return false;
    }
    return true;
}

if(JSON.stringify(object2) === '{}'){
    console.log('empty obj');
}
else{
    console.log('not empty obj')
}
//无法处理不可枚举对象
isEmpty(obj1)