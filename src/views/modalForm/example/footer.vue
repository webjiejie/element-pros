<template>
    <div class="main">
        <copyComponent :code="code">
            <el-modal-form text="插槽" :columns="columns" ref="modal" :save="save" v-model="open">
                <div slot="footer">
                    <el-button @click="cancel">取消</el-button>
                    <el-button @click="submit">保存</el-button>
                </div>
            </el-modal-form>
            <div slot="title">插槽</div>
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
            open:false,
            columns: [{
                key: 'ruleType',
                type: 'checkbox',
                label: '评价类型',
                rules:[
                    { required: true, message: '请填写活动形式' }
                ],
                options:[
                    '类型1',
                    '类型2',
                ]
            }, {
                key: 'ruleName',
                type: 'input',
                label: '评价事项',
                defaultValue:'123',
                render:(obj)=>{
                    return <el-input v-model={obj.ruleName}></el-input>
                }
            }, {
                key: 'startAt',
                type: 'daterange',
                label: '评价日期',
            }],
            code:`<div>
    <el-modal-form text="插槽" :columns="columns" ref="modal" :save="save" v-model="open">
        <div slot="footer">
            <el-button @click="cancel">取消</el-button>
            <el-button @click="submit">保存</el-button>
        </div>
    </el-modal-form>
</div>
<script>
    export default {
        data() {
            return {
                open:false,
                columns: [{
                    key: 'ruleType',
                    type: 'checkbox',
                    label: '评价类型',
                    rules:[
                        { required: true, message: '请填写活动形式' }
                    ],
                    options:[
                        '类型1',
                        '类型2',
                    ]
                }, {
                    key: 'ruleName',
                    type: 'input',
                    label: '评价事项',
                    defaultValue:'123',
                    render:(obj)=>{
                        return <el-input v-model={obj.ruleName}></el-input>
                    }
                }, {
                    key: 'startAt',
                    type: 'daterange',
                    label: '评价日期',
                }],
            }
        },
        methods:{
            cancel(){
                this.open = false;
            },
            submit(){
                this.$refs.modal.saveFn();
            },
            save(value) { 
                console.log('保存的数据',value)
            },
        }
    }
<\/script>` // eslint-disable-line
        }
    },
    methods:{
        cancel(){
            this.open = false;
        },
        submit(){
            this.$refs.modal.saveFn();
        },
        save(value) { 
            console.log('保存的数据',value)
        },
    }
}
</script>

