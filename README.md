# web 练习

## Overview

建立该仓库旨在记录个人 web 学习历程，个人复习使用

1. 参考网站：

   - [MMDN](https://developer.mozilla.org/zh-CN/)
   - [菜鸟教程](https://www.runoob.com/)
   - [css 官方文档](https://www.w3.org/Style/CSS/)
   - [CODEPEN](https://codepen.io/)

2. 参考资料：

- Nefu ppt

## Development Enviromments

- vscode

## Documents

## Update

- 2024.05.06.19.54
  - 选择器
    - 后代选择器 兄弟选择器 属性选择器 类选择器

## git

1. - 出现：remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
   - 从 2021.08.13 年开始， github 不支持密码验证，要通过个人访问令牌
   - 解决方案：设置->settings->Developer settings->personal acess tokens-> generate new token->(键入信息：标注，有效期，权限)->复制 token 值（此处不复制就会导致丢失）
   - 验证身份时使用 token 代替密码
2. - unable to access 'https://github.com/bwhyman/web-examples.git/': The requested URL returned error: 403 作为贡献者推送代码时，先推送到自己 fork 的仓库，在进行 pull request,表示申请原作者拉取自己的分支
