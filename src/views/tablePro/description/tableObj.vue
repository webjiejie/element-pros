<template>
    <paramsDescription :columns="columns" :list="list" title="TableObjType Attribute"></paramsDescription>
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
                    key:'rowKey',
                    remark:'列表唯一值，如id',
                    type:'string',
                },
                {
                    key:'index',
                    remark:'是否显示序列号',
                    type:'boolean|TableProColumnItem',
                },
                {
                    key:'select',
                    remark:'是否显示多选框',
                    type:'boolean|TableProSelect',
                },
                {
                    key:'columns',
                    remark:'显示值',
                    type:'ColumnsType',
                },
                {
                    key:'request',
                    remark:'返回请求列表的结果',
                    type:'(data:any)=>[any[],number]|Promise<[any[],number]>',
                },
                {
                    key:'search',
                    remark:'查询栏的配置',
                    type:'false|FormProType',
                    value:'false表示不显示查询栏，FormPro的参数，除columns外',
                    defaultValue:`{columnNum:3, searchType:'all'}`
                },
                {
                    key:'actions',
                    remark:'操作按钮的控制',
                    type:'ActionsType',
                },
                {
                    key:'actionsColumns',
                    remark:'自定义操作按钮',
                    type:'(row,index)=>返回dom',
                },
                {
                    key:'actionsColumnsProp',
                    remark:'操作栏的配置',
                    type:'Object',
                    value:'el-table-column的参数',
                    defaultValue:`{label:'操作',size:'small'}`
                },
                {
                    key:'toolBarRender',
                    remark:'工具栏的按钮',
                    type:'ToolBarRenderType[]',
                },
                {
                    key:'pagination',
                    remark:'分页配置',
                    type:'Object',
                    value:'el-pagination的参数',
                    defaultValue:`{background:true,pageSizes:[10, 20, 50, 100],pageSize:10, currentPage:1, layout:"total, sizes, prev, pager, next, jumper"}`
                },
            ]
        }
    },
}
</script>