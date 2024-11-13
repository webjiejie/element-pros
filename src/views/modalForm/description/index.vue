<template>
    <paramsDescription :columns="columns" :list="list" title="ModalForm Attribute"></paramsDescription>
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
                    key:'v-model',
                    remark:'是否显示弹窗',
                    type:'boolean',
                    value:'false/true',
                    defaultValue:"false"
                },
                {
                    key:'columns',
                    remark:'渲染表单数据',
                    type:'Array',
                    value:'参考form的columns'
                },
                {
                    key:'text',
                    remark:'按钮显示的文字',
                    type:'string',
                },
                {
                    key:'buttonProps',
                    remark:'按钮的属性',
                    type:'Object',
                    valeu:"参考el-button上的属性",
                    defaultValue:`{size:'small'}`
                },
                {
                    key:'modalProps',
                    remark:'弹窗的属性',
                    type:'Object',
                    valeu:"参考el-dialog上的属性",
                    
                },
                {
                    key:'formProps',
                    remark:'表单的属性',
                    type:'Object',
                    valeu:"参考本插件的form表单上的属性,columns除外",
                    defaultValue:`{
                        props:{
                            labelWidth:'100px'
                        }, 
                        interval:20, 
                        columnNum:2
                    }`
                },
                {
                    key:'save',
                    remark:'确定后触发的函数',
                    type:'()=>boolean|Promise<boolean>',
                },
                {
                    key:'disabled',
                    remark:'是否禁用表单',
                    type:'boolean',
                    value:`false/true`,
                    defaultValue:false,
                },
            ]
        }
    },
}
</script>