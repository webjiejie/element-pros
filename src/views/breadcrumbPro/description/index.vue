<template>
    <paramsDescription :columns="columns" :list="list" title="BreadcrumbPro Attribute"></paramsDescription>
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
                    type:'同menuTabbar的一样',
                },
                {
                    key:'routerBase',
                    remark:'路由router的base参数',
                    type:'string',
                },
                {
                    key:'fieldNames',
                    remark:'菜单别名',
                    type:'同menuTabbar的一样e',
                    defaultValue:`{ title: 'title', children: 'children', path:'path'}`
                },
                {
                    key:'homeName',
                    remark:'这个值传空，就不显示，面包屑最前面的名字',
                    type:'string',
                    defaultValue:`首页`
                },
                {
                    key:'homePath',
                    remark:'homeName对应的跳转路由',
                    type:'string',
                    defaultValue:`'/'`
                },
                {
                    key:'type',
                    remark:'面包屑的展示类型，1:除了最后一个不能点击，2:都不能点击，默认只有第一个能点击',
                    type:'number',
                    value:`1｜2`,
                },
            ]
        }
    },
}
</script>