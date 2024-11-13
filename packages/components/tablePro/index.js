import tablePro from "./index.vue"
tablePro.install = app =>{  //将组件注册到vue中
    app.component(tablePro.name,tablePro)
}
export default tablePro;