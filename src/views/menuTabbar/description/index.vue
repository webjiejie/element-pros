<template>
    <paramsDescription :columns="columns" :list="list" title="MenuTabbar Attribute"></paramsDescription>
</template>
<script>
import paramsDescription from "@/components/paramsDescription.vue"
export default {
    components:{
        paramsDescription
    },
    data(){
        return {
            columns:[
                {
                    title: '参数',
                    dataIndex: 'key',
                },
                {
                    title: '说明',
                    dataIndex: 'remark',
                },
                {
                    title: '类型',
                    dataIndex: 'type',
                },
                {
                    title: '可选值',
                    dataIndex: 'value',
                },
                {
                    title: '默认值',
                    dataIndex: 'defaultValue',
                },
            ],
            list:[
                {
                    key:'menuList',
                    remark:'菜单列表',
                    type:'MenuTabbarType',
                },
                {
                    key:'routerBase',
                    remark:'路由router的base参数',
                    type:'string',
                },
                {
                    key:'fieldNames',
                    remark:'菜单别名',
                    type:'FieldNamesType',
                    defaultValue:`{ title: 'title', children: 'children', path:'path'}`
                },
                {
                    key:'inPathArr',
                    remark:'路由path的数组，符合条件的菜单标签栏不会有点击删除',
                    type:'string[]',
                    defaultValue:`['/home']`
                },
                {
                    key:'notPathArr',
                    remark:'路由path的数组，不加入菜单栏的路由',
                    type:'string[]',
                    defaultValue:`['/login']`
                },
                {
                    key:'styles',
                    remark:'标签样式',
                    type:`StylesType`,
                },
            ]
        }
    },
}
</script>