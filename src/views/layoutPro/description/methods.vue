<template>
    <paramsDescription :columns="columns" :list="list" title="LayoutPro Methods"></paramsDescription>
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
                    key:'menuChange',
                    remark:'选中菜单发生改变时触发',
                },
                {
                    key:'tabbarChange',
                    remark:'el-menu-tabbar新增或删除时触发',
                },
            ]
        }
    },
}
</script>