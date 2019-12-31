"use strict";
/**
 * boolean
 * number
 * string
 * array
 * tuple
 * enum
 * any
 * null,undefined
 * void
 * never
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var flag = true;
var num = 123;
var str = "hello";
var arr0 = [1, 2, 3, 5];
var arr1 = [1, 2, 3, 4, '5'];
var arr11 = [1, 2, 3];
var arr12 = [1, 2, 3, '4'];
var arr22 = [1, '4'];
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag["error"] = "2";
})(Flag || (Flag = {}));
;
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 4] = "red";
    Color[Color["orange"] = 5] = "orange";
})(Color || (Color = {}));
;
var any = 'any type';
var a;
var ss;
var s = Flag.success;
var c = Color.orange;
var nul = null;
var b1;
/*
b1=(()=>{
    throw new Error('error');
})();
*/
function fun() {
}
function person(name, age, isBoy) {
    if (isBoy === void 0) { isBoy = true; }
    return name + "--" + isBoy;
}
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    result.map(function (d) { sum += d; });
    return sum;
}
var ff = person('fqj');
console.log(ff);
console.log("sum=", sum(1, 2, 3, 4));
function getInfo(str) {
    console.log(str + "-----" + typeof str);
}
getInfo(11);
getInfo('22');
//class
//es5
/*
function Student(name,age){
    this.name=name;
    this.age = age;
    this.run=function(){
        console.log(this.name + ' goto school');
    }
}
Student.prototype.sex = 'boy';
Student.prototype.work = function(){
    console.log(this.name + 'zai xuexi' );
}
Student.getInfo=functino(){
    console.log("static function");
}
var stu1 = new Student('fqj',23);
var stu2 = new Student('zs',44);
*/
/*
//Web类 继承Person 原型链+对此昂冒充的组合继承模式
function Web(){
    person.call(this); //对象冒充实现继承,但是没法继承原型链的的属性
}
var w = new Web();
w.run(); //ok
w.work();//error
*/
/*
//原型链实现继承
function Web(name,age){
}
Web.prototype = new Person(); //原型链实现基础
var w = new Web('z4',20);
w.run();
*/
/**
 * 原型链+组合
 
function Web(name,age){
    person.call(this,name,age); //对象冒充继承 视力恶化子类可以给父类传参
}
//Web.prototype = new Person(); //原型链实现基础
web.prototype = Person.prototype;
var w = new Web('z4',20);
w.run();
*/
//ts. 定义类
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.run = function () {
        console.log(this.name, this.age);
    };
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    return Person1;
}());
var p = new Person1('zs', 1);
console.log(p.getName());
p.setName('w5');
console.log(p.getName());
p.run();
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name, age) {
        return _super.call(this, name, age) || this;
    }
    Web1.prototype.run = function () {
        console.log("1111111");
    };
    return Web1;
}(Person1));
var w1 = new Web1('zz', 11);
w1.run();
console.log(w1.getName());
//3. 类里的修饰符
//public(本类，继承类，类外 都能访问),protected（本类，继承类）,private（本类）
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(isAdmin) {
        var _this = _super.call(this, 'admin', 22) || this;
        _this.isAdmin = isAdmin;
        return _this;
    }
    Admin.print = function () {
        console.log("static sex=" + Admin.sex);
    };
    Admin.sex = "boy111";
    return Admin;
}(Person1));
var admin = new Admin(true);
Admin.print();
console.log(admin.getName(), admin.isAdmin);
//4.多态
/*
class Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log("eat....");
    }
}
class Dog extends Animal {
    constructor(name:string){
        super(name);
    }
    eat(){
        console.log(this.name+" 吃肉");
    }
}
class Cat extends Animal {
    constructor(name:string){
        super(name);
    }
    eat(){
        console.log(this.name+"吃老鼠");
    }
}
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(".......eat.......", this.name);
    };
    return Dog;
}(Animal));
var dog = new Dog('dog');
dog.eat();
//4 接口
// 1)属性接口 (对 json 的约束)
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function printName(name) {
    console.log(name.firstName, name.secondName);
}
printName({
    firstName: '111',
    secondName: '2222',
});
var obj = {
    firstName: '111',
    secondName: '2222',
    age: 10 //ok
};
printName(obj);
function printName1(name) {
    console.log(name.firstName, name.secondName);
}
printName1({
    firstName: '111'
});
printName1({
    firstName: '222',
    secondName: '3333'
});
function ajax(config) {
    try {
        var xhr_1 = new XMLHttpRequest();
        xhr_1.open(config.type, config.url, true);
        xhr_1.send(config.data);
        xhr_1.onreadystatechange = function () {
            if (xhr_1.readyState === 4 && xhr_1.status === 200) {
                console.log("chenggong");
                if (config.dataType === 'json') {
                    console.log(JSON.parse(xhr_1.responseText));
                }
                else {
                    console.log(xhr_1.responseText);
                }
            }
        };
    }
    catch (e) {
    }
}
ajax({
    type: 'post',
    url: 'www.baidu.com',
    data: 'name=zhangshan',
    dataType: 'json'
});
var md5 = function (key, value) {
    return key + value;
};
var aa = md5('name', 'value');
console.log(aa);
//可索引接口，数组的约束 (不常用)
var arr7 = [123, 4];
var arr8 = ['11', '22'];
var arr = ['1234', '23433'];
console.log(arr);
var obj1 = { name: 'zhangshang', sex: 'body' };
//const obj2:UserObj = {age:1};//error
console.log(obj1);
var Dog1 = /** @class */ (function () {
    function Dog1(name) {
        this.name = name;
    }
    Dog1.prototype.eat = function () {
        console.log(this.name + 'chi liangshi');
    };
    return Dog1;
}());
var dog1 = new Dog1('xiao hei');
dog1.eat();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + ' xie daima ' + code);
    };
    return Programmer;
}());
var Web3 = /** @class */ (function (_super) {
    __extends(Web3, _super);
    function Web3(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Web3.prototype.work3 = function () {
        console.log(this.name + 'work');
    };
    Web3.prototype.eat3 = function () {
        console.log(this.name + 'xihuan chi mantou');
    };
    return Web3;
}(Programmer));
var web3 = new Web3('ddd');
web3.coding('aaaaaa');
web3.eat3();
web3.work3();
//范型就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持
function getData(value) {
    return value;
}
getData(123);
function getData1(value) {
}
getData1('123');
getData1(123);
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        this.list.map(function (d) {
            minNum = (minNum > d ? d : minNum);
        });
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(1);
m.add('2');
m.add('b');
m.add('c');
m.add('a');
m.add('e');
var minvalue = m.min();
console.log(minvalue);
var setData1 = function (value1, value2) {
    return value1;
};
var sn1 = setData1('name 1, ', 'zhangsan');
console.log(sn1);
function getData111(value) {
    return value;
}
var sn2 = getData111('1111 2222');
var myGetData = getData111;
var sn3 = myGetData('1111');
console.log(sn2);
console.log(sn3);
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MySqlDb;
}());
var a123 = new ArticleCate();
a123.title = 'guonei';
a123.desc = "guoneixinwen";
a123.status = '1234';
var u = new User();
u.username = 'zs1';
u.password = '123456';
var db = new MySqlDb();
db.add(a123);
var MySqlDb1 = /** @class */ (function () {
    function MySqlDb1() {
    }
    MySqlDb1.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySqlDb1.prototype.update = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MySqlDb1;
}());
var u1 = new User();
u1.username = 'zs1';
u1.password = '123456';
var db1 = new MySqlDb1();
db1.add(u1);
var ArticalCate2 = /** @class */ (function () {
    function ArticalCate2(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticalCate2;
}());
var a3 = new ArticalCate2({
    title: 'feilei',
    desc: '1111',
    status: '1'
});
var db3 = new MySqlDb1();
db3.add(a3);
//定义一个操作mysql数据库, 注意：要实现范型接口 这个类也应该是一个范型类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
        console.log("init mysql");
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        var list = [];
        list.push({ title: 'hello', desc: 'ok...' });
        list.push({ title: 'hello1', desc: 'ok1...' });
        return list;
    };
    return MysqlDB;
}());
//定义一个操作mssql数据库类
var MssqlDB = /** @class */ (function () {
    function MssqlDB() {
        console.log('init mssql');
    }
    MssqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MssqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDB;
}());
//操作用户表 定义一个User 类和 数据库映射
var UserBean = /** @class */ (function () {
    function UserBean() {
    }
    return UserBean;
}());
var user = new UserBean();
user.username = 'demo';
user.password = 'passwod';
var mysql = new MysqlDB();
mysql.add(user);
var mssql = new MssqlDB();
mssql.add(user);
var list = mysql.get(4);
console.log(list);
/**
 模块的概念（官方）
    关于术语的一点说明：请务必要一点，Typescript 1.5 里 术语已经发生了改变。“内部模块”实现称做“现在称做”命名空间“
    ”外部模块“现在为”模块模块在其自身的作用域里执行，为不实全局作用域里；
    这意味着定义在一个模块里的变量，函数等等在模块外部是不可见的，除非你明确她使用export形式之一导出他们。
    相反，如果想使用其他模块的变量，函数，类，接口等的时候，你必须要导入他们，可以使用 import形式之一。
 */
/**
 模块的概念（自己理解）
    我们可以八一些公共的功能单独抽出离成一个文件作为一个模块。
    模块离的变量 函数 类等默认是私有的，如果我们要在外部访问模块里的数据（变量 函数 类），
    我们需要通过export暴露模块里的数据（变量 函数 类。。）
    暴露后我们通过 import  引入模块就可以使用模块里的暴露的数据（变量 函数 类）
 */
var db_1 = require("./testmodule/modules/db");
var a100 = db_1.getData1();
db_1.save();
console.log(db_1.dbUrl);
/**
 * 命名空间
 * 一个模块里有 多个命名空间
 *
 * 命名空间和模块的区别
 * 命名空间：内部模块，主要用于组织代码，避免命名空间
 * 模块： ts的内部模块简称，侧重于代码的复用，一个模块里可能会有多个命名空间。
 */
var animal_1 = require("./testmodule/modules/animal");
var aDog = new animal_1.A.Dog('1234');
aDog.eat();
/**
 * 装饰器：一种特殊的声明，它能够被附加到类声明，方法，属性，参数上，可以修改类方法行为。
 * 通俗的讲装饰器就是一个方法，可以注入到类，方法，属性参数上来的扩展类，属性，参数功能。
 * 常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器。
 * 装饰器的写法：普通装饰器（无法传参），装饰器工厂（可以传参）
 * 装饰器过去几年中js最大的成功之一，已是ES7的标准特性之一
 */
//1. 类装饰器：
function logClass(params) {
    //params: 就是当前类
    console.log(params);
    params.prototype.apiUrl = 'http://api.com';
    params.prototype.run = function () {
        console.log("running .....");
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        var _a;
        console.log("11111", (_a = this) === null || _a === void 0 ? void 0 : _a.apiUrl);
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
var url = http.apiUrl;
http.run();
console.log(url);
//1.2装饰器工厂（可传参）
function logClass1(params) {
    return function (target) {
        console.log(params, target);
        target.prototype.apiUrl = params;
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
        var _a;
        console.log("11111", (_a = this) === null || _a === void 0 ? void 0 : _a.apiUrl);
    }
    HttpClient1.prototype.getData = function () {
    };
    HttpClient1 = __decorate([
        logClass1('hello')
    ], HttpClient1);
    return HttpClient1;
}());
var http1 = new HttpClient1();
var url1 = http1.apiUrl;
console.log(url1);
//1.3
function logClass2(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = 'wo shi xiugai hou de';
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl += '---';
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
        this.apiUrl = 'im a url';
    }
    HttpClient2.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HttpClient2 = __decorate([
        logClass2
    ], HttpClient2);
    return HttpClient2;
}());
var http2 = new HttpClient2();
console.log(http2.apiUrl);
http2.getData();
/**
 * 2. 属性装饰器
 */
//类装饰器
function logClass3(params) {
    return function (target) {
        console.log(params);
        console.log(target);
    };
}
//属性装饰器
function logProperty(params) {
    console.log(params);
    return function (target, attr) {
        target.url = params;
        console.log(target);
        console.log(attr);
    };
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
    }
    HttpClient3.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logProperty('http://www.naver.com')
    ], HttpClient3.prototype, "url", void 0);
    HttpClient3 = __decorate([
        logClass3('tst helo')
    ], HttpClient3);
    return HttpClient3;
}());
var http3 = new HttpClient3();
http3.getData();
/**
 * 3.方法装饰器
 */
function loglogMethods(params) {
    return function (target, methodName, desc) {
        console.log(target, methodName, desc);
        target.apiUrl = 'xxx';
        target.run = function () {
            console.log('run...');
        };
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            oMethod.apply(this, args);
        };
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("我是getData里面的方法");
    };
    __decorate([
        loglogMethods('methods.....')
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var http4 = new HttpClient4();
http4.getData(123, 'xxx');
/**
 * 方法参数装饰器
 */
function logParams5(params) {
    console.log(params);
    return function (target, methodName, parmasIndex) {
        console.log(target, methodName, parmasIndex);
        target.apiUrl = params;
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function (uuid) {
        console.log("我是getData里面的方法1111");
    };
    __decorate([
        __param(0, logParams5('uuid'))
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var http5 = new HttpClient5();
http5.getData("111222");
console.log("1111", http5.apiUrl);
/**
***装饰器执行顺序
属性>方法>方法参数>类
 */
function logClass6(params) {
    return function (target) {
        console.log('类装饰器1...');
    };
}
function logClass6_1(params) {
    return function (target) {
        console.log('类装饰器2...');
    };
}
function logAttribute6(params) {
    return function (target, attrName) {
        console.log('属性装饰器...');
    };
}
function logMethod6(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器...');
    };
}
function logParams6(params) {
    return function (target, attrName, desc) {
        console.log('方法参赛装饰器1...');
    };
}
function logParams6_1(params) {
    return function (target, attrName, desc) {
        console.log('方法参赛装饰器2...');
    };
}
var HttpClient6 = /** @class */ (function () {
    function HttpClient6() {
    }
    HttpClient6.prototype.getData = function () {
        return true;
    };
    HttpClient6.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute6()
    ], HttpClient6.prototype, "apiUrl", void 0);
    __decorate([
        logMethod6()
    ], HttpClient6.prototype, "getData", null);
    __decorate([
        __param(0, logParams6()), __param(1, logParams6_1())
    ], HttpClient6.prototype, "setData", null);
    HttpClient6 = __decorate([
        logClass6('http://www.baidu.com'),
        logClass6_1('xxxx')
    ], HttpClient6);
    return HttpClient6;
}());
var http6 = new HttpClient6();
http6.getData();
http6.setData('1234', 5678);
/**
属性装饰器...
方法装饰器...
方法参赛装饰器2...
方法参赛装饰器1...
类装饰器2...
类装饰器1...
 */ 
