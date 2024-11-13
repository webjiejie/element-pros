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
                    key:'getSearchValue',
                    remark:'获取查询结果',
                },
                {
                    key:'reload',
                    remark:'刷新列表数据',
                },
                {
                    key:'reset',
                    remark:'重置查询并重新获取列表数据',
                },
                {
                    key:'getSelects',
                    remark:'获取table中勾选项',
                }
            ]
        }
    },
}
</script>