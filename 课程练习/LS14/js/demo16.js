//Part 1 JS对象是否可扩展 isExtensible
//新对象默认是可扩展的无论何种方式创建的对象，这里使用的是字面量方式
var empty1 = {a:1};
console.log(Object.isExtensible(empty1));//true

//对象是否可以扩展与对象的属性是否可以配置无关
empty2 = Object.create({},{
    "a":{
        value : 1,
        configurable : false,//不可配置
        enumerable : true,//可枚举
        writable : true//可写
    }
});
console.log(Object.isExtensible(empty2));