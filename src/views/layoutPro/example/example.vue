<template>
    <div class="main">
        <copyComponent shelter :code="code">
            <div class="main-t">
                <el-layout-pro :hearderProps="hearderProps" :menuList="menuList" :routerBase="routerBase"></el-layout-pro>
            </div>
        </copyComponent>
    </div>
</template>
<script>
// import {menuList} from "@/router"
import routerCongif from "@/router/config"
import copyComponent from "@/components/copyComponent.vue"
export default {
    components:{
        copyComponent
    },
    data(){
        return {
            routerBase:routerCongif.routerBase, // router的base
            menuList:[
                {
                    title:'layoutPro 布局',
                    path: '/layoutPro',
                    renderIcon:()=>{
                        return <el-image src='https://cyj.lovewenqin.cn/static/favicon.ico' style="width:24px;height:18px;paddingLeft:3px"></el-image>;
                    },
                },
                {
                    title:'FormPro 表单',
                    icon:'el-icon-edit',
                    path: '/formDemo',
                },
                {
                    title:'ModalFrom 弹窗表单',
                    path: '/modalFormDemo',
                    children:[
                        {
                            title:'子菜单',
                            path: '/modalForm/indexDemo',
                        },
                    ]
                },
                {
                    title:'TablePro 表格',
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
    <el-layout-pro :hearderProps="hearderProps" :menuList="menuList" :routerBase="routerBase"></el-layout-pro>
 </div>
 <script>
  export default {
    data(){
        return {
            routerBase:"/",  // router的base
            menuList:[ // 菜单列表
                {
                    title:'layoutPro 布局',
                    path: '/layoutPro',
                    renderIcon:()=>{
                        return <el-image src='https://cyj.lovewenqin.cn/static/favicon.ico' style="width:24px;height:18px;paddingLeft:3px"></el-image>;
                    },
                },
                {
                    title:'FormPro 表单',
                    icon:'el-icon-edit',
                    path: '/formDemo',
                },
                {
                    title:'ModalFrom 弹窗表单',
                    path: '/modalFormDemo',
                    children:[
                        {
                            title:'子菜单',
                            path: '/modalForm/indexDemo',
                        },
                    ]
                },
                {
                    title:'TablePro 表格',
                    path: '/tableProDemo',
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

