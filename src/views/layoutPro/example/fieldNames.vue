<template>
    <div class="main">
        <copyComponent shelter :code="code">
            <div slot="title">别名使用</div>
            <div class="main-t">
                <el-layout-pro :hearderProps="hearderProps" :menuList="menuList" :routerBase="routerBase" :menuProps="menuProps"></el-layout-pro>
            </div>
            <div slot="remark">
                使用别名后，layoutPro里的面包屑或者menuTabbar组件也会自动变化
            </div>
        </copyComponent>
    </div>
</template>
<script>
import routerCongif from "@/router/config"
import copyComponent from "@/components/copyComponent.vue"
export default {
    components:{
        copyComponent
    },
    data(){
        return {
            routerBase:routerCongif.routerBase, // router的base
            menuProps:{
                fieldNames:{ // 别名
                    title: 'name', 
                    children: 'children', 
                    icon: 'img', 
                    path:'path'
                }
            },
            menuList:[
                {
                    name:'layoutPro 布局',
                    path: '/layoutPro',
                },
                {
                    name:'FormPro 表单',
                    img:'el-icon-edit',
                    path: '/formDemo',
                },
                {
                    name:'ModalFrom 弹窗表单',
                    path: '/modalFormDemo',
                    children:[
                        {
                            name:'子菜单',
                            path: '/modalForm/indexDemo',
                        },
                    ]
                },
                {
                    name:'TablePro 表格',
                    path: '/tableProDemo',
                },
            ],
            hearderProps:{
                name:'测试',
                avatar:'https://cyj.lovewenqin.cn/static/favicon.ico',
                title:"elementPros",
                image:{
                    src:'https://cyj.lovewenqin.cn/static/favicon.ico'
                },
                show:false,
                // isFixed:true,
                dropdownList:[
                    {
                        // render:()=>{
                        //     return 123
                        // },
                        // icon:'el-icon-switch-button',
                        name:'退出',
                        click:()=>{
                            console.log(1111)
                        }
                    }
                ]
            },
            code:`<div>
    <el-layout-pro :hearderProps="hearderProps" :menuList="menuList" :routerBase="routerBase" :menuProps="menuProps"></el-layout-pro>
 </div>
 <script>
  export default {
    data(){
        return {
            routerBase:"/",  // router的base
            menuProps:{ // 菜单配置
                fieldNames:{ // 别名
                    title: 'name', 
                    children: 'children', 
                    icon: 'img', 
                    path:'path'
                }
            },
            menuList:[ // 菜单列表
                {
                    name:'layoutPro 布局',
                    path: '/layoutPro',
                },
                {
                    name:'Form 表单',
                    img:'el-icon-edit',
                    path: '/form',
                },
                {
                    name:'ModalFrom 弹窗表单',
                    path: '/modalForm',
                    children:[
                        {
                            name:'子菜单',
                            path: '/modalForm/index',
                        },
                    ]
                },
                {
                    name:'TablePro 表格',
                    path: '/tablePro',
                },
            ],
            hearderProps:{ // 顶部hearder的参数配置
                name:'测试',
                avatar:'https://cyj.lovewenqin.cn/static/favicon.ico',
                title:"elementPros",
                image:{
                    src:'https://cyj.lovewenqin.cn/static/favicon.ico'
                },
                show:true,
                dropdownList:[
                    {
                        icon:'el-icon-switch-button',
                        name:'退出',
                        click:()=>{
                            console.log(1111)
                        }
                    }
                ]
            }
        }
    }
  }
<\/script>` // eslint-disable-line
        }
    },
}
</script>
<style lang="scss" scoped>
.main{
    &-t{
        padding: 12px;
        border:1px solid #ccc;
    }
}
</style>

