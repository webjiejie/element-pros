<template>
    <paramsDescription :columns="columns" :list="list" title="TablePro Attribute"></paramsDescription>
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
                    key:'tableObj',
                    remark:'table配置',
                    type:'TableObjType',
                    value:'参考下面TableObjType的字段解释',
                },
                {
                    key:'configObj',
                    remark:'table加载和文字布局的设置',
                    type:'ConfigObjType',
                    value:'参考下面ConfigObjType的字段解释'
                },
                {
                    key:'selects',
                    remark:'table勾选值，需和select.key或rowKey对应',
                    type:'(number|string)[]',
                },
            ]
        }
    },
}
</script>