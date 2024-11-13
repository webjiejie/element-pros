<template>
    <paramsDescription :columns="columns" :list="list" title="MenuPro Attribute"></paramsDescription>
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
                    type:'MenuListType',
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
                    defaultValue:`{ title: 'title', children: 'children', icon: 'icon', path:'path'}`
                },
                {
                    key:'props',
                    remark:'el-menu菜单的其他配置',
                    type:'Object',
                },
            ]
        }
    },
}
</script>