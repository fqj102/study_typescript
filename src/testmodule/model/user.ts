import { MysqlDB, MssqlDB } from "../modules/db1";

class UserBean {
    username:string | undefined;
    password:string | undefined;
}
const UserModel = new MysqlDB<UserBean>();

export {
    UserBean,
    UserModel
}