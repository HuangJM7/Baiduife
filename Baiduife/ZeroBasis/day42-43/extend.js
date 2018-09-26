// 为了简化类的声明，可以把派生子类的整个过程包装在一个extend的函数，
// 和其他语言中的extend关键字类似，基于一个给定的类结构创建一个新的类
// 和原型链继承中直接使用subClass.prototype = new superClass()有什么区别呢，
// 作为一项改进，它添加了一个空函数F，并将它创建的对象添加进原型链中，
// 这样可以避免产生superClass的新实例
// function extend(subClass, superClass) {
//     var F = function () {};
//     F.prototype = superClass.prototype;
//     subClass.prototype = new F();
//     subClass.prototype.constructor = subClass;
//     subClass.superclass = superClass.prototype;
//     //修正原型的constructor指向
//     if (!superClass.prototype.contrucotor == Object.prototype.constructor) {
//         superClass.prototype.constructor = superClass;
//     }
// }

function extend(Sub, Sup) {
    var F = function () {};
    F.prototype = Sup.prototype;
    Sub.prototype = new F();
    Sub.prototype.constructor = Sub;
    Sub.superclass = Sup.prototype;
    if (Sup.prototype.constructor === Object.prototype.constructor) {
        Sup.prototype.constructor = Sup;
    }

}