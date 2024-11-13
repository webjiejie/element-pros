<template>
    <paramsDescription :columns="columns" :list="list" title="FieldNamesType Attribute"></paramsDescription>
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
                    remark:'菜单名称的字段',
                    type:'string',
                    defaultValue:'title',
                },
                {
                    key:'path',
                    remark:'菜单路由的字段',
                    type:'string',
                    defaultValue:'path',
                },
                {
                    key:'children',
                    remark:'菜单子集的字段',
                    type:'string',
                    defaultValue:'children',
                },
            ]
        }
    },
}
</script>