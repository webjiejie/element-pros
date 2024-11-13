import menuTabbar from "./index.vue"
menuTabbar.install = app =>{  //将组件注册到vue中
    app.component(menuTabbar.name,menuTabbar)
}
export default menuTabbar;