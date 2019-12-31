"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.MysqlDB = MysqlDB;
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
exports.MssqlDB = MssqlDB;
