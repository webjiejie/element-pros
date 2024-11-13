<template>
    <paramsDescription :columns="columns" :list="list" title="tablePro RefMethods"></paramsDescription>
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
                    title: '方法名',
                    dataIndex: 'key',
                },
                {
                    title: '说明',
                    dataIndex: 'remark',
                },
                {
                    title: '参数',
                    dataIndex: 'props',
                },
            ],
            list:[
                {
                    key:'show',
                    remark:'打开弹窗',
                },
                {
                    key:'close',
                    remark:'关闭弹窗',
                },
                {
                    key:'submit',
                    remark:'触发提交数据',
                },
                {
                    key:'getDefaultVaue',
                    remark:'重新触发获取详情数据',
                },
            ]
        }
    },
}
</script>