function deepClone(obj, hash = new WeakMap()) {
  // Check if the value is a primitive type
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Check for circular references
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // Create a new object or array based on the type of the original object
  const clone = Array.isArray(obj) ? [] : {};

  // Store the clone in the hash map to handle circular references
  hash.set(obj, clone);

  // Recursively clone each property
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }

  return clone;
}

// WeakMap 拷贝完成后 其中的映射也会被自动释放
// 同时键只能为对象
