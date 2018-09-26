//ES5的写法
function Restaurant(arr) { //餐厅类
    this.cash = arr['cash'] || 0;
    this.seats = arr['seats'] || 0;
    this.staff = arr['staff'] || [];
    //一个标记，用来判断是否已将创建了该类的实例
    this.instance = null;
}
// 提供了一个静态方法，用户可以直接在类上调用
Restaurant.getInstance = function (arr) {
    // 没有实例化的时候创建一个该类的实例
    if (!this.instance) {
        this.instance = new Restaurant(arr)
    }
    return this.instance;
}
Restaurant.prototype.hire = function (obj) { //餐厅类 招聘职员
    for (let i in this.staff) {
        if (this.staff[i].id == obj.id) {

            obj = null;
        }
    }
    if (obj != null) {
        this.staff.push(obj);
        console.log('雇佣了' + obj.name)
    }
}
Restaurant.prototype.fire = function (obj) { //餐厅类 解雇职员
    var arr = []; //直接使用splice删除，会使hire的结果也出问题
    for (let i in this.staff) {
        if (this.staff[i].id != obj.id) {
            arr.push(this.staff[i]);
        }
    }
    console.log('解雇了' + obj.name)
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
    this.instance = null;
}
Waiter.getInstance = function (name, salary) {
    if (!this.instance) {
        this.instance = new Waiter(name, salary)
    }
    return this.instance;
}
extend(Waiter, Staff)
Waiter.prototype.work = function (order) {
    if (typeof order === 'array') {
        console.log('服务员' + this.name + '记录点菜');
        // var newCook = new Cook.getInstance();
        Cook.work(order);
    } else {
        console.log('服务员' + this.name + '上菜');
        queue[0].eat();
    }
    // Waiter.prototype.finish();
}


function Cook(name, salary) { //厨师类，继承自职员类
    Cook.superclass.constructor.call(this, name, salary);
    this.instance = null;
}
extend(Cook, Staff)
Cook.getInstance = function (name, salary) {
    if (!this.instance) {
        this.instance = new Cook(name, salary)
    }
    return this.instance;
}
Cook.prototype.work = function (order) {
    console.log('厨师' + this.name + '烹饪菜品' + order.name);
    var newWaiter = new Waiter.getInstance();
    console.log('=======烹饪中======')
    //delay(500);
    console.log('厨师' + this.name + '烹饪完成');
    newWaiter.work();
}

function Customer() {} //顾客类
Customer.prototype.order = function (obj) {
    console.log("顾客点了" + obj.name + ",价格为" + obj.price + '元');
    // var newWaiter = Waiter.getInstance();
    Waiter.work(obj);
}
Customer.prototype.eat = function () {
    console.log('顾客吃完');
}

function Dash(name, cost, price) { //这里是菜品类
    this.name = name || "";
    this.cost = cost || 0;
    this.price = price || 0;
}

function Menu(list) { //菜单类
    this.list = [];
    if (list != null) {
        for (let i in list) {
            this.add(list[i].name, list[i].cost, list[i].price);
        }
    }
}
Menu.prototype.add = function (name, cost, price) { //添加菜品
    this.list.push(new Dash(name, cost, price));
}
Menu.prototype.getRandom = function () { //获取随机菜品
    var index = Math.floor(Math.random() * this.list.length);
    return (this.list[index]);
}


var queue = [];

var Res = Restaurant.getInstance({
    cash: 1000000,
    seats: 1,
    staff: []
});
var ifeMenu = new Menu([ //添加菜单
    {
        name: '糖醋排骨',
        cost: 20,
        price: 40
    },
    {
        name: '麻婆豆腐',
        cost: 10,
        price: 20
    },
    {
        name: '老鸭粉丝汤',
        cost: 13,
        price: 26
    },
    {
        name: '蒜枣大黄鱼',
        cost: 18,
        price: 44
    }
]);
var Cook = Cook.getInstance('Tony', '10000'); //添加厨师单例
var Waiter = Waiter.getInstance('Ben', '9000'); //添加服务员单例
for (let i = 0; i < 5; i++) { //往队列里塞满排排坐的客人     
    queue.push(new Customer());
}
Res.hire(Cook)
Res.hire(Waiter)
// document.getElementById('#btn').onclick = function () {
//     console.log('餐馆开张啦！');
//     while (queue.length) { //客人依次就餐，每次只能点一个菜
//         var customer = queue[0];
//         ifeRestaurant.seats -= 1;
//         customer.order(ifeMenu.getRandom());
//         ifeRestaurant.seats += 1;
//         queue.shift();
//     }
//     console.log('客人没啦');
// }