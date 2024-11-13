<template>
    <div class="main">
        <copyComponent shelter :code="code">
            <el-breadcrumb-pro :menuList="menuList" :routerBase="routerBase" ></el-breadcrumb-pro>
            <div slot="title">
                面包屑
            </div>
            <div slot="remark">
                面包屑会自动匹配路由，若没匹配上，请检查routerBase是否正确传入或者菜单结构是否匹配<br />
                配置的路由有跟当前页面的路由一样，所以会匹配上然后显示<br />
                面包屑开头默认会有首页，如需去掉，请参考下面的示例
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
    <el-breadcrumb-pro :menuList="menuList"/>
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

