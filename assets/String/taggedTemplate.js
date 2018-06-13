let a = 5;
let b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return('OK!');
}
//tag函数表达式的返回值，就是模板字符串被处理后的返回值
tag`Hello ${ a+b } world${ a*b }`;

//输出
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"

tag`Hello ${ a+b }${ a*b } world`;

//输出
// "Hello "
// ""
// " world "
// 15
// 50
// "OK"

tag`Hello ${ a+b } my ${ a*b } world`;

//输出
// "Hello "
// "my"
// " world "
// 15
// 50
// "OK"

tag`Hello ${ a+b }${ a*b } my  world`;

//输出
// "Hello "
// ""
// " my world "
// 15
// 50
// "OK"

// 解释：
// 第一个参数s是一个数组（该例中则是输入的字符串），模板字符串的变量${}有两个，会依次传入v1、v2
//tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，
//也就是说，变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推。
//Question:替换的规则和作用是什么？




// 更为复杂的例子
let total = 30;
let msg = passthru`The total is ${total} ( ${total*1.05} with tax ).`;

function passthru(literals,...value) {
    let output = '';
    let index;
    for(index = 0;index < value.length; index++){
      output += literals[index] + value[index];
    }

    output += literals[index];
    return output;
}

console.log(msg);
//output：The total is 30 ( 31.5 with tax ).


// 过滤用户恶意输入的例子

function saferHTML(templateData) {
    let s = templateData[0];
    console.log(s);//s输出为<p>
    for(let i=1;i < arguments.length ; i++){ 
        //function传入的参数实际上是一个数组，arguments.length为函数参数数组长度，即参数个数
        //[0]为字符串<p>，变量从[1]开始
        let arg = String(arguments[i]);

        // 替换变量中的可疑字符
        s += arg.replace(/&/g,"&amp;")
                .replace(/</g,"&lt")
                .replace(/>/g,"&gt");

        //Question:+=在上下两处的意义是？        
        s[i] += templateData[i];
    }
    return s;
}
let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = saferHTML`<p>${sender} has sent you a message.</p>`;
console.log(message);