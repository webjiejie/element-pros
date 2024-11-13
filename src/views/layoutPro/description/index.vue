<template>
    <paramsDescription :columns="columns" :list="list" title="LayoutPro Attribute"></paramsDescription>
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
                    key:'menuList',
                    remark:'菜单列表',
                    type:'Array',
                    value:'请参考menuPro的'
                },
                {
                    key:'menuProps',
                    remark:'左侧菜单的配置',
                    type:`{
                        width:number,
                        collapseShow:boolean,
                        fieldNames:Object,
                        props:Object
                    }`,
                    value:`{
                        width:菜单宽度,
                        collapseShow:是否显示收起菜单按钮,
                        fieldNames:参考menuPro参数的fieldNames,
                        props:参考menuPro参数的props
                    }`,
                    defaultValue:`{
                        width:200,
                        collapseShow:true
                    }`
                },
                {
                    key:'routerBase',
                    remark:'路由router的base参数',
                    type:'string',
                },
                {
                    key:'keepRouter',
                    remark:'keep-alive的include的值',
                    type:'Array',
                },
                {
                    key: 'hearderProps',
                    remark: 'hearder的配置参数',
                    type: 'HearderPropsType',
                },
                {
                    key:'topTabType',
                    remark:'topTab的显示类型',
                    type:'"tabbar"|"breadcrumb"|""',
                    value:'tabbar:tabbar按钮，breadcrumb:面包屑，空就是不显示',
                    defaultValue:"tabbar"
                },
                {
                    key:'tabbarProps',
                    remark:'当topTabType为tabbar类型时才会生效',
                    type:'Object',
                    value:'属性参考menuTabbar的参数，routerBase和menuList参数除外',
                },
                {
                    key:'breadcrumbProps',
                    remark:'当topTabType为breadcrumb类型时才会生效',
                    type:'Object',
                    value:'属性参考breadcrumbPro的参数，routerBase和menuList参数除外',
                }
            ]
        }
    },
}
</script>