import { UserBean, UserModel } from "./model/user"
import { ArticleBean, ArticleModel } from "./model/articles";
import {A,B} from './modules/animal';
const user = new UserBean();
user.username = 'fqj';
user.password = '123456';

UserModel.add(user);
const userInfo = UserModel.get(123);
console.log(userInfo);

const article = new ArticleBean();
article.title = 'news';
article.desc = 'the best news';

ArticleModel.add(article);


const aDog = new A.Dog('jia fei mao');
const bDog = new B.Dog('jia fei mao');
aDog.eat();
bDog.eat();