//js对象
var obj = {
    num:10,
    str:"hi",
    show:function(){
        console.log(this.str);
    }
}
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi

var me = {
    name:"司涵",
    age:20,
    show:function(){
        console.log(this.name+this.age);
    }
}
me.show();