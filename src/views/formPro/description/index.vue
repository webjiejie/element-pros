<template>
    <paramsDescription :columns="columns" :list="list" title="FormProType Attribute"></paramsDescription>
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
                    key:'columns',
                    remark:'渲染表单数据',
                    type:'Array',
                    value:'ColumnsItem'
                },
                {
                    key:'columnNum',
                    remark:'每排显示多少列，0表示只有一排',
                    type:'number',
                    defaultValue:2
                },
                {
                    key:'isCard',
                    remark:'是不是el-card的样子',
                    type:'boolean',
                    value:'false/true',
                    defaultValue:false
                },
                {
                    key:'props',
                    remark:'el-form上的属性',
                    type:'Object',
                    defaultValue:`{
                        labelWidth:'100px',
                        size:'small',
                        ref:"ruleForm"
                    }`
                },
                {
                    key:'searchType',
                    remark:'表单显示类型',
                    type:'"search"|"all"',
                    value:'默认为提交表单类型,search:搜索,只显示查询按钮, all:搜索,显示重置和查询按钮',
                },
                {
                    key:'disabled',
                    remark:'是否禁用表单',
                    type:'boolean',
                    value:`false/true`,
                    defaultValue:false,
                },
                {
                    key:'showFoot',
                    remark:'是否显示底部，默认显示（前提是searchType没值）',
                    type:'boolean',
                    value:'false/true',
                    defaultValue:"true"
                },
                {
                    key:'interval',
                    remark:'横排之间的间隔',
                    type:'number',
                    defaultValue:0
                },
            ]
        }
    },
}
</script>