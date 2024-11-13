<template>
    <paramsDescription :columns="columns" :list="list" title="ToolBarRenderType Attribute"></paramsDescription>
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
                    key:'text',
                    remark:'按钮文字',
                    type:'string',
                },
                {
                    key:'key',
                    remark:'循环用的key值，可以不传',
                    type:'string',
                },
                {
                    key:'props',
                    remark:'el-button的参数',
                    type:'Object',
                },
                {
                    key:'onClick',
                    remark:'按钮的点击事件',
                    type:'(params:Object)=>void',
                },
            ]
        }
    },
}
</script>