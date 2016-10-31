const serve = require("koa-send");

module.exports = async (ctx, next) => {
    if(/^\/static\//.test(ctx.path)){
        await serve(ctx, ctx.path, {root: './www'});
    } else {
        await next();
    }
};
