class TimeLimitedCache {
  //声明一个缓存变量
  cache = new Map();

  //设置键 值 过期时间
  set(key, value, duration) {
    let tempInCache = this.cache.get(key);
    if (tempInCache) clearTimeout(tempInCache.timeout);

    let timeout = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, { value, timeout });
    //取消就定时器
    return tempInCache ? tempInCache : false;
  }

  get(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }

  count() {
    return this.cache.size;
  }
}
