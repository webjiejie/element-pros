<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro :tableObj="tableObj"></el-table-pro>
            <div slot="title">
                工具栏
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
                rowKey:'id',
                request: (data) => { // 获取列表数据
                    console.log(data,"request")
                    return new Promise((reject)=>{
                        setTimeout(()=>{
                            reject([[{id:1,name:'123',sex:'男',age:6},{id:2,name:'333',sex:'男',age:26}],2])
                        },1000)
                    })
                },
                toolBarRender:[
                    {
                        text:'导出',
                        key:'export',
                        props:{
                            type:'primary',
                        },
                        onClick:(params)=>{
                            console.log("触发导出，搜索的值:",params)
                        }
                    }
                ],
                actions:{ // 操作按钮配置
                    onDelete: (values) => { // 删除
                        console.log(values,"onDelete")
                        return Promise.resolve(true);
                    },
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
                            defaultValue:'M'
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
                                reject([[{id:1,name:'123',sex:'男',age:6},{id:2,name:'333',sex:'男',age:26}],2])
                            },1000)
                        })
                    },
                    toolBarRender:[
                        {
                            text:'导出',
                            key:'export',
                            props:{
                                type:'primary',
                            },
                            onClick:(params)=>{
                                console.log("触发导出，搜索框的值:"+params)
                            }
                        }
                    ],
                    actions:{ // 操作按钮配置
                        onDelete: (values) => { // 删除
                            console.log(values,"onDelete")
                            return Promise.resolve(true);
                        },
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
                                defaultValue:'M'
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


