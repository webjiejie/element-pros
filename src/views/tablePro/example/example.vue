<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro :tableObj="tableObj"></el-table-pro>
            <div slot="remark">
                注：因table的背景设置为白色，故而此处大背景设置为了灰色以作区分；
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
                search:{ // 查询配置
                    props:{
                        labelWidth:'60px'
                    },
                    interval:16, // 查询的每列间距
                },
                request: (data) => { // 获取列表数据
                    console.log(data,"request")
                    return new Promise((reject)=>{
                        setTimeout(()=>{
                            reject([[{id:1,name:'123',sex:'男',age:6},{id:2,name:'333',sex:'男',age:26}],2])
                        },1000)
                    })
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
                        actions:{
                            hideInSearch:true, // 不是查询字段
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
                    search:{ // 查询配置
                        props:{
                            labelWidth:'60px'
                        },
                        interval:16, // 查询的每列间距
                    },
                    request: (data) => { // 获取列表数据
                        return new Promise((reject)=>{
                            setTimeout(()=>{
                                reject([[{id:1,name:'123',sex:'男',age:6},{id:2,name:'333',sex:'男',age:26}],2])
                            },1000)
                        })
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
                            actions:{
                                hideInSearch:true, // 不是查询字段
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


