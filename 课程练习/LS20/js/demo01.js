//正则对象的创建方式
//1 通过字面量直接创建
var reg1 = /[bcf]at/gi;
//2 通过RegExp构造函数来实例化正则对象
var rge2 = new RegExp(/[bcf]at/,"gi");
var rge3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]