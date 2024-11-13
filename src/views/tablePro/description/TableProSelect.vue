<template>
    <paramsDescription :columns="columns" :list="list" title="TableProSelect Attribute"></paramsDescription>
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
                    key:'pagination',
                    remark:'是否显示新增操作按钮，新增触发的函数，返回是否成功',
                    type:'boolean',
                    defaultValue:'false'
                },
                {
                    key:'key',
                    remark:'设置勾选返回的值，默认是根据rowKey字段',
                    type:'string',
                },
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