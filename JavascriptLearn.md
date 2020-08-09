## JS学习

### 1、 初始Javascript

##### 1.1 JavaScript历史

+ 布兰登 艾奇（1961年～）
+ 在1995年利用10天完成设计

##### 1.2 JavaScript是什么

+ JavaScript是世界上最流行的语言之一，是一种**运行在客户端的脚本语言**
+ 脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来解释并执行
+ 也可以基于Node.js技术进行服务器编程

##### 1.3 JavaScript的作用

+ 表单动态校验（最初的目的）
+ 网页特效
+ 服务端开发（Node.js）
+ 桌面程序（Electron）
+ App（Cordova）
+ 物联网（Ruff）
+ 游戏开发（cocos2d-js）

##### 1.4 HTML/CSS/JS的关系

+ HTML：标记语言，用于决定网页结构和内容（决定看到什么），相当于人的身体
+ CSS：标记语言，用于决定网页呈现给用户的模样（决定好不好看），相当于给人穿衣服
+ JS：脚本语言，用于实现业务逻辑和页面控制（决定功能），相当于人的各种动作

##### 1.5 浏览器执行JS简介

+ 浏览器分成两个部分： **渲染引擎** 和 **JS引擎**

##### 1.6 JS的组成

1. ECMAScript：JavaScript语法
2. DOM：页面文档对象模型
3. BOM：浏览器对象模型

##### 1.7 JS初体验

+ JS的三种书写位置
    1. 行内
        + 可以将单行或少量的JS写在html标签事件中
        + 注意单双引号的使用：html中推荐使用双引号，而js中推荐使用单引号
        + 可读性差
        + 引号易错
    2. 内嵌
        + 可以将多行JS代码写到\<script\>标签中
        + 内嵌JS是学习时常用的方式
    3. 外部
        + 有利于html结构的优化，美观且可读性强
        + 引用外部JS文件的 script 标签中间不可以写代码
        + 适合于JS代码量较大的情况
    4. 代码实现
        ~~~html
        <!-- JS初体验.html -->
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
        
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" >
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style></style>
            <!-- 2. 内嵌式的js -->
            <script>
                // alert('赵公明');
            </script>
        
            <!-- 3. 外部JS script 双标签 -->
            <script src="myJs.js"></script>
        
        
        </head>
        
        <body>
            <!-- 1. 行内式的js 直接写到元素的内部 -->
            <input type="button" value="李长寿" onclick="alert('云霄')">
        </body>
        
        </html>
        ~~~

        ~~~javascript
            <!-- myJs.js -->
            alert('网易云');
        ~~~

+ JS的两种注释方式

~~~html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <script>
        // 1. 单行注释      ctrl + /
        /* 2. 多行注释      shift + alt + a 
              多行注释内容
        */
    </script>


</head>
<body>

</body>
</html>

~~~

+ JS输入输出语句
    + alert(msg)：弹出警示框
    + console.log(msg)：控制台打印输出信息
    + prompt(msg)：弹出输入框，用户可输入



### 2. 变量

##### 2.1 变量的概述

+ 什么是变量：
+ 变量在内存中的存储：变量的本质是程序在内存中申请的一块用来存放数据的空间

##### 2.2 变量的使用

+ 使用步骤：
    1. 声明变量
        ~~~javascript
            // 声明变量
            // var是一个关键字，用来声明变量（variable变量的意思）
            var age;        // 声明一个名称为age的变量
        ~~~
    2. 赋值

##### 2.3 变量语法扩展

+ 更新变量：当一个变量被重新赋值后，原有的值会被覆盖
+ 可以同时声明多个变量，多个变量间用英文的逗号隔开
+ 声明的特殊情况
    1. 只是声明不赋值，结果是：undefined(因为程序也不知道它的值)
    2. 不声明且不赋值，直接使用某个变量会报错
    3. 不声明直接赋值使用结果不报错，但是不提倡这样使用

##### 2.4 变量命名规范

+ 由字母、数字、下划线 和 美元符号($) 组成
+ 严格区分大小写
+ 不能以数字开头
+ 不能用 关键字 或 保留字 作为变量名
+ 变量名必须有意义，由单词组合而成
+ 遵循驼峰命名法：第一个字母小写，后面每个单词的首字母都需要大写
+ 尽量不要使用 name 作为变量名

##### 2.5 小结

+ 之所以要变量，是因为我们的一些数据需要保存
+ 变量就是一个容器，方便我们用于存放数据
+ 变量是内存中的一块空间，用来存放数据
+ 声明变量并赋值，被我们称为变量的初始化
+ 变量名要尽量规范，尽可能见名知意

### 3. 数据类型

##### 3.1 数据类型简介

+ 为什么需要数据类型：在计算机中，不同的数据所占用的存储空间不同，使用不同的数据类型可以更充分的利用存储空间
+ 变量的数据类型：
    1. JavaScript是一种弱类型语言，不能提前声明变量的类型，只有在运行时才能自动确定
    2. JavaScript拥有动态类型，所以相同的变量可用作不同的类型
        ~~~javascript
            var val = 10;       // 这里val是数字类型
            val = 'jos';        // 这里val是字符串型
        ~~~

##### 3.2 简单数据类型

+ 简单数据类型（基本数据类型）
    + Number：数字型
        1. 数字型进制：二进制、八进制、十进制 和 十六进制
        2. 数字型的最大值和最小值
            ~~~javascript
                console.log(Number.MIN_VALUE);
                console.log(Number.MAX_VALUE);
            ~~~
        3. 数字型的三个特殊值
            + Infinity：代表无穷大，大于任何值
            + -Infinity：代表无穷小，小于任何值
            + NaN（Not a number)：代表一个非数值
        4. 验证数字型函数：isNaN（） 如果是数字返回的是false 否则返回true
    + Boolean
        + true 参与加法运算当作1来看
        + false 参与加法运算当作0来看
    + String
        1. 字符串型可以是引号中的任意文本，单双引号都可以，但JS中推荐使用单引号
        2. 字符串的嵌套：JS可以使用单引号嵌套双引号，或双引号嵌套单引号
            ~~~javascript
                var str = '我是一个"高富帅"程序员';
                var str2 = "我是一个'高富帅'程序员";
                
                // 常见错误
                var badStr = 'What on earth?";  // 报错，不能单双引号搭配
            ~~~
        3. 字符串转义符：类似于C++，都是 \ 开头，注意 "\b" 是空格的转义符
        4. 字符串长度：通过字符串的 length 属性获取
        5. 字符串拼接
            + 多个字符串之间可以使用 "+" 进行拼接
            + 拼接前会把与字符串相加的任何类型转成字符串，在拼接成一个新的字符串
            + 总结口号：数值相加，字符相连
    + Undefined
        + 如果一个变量声明未赋值，就是 undefined 未定义数据类型
        + undefined 和 数字相加结果为 NaN
        + undefined 和 字符串型相加结果为 undefined 转化成字符串与相加字符串拼接
    + Null

##### 3.3 获取变量数据类型

+ 通过 typeof 获取变量的数据类型
+ 字面量
    + 字面量即在源码中一个固定值的表示法，通俗来说，就是一眼看过去就知道这是个什么数据类型值
    + 数字字面量：8,9,10
    + 字符串字面量：'jos老师'
    + 布尔字面量： true, false

##### 3.4 数据类型转换

+ 数据类型转换：把一种数据类型的变量转换为另外一种数据类型
+ 数据类型转换方法:
    1. 转换成字符串类型
        + toString()
        + String() 强制转换
        + 加号拼接字符串，这种方法也称为 隐式转换
        + 实例代码
            ~~~javascript
                var num = 10;
                alert(num.toString());
                alert(String(num));
                alert(num + '');        // '' 是一个空字符串
            ~~~
    2. 转换为数字型
        + parseInt(string)，转换为整数数值型
        + parseFloat(string)，转换为浮点数数值型
        + Number()，强制转换
        + JS隐式转换(- * /)
    3. 转换为布尔型
        + 使用 Boolean() 函数
        + 只有 ''、0、NaN、null、undefined 这五个值会转换成 false，其余都转换为 true

### 4. 拓展知识

##### 4.1 标识符、关键字、保留字

+ 标识符：即我们为变量 和 函数 起的名字
+ 关键字：即在语言中本身就有特殊含义的名称
+ 保留字：即预留的关键字，意思是现在虽然还不是关键字，但未来可能会成为关键字


### 5. 运算符

##### 5.1 运算符

+ 运算符也被称为操作符，可用于实现赋值、比较和执行算术运算符等等
+ 算术运算符: 加减乘除 和 取余
    + 浮点数存在精度问题，不要直接判断两个浮点数是否相等
    + 表达式和返回值
        1. 表达式：即由 数字、运算符、变量 组成的式子，**且表达式都有返回值**
        2. 返回值：表达式经过运算得到的结果
+ 自增和自减运算符: ++ 和 --
    + 小结: 
        1. 前后置自增或自减都可以简化代码的编写
        2. 前后置单独使用时，结果都相同
        3. 与其他代码联用时，执行结果会不同，会变得十分复杂
        4. 前置：先自增或自减，再赋值
        5. 后置：先赋值，再自增或自减
+ 比较运算符
    + \>、\<、\<=、\>=、!=
    + ==：会默认转换数据类型(此时是隐式转换)    会把字符串型数据转换成数字型
    + ===：全等，要求 **值和数据类型** 都一致
    + !==：不全等
    + 实例
        ~~~javascript
            console.log(3 >= 5);                // false
            console.log(2 <= 4);                // true
            console.log(3 == 5);                // false
            console.log('true' == 'false');     // false

            // == 会默认转换数据类型
            console.log(18 == 18);              // true
            console.log(18 == '18');            // true

            // === 全等 要求值和数据类型都一样
            console.log(18 === 18);             // true
            console.log(18 === '18');           // false 

        ~~~
+ 逻辑运算符
    + 概念：进行布尔值运算的运算符，返回值也是布尔值，常用于多个条件的判断
    + &&、||、！
    + 短路运算（逻辑中断）
        + 短路运算的原理：当有多个表达式时，若左边的表达式可以确定结果时，就不再运算右边的表达式的值
        + 逻辑与 的 短路运算：
            + 如果左边表达式结果为真，则返回右边表达式
            + 若左边表达式为假，那么直接返回左边表达式
            ~~~javascript
                console.log(123 && 456);                    // 显示为 456
                console.log(0 && 666);                      // 显示为 0
                console.log(0 && 1 + 2 && 123 * 456);       // 显示为 0
                console.log('' && 1 + 2 && 123 * 456);      // 显示为 '' 空字符串
            ~~~
        + 逻辑或 的 短路运算：
            + 如果左边表达式结果为真，则返回左边表达式
            + 若左边表达式为假，那么直接返回右边表达式
            ~~~javascript
                console.log(123 || 456);                    // 显示为 123
                console.log(123 || 456 || 789 + 1000);      // 显示为 123
                console.log(0 || 1 + 2 && 123 * 456);       // 显示为 3
                console.log('' || 321 || 123 * 456);        // 显示为 32
            ~~~
        + 注意短路运算会影响程序的运算结果
            ~~~javascript
                var num = 0;
                console.log(123 || num ++);         // 显示为 123
                console.log(num);                   // 显示为 0 因为上一句代码的num++没有执行
            ~~~
+ 赋值运算符
    + =: 直接赋值
    + +=、-=：加、减一个数后赋值
    + *=、/=、%=：乘、除、取模后再赋值
+ 运算符优先级
    + 优先级排列
        1. 小括号：()
        2. 一元运算符：++、--、!
        3. 算数运算符：先 * / %，后 + -
        4. 关系运算符：\> \>= \< \<=
        5. 相等运算符：==、!=、===、!==
        6. 逻辑运算符：先 &&，后 ||
        7. 赋值运算符：=
        8. 逗号运算符：,

### 6. JS流程控制

##### 6.1 分支流程控制

+ 流程控制就是控制代码按照什么结构来执行
+ 流程控制的结构
    1. 顺序结构:按照代码的先后顺序，依次执行
    2. 分支结构:
    3. 循环结构
+ if语句
    + 单if语句
    + if-else双分支语句
    + if-else if多分支语句
    + 三元表达式
        + 语法形式: 条件表达式 ? 表达式1 : 表达式2
        + 三元表达式类似于 if-else双分支流程
        ~~~javascript
            var num = 10;
            var result = num > 5 ? '是' : '不是';
            console.log(result);                // 显示为 ‘是’
        ~~~
+ switch语句
    ~~~javascript
        // switch语法格式
        switch (表达式) {
            case value1:
                执行语句1;
                break;
            case value2:
                执行语句2;
                break;
            case value3:
                执行语句3;
                break;
            ...
            default:
                执行最后的语句;
    ~~~
    + switch注意事项
        1. switch后表达式常常会写成 变量
        2. switch后表达式的值 和 case里的值 相匹配的时候必须是全等（即值和数据类型一致）
        3. 如果没有break跳出switch会继续执行下一个case

##### 6.2 循环流程控制

+ 循环的目的：可以更方便执行许多具有规律性的重复操作
+ JS中的循环
    1. for循环
    2. while循环
    3. do-while循环
+ 浏览器断点调试：
    1. 浏览器中按F12
    2. 点 sources(chorme) 或 调试器(firefox)
    3. 找到需要调试的文件
    4. 在程序文件的某一行设置断点
    5. 刷新页面开始调试
+ for循环
    1. for可以重复执行某些代码
    2. for可以重复执行些许不同的代码，因为有计数器
+ while循环
    ~~~javascript
        // 当 条件表达式结果为 true 执行循环体，否则直接退出
        while (条件表达式) {
            // 循环体
        }
    ~~~
+ do...while 循环
    ~~~javascript
        // do while 循环 语法结构
        do {
            // 循环体
        } while (条件表达式)
        // 和while的执行思路不同之处在于，先执行一次循环体，再判断条件
    ~~~
+ 循环小结
    1. JS中的循环有 for、while、do while
    2. 三个循环有很多情况下都可以相互替代使用
    3. while 和 do while 可以做更复杂的判断条件，比for循环灵活一些
+ continue 和 break
    + continue关键字用于 **立即跳出本次循环，继续下一次循环**。
    + break关键字用于 **立即跳出整个循环**。


### 7. JS命名规范与语法规则

##### 7.1 标识符命名规范

+ 变量、函数命名必须有意义
+ 变量的名称一般用名词
+ 函数的名称一般用动词

#####  7.2 操作符和单行注释规范

+ 操作符的左右两侧个保留一个空格
+ 单行注释前面注意有个空格

##### 7.3 其他规范

+ if小括号两侧尽量保留一个空格
+ for小括号两侧尽量保留一个空格


### 8. Javascript中的数组

##### 8.1 数组

+ 概念：数组是指一组数据的集合，其中每个数据被称作元素，数组中可以**存放任意数据类型**
+ 创建数组的方式
    + 利用 new 创建数组
        ~~~javascript
            var 数组名 = new Array();
            var arr = new Array();      // 创建了一个空的数组
        ~~~
    + 利用数组字面量创建数组(最常用的方式)
        ~~~javascript
            var arr = [];               // 创建了一个空的数组
            var arr1 = [1, 2, 'jos', false];        // 数组中可以存放任意数据类型
            
            // 注意: 数组中的数据一定要用都好隔开
        ~~~
+ 获取数组中的元素
    + 数组的索引(下标): 用来访问数组元素的序号(数组下标从0开始)，可以通过 **“数组名[索引号]”** 获取数组中元素
    + 当数组越界时，显示元素为 “undefined”
+ 遍历数组: 就是把数组的元素从头到尾访问一次
    ~~~javascript
        var arr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
        for (var i = 0; i < arr.length; ++ i) {
            console.log(arr[i]);
        }
    ~~~
+ 数组增加新元素
    + 通过修改length长度新增数组元素，因为length属性是 **可读写的**
        ~~~javascript
            // 新增数组元素，修改length长度
            var arr = [1, 2, 3];
            console.log(arr.length);
            arr.length = 5;         // 把数组长度修改为5,里面应该有5个元素
            console.log(arr[3]);    // undefined
            console.log(arr[4]);    // undefined
            
            // 声明却未给值，那么默认值就是 undefined
        ~~~
    + 通过修改数组索引新增数组元素(常用的添加数组元素的方法)
        ~~~javascript
            // 新增数组元素，修改索引号追加元素
            var arr = [0, 1, 2];
            arr[3] = 3;
            console.log(arr);
            arr[4] = 4;
            console.log(arr);
            arr[0] = -1;
            console.log(arr);

            arr = '有点意思';
            console.log(arr);   // 不要直接给数组名赋值，否则会覆盖掉以前的数据
        ~~~

##### 8.2 数组练习案例

1. 计算数组的和及平均值
    ~~~javascript
        var arr = [2, 6, 1, 7, 4];
        var sum = 0, average = 0;
        for (var i = 0; i < arr.length; ++ i) {
            sum += arr[i];              // 加上的是数组元素 arr[i] 而不是 i
        }
        average = sum / arr.length;
        console.log(sum, average);      // 想要输出多个变量，用逗号分隔即可    
    ~~~
2. 求数组的最大值
    ~~~javascript
        var arr = [2, 6, 1, 77, 52, 25, 7];
        var maxVal = null;
        for (var i = 0; i < arr.length; ++ i) {
            if (maxVal == null || maxVal < arr[i])
                maxVal = arr[i];
        }
        console.log(maxVal);
    ~~~
3. 筛选出合适的数据放入新数组
    ~~~javascript
        // 将数组中大于10的元素选出来放入新数组
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newArr = [], len = 0;
        for (var i = 0; i < arr.length; ++ i) {
            if (arr[i] > 10) {
                newArr[len] = arr[i];
                // newArr[newArr.length] = arr[i]       // 也是一种方法
            }
        }
        console.log(newArr);
    ~~~
4. 删除制定数组元素
    ~~~javascript
        // 将数组中的0元素选出来删除，形成一个不包含0的新数组
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newArr = [];
        for (var i = 0; i < arr.length; ++ i) {
            if (arr[i] != 0) {
                newArr[newArr.length] = arr[i];
            }
        }
        console.log(newArr);
    ~~~
5. 翻转数组
    ~~~javascript
        // 将数组中的元素翻转
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        for (var i = 0, j = arr.length; i < j; ++ i, -- j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        console.log(newArr);
    ~~~
6. 数组排序
    
### 9. 函数

##### 9.1 函数的概念

+ 函数:就是封装了一段可以重复执行调用的代码快，目的就是让大量代码重复使用
    ~~~javascript
        function getSum(st, ed) {
            var sum = 0;
            for (var i = st; i <= ed; ++ i) {
                sum += i;
            }
            console.log(sum);
        }
        getSum(1, 100);
        getSum(10, 50);
    ~~~
+ 函数的使用：分为 **声明函数** 和 **调用函数**
    1. function 声明函数的关键字 全部小写
    2. 函数是做某件事，函数名一般是动词
    3. 函数不调用，自己不执行
    4. 一个函数可以调用另外一个函数
    5. 函数有两种声明方式
        + 利用函数关键字 function 自定义函数(也称为：命名函数)
        + 利用函数表达式定义函数，此类函数没有名字(也称为：匿名函数)
            ~~~javascript
                var 变量名 = function(){};
                var fn = function() {
                    console.log('这是一个函数表达式');
                }
                fn();

                // 1. 此处 fn 变量名，不是函数名
                // 2. 函数表达式声明方式与声明变量差不多，只不过变量里存的是值，而函数表达式里存的是函数
                // 3. 函数表达式也可以进行参数传递
            ~~~
+ 函数的封装：把一个或者多个功能通过函数的方式封装起来

##### 9.2 函数的参数

+ 可以利用函数的参数实现函数重复不同的代码
+ 形参和实参
    + 形参：形式上的参数，函数定义的时候传递的参数
    + 实参：实际上的参数，函数调用的时候传递的参数
    + 注意：不同参数之间用逗号隔开
    + 代码
        ~~~javascript
            function 函数名(形参1,形参2, ...) {  // 函数声明，括号里是形参
                // 函数体
            }

            函数名(实参1,实参2, ...);            // 函数调用，括号里是实参
        ~~~
+ 函数形参和实参个数不匹配问题
    + 如果实参的个数和形参个数一致，则正常输出结果
    + 如果实参个数**多于**形参个数，则会舍去多的实参结果，正常输出结果
    + 如果实参个数**少于**形参个数，那么多的形参的值为undefined，最终的结果为NaN
    + 建议形参和实参个数一一对应
+ 小结：
    1. 函数可以带参数也可以不带参数
    2. 声明函数时，函数名括号里面的是形参，形参默认值为undefined
    3. 调用函数时，函数名括号里面的是实参
    4. 多个参数中间用逗号分隔
    5. 形参个数可以和实参个数不匹配，但后果不可预计，所以尽量要匹配

##### 9.3 函数的返回值

+ return语句
    + 格式
        ~~~javascript
            function 函数名() {
                // 函数体
                return 返回需要的结果
            }
        ~~~
    + 简单的代码实例
        ~~~javascript
            function getResult() {
                return 666;
            }
            getResult();    // 相当于 getResult() = 666
            console.log(getResult());
        ~~~
+ return 终止函数: return 语句之后酒不执行了
+ return **只能返回一个值**，如果用逗号隔开多个值，以最后一个为准
    ~~~javascript
        function fn(num1, num2) {
            return num1, num2;      // 返回记过是最后一个值 num2
        }
        console.log(fn(1, 2));      // 显示结果为2
    ~~~
+ return需要返回多个结果时，可以把结果组成一个数组，最后return返回该数组
    ~~~javascript
        // 求任意两个数的加减乘除结果
        function getResult(num1, num2) {
            return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
        }
        var re = getResult(2, 1);
        console.log(re);
    ~~~
+ 函数如果有return就返回return后的值，如果没有return则返回undefined
    ~~~javascript
        function getResult() {

        }
        console.log(getResult());   // 显示为 undefined
    ~~~

##### 9.4 arguments的使用

+ 当我们不确定有多少个参数传递时，可以用arguments来获取
+ JS中，arguments实际上是当前函数的一个内置对象，它存储了传递的所有实参
    ~~~javascript
        function fn() {
            console.log(arguments);     // 显示为 1,2,3 里面存储了所有传递过来的实参
            console.log(arguments.length);
            console.log(arguments[1]);
        }
        fn(1, 2, 3)
    ~~~
+ arguments是一个伪数组，但并不是真正意义上的数组
    1. 具有数组的 length 属性
    2. 按照索引的方式进行存储
    3. 可以按照数组的方式遍历 arguments
    4. 它没有真正数组的一些方法，例如 pop() push() 等等
+ 注意：**只有函数才有arguments对象**，并且每个函数都内置个这个arguments
+ 实例：
    ~~~javascript
        // 代码实例：利用函数求任意个数的最大值
        function getMax() {
            var max = arguments[0];
            for (var i = 1; i < arguments.length; ++ i) {
                if (arguments[i] > max) {
                    max = arguments[i];
                }
            }
            return max;
        }
        console.log(getMax(32,54,32,63,1,56,23,44,13,71,7,33));
        console.log(getMax(1, 2, 4, 4, 3, 5));
    ~~~

### 10. JS作用域

##### 10.1 作用域

+ 作用域：就是代码名字(变量)在某个范围内起作用和效果，目的是为了提高程序的可靠性减少命名冲突
+ js的作用域(es6)之前
    + 全局作用域：整个script标签，或者是一个单独的js文件
    + 局部作用域：在函数内部就是局部作用域，即代码名字只在函数内部起效果和作用，因此也称为 **局部作用域**

##### 10.2 变量作用域

+ 变量作用域的分类：根据作用域的不同，变量分为 **全局变量** 和 **局部变量**
    + 全局变量：在全局作用域下的变量，在全局下都可以使用
        ~~~javascript
            var num = 10;   // num就是一个全局变量
            console.log(num);

            function fn() { 
                console.log(num);
            }
            fn();
        ~~~
    + 局部变量：在局部作用域下的变量，只能在函数内部使用
        ~~~javascript
            function fn() { 
                var num1 = 10;       // num1就是一个局部变量，只能在函数内部使用
                console.log(num1);
                num2 = 20;           // 在函数内部 没有声明却直接赋值的变量为全局变量
            }
            fn();
            console.log(num1);      // 显示为 undefined，即未定义
            console.log(num2);      // 显示为 20

            // 注意：函数形参也可以看作局部变量
        ~~~
    + 全局变量的特殊情况：在函数内部 **没有声明却直接赋值的变量** 为全局变量(不建议使用)
+ 全局变量和局部变量的区别：
    + 全局变量：在任何地方都可以使用，因此只有在浏览器关闭时才会销毁，比较占用内存资源
    + 局部变量：只能在函数内部使用，当其所在代码块被执行时，才会初始化；当代码块运行结束后，就会被销毁，因此更节省内存资源
+ 拓展知识：现阶段，js没有块级作用域，即在js版本 es6 之前没有块级作用域，但是最新的 es6 中会新增块级作用域
    ~~~javascript
        if (true) {
            var num = 10;
        }
        console.log(num);       // 正常显示为 10，不会显示为 undefined
    ~~~

##### 10.3 作用域链

+ 只要有代码，就至少有一个作用域
+ 写在函数内部的局部作用域
+ 如果函数中还有函数，那么在这个作用域中就有可以诞生一个作用域
+ 根据内部函数可以访问外部函数里的变量的这种机制，用链式查找决定那些数据能被内部函数访问，就称作作用域链
    ~~~javascript
        var num = 10;

        function fn() {             // 外部函数
            var num = 20;

            function fun() {        // 内部函数
                console.log(num);   // 显示为 20
            }
        }
    ~~~
+ 作用域链实例
    ~~~javascript
        // 1. 结果是几？
        function f1() {
            var num = 123;
            function f2() {
                console.log(num);   // 最终显示结果为 123，
                                    // 因为num的上一级作用域中 num 的值为 123
                                    // 站在目标出发，一层一层的往外查找作用域
            }
            f2();
        }
        var num = 456;
        f1();       

        // 2. 结果是几
        var a = 1;
        function fn1() {
            var a = 2;
            var b = '22';
            fn2();
            function fn2() {
                var a = 3;
                fn3();
                fn3() {
                    var a = 4;
                    console.log(a);     // a的值为 4
                    console.log(b);     // b的值为 '22'
                }
            }
        }
    ~~~

### 11. JS预解析

##### 11.1 预解析

+ 引出问题
    ~~~javascript
        // 1
        console.log(num1)           // 显示为 error

        // 2
        console.log(num2);          // 显示为 undefined
        var num2 = 10;

        // 3
        fn();
        function fn() {
            console.log(11);        // 显示正常为 11
        }

        // 4
        fun();                      // 显示为error 报错
        var fun = function() {
            console.log(22);
        }

        // 以上问题都与js的预解析有关
    ~~~
+ js引擎运行js分为两步： 预解析 与 代码执行
    + 预解析时，js引擎会把js里所有的 var 还有 function 提升到当前作用域的最前面
    + 代码执行，按照代码书写的顺序从上往下执行
+ 预解析分为 变量预解析(变量提升) 和 函数预解析(函数提升)
    + 变量提升 就是把所有的变量**声明**提升到当前的作用域最前面，不做赋值操作的提升
    + 函数提升 就是把所有的函数**声明**提升到当前的作用域最前面，不做赋值操作的提升
    + 代码实例
        ~~~javascript
            console.log(num);           // 显示为 undefined
            var num = 10;

            // 以上代码相当于以下代码
            // var num;
            // console.log(num);
            // num = 10;

            fun();      // 报错
            var fun = function() {
                console.log(22);
            }
            // 相当于执行了以下代码
            // var fun;
            // fun();
            // fun = function() {
            //    console.log(22);
            // }

        ~~~

### 12. JS对象

##### 12.1 对象

+ 对象：JS中的对象是一组无序的相关属性和方法的集合，对象由 **属性** 和 **方法** 组成
    + 属性：事物的特征，在对象中用属性来表示(常用名词)
    + 方法：事物的行为，在对象中用方法来表示(常用动词)
+ 对象的优点(为什么需要对象)：JS中的对象表达结构更清晰、更直观

##### 12.2 创建自定义对象的三种方式

+ 方法一：利用字面量创建对象
    + 对象字面量：就是花括号{}里面包含表达这个具体事物(对象)的属性和方法
    + {}里面采取键值对的形式表示
    + 代码实例
        ~~~javascript
            // 1. 利用对象字面量创建对象
            // var obj = {}    // 创建了一个空对象
            var obj = {
                uname: '张三疯',
                age: 18,
                sex: '男',
                sayHi:function() {
                    console.log('Hi~');
                }
            }
            // (1) 里面的属性或者方法采用键值对的形式   键 属性名: 值 属性值
            // (2) 多个属性或者方法中间用逗号隔开
            // (3) 方法冒号后面跟一个匿名函数

            // 2. 使用对象
            //    (1) 调用对象的属性方式1  对象名.属性
            console.log(obj.uname);
            //    (2) 调用对象属性的方式2  对象名['属性名']
            console.log(obj['age']);
            //    (3) 调用对象的方法      对象名.方法名()
            obj.sayHi();
        ~~~
+ 方法二：利用new Object创建对象
    + 代码实例
        ~~~javascript
            // 2. 利用new Object 创建对象
            var obj = new Object();     // 创建了一个空对象
            // 利用 等号 = 赋值的方式 往对象里加属性和方法
            obj.uname = '张三丰';
            obj.age = 18;
            obj.sex = '男';
            obj.sayHi = function() {
                console.log('Hi~');
            }
        ~~~
+ 方法三：利用构造函数创建对象
    + 为什么需要构造函数创建对象：因为前面两种创建方法**一次只能创建一个对象**
    + 构造函数和普通函数不一样，里面封装的不是普通代码，而是 **对象**；因此构造函数 就是把对象里面一些相同的属性和方法抽象出来封装到函数里面
    + 代码实例
        ~~~javascript
            // 3. 利用构造函数创建对象
            // 构造函数的语法
            // function 构造函数名() {
            //     this.属性 = 值
            //     this.方法 = function() {}
            // }
            // // 调用构造函数的方法
            // new 构造函数名();

            // 构造函数要点：
            // 1. 构造函数首字母必须大写
            // 2. 构造函数不需要return就可以返回结果
            // 3. 调用构造函数必须使用 new
            // 4. 属性和方法前面必须添加this

            // 创建四大天王的对象   相同的属性：名字、年龄、性别    相同的方法：唱歌
            function Star(uname, age, sex) {
                this.name = uname;
                this.age = age;
                this.sex = sex;
                this.sing = function(song) {
                    console.log(this.name + '唱' + song + '很好听');
                }
            }
            var ldh = new Star('刘德华', 18, '男');     // 调用函数返回一个对象
            console.log(typeof ldh);            // 显示为 object
            console.log(ldh.name);
            console.log(ldh['age']);
            ldh.sing('17岁');

            var zxy = new Star('张学友', 19, '男');
            console.log(zxy.name);
            console.log(zxy['age']);
            zxy.sing('李香兰');
        ~~~
    + 构造函数 和 对象 的区别
        + 对象是一个具体的事物(特指)
        + 构造函数是**泛指**的某一大类的事物，不是具体的事物
        + 构造函数创造对象的过程称为 **实例化**
    + new关键字执行过程
        1. new 构造函数在内存中创建了一个空的对象
        2. this 就会指向刚才创建的空对象
        3. 执行构造函数里面的代码，给这个空对象添加属性和方法
        4. 返回这个对象

##### 12.3 遍历对像

+ for...in 语句用于对数组或者对象属性进行循环操作
+ 遍历对象代码实例
    ~~~javascript
        // 遍历对象
        var obj = {
            name: 'jos',
            age: 18,
            sex: '男'
        }
        for (var tmp in obj) {
            console.log(tmp);       // 输出的是 属性名
            console.log(obj[tmp]);  // obj[tmp]得到的是 属性值
        }
    ~~~ 

##### 12.4 小结

1. 对象可以让代码结构更清晰
2. 对象复杂数据类型object
3. 本质：对象就是一组无序的相关属性和方法的集合
4. 构造函数泛指某一大类
5. 对象实例特指某一具体事物
6. for...in 语句用于对对象的属性进行循环操作


### 13 JS内置对象

##### 13.1 内置对象介绍

+ JS中对象分为3种：自定义对象、内置对象、浏览器对象
+ JS3中对象中的前两种是JS的 **基础** 内容，属于 ECMAScript；而浏览器对象属于我们就是独有的
+ 内置对象：就是指JS语言自带的一些对象，提供了一些常用的或是最基本而必要的功能
+ 常用的JS内置对象：Math、Date、Array、String等
+ 查阅JS文档
    + 为什么要查文档：**JS内置对象的属性和方法都特别多，当我们需要使用到相应的成员时可以查阅相关文档了解**
    + [MDN](https://developer.mozilla.org/zh-CN/)：MDN 即 Mozilla开发者网络，提供有关网络技术(Open Web)的信息，包括HTML、CSS、万维网和HTML5应用的API
    + 如何通过文档学习对象中的方法
        1. 查阅该方法的功能
        2. 查看里面参数的意义及类型
        3. 查看返回值的意义及类型
        4. 通过测试代码进行测试

##### 13.2 常用的JS内置对象 -- Math

+ Math不是一个构造器(**即 Math 不能通过构造函数生成，不需要new就可使用**)，Math中的所有属性和方法均是静态的
+ Math.PI：一个属性，圆周率
+ Math.max：一个方法，求最大值
+ Math.min：一个方法，求最小值
+ Math.abs：一个方法，求绝对值
+ Math.floor：一个方法，向下取整
+ Math.ceil：一个方法，向上取整
+ Math.round：一个方法，四舍五入就近取整
+ Math.random：一个方法，获得随机数(一个浮点型伪随机数字，在0（包括0）和1（不包括）之间)
