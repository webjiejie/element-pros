import Vue from 'vue'
import VueRouter from 'vue-router'
import routerCongif from "./config"

Vue.use(VueRouter);
const list = [
  {
    title: '更新日志',
    path: '/updateLog',
    name: 'updateLog',
    component: () => import('../views/updateLog/index.vue'),
  },
  {
    title:'安装',
    // icon:'el-icon-edit',
    path: '/installation',
    name: 'installationName',
    component: () => import('../views/installation'),
  },
  {
    title:'快速上手',
    // icon:'el-icon-edit',
    path: '/quickstart',
    name: 'quickstartName',
    component: () => import('../views/quickstart'),
  },
  {
    title:'layoutPro 布局',
    // icon:'el-icon-edit',
    path: '/layoutPro',
    name: 'layoutProName',
    component: () => import('../views/layoutPro'),
  },
  {
    title:'menuPro 菜单',
    // icon:'el-icon-edit',
    path: '/menuPro',
    name: 'menuProName',
    component: () => import('../views/menuPro'),
  },
  {
    title:'menuTabbar 菜单标签栏',
    // icon:'el-icon-edit',
    path: '/menuTabbar',
    name: 'menuTabbarName',
    component: () => import('../views/menuTabbar'),
  },
  {
    title:'breadcrumbPro 面包屑',
    // icon:'el-icon-edit',
    path: '/breadcrumbPro',
    name: 'breadcrumbProName',
    component: () => import('../views/breadcrumbPro'),
  },
  {
    title:'FormPro 表单',
    // icon:'el-icon-edit',
    path: '/formPro',
    name: 'formProName',
    component: () => import('../views/formPro'),
  },
  {
    title:'ModalFrom 弹窗表单',
    // icon:'el-icon-edit',
    path: '/modalForm',
    name: 'modalFormName',
    component: () => import('../views/modalForm')
  },
  {
    title:'TablePro 表格',
    // icon:'el-icon-edit',
    path: '/tablePro',
    name: 'tableProName',
    component: () => import('../views/tablePro')
  },
  {
    title:'反馈板块',
    // icon:'el-icon-edit',
    path: '/feedback',
    name: 'feedback',
    component: () => import('../views/feedback')
  },
]

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect:'/installation',
    component: () => import('../layout/index.vue'),
    children: list
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: routerCongif.routerBase,
  routes
})
const filterList = (arr)=>{
  return arr.filter(item=>{
    if(item.children){
      item.children = filterList(item.children);
    }
    return !item.hide
  })
}
export const menuList = filterList(list);

export default router
