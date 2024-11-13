<template>
    <paramsDescription :columns="columns" :list="list" title="ConfigObjType Attribute"></paramsDescription>
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
                    key:'align',
                    remark:'table的内容布局',
                    type:'"left"|"center"|"right"',
                    value:'"left"|"center"|"right"',
                    defaultValue:'"center"'
                },
                {
                    key:'hideLoading',
                    remark:'是否隐藏table上的加载样式',
                    type:'boolean',
                    value:'false/true',
                    defaultValue:'false'
                },
            ]
        }
    },
}
</script>