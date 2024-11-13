<template>
    <paramsDescription :columns="columns" :list="list" title="HearderPropsType Attribute"></paramsDescription>
</template>
<script>
import paramsDescription from "@/components/paramsDescription.vue"
export default {
    components: {
        paramsDescription
    },
    data() {
        return {
            columns: [
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
            list: [
                {
                    key: 'show',
                    remark: '是否显示头部',
                    type: 'boolean',
                    value: 'false/true',
                    defaultValue: 'true',
                },
                {
                    key: 'name',
                    remark: '用户名',
                    type: `string`,
                },
                {
                    key: 'avatar',
                    remark: '用户头像',
                    type: 'string',
                },
                {
                    key: 'title',
                    remark: '系统名称',
                    type: 'string',
                },
                {
                    key: 'isFixed',
                    remark: '是否浮动',
                    type: 'boolean',
                    value: 'false/true',
                    defaultValue: 'false',
                },
                {
                    key: 'image',
                    remark: '系统图片',
                    type: 'Array',
                    value: `{
                        src:string,
                        fit:同原生 object-fit,
                        style:'string',
                    }`,
                },
                {
                    key: 'dropdownList',
                    remark: '右上角用户头像hover时的功能按键',
                    type: 'Array',
                    value: `{
                        name:'string',
                        click:()=>void,
                        icon:VNodeProps,
                        render:()=>VNodeProps
                    }`,
                },
            ]
        }
    },
}
</script>