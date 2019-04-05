//Bool类型的值只有两个 true、false
//Undefined 的几种情况
var a;
console.log(a);//undefined
//注意：分清未定义与未声明的区别 undefined与 undeclare

function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);

function fee() {
    //没有返回值
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined

//null 注意
console.log(typeof null);//object