//允许在函数定义中对参数设置默认值   
function log(x, y = 'World') {
    console.log(x，y)
}
log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello,y传入了空字符，所以不需用上默认值


//参数变量是默认声明的，所以不能用 let 或const再次声明。

function foo(x = 5) {
    let x = 1; // error
    const x = 2; // error
}

//使用参数默认值时，函数不能有同名参数
// 不报错
function foo(x, x, y) {
    // ...
}

// 报错
function foo(x, x, y = 1) {
    // ...
}

//参数默认值不是传值的，而是每次都重新计算默认值表达式的值
let x = 99;
function foo(p = x + 1) {
    console.log(p);
}

foo() // 100

x = 100;
foo() // 101

//与解构赋值默认值结合使用
function foo({x, y = 5}) {
    console.log(x, y);
  }

foo({}) // 接收一个空对象为参数，输出undefined 5；只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成。
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined


//如果没有提供参数，函数foo的参数默认为一个空对象；
function foo({x, y = 5} = {}) { //这里有两层解构赋值的默认，参数为空时默认传入空数组，数组为空时默认了y的值，x还是 undefined
    console.log(x, y);
  }
  
  foo() // undefined 5