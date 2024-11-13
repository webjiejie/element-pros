<template>
    <div class="main">
        <copyComponent shelter :code="code">
            <div style="height: 40px;">
                <el-menu-tabbar :menuList="menuList" :routerBase="routerBase" ></el-menu-tabbar>
            </div>
            <div slot="title">
                菜单标签栏
            </div>
            <div slot="remark">
                菜单标签栏会自动匹配路由，若没匹配上，请检查routerBase是否正确传入或者菜单结构是否匹配<br />
                “显示的标签”跟当前页面的路由一样，所以会匹配上然后显示
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
                            title:'显示的标签',
                            path: '/menuTabbar',
                        },
                    ]
                },
                {
                    title:'TablePro 表格',
                    path: '/tablePro',
                },
            ],
            code:`<template>
    <div style="height: 40px;">
        <el-menu-pro :menuList="menuList" />
    </div>
</template>
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
                                title:'显示的标签',
                                path: '/menuTabbar',
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

