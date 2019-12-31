"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export const dbUrl = 'xxxxx';
var dbUrl = 'xxxxx';
exports.dbUrl = dbUrl;
function getData1() {
    console.log('获取数据源...');
    return [
        {
            title: '123123'
        },
        {
            title: '12312312'
        }
    ];
}
exports.getData1 = getData1;
function save() {
    console.log("保存数据成功!!!");
}
exports.save = save;
//export default getData1 // 一个模块里只能用一次
