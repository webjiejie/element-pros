import layoutPro from "./index.vue"
layoutPro.install = app =>{  //将组件注册到vue中
    app.component(layoutPro.name,layoutPro)
}
export default layoutPro;