1.  document.ready 和onload之间的区别？

    页面加载完成有两种事件：
     - ready——表示文档结构已经加载完成（不包含图片等非文字媒体文件）
     - onload——表示页面所有的页面元素加载完成后触发（包含图片等媒体文件）
     - 总结：ready在onload之前触发
2.  写一个方法实现数组的深度展平。
    ```javascript
        function flattenDeep(arr){
            var newArr=[];
            arr.map(item => {
                if(Object.prototype.toString.call(item)==="[object Array]"){
                    var childArr=flattenDeep(item);
                    newArr=newArr.concat(childArr);
                }else{
                    newArr.push(item);
                }
            });
            return newArr;
        }
    ```
3. 浏览器的同源策略，以及常见的解决方案。
    - 同源是指，域名，协议，端口相同，三者有一个不同，则为跨域
    - 解决方案：
        - 用node做服务代理
        - Nginx配置代理
        - jsonp
4. css选择器的优先级原则。
    - 最高行内样式
    - 类选择器
    - id选择器
    - 标签选择器

5. http协议的请求报文和响应报文的组成格式？
    - HTTP请求报文
        - 一个HTTP请求报文由请求行（request line）、请求头部（header）、空行和请求数据4个部分组成，
6. cookie是什么，和session有什么区别？
    - session 在服务器端，cookie 在客户端（浏览器）
    - session 默认被存在在服务器的一个文件里（不是内存）
    - session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）
    - session 可以放在 文件、数据库、或内存中都可以。
    - 用户验证这种场合一般会用 session
7. 请描述dom事件的流程，即从触发到结束的整个过程。
    - 事件流包括三个阶段:事件捕获阶段、处于目标阶段和事件冒泡阶段。首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶 段，可以在这个阶段对事件做出响应。

8. 在日常web开发中加载和交互体验上常用的优化策略。
    - 减少HTTP请求数
    - 从设计实现层面简化页面
    - 合理设置HTTP缓存
    - 资源合并与压缩
    - CSS Sprites
    - Inline Images（base64）
    - 懒加载
    - 将外部脚本置底
    - Lazy Load Javascript
    - 将CSS放在HEAD中
    - 减少不必要的HTTP跳转
    - 避免重复的资源请求
9. 什么是CSRF攻击，如何预防？
    - CSRF全称 Cross Site Request Forgery, 跨站域请求伪造.CSRF是一种夹持用户在已经登陆的web应用程序上执行非本意的操作的攻击方式。相比于XSS，CSRF是利用了系统对页面浏览器的信任，XSS则利用了系统对用户的信任。
    - 防御CSRF攻击：
        - 验证 HTTP Referer 字段
            - 这种方式依赖浏览器第三方，并不是安全的
        - 在请求地址中添加 token 并验证；
        - 在 HTTP 头中自定义属性并验证。
10. 冒泡排序。
    