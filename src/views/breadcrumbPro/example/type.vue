<template>
    <div class="main">
        <copyComponent shelter :code="code">
            <el-breadcrumb-pro :menuList="menuList" :routerBase="routerBase"></el-breadcrumb-pro>
            <el-breadcrumb-pro :menuList="menuList" :routerBase="routerBase" :type="1"></el-breadcrumb-pro>
            <el-breadcrumb-pro :menuList="menuList" :routerBase="routerBase" :type="2"></el-breadcrumb-pro>
            <div slot="title">
                面包屑的3种情况
            </div>
            <div slot="remark">
                type字段有3个值分别对应面包屑的情况，1:除了最后一个不能点击，2:都不能点击，默认只有第一个能点击
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
                            title:'面包屑父级',
                            path: '/breadcrumb',
                            children:[
                                {
                                    title:'面包屑',
                                    path: '/breadcrumbPro',
                                },
                            ]
                        },
                    ]
                },
                {
                    title:'TablePro 表格',
                    path: '/tablePro',
                },
            ],
            code:`<div>
    <el-breadcrumb-pro :menuList="menuList" />
    <el-breadcrumb-pro :menuList="menuList" :type="1"/>
    <el-breadcrumb-pro :menuList="menuList" :type="2"/>
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

