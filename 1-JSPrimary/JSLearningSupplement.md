
### 1. 什么是JS

##### 1.1 脚本调用策略

1. 要让脚本调用的时机符合预期，需要解决一系列的问题。
2. 最常见的问题就是：HTML 元素是按其在页面中出现的次序调用的，如果用 JavaScript 来管理页面上的元素，若 JavaScript 加载于欲操作的 HTML 元素之前，则代码将出错。
3. 可以使用JavaScript 的一项现代技术(async "异步" 属性) 来解决以上问题，但是该项技术只适用于 **外部JS脚本**
4. 策略小结：
    + 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async。
    + 如果脚本无需等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 defer，将关联的脚本按所需顺序置于 HTML 中。

##### 1.2 错误类型

1. 语法错误：代码中存在拼写错误，将导致程序完全或部分不能运行。
2. 逻辑错误：有些代码语法虽正确，但执行结果和预期相悖。

##### 1.3 let 和 var 的区别

1. 历史原因：回到最初创建 JavaScript 时，是只有 var 的;let 是在现代版本中的 JavaScript 创建的一个新的关键字，用于创建与 var 工作方式有些不同的变量，解决了过程中的问题。
2. let 和 var 的几个简单差异
    + 在初始化一个变量之后，仍然可以用 var 声明它；但是类似的做法不再使用与 let 。
    + var 可以根据需要多次声明相同名称的变量；但是 let 不能

##### 1.4 变量类型

1. Number：数字
2. String：字符串，需要用单引号或者双引号把值给包起来
3. Boolean：布尔值，值只有2种 true 或 false 。
4. Array：数组是一个单个对象，其中包含很多值，方括号括起来，并用逗号分隔 。
5. Object：对象是现实生活中的模型的一种代码结构 。