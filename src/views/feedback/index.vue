<template>
    <div class="feedback">
        <div class="feedback-t">
            <div class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                <div v-for="(item,index) in list" :key="index" class="infinite-list-item">
                    <div class="feedback-view" :style="{border:(answerObj&&answerObj.id===item.id)?'1px solid #409EFF':''}" @click="choose(item)">
                        <el-avatar class="feedback-t-avatar" size="medium" :src="avatar"></el-avatar>
                        <div class="feedback-view-r">
                            <div :class="item.isAdmin?'admin':''">
                                <i v-if="item.isAdmin" class="el-icon-star-on"></i>
                                {{ item.isAdmin?'作者':'用户'}}
                            </div>
                            <div>{{ item.description }}</div>
                        </div>
                    </div>
                    <div class="feedback-tv" v-if="item.children">
                        <div class="feedback-view" :style="{border:(answerObj&&answerObj.id===ite.id)?'1px solid #409EFF':''}" v-for="(ite,dex) in item.children" :key="dex" @click="choose(ite)">
                            <el-avatar class="feedback-t-avatar" size="medium" :src="avatar"></el-avatar>
                            <div class="feedback-view-r" >
                                <div :class="ite.isAdmin?'admin':''">
                                    <i v-if="ite.isAdmin" class="el-icon-star-on"></i>
                                    {{ ite.isAdmin?'作者':'用户'}}
                                </div>
                                <div>{{ ite.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="feedback-f">
            <div class="feedback-fl">
                <div class="feedback-flv" v-if="answerObj">
                    回复:
                </div>
                <el-input v-model="description" :maxlength="200" :placeholder="'请输入'+(answerObj?'回复':'反馈')+'内容'"></el-input>
            </div>
            <el-button class="feedback-fr" @click="send" icon="el-icon-s-promotion" type="primary">发送</el-button>
        </div>
    </div>
</template>
<script>
import request from "@/common/http.js"
export default {
    data(){
        return {
            avatar:require('@/assets/1.png'),
            description:'',
            list:[],
            pageObj:{
                0:1
            },
            moreObj:{
                0:true
            },
            answerObj:undefined,
        }
    },
    watch:{
        description(newVal,oldVal){
            if(newVal === '' && oldVal){
                this.answerObj = undefined;
            }
        }
    },
    created(){
        this.getList();
    },
    methods:{
        init(){
            this.pageObj = {
                0:1
            }
            this.moreObj = {
                0:true
            }
            this.getList();
        },
        getList(pageKey=0){
            if(this.moreObj[pageKey] === false) return;
            const page = this.pageObj[pageKey];
            request.post('element/getList',{
                page,
                limit:10
            }).then(res=>{
                const data = res.data||[]
                if(page === 1){
                    this.list = data;
                }else{
                    this.list = [...this.list,...data];
                }
                if(data.length < 10){
                    this.moreObj[pageKey] = false;
                }else{
                    this.pageObj[pageKey] = page + 1;
                }
            }).catch(()=>{
                this.moreObj[pageKey] = false;
            })
        },
        load () {
            this.getList();
        },
        send(){
            const answerId = this.answerObj?(this.answerObj.answerId||this.answerObj.id):undefined
            request.post('element/add',{
                answerId,
                description:this.description
            }).then(()=>{
                this.description = "";
                this.init();
            }).catch(err=>{
                console.log(err)
                this.$message.error("发布失败")
            })
        },
        choose(e){
            this.text = "";
            if(this.answerObj && e.id === this.answerObj.id){
                this.answerObj = undefined;
            }else{
                this.answerObj = e;
            }
        }
    }
}
</script>
<style scoped>
.feedback{
    height: 100%;
    display: flex;
    flex-direction: column;
    
}
.feedback-t{
    height: 0;
    flex:1;
}
.infinite-list{
    height: 100%;
}
.feedback-view{
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 13px;
    padding:4px 12px;
    cursor: pointer;
}
.feedback-view-r{
    flex:1;
}
.feedback-tv{
    padding-left: 32px;
}
.feedback-t-avatar{
    margin-right: 12px;
}
.admin{
    color:#e9cd08;
}
.feedback-f{
    height: 80px;
    display: flex;
    align-items: center;
}
.feedback-fl{
    flex:1;
    border:1px solid #ccc;
    display: flex;
    align-items: center;
    padding-left:12px;
    background: #fff;
}
.feedback-fl /deep/ .el-input__inner{
    border:none;
    padding: 0
}
.feedback-flv{
    white-space: nowrap;
    color:#DCDFE6;
}
.feedback-fr{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>

