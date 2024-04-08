const prox = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        prox('/api1',{  //遇见/api1前缀的请求，触发代理请求
            target:'http://localhost:5000', //请求转发给谁
            changeOrigin:true, //控制服务器收到的请求头中的Host字段的值 （欺骗服务器，非必要）
            pathRewrite:{'^/api1':''} //重写请求路径 （必要，与服务器资源地址匹配）
        }),
        prox('/api2',{
            target:'http://localhost:5001', //配置第二台资源服务器
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),

    )
}