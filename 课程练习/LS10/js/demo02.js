//js 词法作用域
var name = "jack";
function e(){
    console.log(name);
}
e();

//词法作用域 与调用形式无关

//实例一
var name = "jack";
function e() {
    console.log(name);
}
function f() {
    var name = "bill";
    e();
}
f();//jack

//实例二
var name = "jack";
function e() {
    console.log(name);
}
function f() {
    var name = "bill";
    function fe(){
        var name = "lucy";
        e();
    }
    fe();
}
f();//jack

//通过new Function实例化的函数对象
//不一定遵从静态词法作用域
var sc = "g";
function foo(){
	var sc = "l";
	return new Function("console.log(sc);")
}
foo()();//g