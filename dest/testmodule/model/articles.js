"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db1_1 = require("../modules/db1");
var ArticleBean = /** @class */ (function () {
    function ArticleBean() {
    }
    return ArticleBean;
}());
exports.ArticleBean = ArticleBean;
var ArticleModel = new db1_1.MssqlDB();
exports.ArticleModel = ArticleModel;
