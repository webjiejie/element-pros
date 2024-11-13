import menuPro from "./components/menuPro";
import menuTabbar from "./components/menuTabbar";
import breadcrumbPro from "./components/breadcrumbPro";
import formPro from "./components/formPro";
import modalForm from "./components/modalForm";
import tablePro from "./components/tablePro";
import layoutPro from "./components/layoutPro";
const install = app =>{
    app.use(menuPro);
    app.use(menuTabbar);
    app.use(breadcrumbPro);
    app.use(formPro);
    app.use(modalForm);
    app.use(tablePro);
    app.use(layoutPro);
}
const elementPro = {
    install,
};
  //用于按需引入，如import {tableSearch} from "elementPro";
export {
    menuPro,
    menuTabbar,
    breadcrumbPro,
    formPro,
    modalForm,
    tablePro,
    layoutPro,
};
export default elementPro; //用于全部引入