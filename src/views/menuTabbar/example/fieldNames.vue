<template>
    <div class="main">
        <copyComponent :code="code">
            <div style="height: 40px;">
                <el-menu-tabbar :menuList="menuList" :fieldNames="fieldNames" :routerBase="routerBase"/>
            </div>
            <div slot="title">
                菜单标签栏字段别名
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
                            name:'显示的标签',
                            path: '/menuTabbar',
                        },
                    ]
                },
                {
                    name:'TablePro 表格',
                    path: '/tablePro',
                },
            ],
            code:`<template>
    <div style="height: 40px;">
        <el-menu-pro :menuList="menuList" :fieldNames="fieldNames"/>
    </div>
</template>
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
                                name:'显示的标签',
                                path: '/menuTabbar',
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

