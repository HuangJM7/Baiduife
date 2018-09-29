// 为了简化类的声明，可以把派生子类的整个过程包装在一个extend的函数，
// 和其他语言中的extend关键字类似，基于一个给定的类结构创建一个新的类
// 和原型链继承中直接使用subClass.prototype = new superClass()有什么区别呢，
// 作为一项改进，它添加了一个空函数F，并将它创建的对象添加进原型链中，
// 这样可以避免产生superClass的新实例
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
/*创建extend函数为了程序中所有的继承操作*/
//subClass:子类  superClass：超类
function extend(subClass,superClass) {
    //1，使子类原型属性等于父类的原型属性
    //初始化一个中间空对象，目的是为了转换主父关系
    var F = function () {};
    F.prototype = superClass.prototype;
    //2， 让子类继承F
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    //3，为子类增加属性 superClass ==》原型链的引用
    subClass.superClass = superClass.prototype;
    //4，增加一个保险，就算你的原型类是超类（Object）那么也要把你的构造函数级别降下来
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}