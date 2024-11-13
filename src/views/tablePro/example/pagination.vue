<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro :tableObj="tableObj"></el-table-pro>
            <div slot="title">
                分页配置
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
                pagination:{
                    pageSizes:[2,10,20,50],
                    pageSize:2,
                }, // 配置分页
                request: (data) => { // 获取列表数据
                    console.log(data,"request")
                    return new Promise((reject)=>{
                        setTimeout(()=>{
                            if(data.currentPage === 1){
                                reject([[{id:1,name:'1',sex:'男',age:6},{id:2,name:'2',sex:'男',age:26}],3])
                            }else{
                                reject([[{id:3,name:'3',sex:'男',age:6}],3])
                            }
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
                    pagination:{
                        pageSizes:[2,10,20,50],
                        pageSize:2,
                    }, // 配置分页
                    request: (data) => { // 获取列表数据
                        return new Promise((reject)=>{
                            setTimeout(()=>{
                                if(data.currentPage === 1){
                                    reject([[{id:1,name:'1',sex:'男',age:6},{id:2,name:'2',sex:'男',age:26}],3])
                                }else{
                                    reject([[{id:3,name:'3',sex:'男',age:6}],3])
                                }
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


