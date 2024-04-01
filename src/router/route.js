//在這邊設置routes的設置,包括名字,連結到哪一支檔案
//可以添加層次的分別

const routes = [
    {
        path:"/home",
        name:"home",
        components:() => import("../view/home.vue")
    },
    {
        path:"/introduce",
        name:"introduce",
        components:() => import("../view/introduce.vue")
    },
    {
        path:"/reserve",
        name:"reserve",
        components:() => import("../view/reserve.vue")
    },
];
export default routes;