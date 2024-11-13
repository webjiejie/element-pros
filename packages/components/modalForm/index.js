import modalForm from "./index.vue"
modalForm.install = app =>{  //将组件注册到vue中
    app.component(modalForm.name,modalForm)
}
export default modalForm;