//ES5的写法
function Restaurant(arr) { //餐厅类
    this.cash = arr['cash'] || 0;
    this.seats = arr['seats'] || 0;
    this.staff = arr['staff'] || [];
}
Restaurant.prototype.hire = function (obj) { //餐厅类 招聘职员
    this.staff.push(obj);
}

Restaurant.prototype.fire = function (obj) { //餐厅类 解雇职员
    var arr = []; //直接使用splice删除，会使hire的结果也出问题
    for (let i in this.staff) {
        if (this.staff[i].id != obj.id) {
            arr.push(this.staff[i]);
        }
    }
    this.staff = arr;
}
var id = 1; //id
function Staff(name, salary) { //职员类
    this.id = id++;
    this.name = name || '';
    this.salary = salary || 0;
}
Staff.prototype.work = function () {
    console.log('完成一次工作');
}

function Waiter(name, salary) { //服务员，继承自职员类
    Waiter.superclass.constructor.call(this, name, salary);
}
extend(Waiter, Staff)
Waiter.prototype.work = function (order) {
    if (typeof order === 'array') {
        console.log('服务员' + this.name + '记录点菜');
    } else {
        console.log('服务员' + this.name + '上菜');
    }
    Waiter.prototype.finish();
}


function Cook(name, salary) { //厨师类，继承自职员类
    Cook.superclass.constructor.call(this, name, salary);
}
extend(Cook, Staff)
Cook.prototype.work = function () {
    console.log('厨师' + this.name + '烹饪菜品');
    Cook.prototype.finish();
}

function Customer() {} //顾客类
Customer.prototype.order = function () {
    console.log("顾客点菜");
}
Customer.prototype.eat = function () {
    console.log('顾客吃完');
}

function menu(name, cost, price) {
    this.name = name || "";
    this.cost = cost || 0;
    this.price = price || 0;
}

//ES6引入了Class（类）这个概念,作为对象的模板,通过class关键字,可以定义类。
//class=只是语法糖，与真正意义上的类不一样，使用extends 继承，super超类
//可以利用 =>进行函数定义,也可以省略:function，还可以用let、const取代var
//Class 可以通过extends关键字实现继承

class Restaurant2 {
    constructor(arr) {
        this.cash = arr['cash'] || 0;
        this.seats = arr['seats'] || 0;
        this.staff = arr['staff'] || [];
    }
    hire(obj) {
        this.staff.push(obj);
    }
    fire(obj) {
        var arr = []; //直接使用splice删除，会使hire的结果也出问题
        for (let i in this.staff) {
            if (this.staff[i].id != obj.id) {
                arr.push(this.staff[i]);
            }
        }
        this.staff = arr;
    }
}
let id2 = 0;
class Staff2 {
    constructor(name, salary) {
        this.id = id2++;
        this.name = name || '';
        this.salary = salary || 0;
    }
    work() {
        console.log('职员工作完毕');
    }
}
class Waiter2 extends Staff2 {
    constructor(name, salary) {
        super(name, salary);
    }
    work(order) {
        if (typeof order === 'array') {
            console.log('服务员' + this.name + '记录点菜');
        } else {
            console.log('服务员' + this.name + '上菜');
        }
        super.finish();
    }
}
class Cook2 extends Staff2 {
    constructor(name, salary) {
        super(name, salary);
    }
    work() {
        console.log('厨师' + this.name + '烹饪菜品');
        super.finish();
    }
}
class Customer2 {
    order() {
        console.log("顾客点菜");
    }
    eat() {
        console.log('顾客吃完');
    }
}
class menu2 {
    constructor(name, cost, price) {
        this.name = name || "";
        this.cost = cost || 0;
        this.price = price || 0;
    }
}






var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);