<template>
    <paramsDescription :columns="columns" :list="list" title="ActionsType Attribute"></paramsDescription>
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
                    key:'onInsert',
                    remark:'是否显示新增操作按钮，新增触发的函数，返回是否成功',
                    type:'(values) => boolean|Promise<boolean>',
                },
                {
                    key:'onUpdate',
                    remark:'是否显示修改操作按钮，修改触发的函数，返回是否成功',
                    type:'(values) => boolean|Promise<boolean>',
                },
                {
                    key:'onDelete',
                    remark:'是否显示删除操作按钮，删除触发的函数，返回是否成功',
                    type:'(values) => boolean|Promise<boolean>',
                },
                {
                    key:'preview',
                    remark:'是否显示详情操作按钮',
                    type:'boolean',
                    value:'false/true',
                    defaultValue:'false',
                },
                {
                    key:'openBefore',
                    remark:'修改、详情打开时请求数据并返回',
                    type:'{update:(item)=>Object|Promise<Object>, preview:(item)=>Object|Promise<Object>}',
                },
                {
                    key:'buttonProps',
                    remark:'新增、修改、详情、删除按钮的属性，返回el-button的属性',
                    type:'{insert:(item)=>Object, update:(item)=>Object, preview:(item)=>Object, delete:(item)=>Object}',
                },
            ]
        }
    },
}
</script>