# 基于element-ui封装的vue2组件库
- element-ui使用的版本是2.15.14
# 使用方法
## 1.npm安装
如果element-ui已引入，下面就不用下载了
```bash
npm i element-ui element-pros
```
## 2.在入口文件中引入

```javascript
import Vue from 'vue'
import elementPros from 'element-pros';
import 'element-pros/dist/index.css';
Vue.use(elementPros);
```
# 文档参考地址：
[https://cyj.lovewenqin.cn/static/elementPros/](https://cyj.lovewenqin.cn/static/elementPros/)

# 暂时提供了以下组件
# 组件
- el-menu-pro 快速生成菜单，会自动匹配路由
- el-menu-tabbar 自动根据菜单列表匹配当前路由生成tabbar
- el-breadcrumb-pro 自动根据菜单列表匹配当前路由生成面包屑
- el-layout-pro 快速生成admin系统整体布局
- el-form-pro 快速生成表单
- el-modal-form 按钮弹窗表单
- el-table-pro 快速生成table一系列界面


