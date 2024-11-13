<template>
    <div class="main">
        <copyComponent :code="code">
            <el-breadcrumb-pro :menuList="menuList" :fieldNames="fieldNames" :routerBase="routerBase" homeName=""/>
            <div slot="title">
                面包屑字段别名
            </div>
        </copyComponent>
    </div>
</template>
<script>
import copyComponent from "@/components/copyComponent.vue"
import routerCongif from "@/router/config";
export default {
    components:{
        copyComponent
    },
    data(){
        return {
            routerBase:routerCongif.routerBase, // router的base
            fieldNames:{ // 别名
                title: 'name', 
                children: 'children', 
                path:'path'
            },
            menuList:[
                {
                    name:'layoutPro 布局',
                    path: '/layoutPro',
                },
                {
                    name:'FormPro 表单',
                    path: '/form',
                },
                {
                    name:'ModalFrom 弹窗表单',
                    path: '/modalForm',
                    children:[
                        {
                            name:'面包屑',
                            path: '/breadcrumbPro',
                        },
                    ]
                },
                {
                    name:'TablePro 表格',
                    path: '/tablePro',
                },
            ],
            code:`<div>
    <el-breadcrumb-pro :menuList="menuList" :fieldNames="fieldNames" homeName=""/>
</div>
<script>
    export default {
        data() {
            return {
                fieldNames:{ // 别名
                    title: 'name', 
                    children: 'children', 
                    path:'path'
                },
                menuList:[
                    {
                        name:'layoutPro 布局',
                        path: '/layoutPro',
                    },
                    {
                        name:'FormPro 表单',
                        path: '/form',
                    },
                    {
                        name:'ModalFrom 弹窗表单',
                        path: '/modalForm',
                        children:[
                            {
                                name:'面包屑',
                                path: '/breadcrumbPro',
                            },
                        ]
                    },
                    {
                        name:'TablePro 表格',
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

