var serve = require("koa-static");

module.exports = function* (next){
    console.log(this.request.path);
    if(/^\/static\//.test(this.request.path)){
        yield serve('./www');
    } else {
        yield next;
    }
};
