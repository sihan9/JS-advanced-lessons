//全局作用
var a=10;
var b=20;
function fn(){
    //fn局部作用域
    var a = 100;
    var c = 200;
    //console.log(a,b,c,d);
    function bar() {
        //bar局部作用域
        var a = 500;
        var d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//console.log(q,b,c,d);