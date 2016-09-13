var fs = require("fs");
var controllerCache = {};
var ignorePath = config.routerAlias;

module.exports = function* (next){
    var pathArray = this.request.path.split("/");
    var controllerName = (pathArray[1] || "index").toLowerCase();
    var actionName = (pathArray[2] || "index").toLowerCase();

    Object.keys(ignorePath).find(function(key) {
        if (new RegExp(key, 'i').test(controllerName)) {
            controllerName = ignorePath[key];
            return true;
        }
    });

    var action = getAction(controllerName, actionName);
    if(action){
        yield* action.call(this, next);
    } else {
        this.body = '404页面';
        this.throw(404);
        yield* next;
    }

    function getAction(controllerName, actionName){
        //从缓存读取controlller
        var controller = controllerCache[controllerName];
        //如果缓存没有，从文件读取controller，并存入缓存
        if(!controller){
            var controllerFilePath = `${CONTROLLER_PATH}/${controllerName}.js`;
            try {
                var controllerFile = fs.statSync(controllerFilePath);
                if(controllerFile.isFile()){
                    controller = require(controllerFilePath);
                    controllerCache[controllerName] = controller;
                }
            } catch (e){
                return null;
            }
        }

        return controller[`${controllerName}Action`];
    }

    yield next;
};
