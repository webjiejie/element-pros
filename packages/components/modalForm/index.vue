<template>
    <div class="el-modal-form">
        <div class="el-modal-form-c" @click="show">
            <slot></slot>
            <el-button  v-if="!$slots.default" v-bind="buttonConfig">{{ text }}</el-button>
        </div>
        <el-dialog v-if="isCreate" append-to-body v-bind="modalConfig" :visible.sync="dialogTableVisible" @close="close">
            <div v-loading="loading">
                <el-form-pro v-if="!loading" ref="modalForm" :columns="columns" @save="saveForm" :showFoot="false" v-bind="formConfig" :disabled="disabled"></el-form-pro>
            </div>
            
            <div slot="footer" v-if="!disabled">
                <slot name="footer"></slot>
                <el-button v-if="!$slots.footer" :size="buttonConfig.size" @click="dialogTableVisible = false">取消</el-button>
                <el-button v-if="!$slots.footer" :size="buttonConfig.size" :loading="loading||saveLoading" type="primary" @click="submit">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {isPromiseLike} from "../../util/utils"
export default {
    name:'ElModalForm',
    model:{ // v-model
        prop:'open',
        event:'change'
    },
    props:{
        text:{
            type:String,
            default:'按钮'
        },
        buttonProps:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        modalProps:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        formProps:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        columns:{ // form表单的参数
            type:Array,
            default:()=>{
                return [];
            }
        },
        defaultVaue:{ // 初始的默认值，可以是对象，或者函数（同步异步都可以）
            type:Function,
            default:()=>{
                return {}
            },
        },
        disabled:{ // 是否禁用
            type:Boolean,
            default:false
        },
        save:{ // 返回promise<boolean> 或者 boolean， 如果是false就不关必弹窗
            type:Function,
        },
        open:{ // 是否打开，v-model用的
            type:Boolean,
            default:false,
        }
    },
    data(){
        return {
            dialogTableVisible:false,
            buttonConfig:{ // 按钮的配置
                size:'small',
            },
            modalConfig:{}, // modal的配置
            formConfig:{ // 表单的配置
                props:{
                    labelWidth:'100px'
                }, 
                interval:20, 
                columnNum:2
            },
            isCreate:false,
            loading:true, // 加载数据时的loading
            saveLoading:false, // 保存时的loading
        }
    },
    watch:{
        open(){
            this.dialogTableVisible = this.open;
        },
        dialogTableVisible(newVal){
            if(newVal){
                this.isCreate = true
                this.getDefaultVaue();
            }
        }
    },
    created(){
        this.buttonConfig = {...this.buttonConfig, ...this.buttonProps};
        this.modalConfig = {...this.modalConfig, title:this.text, ...this.modalProps};
        this.formConfig = {...this.formConfig, ...this.formProps};
    },
    methods:{
        async getDefaultVaue(){
            let defaultObj = this.defaultVaue;
            if(typeof defaultObj === 'function'){
                defaultObj = defaultObj();
                if(isPromiseLike(defaultObj)){
                    this.loading = true;
                    defaultObj = await defaultObj;
                }
            }
            if(Object.prototype.toString.call(defaultObj) === '[object Object]'){
                this.columns.forEach(item=>{
                    if(Object.prototype.hasOwnProperty.call(defaultObj,item.key)){
                        item.defaultValue = defaultObj[item.key]
                    }
                })
            }
            this.loading = false;
        },
        changeDialogTableVisible(bool){
            this.dialogTableVisible = bool;
            this.$emit('change',bool);
        },
        show(){
            this.changeDialogTableVisible(true);
            this.isCreate = true;
        },
        close(){
            this.changeDialogTableVisible(false);
            if(this.$refs.modalForm){
                this.$nextTick(()=>{
                    this.$refs.modalForm.initValue();
                })
            }
        },
        async saveForm(obj){
            if(this.save){
                let result = this.save(obj);
                if(isPromiseLike(result)){
                    this.saveLoading = true;
                    result = await result;
                    this.saveLoading = false;
                }
                if(result === false){
                    return ;
                }
            }
            this.close();
        },
        submit(){
            this.$refs.modalForm && this.$refs.modalForm.save();
        },
    }
}
</script>
<style scoped>
.el-modal-form{
    text-align: start;
    display: inline-block;
}
.el-modal-form+.el-modal-form{
    margin-left: 10px;
}
.el-modal-form-c{
    width: 100%;
}
.el-modal-form-v /deep/ .el-dialog__body{
    padding:16px 20px;
}

</style>
