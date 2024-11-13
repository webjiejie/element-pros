import formPro from "./index.vue"
formPro.install = app =>{  //将组件注册到vue中
    app.component(formPro.name,formPro)
}
export default formPro;