<template>
    <div class="main">
        <copyComponent :code="code">
            <div style="width: 240px;padding: 12px;">
                <el-menu-pro :menuList="menuList" :fieldNames="fieldNames" disabled/>
            </div>
            <div slot="title">
                菜单字段别名
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
            fieldNames:{ // 别名
                title: 'name', 
                children: 'children', 
                icon: 'img', 
                path:'path'
            },
            menuList:[
                {
                    name:'layoutPro 布局',
                    path: '/layoutPro',
                },
                {
                    name:'FormPro 表单',
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
            code:`<div>
    <el-menu-pro :menuList="menuList" :fieldNames="fieldNames" />
</div>
<script>
    export default {
        data() {
            return {
                fieldNames:{ // 别名
                    title: 'name', 
                    children: 'children', 
                    icon: 'img', 
                    path:'path'
                },
                menuList:[
                    {
                        name:'layoutPro 布局',
                        path: '/layoutPro',
                    },
                    {
                        name:'FormPro 表单',
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
                ] 
            }
        }
    }
<\/script>` // eslint-disable-line
        }
    }
}
</script>

