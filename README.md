# kivi

一个单页面应用的脚手架：后端用[koa](https://github.com/koajs/koa)，前端用[vue.js](https://github.com/vuejs/vue)，页面样式采用[yoyo.css](https://zhouweicsu.github.io/yoyo/)。

[![Build Status](https://travis-ci.org/75team-biz/kivi.svg?branch=master)](https://travis-ci.org/75team-biz/kivi)
[![Dependency](https://david-dm.org/75team-biz/kivi.svg)]()


## 如何使用
- 将项目克隆到本地：`git clone https://github.com/75team-biz/kivi.git`
- 安装依赖：`npm install`
- 编译项目并启动服务：`npm run start`
- 在地址栏输入 `http://localhost:8888` 即可访问；如果有需要，可以在 `pm2.json` 里修改为其他端口号。
- 开发阶段运行 `npm run watch` ，可以监控文件变动，自动重新webpack编译。
