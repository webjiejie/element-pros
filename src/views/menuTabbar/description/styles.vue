<template>
    <paramsDescription :columns="columns" :list="list" title="StylesType Attribute"></paramsDescription>
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
                    key:'background',
                    remark:'未选中的背景颜色',
                    type:'string',
                    defaultValue:'#fff',
                },
                {
                    key:'color',
                    remark:'未选中的字体颜色',
                    type:'string',
                    defaultValue:'#000',
                },
                {
                    key:'borderColor',
                    remark:'未选中的边框颜色',
                    type:'string',
                    defaultValue:'#e4e7ed',
                },
                {
                    key:'activeBackground',
                    remark:'选中的背景颜色',
                    type:'string',
                    defaultValue:'#fff',
                },
                {
                    key:'activeColor',
                    remark:'选中的字体颜色',
                    type:'string',
                    defaultValue:'#1677ff',
                },
                {
                    key:'activeBorderColor',
                    remark:'选中的边框颜色',
                    type:'string',
                    defaultValue:'#409eff',
                },
            ]
        }
    },
}
</script>