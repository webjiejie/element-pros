<template>
    <div class="main">
        <copyComponent shelter :code="code">
            <div style="height: 40px;">
                <el-menu-tabbar :menuList="menuList" :routerBase="routerBase" :styles="styles"></el-menu-tabbar>
            </div>
            <div slot="title">
                菜单标签栏样式
            </div>
            <div slot="remark">
                标签样式，还可以传如height等样式，不过选中样式只有示例中的3样
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
            styles:{
                activeBackground:'#409eff',
                activeColor:'#fff',
                activeBorderColor:'#409eff'
            },
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
        <el-menu-pro :menuList="menuList" :styles="styles"/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                styles:{
                    activeBackground:'#409eff',
                    activeColor:'#fff',
                    activeBorderColor:'#409eff'
                },
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

