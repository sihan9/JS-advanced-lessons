var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);
console.log(point);

var Person =function(name,age){
    var namePricate = name;
    var agePricatr = age;
    this.showMe=function(){
        console.log(namePricate,agePricatr);

    }
}
var p1=new Person("mike",23);
p1.showMe();
