const Pug = require("koa-pug");
const pug = new Pug({
    viewPath: VIEW_PATH
});

module.exports = async function(ctx, next){
    pug.use(ctx.app);
    await next();
};
