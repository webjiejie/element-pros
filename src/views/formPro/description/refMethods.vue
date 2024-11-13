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
                    key:'reset',
                    remark:'对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
                },
                {
                    key:'save',
                    remark:'触发保存',
                },
            ]
        }
    },
}
</script>