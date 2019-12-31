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

const flag:boolean = true;
const num:number = 123;
const str:string = "hello";
const arr0:number[] = [1,2,3,5];
const arr1:any[] = [1,2,3,4,'5'];
const arr11:Array<number> = [1,2,3];
const arr12:Array<any> = [1,2,3,'4'];
const arr22:[number,string] = [1,'4'];
enum Flag {success=1,error='2'};
enum Color {blue,red=4,'orange'}; 
const any:any = 'any type';
let a:undefined;
let ss:undefined | number;
let s:Flag = Flag.success;
let c:Color = Color.orange;
let nul:null = null;
let b1:never;
/*
b1=(()=>{
    throw new Error('error');
})();
*/

function fun():void{
}
function person(name:string,age?:number,isBoy:boolean=true):any{
    return `${name}--${isBoy}`;
}
function sum(...result:number[]):number{
    let sum = 0;
    result.map(d=>{sum+=d})
    return sum;
}
const ff = person('fqj');
console.log(ff);
console.log("sum=",sum(1,2,3,4));

function getInfo(name:string):string;
function getInfo(age:number):number;
function getInfo(str:any):any{
    console.log(`${str}-----${typeof str}`);
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
class Person1{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    run():void{
        console.log(this.name,this.age);
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }
}
const p = new Person1('zs',1);
console.log(p.getName());
p.setName('w5');
console.log(p.getName());
p.run();

class  Web1 extends Person1{
    constructor(name:string,age:number){
        super(name,age);
    }
    run():void{
        console.log("1111111");
    }
}

const w1 = new Web1('zz',11);
w1.run();
console.log(w1.getName())
    

//3. 类里的修饰符
//public(本类，继承类，类外 都能访问),protected（本类，继承类）,private（本类）
class Admin extends Person1{
    public isAdmin:boolean;
    public static sex:string="boy111";
    constructor(isAdmin:boolean){
        super('admin',22);
        this.isAdmin= isAdmin;
    }
    public static print():void{
        console.log("static sex="+Admin.sex);
    }
}
const admin = new Admin(true);
Admin.print();
console.log(admin.getName(),admin.isAdmin);

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
abstract class Animal {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any;
}
class Dog extends Animal {
    constructor(name:string){
        super(name);
    }
    eat(){
        console.log(".......eat.......",this.name);
    }
}
const dog= new Dog('dog');
dog.eat();

//4 接口
// 1)属性接口 (对 json 的约束)
function printLabel(labelObj:{label:string}){
    console.log(labelObj.label);
}

let myObj = {size:10,label:'Size 10 Object'};
printLabel(myObj);

//2.接口 行为和动作的规范，对批量方法进行约束
interface FullName{
    firstName:string,
    secondName:string
}

function printName(name:FullName):void{
    console.log(name.firstName,name.secondName)
}
printName({
    firstName:'111',
    secondName:'2222',
    //age:10 error
});
const obj = {
    firstName:'111',
    secondName:'2222',
    age:10 //ok
}
printName(obj)

//3.接口可选属性
interface FullName1{
    firstName:string,
    secondName?:string
}
function printName1(name:FullName1):void{
    console.log(name.firstName,name.secondName)
}
printName1({
    firstName:'111'
});
printName1({
    firstName:'222',
    secondName:'3333'
});


interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

function ajax(config:Config){
    try{
        const xhr=new XMLHttpRequest();
        xhr.open(config.type,config.url,true);
        xhr.send(config.data);
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4 && xhr.status ===200){
                console.log("chenggong");
                if(config.dataType === 'json'){
                    console.log(JSON.parse(xhr.responseText));
                }else{
                    console.log(xhr.responseText);
                }
            }
        }
    }catch(e){

    }
}

ajax({
    type:'post',
    url:'www.baidu.com',
    data:'name=zhangshan',
    dataType:'json'
});



// 函数类型接口: 对方法传入参数 以及返回值进行约束

//加密的函数类型接口
interface encript{
    (key:string,value:string):string;
}

const md5:encript=function(key:string,value:string):string{
    return key+value;
}
const aa = md5('name','value');
console.log(aa);

//可索引接口，数组的约束 (不常用)
const arr7:number[] = [123,4];
const arr8:Array<string>=['11','22'];

interface UserArr {
    [index:number]:string
}

const arr:UserArr = ['1234','23433'];
console.log(arr);

//可索引接口，对对象的类型
interface UserObj{
    [index:string]:string;
}

const obj1:UserObj = {name:'zhangshang',sex:'body'};
//const obj2:UserObj = {age:1};//error
console.log(obj1);

//类类型接口:对类的约束 和抽象类有点相似
interface Animal1{
    name:string;
    cat(str:string):void
}

class Dog1 implements Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name+'chi liangshi');
    }
}

const dog1 = new Dog1('xiao hei');
dog1.eat();

//接口扩展，接口可以继承接口
interface Animal3{
    eat3():void;
}

interface Person3 extends Animal3 {
    work3():void;
}

class Programmer {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    coding(code:string){
        console.log(this.name+' xie daima '+code);
    }
}

class Web3 extends Programmer implements Person3{
    public name:string;
    constructor(name:string){
        super(name);
        this.name = name;
    }
    work3():void{
        console.log(this.name+'work'); 
    }
    eat3():void{
        console.log(this.name+'xihuan chi mantou');
    }
}


const web3 = new Web3('ddd');
web3.coding('aaaaaa');
web3.eat3();
web3.work3();

//范型就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持

function getData(value:any):any{
    return value;
}

getData(123);

function getData1<T>(value:T):any{

}
getData1<string>('123');
getData1<number>(123);

class MinClass<T>{
    public list:T[]=[];
    add(num:T){
        this.list.push(num);
    }
    min():T{
        var minNum = this.list[0];
        this.list.map(d=>{
            minNum = (minNum > d ?d : minNum);
        })
        return minNum;
    }
}
const m = new MinClass();
m.add(1);
m.add('2')
m.add('b');
m.add('c');
m.add('a')
m.add('e');
const minvalue = m.min();
console.log(minvalue);

interface ConfigFn{
    <T>(value1:T,value2:T):T;
}

const setData1:ConfigFn=function<T>(value1:T,value2:T):T{
    return value1;
};

const sn1 = setData1<string>('name 1, ','zhangsan');
console.log(sn1);


//范型接口

interface ConfigFn1<T>{
    (value:T):T;
}

function getData111<T>(value:T):T{
    return value;
}

const sn2 = getData111('1111 2222');
const myGetData:ConfigFn1<string> = getData111;
const sn3 = myGetData('1111');
console.log(sn2);
console.log(sn3);

class User {
    username:string | undefined;
    password:string | undefined;
}

class ArticleCate {
    title:string | undefined;
    desc:string |undefined;
    status:string |undefined;
}

class MySqlDb {
    add(info:ArticleCate):boolean{
        console.log(info);
        return true;
    }
}
const a123 = new ArticleCate();
a123.title = 'guonei';
a123.desc = "guoneixinwen";
a123.status = '1234';
const u = new User();
u.username = 'zs1';
u.password = '123456';
const db = new MySqlDb();
db.add(a123);

class MySqlDb1<T> {
    add(info:T):boolean{
        console.log(info);
        return true;
    }
    update(info:T,id:number):boolean{
        console.log(info);
        console.log(id);
        return true;
    }
} 

const u1 = new User();
u1.username = 'zs1';
u1.password = '123456';
const db1 = new MySqlDb1<User>();
db1.add(u1);

class ArticalCate2{
    title:string | undefined;
    desc:string | undefined;
    status:string | undefined;
    constructor(params:{
        title:string|undefined,
        desc:string|undefined,
        status:string|undefined
    }){
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

const a3 = new ArticalCate2({
    title:'feilei',
    desc:'1111',
    status:'1'
});

const db3=new MySqlDb1<ArticalCate2>();
db3.add(a3);

//===================================
/**
 功能：定义一个操作数据库 支持 Msql Mssql MongoDb
 要求1：Mysql mssql monggodb功能一样 都有add update delete get 方法
 注意： 约束统一的规范，以及代码重用
 解决方案：需要约束规范所以要定义接口，需要代码的重用所以用到范型
    1.接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
    2.范型 通俗理解：范型 就是解决 类 接口 方法的 复用性。
 */

 interface DBI<T>{
     add(info:T):boolean;
     update(info:T,id:number):boolean;
     delete(id:number):boolean;
     get(id:number):any[];
 }

 //定义一个操作mysql数据库, 注意：要实现范型接口 这个类也应该是一个范型类
 class MysqlDB<T> implements DBI<T>{
     
     constructor(){
        console.log("init mysql")
     }
     add(info: T): boolean {
         console.log(info);
         return true;
     }     
     update(info: T, id: number): boolean {
         throw new Error("Method not implemented.");
     }
     delete(id: number): boolean {
         throw new Error("Method not implemented.");
     }
     get(id: number): any[] {
         const list = []
         list.push({title:'hello',desc:'ok...'})
         list.push({title:'hello1',desc:'ok1...'})
         return list;
     }
 }

//定义一个操作mssql数据库类
class MssqlDB<T> implements DBI<T>{
    constructor(){
        console.log('init mssql');
    }
    add(info: T): boolean {
        console.log(info);
        return true;
    }    
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

//操作用户表 定义一个User 类和 数据库映射
class UserBean {
    username:string|undefined;
    password:string|undefined;
}
const user = new UserBean();
user.username = 'demo';
user.password = 'passwod';

const mysql = new MysqlDB<UserBean>();
mysql.add(user);

const mssql = new MssqlDB<UserBean>();
mssql.add(user);
const list = mysql.get(4);
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


import {getData1 as getDatak100,save,dbUrl} from './testmodule/modules/db'
const a100 = getDatak100();
save();
console.log(dbUrl);


/**
 * 命名空间
 * 一个模块里有 多个命名空间
 * 
 * 命名空间和模块的区别
 * 命名空间：内部模块，主要用于组织代码，避免命名空间
 * 模块： ts的内部模块简称，侧重于代码的复用，一个模块里可能会有多个命名空间。
 */

import {A} from './testmodule/modules/animal';
 
const aDog = new A.Dog('1234');
aDog.eat();

/**
 * 装饰器：一种特殊的声明，它能够被附加到类声明，方法，属性，参数上，可以修改类方法行为。
 * 通俗的讲装饰器就是一个方法，可以注入到类，方法，属性参数上来的扩展类，属性，参数功能。
 * 常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器。
 * 装饰器的写法：普通装饰器（无法传参），装饰器工厂（可以传参）
 * 装饰器过去几年中js最大的成功之一，已是ES7的标准特性之一
 */

 //1. 类装饰器：
 function logClass(params:any){
     //params: 就是当前类
    console.log(params);
    params.prototype.apiUrl = 'http://api.com';
    params.prototype.run = function(){
        console.log("running .....")
    }
 }

 @logClass
 class HttpClient{
     [x: string]: any;
     
     constructor(){
        console.log("11111",this?.apiUrl);
     }

     getData(){

     }
 }

 const http:any = new HttpClient();
 const url = http.apiUrl;
 http.run();
 console.log(url)

 //1.2装饰器工厂（可传参）
function logClass1(params:string){
    return function(target:any){
        console.log(params,target);
        target.prototype.apiUrl = params;
    }
}
@logClass1('hello')
class HttpClient1{
    [x: string]: any;
    
    constructor(){
       console.log("11111",this?.apiUrl);
    }

    getData(){

    }
}

const http1:any = new HttpClient1();
const url1 = http1.apiUrl;
console.log(url1);


//1.3
function logClass2(target:any){
    console.log(target);
    return class extends target {
        apiUrl:any = 'wo shi xiugai hou de';
        getData(){
            this.apiUrl+='---';
            console.log(this.apiUrl);
        }
    }
}
@logClass2
class HttpClient2{
    public apiUrl:string | undefined;
    constructor(){
        this.apiUrl = 'im a url';
    }

    getData(){
        console.log(this.apiUrl);
    }
}

const http2 = new HttpClient2();
console.log(http2.apiUrl);
http2.getData();


/**
 * 2. 属性装饰器
 */

 //类装饰器
function logClass3(params:any){
    return function(target:any){
        console.log(params);
        console.log(target);
    }
}
//属性装饰器
function logProperty(params:any){   //params = property
    console.log(params);
    return function(target:any,attr:any){ //target = class
        target.url = params;
        console.log(target);
        console.log(attr);
    }
}

@logClass3('tst helo')
class HttpClient3{
    @logProperty('http://www.naver.com')
    public url:any | undefined; 
    constructor(){
       
    }

    getData(){
        console.log(this.url);
    }
}
const http3:any = new HttpClient3();
http3.getData();


/**
 * 3.方法装饰器
 */


function loglogMethods(params:any){   

    return function(target:any,methodName:any,desc:any){
      console.log(target,methodName,desc); 
      target.apiUrl = 'xxx';
      target.run = function(){
          console.log('run...');
      }
      const oMethod = desc.value;
      desc.value = function(...args:any[]){
        args = args.map(value=>{
             return String(value);           
        });
        console.log(args);
        oMethod.apply(this,args);
      }
    }
}

class HttpClient4{
    public url:any | undefined;
    constructor(){
       
    }
    @loglogMethods('methods.....')
    getData(...args:any[]){
        console.log("我是getData里面的方法");
    }
} 
const http4:any = new HttpClient4();
http4.getData(123,'xxx');

/**
 * 方法参数装饰器
 */

function logParams5(params:any){
    console.log(params);
    return function(target:any,methodName:any,parmasIndex:any){
        console.log(target,methodName,parmasIndex);
        target.apiUrl = params;
    }
} 
class HttpClient5{
    public url:any | undefined;
    constructor(){
       
    }
    getData(@logParams5('uuid')uuid:any){
        console.log("我是getData里面的方法1111");
    }
} 

const http5:any = new HttpClient5();
http5.getData("111222");
console.log("1111",http5.apiUrl);


/**
***装饰器执行顺序
属性>方法>方法参数>类
 */
function logClass6(params:any){
    return function(target:any){
        console.log('类装饰器1...')
    }
}
function logClass6_1(params:any){
    return function(target:any){
        console.log('类装饰器2...')
    }
}
function logAttribute6(params?:any){
    return function(target:any,attrName:any){
        console.log('属性装饰器...')
    }
}
function logMethod6(params?:any){
    return function(target:any,attrName:any,desc:any){
        console.log('方法装饰器...')
    }
}
function logParams6(params?:any){
    return function(target:any,attrName:any,desc:any){
        console.log('方法参赛装饰器1...')
    }
}
function logParams6_1(params?:any){
    return function(target:any,attrName:any,desc:any){
        console.log('方法参赛装饰器2...')
    }
}
@logClass6('http://www.baidu.com')
@logClass6_1('xxxx')
class HttpClient6{
    @logAttribute6()
    public apiUrl:string|undefined;

    @logMethod6()
    getData(){
        return true;
    }


    setData(@logParams6() attr1:any,@logParams6_1()attr2:any){

    }
}

const http6 = new HttpClient6();
http6.getData();
http6.setData('1234',5678);
/**
属性装饰器...
方法装饰器...
方法参赛装饰器2...
方法参赛装饰器1...
类装饰器2...
类装饰器1...
 */