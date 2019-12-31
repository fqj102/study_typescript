import { MssqlDB } from "../modules/db1";

class ArticleBean {
    title:string | undefined;
    desc:string | undefined;
}

const ArticleModel = new MssqlDB<ArticleBean>();
export {
    ArticleBean,
    ArticleModel
}