<template>
    <paramsDescription :columns="columns" :list="list" title="ColumnsType Attribute"></paramsDescription>
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
                    key:'title',
                    remark:'名称',
                    type:'string',
                },
                {
                    key:'dataIndex',
                    remark:'对应的key值',
                    type:'string',
                },
                {
                    key:'valueType',
                    remark:'FormPro的type属性',
                    type:'string',
                    value:"'input'|'select'|'cascader'|'time'|'timerange'|'date'|'datetime'|'daterange'|'datetimerange'|'radio'|'checkbox'|'upload'",
                },
                {
                    key:'actions',
                    remark:'hideInSearch:在搜索框中隐藏，hideInTable：列表中隐藏，hideInUpdate：修改中隐藏，hideInInsert：新增中隐藏，hideInPreview：详情中隐藏',
                    type:`{
                        hideInSearch?:boolean,
                        hideInTable?:boolean,
                        hideInInsert?:boolean,
                        hideInUpdate?:boolean,
                        hideInPreview?:boolean,
                    }`,
                },
                {
                    key:'fieldProps',
                    remark:'设置查询、修改、新增的FormPro参数',
                    type:'Object',
                    value:'具体参数请查看左侧菜单FormPro的参数（除columns外）'
                },
                {
                    key:'formItemProps',
                    remark:'设置修改、新增的FormPro参数，当该参数没有时会使用fieldProps参数的',
                    type:'Object',
                    value:'具体参数请查看左侧菜单FormPro的参数（除columns外）'
                },
                {
                    key:'columnProps',
                    remark:'该列的el-table-column的参数',
                    type:'Object',
                    value:'参考el-table-column的参数'
                },
                {
                    key:'render',
                    remark:'table的内容渲染函数',
                    type:'(text,row,index)=> VNodeProps|string',
                }
            ]
        }
    },
}
</script>