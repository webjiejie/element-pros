<template>
    <div class="description">
        <div v-if="title" class="title">{{ title }}</div>
        <el-table-pro :tableObj="tableObj"></el-table-pro>
    </div>
    
</template>
<script>

export default {
    props:{
        title:{
            type:String,
            default:'',
        },
        columns:{
            type:Array,
            default:()=>{
                return []
            },
        },
        list:{
            type:Array,
            default:()=>{
                return []
            },
        },
    },
    data(){
        return {
            tableObj:{
                search: false,
                pagination: false,
                request: () => {
                    return [this.list,this.list.length];
                },
                columns:this.columns
            }
        }
    },
}
</script>
<style scoped>
.description{
    margin-bottom: 24px;
    background: #fff;
}
.title{
    padding: 16px 16px 0;
    font-weight: 600;
    font-size: 24;
}
</style>

