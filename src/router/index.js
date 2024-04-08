//這邊是用來改router設定的
//都是既定的公式,第二逗點有很多種模式可以選擇,createWebHashHistory
//---記得!!要先npm install vue-router才可以用!!!---
import {createRouter,createWebHashHistory} from "vue-router";

//定義路由變數,再把他從路徑import進來
import routes from "./route";

//導出預設值
export default createRouter({
history:createWebHashHistory(),
routes
});