<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro :tableObj="tableObj"></el-table-pro>
            <div slot="title">
                固定列
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
                    return new Promise((reject)=>{
                        setTimeout(()=>{
                            reject([[
                                {
                                    id:1,
                                    name:'名字',
                                    sex:'男',
                                    age:6,

                                }
                            ],1])
                        },1000)
                    })
                },
                actionsColumnsProp:{ // 操作栏的配置
                    width:120, // 设置宽度
                    fixed:'right'
                },
                actions:{ // 操作按钮配置
                    onDelete: (values) => { // 删除
                        console.log(values,"onDelete")
                        return Promise.resolve(true);
                    },
                    preview:true, // 显示详情按钮
                },
                columns:[
                    {
                        title: '名称',
                        dataIndex: 'name',
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
                        }
                    },
                    {
                        title: '占位',
                        dataIndex: 'zw',
                        valueType: 'input',
                        columnProps:{
                            width:"2000",
                        },
                        actions:{
                            hideInSearch:true, // 不是查询字段
                            hideInUpdate:true, // 不是查询字段
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
                    rowKey:'id',
                    request: (data) => { // 获取列表数据
                        console.log(data,"request")
                        return new Promise((reject)=>{
                            setTimeout(()=>{
                                reject([[
                                    {
                                        id:1,
                                        name:'这是很长很长的名字，超出会显示省略号',
                                        sex:'男',
                                        age:6,

                                    }
                                ],1])
                            },1000)
                        })
                    },
                    actionsColumnsProp:{ // 操作栏的配置
                        width:120, // 设置宽度
                        fixed:'right'
                    },
                    actions:{ // 操作按钮配置
                        onDelete: (values) => { // 删除
                            console.log(values,"onDelete")
                            return Promise.resolve(true);
                        },
                        preview:true, // 显示详情按钮
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
                            }
                        },
                        {
                            title: '占位',
                            dataIndex: 'zw',
                            valueType: 'input',
                            columnProps:{
                                width:"2000",
                            },
                            actions:{
                                hideInSearch:true, // 不是查询字段
                                hideInUpdate:true, // 不是查询字段
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


