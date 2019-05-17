function thisTest(){
    console.log(this == window);
}
thisTest();

var a=10,b="hi";
function thisTest2(){
    this.a =20;//this 指向window 
    delete this.b;
    this.c="新添加属性";
}
thisTest2();
console.log(a,c);
console.log(b);

//this指向不明
var point ={
    x:0,
    y:0,
    moveTo:function(x,y){
        function moveToX(x){
            this.x=x;
        }
        function moveToY(y){
            this.y=y;
        }
        moveToX(x);
        moveToY(y);
    }
};

