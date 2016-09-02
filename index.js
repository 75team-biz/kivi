
//全局配置
global.MIDDLEWARE_PATH = `${__dirname}/app/middleware`;
global.CONTROLLER_PATH = `${__dirname}/app/controller`;
global.VIEW_PATH       = `${__dirname}/app/view`;



var koa = require("koa");
var app = koa();

app.use(require(`${MIDDLEWARE_PATH}/static.js`));
app.use(require("./app/middleware/koa-jade.js"));
app.use(require("./app/middleware/router.js"));


app.listen(8888);
