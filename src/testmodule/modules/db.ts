//export const dbUrl = 'xxxxx';
const dbUrl = 'xxxxx';

function getData1():any[]{
    console.log('获取数据源...');
    return [
        {
            title:'123123'
        },
        {
            title:'12312312'
        }
    ]
}


function save():void{
    console.log("保存数据成功!!!");
}


export{
    dbUrl,
    getData1,
    save
}


//export default getData1 // 一个模块里只能用一次
