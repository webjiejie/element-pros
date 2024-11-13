import menuPro from "./index.vue"
menuPro.install = app =>{  //将组件注册到vue中
    app.component(menuPro.name,menuPro)
}
export default menuPro;