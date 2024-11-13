<template>
    <div class="main">
        <copyComponent shelter :code="code">
            <el-breadcrumb-pro :menuList="menuList" :routerBase="routerBase" homeName=""></el-breadcrumb-pro>
            <div slot="title">
                不显示默认首页
            </div>
        </copyComponent>
    </div>
</template>
<script>
import copyComponent from "@/components/copyComponent.vue";
import routerCongif from "@/router/config";
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
                },
                {
                    title:'FormPro 表单',
                    path: '/form',
                },
                {
                    title:'ModalFrom 弹窗表单',
                    path: '/modalForm',
                    children:[
                        {
                            title:'面包屑',
                            path: '/breadcrumbPro',
                        },
                    ]
                },
                {
                    title:'TablePro 表格',
                    path: '/tablePro',
                },
            ],
            code:`<div>
    <el-breadcrumb-pro :menuList="menuList" homeName=""/>
</div>
<script>
    export default {
        data() {
            return {
                menuList:[
                    {
                        title:'layoutPro 布局',
                        path: '/layoutPro',
                    },
                    {
                        title:'FormPro 表单',
                        path: '/form',
                    },
                    {
                        title:'ModalFrom 弹窗表单',
                        path: '/modalForm',
                        children:[
                            {
                                title:'面包屑',
                                path: '/breadcrumbPro',
                            },
                        ]
                    },
                    {
                        title:'TablePro 表格',
                        path: '/tablePro',
                    },
                ]
            }
        }
    }
<\/script>` // eslint-disable-line
        }
    }
}
</script>

