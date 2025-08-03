const add = (a,b,c)=>{
    return a+b+c;
}


const curry = (fn)=>{
    // console.log(fn.length)
    const length = fn.length
    return function(...args){
        if(args.length>=length) {
            return fn.apply(this, args)
        }else{
            console.log(args)
            return curry(fn.bind(this, ...args))
        }
    }
}

// curry(add)

console.log(curry(add)(1)(2)(3))