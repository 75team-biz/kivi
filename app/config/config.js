module.exports = {
    port: process.env.PORT || 8888, //端口号
    staticUrl: /\.(js|css|html|ico|png|jpg|gif|map)$/i, //静态资源
    publicUrl: /^\/(404|error|mock|help)?($|\?|\/)/i, //无需登录的公开页面
    routerAlias: { //路由解析别名
        '^(home|blog|about)': 'index'
    }
};
