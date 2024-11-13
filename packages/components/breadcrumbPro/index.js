import breadcrumbPro from "./index.vue"
breadcrumbPro.install = app =>{  //将组件注册到vue中
    app.component(breadcrumbPro.name,breadcrumbPro)
}
export default breadcrumbPro;