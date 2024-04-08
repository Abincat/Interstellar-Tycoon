//在這邊設置routes的設置,包括名字,連結到哪一支檔案
//可以添加層次的分別

const routes = [
    {
        path:"/", //把要顯示在網頁一進去的那個路由設定為"/"
        name:"home",
        component:() => import("../view/home.vue")
    },
    {
        path:"/introduce",
        name:"introduce",
        component:() => import("../view/introduce.vue")
    },
    {
        path:"/reserve",
        name:"reserve",
        component:() => import("../view/reserve.vue")
    },
];
export default routes;