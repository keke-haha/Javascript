## JS学习 -- 事件

+ 网络事件不是JS语言的核心，它们被定义成内置于浏览器的JS API
+ 添加事件的方法：
    1. 直接给事件属性赋值
        ~~~javascript
            // 改变背景颜色
            const btn = document.querySelector('button');

            function random(number) {
                return Math.floor(Math.random() * number);
            }

            btn.onclick = function () {
                const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
                document.body.style.backgroundColor = rndCol;
            }   
        ~~~
    2. 使用 addEventListener() 和removeEventListener() 添加事件监听
        ~~~javascript
            // 改变背景颜色
            const btn = document.querySelector('button');

            function random(number) {
                return Math.floor(Math.random() * number);
            }

            function bgChange () {
                const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
                document.body.style.backgroundColor = rndCol;
            }   

            btn.addEventListener('click', bgChange);
        ~~~
        + 优缺点
            1. 相比方法1，方法2的机制还提供了许多其他更加强大的特性和选项
            2. 方法2虽然更强大，但是在老旧的浏览器可能并不兼容
+ 事件冒泡和捕获
    + 冒泡含义：当一个XXX事件发生在具有父元素的元素上时，浏览器检查实际点击的元素是否在冒泡阶段中注册了一个XXX事件处理程序，如果是运行它，然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，等等，直到它到达<html>元素。
    + 捕获含义：浏览器检查元素的最外层祖先<html>，是否在捕获阶段中注册了一个XXX事件处理程序，如果是，则运行它；然后，它移动到<html>中单击元素的下一个祖先元素，并执行相同的操作，然后是单击元素再下一个祖先元素，依此类推，直到到达实际点击的元素。
    + 解决方法：
        1. stopPropagation()：stopPropagation()的函数, 当在事件对象上调用该函数时，它只会让当前事件处理程序运行，但事件不会在冒泡链上进一步扩大
