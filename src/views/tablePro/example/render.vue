<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro :tableObj="tableObj"></el-table-pro>
            <div slot="title">
                自定义列模板
            </div>
        </copyComponent>
    </div>
</template>
<script>
import copyComponent from "@/components/copyComponent.vue"
export default {
    components:{
        copyComponent
    },
    data(){
        return {
            tableObj:{
                rowKey:'id',  // 唯一字段，修改保存时会返回这个的
                request: (data) => { // 获取列表数据
                    console.log(data,"request")
                    return [[
                        {
                            id:1,
                            name:'这是很长很长的名字1，超出会显示省略号',
                            sex:'男',
                            age:6,
                        },
                        {
                            id:2,
                            name:'这是很长很长的名字2，超出会显示省略号',
                            sex:'男',
                            age:6,
                        },
                    ],4]
                },
                columns:[
                    {
                        title: '名称',
                        dataIndex: 'name',
                        columnProps:{ // 设置列el-table-column的属性
                            width:"150",
                            'show-overflow-tooltip':true
                        },
                        valueType: 'input',
                    },
                    {
                        title: '性别',
                        dataIndex: 'sex',
                        valueType: 'select',
                        fieldProps:{ // 设置查询的
                            options:[
                                {
                                    label:'男',
                                    value:"M"
                                },
                                {
                                    label:'女',
                                    value:"F"
                                }
                            ],
                        },
                    },
                    {
                        title: '年龄',
                        dataIndex: 'age',
                        valueType: 'input',
                        actions:{
                            hideInSearch:true, // 不是查询字段
                            hideInUpdate:true, // 不是查询字段
                        },
                        render:(text,row,index)=>{
                            return  <el-tag size="medium">{row.age}-{index}</el-tag>
                        }
                    },
                ]
            },
            code:`<div>
    <el-table-pro :tableObj="tableObj"></el-table-pro>
</div>
<script>
    export default {
        data() {
            return {
                tableObj:{
                    rowKey:'id',  // 唯一字段，修改保存时会返回这个的
                    request: (data) => { // 获取列表数据
                        return [[
                            {
                                id:1,
                                name:'这是很长很长的名字1，超出会显示省略号',
                                sex:'男',
                                age:6,
                            },
                            {
                                id:2,
                                name:'这是很长很长的名字2，超出会显示省略号',
                                sex:'男',
                                age:6,
                            },
                        ],4]
                    },
                    tableProps:{
                        height:150,
                    },
                    columns:[
                        {
                            title: '名称',
                            dataIndex: 'name',
                            columnProps:{ // 设置列el-table-column的属性
                                width:"150",
                                'show-overflow-tooltip':true
                            },
                            valueType: 'input',
                        },
                        {
                            title: '性别',
                            dataIndex: 'sex',
                            valueType: 'select',
                            fieldProps:{ // 设置查询的
                                options:[
                                    {
                                        label:'男',
                                        value:"M"
                                    },
                                    {
                                        label:'女',
                                        value:"F"
                                    }
                                ],
                            },
                        },
                        {
                            title: '年龄',
                            dataIndex: 'age',
                            valueType: 'input',
                            actions:{
                                hideInSearch:true, // 不是查询字段
                                hideInUpdate:true, // 不是查询字段
                            },
                            render:(text,row,index)=>{
                                return  <el-tag size="medium">{row.age}-{index}</el-tag>
                            }
                        },
                    ]
                }
            }
        }
    }
<\/script>` // eslint-disable-line
        }
    }
}
</script>
<style scoped>
.copy-main{
    background: rgba(250,250,250,0.8);
}
</style>


