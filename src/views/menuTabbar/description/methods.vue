<template>
    <paramsDescription :columns="columns" :list="list" title="MenuTabbar Methods"></paramsDescription>
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
                    key:'change',
                    remark:'el-menu-tabbar新增或删除时触发',
                },
            ]
        }
    },
}
</script>