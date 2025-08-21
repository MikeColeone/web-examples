// 如果传入的是 '#id'，返回对应 id 的元素
// 如果传入的是 '.class'，返回所有类名对应的元素
// 否则按标签名返回所有元素
function getElement(selector) {
  if (selector.startsWith("#")) {
    return document.getElementById(selector.substring(1));
  } else if (selector.startsWith(".")) {
    return Array.from(document.getElementsByClassName(selector.substring(1)));
  } else {
    return Array.from(document.getElementsByTagName(selector));
  }
}
