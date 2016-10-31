const router = require("koa-router")();

module.exports = async (ctx, next) => {
    router.get('*', function(ctx, next){
        ctx.render('base');
    });

    ctx.app.use(router.routes());
    ctx.app.use(router.allowedMethods());

    await next();
};
