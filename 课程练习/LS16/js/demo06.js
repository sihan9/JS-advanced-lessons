//part1 方法中函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //-内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定 window
        }
        function moveToY() {
            this.y = y;//this绑定 window
        }//-
        moveToX();
        //moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

//part2 解决part1所出现问题的方法
//1、软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //软绑定↓
        var that = this;
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        function moveToY() {
            that.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

//2、call apply 
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this-window
        }
        function moveToY() {
            this.y = y;//this-window
        }
        moveToX.call(this);
        //this.moveToX()->point.MoveToX()
        moveToY();
    }
};
//3、bind
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);
