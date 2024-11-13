<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro :tableObj="tableObj"></el-table-pro>
            <div slot="title">
                不显示查询和分页
            </div>
            <div slot="remark">
                设置search、pagination为false，可以分别隐藏查询和分页
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
                search:false, // 隐藏查询
                pagination:false, // 隐藏分页
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
                    },
                    {
                        title: '年龄',
                        dataIndex: 'age',
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
                    search:false, // 隐藏查询
                    pagination:false, // 隐藏分页
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
                        },
                        {
                            title: '年龄',
                            dataIndex: 'age',
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


