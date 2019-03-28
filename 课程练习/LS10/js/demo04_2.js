// 调用栈 Call Stack
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//断点
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//
    }
    bar();
    console.log("foo上下文-end");//
}
foo();//
console.log("全局上下文-end");//