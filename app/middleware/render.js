const Pug = require("koa-pug");
const pug = new Pug({
    viewPath: VIEW_PATH
});

module.exports = function* (next){
    pug.use(this.app);
    yield next;
};
