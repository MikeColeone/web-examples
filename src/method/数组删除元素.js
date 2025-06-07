// delete_benchmark.js

const { performance } = require("perf_hooks");

const list = Array.from({ length: 10001 }, (_, i) => i);
// const list = new Array(10001).fill(0).map((_, i) => i);
const listDelete = [5000, 2000, 10000];
//有序的话才能直接调用splice
const runs = 10000;

// 方法1：filter + includes
function methodFilter() {
  return list.filter((_, index) => !listDelete.includes(index));
}

// 不排序的splice方法

// 方法2：splice（倒序）
function methodSplice() {
  const newList = [...list];
  const sortedDelete = [...listDelete].sort((a, b) => b - a);
  for (let i of sortedDelete) {
    newList.splice(i, 1);
  }
  return newList;
}

function methodSplice2() {
  const newList = [...list];
  for (let i = listDelete.length - 1; i >= 0; i--) {
    newList.splice(listDelete[i], 1);
  }
  return newList;
}

// 方法2：splice（正序）
function methodSpliceForward() {
  const newList = [...list];
  const sortedDelete = [...listDelete].sort((a, b) => a - b);
  for (let i = 0; i < sortedDelete.length; i++) {
    newList.splice(sortedDelete[i] - i, 1);
  }
  return newList;
}

// 方法3：Set + 遍历重建
function methodSet() {
  const deleteSet = new Set(listDelete);
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (!deleteSet.has(i)) {
      result.push(list[i]);
    }
  }
  return result;
}

// 计时函数
function benchmark(fn, name) {
  const start = performance.now();
  for (let i = 0; i < runs; i++) {
    fn();
  }
  const end = performance.now();
  const avg = (end - start) / runs;
  console.log(`${name} 平均耗时: ${avg.toFixed(6)} 毫秒`);
}

// 运行测试
benchmark(methodSplice, "splice 删除");
benchmark(methodSplice2, "splice 倒序删除");
benchmark(methodSpliceForward, "splice 正序删除");
benchmark(methodSet, "Set + 重建");
benchmark(methodFilter, "filter + includes");
