使用node.js  编写论坛体系
 DataBase:   Mongodb
 runtime:     node @1.10.0
 htmltemplate: art-trmplate


           路由设计

     路径         方法     get参数         post参数             是否需要登陆           备注
     /            get                                                                 渲染首页
    /register     get                                                                 渲染注册页面
    /register     post                email,nickname,password                         处理注册页面
    /login        get                                                                 渲染登陆页面
    /login        post                 email,password                                 处理登陆请求
    /logout       get                                                                  退出登陆
 找不到资源写不下去了.....