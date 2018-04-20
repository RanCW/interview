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


11. prototype和__proto__的关系是什么？
    - __proto__——隐式原型
        - JavaScript中任意对象都有一个内置属性[[prototype]]，在ES5之前没有标准的方法访问这个内置属性，但是大多数浏览器都支持通过__proto__来访问。
        - 
    - prototype——显式原型
        - 每一个函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。
        - 通过Function.prototype.bind方法构造出来的函数是个例外，它没有prototype属性。
12. 什么是怪异模式？
    在没有声明DTD的情况下，浏览器会默认触发怪异模式，怪异模式下，声明的宽高包含padding和border。

13. 从输入URL到页面展示经历了些什么？
    1. DNS解析
    2. TCP连接
    3. 发送HTTP请求
    4. 服务器处理请求并返回HTTP报文
    5. 浏览器解析渲染页面
        1. 解析HTML以构建DOM树：渲染引擎开始解析HTML文档，转换树中的html标签或js生成的标签到DOM节点，它被称为 – 内容树。 
        2. 构建渲染树：解析CSS（包括外部CSS文件和样式元素以及js生成的样式）成样式结构体，根据CSS选择器计算出节点的样式，创建另一个树 —- 渲染树（render tree）。
        3. 布局渲染树：从根节点递归调用，计算每一个元素的大小、位置等，给每个节点所应该出现在屏幕上的精确坐标。 
        4. 绘制渲染树：遍历渲染树，每个节点将使用UI后端层来绘制。
    6. 连接结束

14. 什么是原型、原型链，他们之间的关系是什么？
15. TCP与UDP之间的关系是什么？他们有什么区别？
    1. tcp协议
        - 是面向有连接的协议，也就是使用tcp协议传输数据之前，一定要在发送和接收方之间建立连接。一般情况建立连接需要三步，关闭连接需要四步。
        - 有数据重传、流量控制等功能，所以TCP协议能够正确处理丢包问题，能够保证接收方接收到数据的完整性。
        - TCP协议规范较多，所以效率不如UDP协议，不适合实时的视频、语音通信。
    2. UDP协议
        - 是面向无连接的协议，
        - 只会将数据传递给接收端，但是不关注接收端是否能够收到数据，但正是这个特性，使得其比较适合视频、音频类的及时通信。

    
    