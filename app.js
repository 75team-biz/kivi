'use strict'
require("babel-register")({
    presets: ['es2015', 'stage-3'],
    plugins: ['transform-async-to-generator']
});
require("babel-polyfill");

//全局配置
global.config          = require('./app/config/config');
global.middleware_path = `${__dirname}/app/middleware`;
global.controller_path = `${__dirname}/app/controller`;
global.VIEW_PATH       = `${__dirname}/app/view`;

//引入koa
var Koa = require("koa");
var app = new Koa();

//加载中间件
var middlewares = [
    'static',    //静态资源
    'render',    //渲染模版
    'router'     //单页路由
];
for (let md in middlewares) {
    app.use(require(`${middleware_path}/${middlewares[md]}`));
}


app.listen(config.port);

console.log('服务启动，监听端口:', config.port);
