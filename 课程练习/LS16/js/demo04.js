function point(x,y){
    this.x=x;
    this.y=y;
}
var p =new point(2,3);
console.log(p);
point(5,6);
console.log(window.x,window.y);