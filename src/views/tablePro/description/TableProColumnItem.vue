<template>
    <paramsDescription :columns="columns" :list="list" title="TableProColumnItem Attribute"></paramsDescription>
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
                    remark:'显示位置',
                    type:"'left' | 'center' | 'right'",
                },
                {
                    key:'width',
                    remark:'宽度',
                    type:'number',
                    defaultValue:'60',
                },
                {
                    key:'fixed',
                    remark:'浮动',
                    type:"'left' | 'right' | boolean",
                },
            ]
        }
    },
}
</script>