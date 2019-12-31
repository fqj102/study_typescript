"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db1_1 = require("../modules/db1");
var UserBean = /** @class */ (function () {
    function UserBean() {
    }
    return UserBean;
}());
exports.UserBean = UserBean;
var UserModel = new db1_1.MysqlDB();
exports.UserModel = UserModel;
