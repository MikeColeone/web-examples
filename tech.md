## 什么是 CDN

CDN 的全称是 **Content Delivery Network（内容分发网络）** ，它是一种加速网页内容加载的技术。下面是详细解释，通俗易懂：

---

### 🌐 什么是 CDN？

CDN 是一组分布在世界各地的 **服务器网络** ，它的作用是把你网站上常用的文件（比如图片、视频、CSS、JavaScript 等）缓存到多个地区的服务器上。

#### 比如：

当你的网站使用了 CDN 提供的资源（例如：Font Awesome 图标库），用户访问时，会自动选择 **离用户最近的服务器** 加载这些文件，从而大大提高速度。

---

### 📦 CDN 主要用来加速的内容包括：

- 静态文件（CSS、JavaScript）
- 图像、视频、字体文件
- 第三方库（jQuery、Bootstrap、Font Awesome 等）

---

### 🚀 CDN 的优点：

| 优点                | 说明                                                     |
| ------------------- | -------------------------------------------------------- |
| ⏱️ 加快加载速度     | 用户从离自己最近的服务器下载资源                         |
| 🌍 全球可用         | 国际用户访问也快                                         |
| 💪 减轻主服务器压力 | 静态资源由 CDN 托管，主服务器只处理动态内容              |
| 🔒 更安全           | 有的 CDN 还能抵御 DDoS 攻击                              |
| ☁️ 更高可用性       | 即使你的网站服务器挂了，CDN 上的内容还能继续访问一段时间 |

---

### 🧠 举个例子：

```html
<!-- 从 CDN 加载 Font Awesome 图标库 -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  rel="stylesheet"
/>
```

如果不用 CDN，你就得把这份 CSS 文件下载到你自己的服务器上，别人访问你网站时都要从你的服务器下载。而用了 CDN，别人就能从最近的节点访问，速度快，还不占你服务器带宽。

## 计时函数

```js
function benchmark(fn, name) {
  const start = performance.now();
  for (let i = 0; i < runs; i++) {
    fn();
  }
  const end = performance.now();
  const avg = (end - start) / runs;
  console.log(`${name} 平均耗时: ${avg.toFixed(6)} 毫秒`);
}
```
