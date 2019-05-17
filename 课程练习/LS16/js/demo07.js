//part1 构造函数中函数嵌套 this缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;//this指代window
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);
//输出为Point{x:2,y:3}没有移动

//part2 解决part1中问题
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;
        function moveX(x) {
            that.x+=x;
        }
        function moveY(y) {
            that.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}



var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//fn2()
console.log(obj.fun3()());//undefine
console.log(obj.fun4());//23