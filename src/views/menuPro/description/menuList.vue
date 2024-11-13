<template>
    <paramsDescription :columns="columns" :list="list" title="MenuListType Attribute"></paramsDescription>
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
                    key:'title',
                    remark:'菜单名称,可使用别名fieldNames替换key值',
                    type:'string',
                },
                {
                    key:'path',
                    remark:'菜单路由,可使用别名fieldNames替换key值',
                    type:'string',
                },
                {
                    key:'icon',
                    remark:'菜单图标,可使用别名fieldNames替换key值',
                    type:'string',
                },
                {
                    key:'children',
                    remark:'菜单子集,可使用别名fieldNames替换key值',
                    type:'MenuListType',
                },
                {
                    key:'renderIcon',
                    remark:'自己渲染菜单图标,变量使用jsx写法',
                    type:'()=>VNodeProps',
                },
            ]
        }
    },
}
</script>