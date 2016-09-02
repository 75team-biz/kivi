var Jade = require("koa-jade");
var jade = new Jade({
    viewPath: VIEW_PATH
});

module.exports = jade.middleware;
