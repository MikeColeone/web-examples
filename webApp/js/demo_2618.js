var checkIfInstanceOf = function (obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    classFunction === null ||
    classFunction === undefined ||
    !(classFunctin instanceof Function)
  )
    return false;

  //基于原型链判断
  while (obj.__proto__)
    if (obj.__proto__ != classFunction.prototype) obj = obj.__proto__;
    //当传入类和比较的类是同一类的时候 直接跳出
    else break;

  return obj.__proto__ === classFunction.prototype;
};

var checkIfInstanceOf = function (obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    classFunction === null ||
    classFunction === undefined ||
    !(classFunctin instanceof Function)
  )
    return false;
  else {
    //不支持obj基本类型 需要转化成object进行判断
    return Object(obj) instanceof classFunction;
  }
};
