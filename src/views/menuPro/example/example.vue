<template>
    <div class="main">
        <copyComponent :code="code">
            <div style="width: 240px;padding: 12px;">
                <el-menu-pro :menuList="menuList" disabled/>
            </div>
            <div slot="title">
                菜单
            </div>
            <div slot="remark">
                菜单会自动匹配路由，若没匹配上，请检查routerBase是否正确传入或者菜单结构是否匹配
            </div>
        </copyComponent>
    </div>
</template>
<script>
import copyComponent from "@/components/copyComponent.vue"
export default {
    components:{
        copyComponent
    },
    data(){
        return {
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
                    path: '/form',
                },
                {
                    title:'ModalFrom 弹窗表单',
                    path: '/modalForm',
                    children:[
                        {
                            title:'子菜单',
                            path: '/modalForm/index',
                        },
                    ]
                },
                {
                    title:'TablePro 表格',
                    path: '/tablePro',
                },
            ],
            code:`<div>
    <el-menu-pro :menuList="menuList" />
</div>
<script>
    export default {
        data() {
            return {
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
                    path: '/form',
                },
                {
                    title:'ModalFrom 弹窗表单',
                    path: '/modalForm',
                    children:[
                        {
                            title:'子菜单',
                            path: '/modalForm/index',
                        },
                    ]
                },
                {
                    title:'TablePro 表格',
                    path: '/tablePro',
                },
                ], 
            }
        }
    }
<\/script>` // eslint-disable-line
        }
    }
}
</script>

