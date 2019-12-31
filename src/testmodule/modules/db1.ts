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
export {
    MysqlDB,
    MssqlDB
}