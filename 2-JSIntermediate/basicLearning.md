## JS学习

#### JS事件

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


#### JS对象

+ Document对象：每个页面在加载完毕后，会有一个Document的实例被创建，叫做document，它代表了整个页面的结构，内容和一些功能，
+ **从零开始面向对象的程序设计**
    + 定义一个对象模板：在一些面向对象的语言中，我们用**类**（class）的概念去描述一个对象，但是**类**并不完全是一个对象，它更像是一个定义对象特质的模板。
    + 创造一个真正的对象
    + 具体对象：对于不同的且更为具体的事物对象，可以通过继承父类创造新的子类，子类之间可能存在不同的地方
+ JavaScript 常被描述为一种**基于原型的语言** (prototype-based language)——每个对象拥有一个**原型对象**，对象以其原型为模板、从原型继承方法和属性。
+ 对象的 **prototype** 属性：继承成员被定义的地方
+ 每个 JavaScript 函数实际上都是一个 Function 对象。
+ 每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。
+ 注意:任何您想要被继承的方法都应该定义在构造函数的prototype对象里，并且永远使用父类的prototype来创造子类的prototype，这样才不会打乱类继承结构。