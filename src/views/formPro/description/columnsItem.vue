<template>
    <paramsDescription :columns="columns" :list="list" title="ColumnsItem Attribute"></paramsDescription>
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
                    key:'key',
                    remark:'el-form-item的prop，每个formItem的唯一字段',
                    type:'string',
                },
                {
                    key:'type',
                    remark:'el-form-item的类型',
                    type:'string',
                    value:`'text'|'input'|'select'|'switch'|'cascader'|'time'|'timerange'|'date'|'datetime'|'daterange'|'datetimerange'|'radio'|'checkbox'|'upload'`,
                },
                {
                    key:'label',
                    remark:'el-form-item的label,每个formItem的名称',
                    type:'string',
                },
                {
                    key:'width',
                    remark:'设置formItem的宽度',
                    type:'string',
                    defaultValue:"'100%'"
                },
                {
                    key:'widthSpan',
                    remark:'当前这个formItem占几列',
                    type:'number',
                    defaultValue:1
                },
                {
                    key:'rules',
                    remark:'每个formItem的表单验证规则',
                    type:'Array',
                    value:'参考el-form的rules',
                },
                {
                    key:'props',
                    remark:"每个formItem的属性,其中新增props别名属性，如：{ props: { label: 'floorName', value: 'floorId' } }",
                    type:'Object',
                },
                {
                    key:'options',
                    remark:'选择框的选择列表',
                    type:'{label:string,value:any}[]',
                },
                {
                    key:'associatedKeys',
                    remark:'关联字段，变了这个就会改变，并触发request',
                    type:'string[]',
                },
                {
                    key:'request',
                    remark:'异步加载选择列表的数据',
                    type:'Promise<Array>|Array',
                },
                {
                    key:'render',
                    remark:'渲染函数',
                    type:'(obj:any)=> VNodeProps|string',
                },
            ]
        }
    },
}
</script>