<template>
    <paramsDescription :columns="columns" :list="list" title="MenuTabbarType Attribute"></paramsDescription>
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
                    key:'children',
                    remark:'菜单子集,可使用别名fieldNames替换key值',
                    type:'MenuListType',
                },
            ]
        }
    },
}
</script>