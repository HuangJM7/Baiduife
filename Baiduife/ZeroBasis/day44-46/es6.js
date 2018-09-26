//ES6引入了Class（类）这个概念,作为对象的模板,通过class关键字,可以定义类。
//class=只是语法糖，与真正意义上的类不一样，使用extends 继承，super超类
//可以利用 =>进行函数定义,也可以省略:function，还可以用let、const取代var
//Class 可以通过extends关键字实现继承

class Restaurant {
    constructor(arr) {
        this.cash = arr['cash'] || 0;
        this.seats = arr['seats'] || 0;
        this.staff = arr['staff'] || [];
        this.instance = null;
    }
    hire(obj) {
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
    fire(obj) {
        var arr = []; //直接使用splice删除，会使hire的结果也出问题
        for (let i in this.staff) {
            if (this.staff[i].id != obj.id) {
                arr.push(this.staff[i]);
            }
        }
        this.staff = arr;
        console.log('解雇了' + obj.name)
    }
    static getInstance(name) {
        if (!this.instance) {
            this.instance = new Restaurant(name);
        }
        return this.instance;
    }

}
let id = 0;
class Staff {
    constructor(name, salary) {
        this.id = id++;
        this.name = name || '';
        this.salary = salary || 0;
    }
    finish() {
        console.log('职员工作完毕');
    }
}
class Waiter extends Staff {
    constructor(name, salary) {
        super(name, salary);
        var instance = null;
    }
    work(order) {
        if (order) {
            console.log('服务员' + this.name + '记录菜品' + order.name);
            var newCook = Cook.getInstance();
            newCook.work(order);
        } else {
            console.log('服务员' + this.name + '上菜');
            queue[0].eat();
        }
        super.finish();
    }
    static getInstance(name, salary) {
        if (!this.instance) {
            this.instance = new Waiter(name, salary);
        }
        return this.instance;
    }
}
class Cook extends Staff {
    constructor(name, salary) {
        super(name, salary);
        var instance = null;
    }
    work(order) {
        super.finish();
        console.log('厨师' + this.name + '烹饪菜品' + order.name);
        var newWaiter =Waiter.getInstance();
        console.log('=======烹饪中======')
        //delay(500);
        console.log('厨师' + this.name + '烹饪完成');
        newWaiter.work();
    }
    static getInstance(name, salary) {
        if (!this.instance) {
            this.instance = new Cook(name, salary);
        }
        return this.instance;
    }
}
var queue = []; //顾客队列，push入队，shift出队
class Customer {
    order(obj) {
        console.log("顾客点了" + obj.name + ",价格为" + obj.price + '元');
        var newWaiter =  Waiter.getInstance();
        newWaiter.work(obj);
    }
    eat() {
        console.log('顾客吃完');
    }
}
function Dash(name,cost,price) {        //这里是菜品类
	this.name = name || "";
	this.cost = cost || 0;
	this.price = price || 0 ;
}
function Menu(list) {               //菜单类
    this.list = [];
    if(list != null) {
        for(let i in list) {
            this.add(list[i].name,list[i].cost,list[i].price);
        }
    }
}
Menu.prototype.add = function(name,cost,price) {           //添加菜品
    this.list.push(new Dash(name,cost,price));
}
Menu.prototype.getRandom = function() {             //获取随机菜品
    var index = Math.floor(Math.random()*this.list.length);
    return(this.list[index]);
}


var ifeRestaurant = new Restaurant({	//建立一个ife餐馆
    cash: 1000000,
    seats: 1,
    staff: []
});
var ifeMenu = new Menu([                //添加菜单，暂且算4个好了
        {name:   '糖醋排骨',cost:   20,price:  40},
        {name:   '麻婆豆腐',cost:   10,price:  20},
        {name:   '老鸭粉丝汤',cost:   13,price:  26},
        {name:   '蒜枣大黄鱼',cost:   18,price:  44}
]);
var newCook = Cook.getInstance('Tony','10000');        //添加厨师单例
var newWaiter = Waiter.getInstance('Ben','9000');       //添加服务员单例
for(let i = 0 ; i < 5 ; i++ ){                    //往队列里塞满排排坐的客人     
    queue.push(new Customer());
}
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(newWaiter);
console.log('假定队伍里有'+queue.length+"个客人");
// var button = document.querySelector('#app input');
// //console.log(button)
// button.onclick = function() {
//     console.log('餐馆开张啦！');
//     //delay(500);
//     while(queue.length) {                           //客人依次就餐，每次只能点一个菜
//         var customer = queue[0];
//         ifeRestaurant.seats -= 1;
//         customer.order(ifeMenu.getRandom());
//         ifeRestaurant.seats += 1;
//         queue.shift();
//         //delay(200);
//     } 
//     console.log('客人没啦');
// }
