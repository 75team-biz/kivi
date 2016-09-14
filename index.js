
//全局配置
global.config          = require('./app/config/config');
global.MIDDLEWARE_PATH = `${__dirname}/app/middleware`;
global.CONTROLLER_PATH = `${__dirname}/app/controller`;
global.VIEW_PATH       = `${__dirname}/app/view`;

//引入koa
var koa = require("koa");
var app = koa();

//加载中间件
var middlewares = [
    'static',    //静态资源
    'koa-jade',  //jade模版
    'router'     //单页路由
];
for (md in middlewares) {
    app.use(require(`${MIDDLEWARE_PATH}/${middlewares[md]}`));
}


app.listen(config.port);

console.log('服务启动，监听端口:', config.port);
